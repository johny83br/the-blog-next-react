import type { Metadata } from 'next';
import './globals.css';
import { Container } from '@/components/Layouts/Container';
import { Header } from '@/components/Layouts/Header';
import { Footer } from '@/components/Layouts/Footer';
import { ToastifyContainer } from '@/components/Others/ToastifyContainer';

export const metadata: Metadata = {
  title: {
    default: 'Este é um blog com Next.js | The Blog',
    template: '%s | The Blog',
  },
  description: 'Essa seria a descrição da página.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='pt-BR' className='dark'>
      <body>
        <Container>
          <Header />

          {children}

          <Footer />
        </Container>

        <ToastifyContainer />
      </body>
    </html>
  );
}
