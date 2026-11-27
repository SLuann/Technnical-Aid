import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { ehAdmin } from '@/lib/admin';

export async function GET(req) {
  const categoria = new URL(req.url).searchParams.get('categoria');
  const materiais = await sql`
    SELECT id, titulo, resumo, categoria, imagem_url, criado_em
    FROM materiais
    WHERE (${categoria}::text IS NULL OR categoria = ${categoria})
    ORDER BY criado_em DESC`;
  return NextResponse.json({ materiais });
}

export async function POST(req) {
  if (!ehAdmin(req))
    return NextResponse.json({ erro: 'Apenas administrador.' }, { status: 403 });

  try {
    const body = await req.json();
    const titulo = String(body.titulo ?? '').trim();
    const resumo = String(body.resumo ?? '').trim();
    const conteudo = String(body.conteudo ?? '').trim();
    const categoria = String(body.categoria ?? '').trim().toLowerCase();
    const imagem_url = String(body.imagem_url ?? '').trim();

    if (titulo.length < 3 || titulo.length > 150)
      return NextResponse.json({ erro: 'Título deve ter de 3 a 150 caracteres.' }, { status: 400 });
    if (resumo.length < 10 || resumo.length > 300)
      return NextResponse.json({ erro: 'Resumo deve ter de 10 a 300 caracteres.' }, { status: 400 });
    if (conteudo.length < 20)
      return NextResponse.json({ erro: 'Conteúdo muito curto (mín. 20 caracteres).' }, { status: 400 });
    if (categoria.length < 2 || categoria.length > 50)
      return NextResponse.json({ erro: 'Categoria deve ter de 2 a 50 caracteres.' }, { status: 400 });
    if (imagem_url && !/^https?:\/\//i.test(imagem_url))
      return NextResponse.json({ erro: 'imagem_url deve começar com http:// ou https://' }, { status: 400 });

    const [material] = await sql`
      INSERT INTO materiais (titulo, resumo, conteudo, categoria, imagem_url)
      VALUES (${titulo}, ${resumo}, ${conteudo}, ${categoria}, ${imagem_url || null})
      RETURNING *
    `;
    return NextResponse.json({ material }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ erro: 'Erro interno.' }, { status: 500 });
  }
}
