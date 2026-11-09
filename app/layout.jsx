import "./globals.css";

export default function RootLayout ({ children }){
  return (
    <html lang="pt">
      <body className="bg-gradient-to-b from-zinc-950 via-black via-blue-950 via-black to-zinc-950 flex flex-col min-h-screen text-white">
        {children}
      </body>
    </html>
  );
}