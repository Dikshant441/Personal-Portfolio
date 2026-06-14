import './globals.css';
import { Inter, JetBrains_Mono, Instrument_Serif } from 'next/font/google';
import Header from '@/components/Header';
import ActiveSectionContextProvider from '@/context/active-section-context';
import ThemeSwitch from '@/components/Theme-Switch';
import ThemeContextProvider from '@/context/Theme-Context';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })
const serif = Instrument_Serif({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--font-serif' })

export const metadata = {
  title: 'Dikshant Singh | Personal Portfolio',
  description: 'Dikshant is a full-stack developer. he is fresher and looking for a job.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} ${mono.variable} ${serif.variable} bg-gray-100 text-gray-950 relative pt-28 sm:pt-36 overflow-x-hidden dark:bg-zinc-950 dark:text-gray-50 dark:text-opacity-90`}>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
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
