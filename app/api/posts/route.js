import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { lerVisitante, obterVisitante } from '@/lib/visitante';

// GET /api/posts         -> todos os posts (com "meu: true" nos do visitante atual)
// GET /api/posts?meus=1  -> só os do visitante atual
export async function GET(req) {
  const meus = new URL(req.url).searchParams.get('meus') === '1';
  const visitante = await lerVisitante();

  if (meus) {
    if (!visitante) return NextResponse.json({ posts: [] });
    const posts = await sql`
      SELECT id, titulo, conteudo, criado_em, atualizado_em
      FROM posts WHERE visitante_id = ${visitante}
      ORDER BY criado_em DESC`;
    return NextResponse.json({ posts });
  }

  const posts = await sql`
    SELECT id, titulo, conteudo, criado_em, atualizado_em,
           COALESCE(visitante_id = ${visitante}::uuid, false) AS meu
    FROM posts ORDER BY criado_em DESC`;
  return NextResponse.json({ posts });
}

export async function POST(req) {
  try {
    const body = await req.json();
    const titulo = String(body.titulo ?? '').trim();
    const conteudo = String(body.conteudo ?? '').trim();

    if (titulo.length < 3 || titulo.length > 150)
      return NextResponse.json({ erro: 'Título deve ter de 3 a 150 caracteres.' }, { status: 400 });
    if (conteudo.length < 5 || conteudo.length > 5000)
      return NextResponse.json({ erro: 'Conteúdo deve ter de 5 a 5000 caracteres.' }, { status: 400 });

    const visitante = await obterVisitante();

    const [post] = await sql`
      INSERT INTO posts (visitante_id, titulo, conteudo)
      VALUES (${visitante}, ${titulo}, ${conteudo})
      RETURNING id, titulo, conteudo, criado_em, atualizado_em
    `;
    return NextResponse.json({ post }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ erro: 'Erro interno.' }, { status: 500 });
  }
}
