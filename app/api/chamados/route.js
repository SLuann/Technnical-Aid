import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { lerVisitante, obterVisitante } from '@/lib/visitante';
import { ehAdmin } from '@/lib/admin';

export async function GET(req) {
  if (ehAdmin(req)) {
    const chamados = await sql`
      SELECT c.*, s.titulo AS servico_titulo
      FROM chamados c JOIN servicos s ON s.slug = c.tipo_servico
      ORDER BY c.criado_em DESC`;
    return NextResponse.json({ chamados });
  }

  const visitante = await lerVisitante();
  if (!visitante) return NextResponse.json({ chamados: [] });

  const chamados = await sql`
    SELECT c.id, c.tipo_servico, c.nome, c.contato, c.aparelho, c.descricao, c.status,
           c.criado_em, c.atualizado_em, s.titulo AS servico_titulo
    FROM chamados c JOIN servicos s ON s.slug = c.tipo_servico
    WHERE c.visitante_id = ${visitante}
    ORDER BY c.criado_em DESC`;
  return NextResponse.json({ chamados });
}

export async function POST(req) {
  try {
    const body = await req.json();
    const servico = String(body.servico ?? '');
    const nome = String(body.nome ?? '').trim();
    const contato = String(body.contato ?? '').trim();
    const aparelho = String(body.aparelho ?? '').trim();
    const descricao = String(body.descricao ?? '').trim();

    const [existe] = await sql`SELECT slug FROM servicos WHERE slug = ${servico} AND ativo`;
    if (!existe)
      return NextResponse.json({ erro: 'Serviço inválido.' }, { status: 400 });
    if (nome.length < 2 || nome.length > 100)
      return NextResponse.json({ erro: 'Informe seu nome.' }, { status: 400 });
    if (contato.length < 5 || contato.length > 150)
      return NextResponse.json({ erro: 'Informe um contato (WhatsApp ou e-mail).' }, { status: 400 });
    if (aparelho.length > 100)
      return NextResponse.json({ erro: 'Nome do aparelho muito longo.' }, { status: 400 });
    if (descricao.length < 10 || descricao.length > 3000)
      return NextResponse.json({ erro: 'Descreva sua solicitação (10 a 3000 caracteres).' }, { status: 400 });

    const visitante = await obterVisitante();

    const [chamado] = await sql`
      INSERT INTO chamados (visitante_id, tipo_servico, nome, contato, aparelho, descricao)
      VALUES (${visitante}, ${servico}, ${nome}, ${contato}, ${aparelho || null}, ${descricao})
      RETURNING id, tipo_servico, nome, contato, aparelho, descricao, status, criado_em
    `;
    return NextResponse.json({ chamado }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ erro: 'Erro interno.' }, { status: 500 });
  }
}
