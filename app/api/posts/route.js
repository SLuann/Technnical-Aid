import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { getSession } from '@/lib/auth';

// GET /api/posts          -> todos os posts da comunidade (público)
// GET /api/posts?meus=1   -> só os posts do usuário logado
export async function GET(req) {
  const meus = new URL(req.url).searchParams.get('meus') === '1';

  if (meus) {
    const sessao = await getSession();
    if (!sessao) return NextResponse.json({ erro: 'Faça login.' }, { status: 401 });

    const posts = await sql`
      SELECT p.id, p.titulo, p.conteudo, p.criado_em, p.atualizado_em, u.nome AS autor_nome
      FROM posts p JOIN usuarios u ON u.id = p.usuario_id
      WHERE p.usuario_id = ${sessao.id}
      ORDER BY p.criado_em DESC
    `;
    return NextResponse.json({ posts });
  }

  const posts = await sql`
    SELECT p.id, p.usuario_id, p.titulo, p.conteudo, p.criado_em, p.atualizado_em, u.nome AS autor_nome
    FROM posts p JOIN usuarios u ON u.id = p.usuario_id
    ORDER BY p.criado_em DESC
  `;
  return NextResponse.json({ posts });
}

export async function POST(req) {
  const sessao = await getSession();
  if (!sessao) return NextResponse.json({ erro: 'Faça login.' }, { status: 401 });

  try {
    const body = await req.json();
    const titulo = String(body.titulo ?? '').trim();
    const conteudo = String(body.conteudo ?? '').trim();

    if (titulo.length < 3 || titulo.length > 150)
      return NextResponse.json({ erro: 'Título deve ter de 3 a 150 caracteres.' }, { status: 400 });
    if (conteudo.length < 5 || conteudo.length > 5000)
      return NextResponse.json({ erro: 'Conteúdo deve ter de 5 a 5000 caracteres.' }, { status: 400 });

    const [post] = await sql`
      INSERT INTO posts (usuario_id, titulo, conteudo)
      VALUES (${sessao.id}, ${titulo}, ${conteudo})
      RETURNING *
    `;
    return NextResponse.json({ post }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ erro: 'Erro interno.' }, { status: 500 });
  }
}
