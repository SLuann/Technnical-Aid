import { cookies } from 'next/headers';
import { randomUUID } from 'crypto';

const COOKIE = 'visitante';
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

// Só lê (não cria cookie). Retorna null se o visitante ainda não tem ID.
export async function lerVisitante() {
  const jar = await cookies();
  const id = jar.get(COOKIE)?.value;
  return id && UUID.test(id) ? id : null;
}

// Lê ou cria o ID do visitante (usar ao criar pedidos/posts).
export async function obterVisitante() {
  const existente = await lerVisitante();
  if (existente) return existente;

  const id = randomUUID();
  const jar = await cookies();
  jar.set(COOKIE, id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
  });
  return id;
}
