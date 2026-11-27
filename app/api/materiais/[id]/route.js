import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { ehAdmin } from '@/lib/admin';

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const NEGADO = () => NextResponse.json({ erro: 'Apenas administrador.' }, { status: 403 });

export async function GET(_req, { params }) {
  const { id } = await params;
  if (!UUID.test(id)) return NextResponse.json({ erro: 'ID inválido.' }, { status: 400 });

  const [material] = await sql`SELECT * FROM materiais WHERE id = ${id}`;
  if (!material) return NextResponse.json({ erro: 'Material não encontrado.' }, { status: 404 });
  return NextResponse.json({ material });
}

export async function PATCH(req, { params }) {
  if (!ehAdmin(req)) return NEGADO();

  const { id } = await params;
  if (!UUID.test(id)) return NextResponse.json({ erro: 'ID inválido.' }, { status: 400 });

  const body = await req.json();
  const campo = (v) => (v === undefined ? null : String(v).trim());
  const titulo = campo(body.titulo);
  const resumo = campo(body.resumo);
  const conteudo = campo(body.conteudo);
  const categoria = body.categoria === undefined ? null : String(body.categoria).trim().toLowerCase();
  const imagem_url = campo(body.imagem_url);

  if (titulo !== null && (titulo.length < 3 || titulo.length > 150))
    return NextResponse.json({ erro: 'Título deve ter de 3 a 150 caracteres.' }, { status: 400 });
  if (resumo !== null && (resumo.length < 10 || resumo.length > 300))
    return NextResponse.json({ erro: 'Resumo deve ter de 10 a 300 caracteres.' }, { status: 400 });
  if (conteudo !== null && conteudo.length < 20)
    return NextResponse.json({ erro: 'Conteúdo muito curto (mín. 20 caracteres).' }, { status: 400 });
  if (imagem_url && !/^https?:\/\//i.test(imagem_url))
    return NextResponse.json({ erro: 'imagem_url deve começar com http:// ou https://' }, { status: 400 });

  const [material] = await sql`
    UPDATE materiais SET
      titulo = COALESCE(${titulo}, titulo),
      resumo = COALESCE(${resumo}, resumo),
      conteudo = COALESCE(${conteudo}, conteudo),
      categoria = COALESCE(${categoria}, categoria),
      imagem_url = COALESCE(${imagem_url}, imagem_url),
      atualizado_em = now()
    WHERE id = ${id} RETURNING *
  `;
  if (!material) return NextResponse.json({ erro: 'Material não encontrado.' }, { status: 404 });
  return NextResponse.json({ material });
}

export async function DELETE(req, { params }) {
  if (!ehAdmin(req)) return NEGADO();

  const { id } = await params;
  if (!UUID.test(id)) return NextResponse.json({ erro: 'ID inválido.' }, { status: 400 });

  const [apagado] = await sql`DELETE FROM materiais WHERE id = ${id} RETURNING id`;
  if (!apagado) return NextResponse.json({ erro: 'Material não encontrado.' }, { status: 404 });
  return NextResponse.json({ ok: true });
}
