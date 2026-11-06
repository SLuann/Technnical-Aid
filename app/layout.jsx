export default function RootLayout ({ children }){
  return (
    <html lang="pt" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}