import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Newsreader } from "next/font/google";
import './globals.css'
import localFont from 'next/font/local'

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "700"],
  display: "swap",
});

const customFont = localFont({
  src: [
    {
      path: '../fonts/VisbyCF-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/VisbyCF-Light.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../fonts/VisbyCF-Regular.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/VisbyCF-Medium.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/VisbyCF-Bold.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/VisbyCF-DemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/VisbyCF-ExtraBold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/VisbyCF-Heavy.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../fonts/VisbyCF-MediumOblique.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-custom', // CSS variable name
  display: 'swap', // Font loading strategy
})

export const metadata: Metadata = {
  title: 'AllDazeWork - Transform Ideas into Winning Experiences',
  description: 'Design duo excellence. We transform ideas into winning digital experiences.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${jakarta.variable} ${customFont.variable}`}>
      <body className={`${jakarta.className} ${customFont.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
