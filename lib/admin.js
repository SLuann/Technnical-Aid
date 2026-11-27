// Admin = quem envia o header x-admin-key igual à ADMIN_KEY do ambiente.
export function ehAdmin(req) {
  const chave = process.env.ADMIN_KEY;
  return Boolean(chave) && req.headers.get('x-admin-key') === chave;
}
