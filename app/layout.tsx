import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hunogrupoinmobiliario.es'),
  title: 'HuNo Grupo Inmobiliario | Tu agencia de confianza en Gijón',
  description:
    'HuNo Grupo Inmobiliario. Servicios inmobiliarios integrales en Gijón y Asturias. Compra, venta y alquiler con asesoramiento financiero, reformas y valoración profesional.',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-white text-[#111111] min-h-screen flex flex-col selection:bg-[#FF0000] selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
