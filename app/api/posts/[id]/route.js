import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { getSession } from '@/lib/auth';

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

async function carregar(params) {
  const sessao = await getSession();
  if (!sessao) return { resp: NextResponse.json({ erro: 'Faça login.' }, { status: 401 }) };

  const { id } = await params;
  if (!UUID.test(id)) return { resp: NextResponse.json({ erro: 'ID inválido.' }, { status: 400 }) };

  const [post] = await sql`SELECT * FROM posts WHERE id = ${id}`;
  if (!post) return { resp: NextResponse.json({ erro: 'Post não encontrado.' }, { status: 404 }) };

  if (post.usuario_id !== sessao.id && sessao.role !== 'admin')
    return { resp: NextResponse.json({ erro: 'Você só pode alterar seus próprios posts.' }, { status: 403 }) };

  return { sessao, post };
}

export async function GET(_req, { params }) {
  const { id } = await params;
  if (!UUID.test(id)) return NextResponse.json({ erro: 'ID inválido.' }, { status: 400 });

  const [post] = await sql`
    SELECT p.*, u.nome AS autor_nome
    FROM posts p JOIN usuarios u ON u.id = p.usuario_id
    WHERE p.id = ${id}
  `;
  if (!post) return NextResponse.json({ erro: 'Post não encontrado.' }, { status: 404 });

  return NextResponse.json({ post });
}

export async function PATCH(req, { params }) {
  const { resp, post } = await carregar(params);
  if (resp) return resp;

  const body = await req.json();
  const titulo = body.titulo === undefined ? post.titulo : String(body.titulo).trim();
  const conteudo = body.conteudo === undefined ? post.conteudo : String(body.conteudo).trim();

  if (titulo.length < 3 || titulo.length > 150)
    return NextResponse.json({ erro: 'Título deve ter de 3 a 150 caracteres.' }, { status: 400 });
  if (conteudo.length < 5 || conteudo.length > 5000)
    return NextResponse.json({ erro: 'Conteúdo deve ter de 5 a 5000 caracteres.' }, { status: 400 });

  const [atualizado] = await sql`
    UPDATE posts SET titulo = ${titulo}, conteudo = ${conteudo}, atualizado_em = now()
    WHERE id = ${post.id} RETURNING *
  `;
  return NextResponse.json({ post: atualizado });
}

export async function DELETE(_req, { params }) {
  const { resp, post } = await carregar(params);
  if (resp) return resp;

  await sql`DELETE FROM posts WHERE id = ${post.id}`;
  return NextResponse.json({ ok: true });
}
