import { NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';

export async function GET() {
  const usuario = await getSession();
  return NextResponse.json({ usuario });
}
