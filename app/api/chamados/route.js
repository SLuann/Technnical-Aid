import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { getSession } from '@/lib/auth';

export async function GET() {
  const sessao = await getSession();
  if (!sessao) return NextResponse.json({ erro: 'Faça login.' }, { status: 401 });

  const chamados =
    sessao.role === 'admin'
      ? await sql`
          SELECT c.*, s.titulo AS servico_titulo, u.nome AS usuario_nome, u.email AS usuario_email
          FROM chamados c
          JOIN servicos s ON s.slug = c.tipo_servico
          JOIN usuarios u ON u.id = c.usuario_id
          ORDER BY c.criado_em DESC`
      : await sql`
          SELECT c.*, s.titulo AS servico_titulo
          FROM chamados c
          JOIN servicos s ON s.slug = c.tipo_servico
          WHERE c.usuario_id = ${sessao.id}
          ORDER BY c.criado_em DESC`;

  return NextResponse.json({ chamados });
}

export async function POST(req) {
  const sessao = await getSession();
  if (!sessao) return NextResponse.json({ erro: 'Faça login.' }, { status: 401 });

  try {
    const body = await req.json();
    const servico = String(body.servico ?? '');
    const aparelho = String(body.aparelho ?? '').trim();
    const descricao = String(body.descricao ?? '').trim();

    const [existe] = await sql`SELECT slug FROM servicos WHERE slug = ${servico} AND ativo`;
    if (!existe)
      return NextResponse.json({ erro: 'Serviço inválido.' }, { status: 400 });
    if (aparelho.length > 100)
      return NextResponse.json({ erro: 'Nome do aparelho muito longo.' }, { status: 400 });
    if (descricao.length < 10)
      return NextResponse.json({ erro: 'Descreva sua solicitação (mín. 10 caracteres).' }, { status: 400 });

    const [chamado] = await sql`
      INSERT INTO chamados (usuario_id, tipo_servico, aparelho, descricao)
      VALUES (${sessao.id}, ${servico}, ${aparelho || null}, ${descricao})
      RETURNING *
    `;
    return NextResponse.json({ chamado }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ erro: 'Erro interno.' }, { status: 500 });
  }
}
