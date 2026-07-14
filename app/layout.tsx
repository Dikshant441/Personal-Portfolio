import './globals.css';
import { Playfair_Display, Source_Sans_3, IBM_Plex_Mono } from 'next/font/google';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import ActiveSectionContextProvider from '@/context/active-section-context';
import ThemeSwitch from '@/components/Theme-Switch';
import ThemeContextProvider from '@/context/Theme-Context';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';

const sans = Source_Sans_3({ subsets: ['latin'], variable: '--font-sans' })
const serif = Playfair_Display({ subsets: ['latin'], style: ['normal', 'italic'], variable: '--font-serif' })
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' })

export const metadata = {
  title: 'Dikshant Singh',
  description: 'Dikshant is a full-stack developer. he is fresher and looking for a job.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${sans.variable} ${serif.variable} ${mono.variable} bg-background font-sans text-foreground relative pt-20 pb-16 sm:pt-36 sm:pb-0 overflow-x-hidden`}>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            <MobileNav />
            {children}
            <Footer />
            <Toaster position='top-right' />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>

      </body>
    </html>
  )
}
