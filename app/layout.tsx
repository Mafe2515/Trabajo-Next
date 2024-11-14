import '@/app/ui/global.css';
import {inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}
        <h1>Este Titulo</h1>
        <div style={{ border: "lpx solid #0000" }}>{children}</div>
      </body>
      <div></div>
    </html>
  );
}
