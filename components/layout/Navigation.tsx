'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const links = [
    { label: 'service', sub: 'what we do', href: '#services' },
    { label: 'team', sub: 'who we are', href: '#team' },
    { label: 'work', sub: 'case studies', href: '#work' },
    { label: 'play', sub: 'concepts', href: '#play' },
    { label: 'collab', sub: 'work with us', href: '#collab' },
  ]

  return (
    <nav className="fixed w-full z-50 text-white">
      <div className="max-w-8xl mx-auto mx-24 md:mx-8 sm:mx-16">
        <div className="flex justify-between items-center h-32">
          {/* Logo */}
          <div>
            <a href="/">
              <img src="/images/adw-ora.svg" alt="Alldazework" className="pl-4 h-20 w-full" />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {links.map(({ label, sub, href }) => (
              <a href={href} key={label} className="group flex flex-col text-white hover:text-sky-200 transition">
                <span className="text-md font-semibold">{label}</span>
                <span className="text-[12px] text-white group-hover:text-sky-100">{sub}</span>
              </a>
            ))}
            
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              {isMenuOpen ? <X className="h-6 w-6 text-slate-900" /> : <Menu className="h-6 w-6 text-slate-900" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 text-slate-900">
            <div className="px-4 py-6 space-y-6">
              {links.map(({ label, sub, href }) => (
                <a href={href} key={label} className="block text-center">
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-semibold">{label}</span>
                    <span className="text-xs text-gray-500">{sub}</span>
                  </div>
                </a>
              ))}
            
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}