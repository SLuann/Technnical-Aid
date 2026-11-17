import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { getSession } from '@/lib/auth';

const STATUS = ['aberto', 'em_andamento', 'concluido', 'cancelado'];
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function GET(_req, { params }) {
  const sessao = await getSession();
  if (!sessao) return NextResponse.json({ erro: 'Faça login.' }, { status: 401 });

  const { id } = await params;
  if (!UUID.test(id)) return NextResponse.json({ erro: 'ID inválido.' }, { status: 400 });

  const [chamado] = await sql`SELECT * FROM chamados WHERE id = ${id}`;
  if (!chamado || (sessao.role !== 'admin' && chamado.usuario_id !== sessao.id))
    return NextResponse.json({ erro: 'Chamado não encontrado.' }, { status: 404 });

  return NextResponse.json({ chamado });
}

export async function PATCH(req, { params }) {
  const sessao = await getSession();
  if (!sessao) return NextResponse.json({ erro: 'Faça login.' }, { status: 401 });
  if (sessao.role !== 'admin')
    return NextResponse.json({ erro: 'Apenas administradores.' }, { status: 403 });

  const { id } = await params;
  if (!UUID.test(id)) return NextResponse.json({ erro: 'ID inválido.' }, { status: 400 });

  const body = await req.json();
  const status = String(body.status ?? '');
  if (!STATUS.includes(status))
    return NextResponse.json({ erro: 'Status inválido.', status: STATUS }, { status: 400 });

  const [chamado] = await sql`
    UPDATE chamados SET status = ${status}, atualizado_em = now()
    WHERE id = ${id} RETURNING *
  `;
  if (!chamado) return NextResponse.json({ erro: 'Chamado não encontrado.' }, { status: 404 });

  return NextResponse.json({ chamado });
}
