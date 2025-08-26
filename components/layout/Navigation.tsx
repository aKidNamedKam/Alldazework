'use client'

import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img src="/images/adw-blk.svg" alt="Alldaze Work" className="w-[50%]" />
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Services
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                About
              </a>
              <a href="#work" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Work
              </a>
              <a href="/assessment" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Schedule Design Kickoff
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200">
            <div className="px-4 py-6 space-y-4">
              <a href="#services" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Services</a>
              <a href="/assessment" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">UX Assessment</a>
              <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">About</a>
              <a href="/assessment" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-base font-medium mt-4 block text-center">
                Free Assessment
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}