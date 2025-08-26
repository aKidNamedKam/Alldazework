import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Newsreader } from "next/font/google";
import './globals.css'

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
    <html lang="en" className={`scroll-smooth ${jakarta.variable} ${newsreader.variable}`}>
      <body className={`${jakarta.className} ${newsreader.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
