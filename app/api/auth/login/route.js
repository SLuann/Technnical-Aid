import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { createSession } from '@/lib/auth';

export async function POST(req) {
  try {
    const body = await req.json();
    const email = String(body.email ?? '').trim().toLowerCase();
    const senha = String(body.senha ?? '');

    const [user] = await sql`
      SELECT id, nome, email, role, senha_hash FROM usuarios WHERE email = ${email}
    `;

    const ok = user && (await bcrypt.compare(senha, user.senha_hash));
    if (!ok)
      return NextResponse.json({ erro: 'E-mail ou senha incorretos.' }, { status: 401 });

    await createSession(user);
    const { senha_hash, ...publico } = user;
    return NextResponse.json({ usuario: publico });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ erro: 'Erro interno.' }, { status: 500 });
  }
}
