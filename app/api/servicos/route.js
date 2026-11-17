import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';

// Pública: qualquer visitante pode ver os serviços
export async function GET() {
  const servicos = await sql`
    SELECT slug, titulo, descricao FROM servicos WHERE ativo ORDER BY ordem
  `;
  return NextResponse.json({ servicos });
}
