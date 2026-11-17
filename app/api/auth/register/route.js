import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { createSession } from '@/lib/auth';

export async function POST(req) {
  try {
    const body = await req.json();
    const nome = String(body.nome ?? '').trim();
    const email = String(body.email ?? '').trim().toLowerCase();
    const senha = String(body.senha ?? '');

    if (nome.length < 2)
      return NextResponse.json({ erro: 'Informe seu nome.' }, { status: 400 });
    if (!/^\S+@\S+\.\S+$/.test(email))
      return NextResponse.json({ erro: 'E-mail inválido.' }, { status: 400 });
    if (senha.length < 8)
      return NextResponse.json({ erro: 'A senha deve ter ao menos 8 caracteres.' }, { status: 400 });

    const senha_hash = await bcrypt.hash(senha, 10);

    const [user] = await sql`
      INSERT INTO usuarios (nome, email, senha_hash)
      VALUES (${nome}, ${email}, ${senha_hash})
      RETURNING id, nome, email, role
    `;

    await createSession(user);
    return NextResponse.json({ usuario: user }, { status: 201 });
  } catch (err) {
    if (err.code === '23505')
      return NextResponse.json({ erro: 'Este e-mail já está cadastrado.' }, { status: 409 });
    console.error(err);
    return NextResponse.json({ erro: 'Erro interno.' }, { status: 500 });
  }
}
