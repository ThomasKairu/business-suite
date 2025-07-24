'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-[#001F3F]">
            <span style={{ fontFamily: '"Pacifico", serif' }}>BrightPath</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#FFD700] transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#FFD700] transition-colors">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-[#FFD700] transition-colors">
              Services
            </Link>
            <Link href="/case-studies" className="text-gray-700 hover:text-[#FFD700] transition-colors">
              Case Studies
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-[#FFD700] transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#FFD700] transition-colors">
              Contact
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/contact" className="bg-[#001F3F] text-white px-6 py-2 rounded-lg hover:bg-[#FFD700] hover:text-[#001F3F] transition-all duration-300 whitespace-nowrap">
              Get Started
            </Link>
          </div>
          
          <button 
            className="md:hidden w-6 h-6 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl text-[#001F3F]`}></i>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="py-4 space-y-2">
              <Link href="/" className="block py-2 text-gray-700 hover:text-[#FFD700] transition-colors">
                Home
              </Link>
              <Link href="/about" className="block py-2 text-gray-700 hover:text-[#FFD700] transition-colors">
                About
              </Link>
              <Link href="/services" className="block py-2 text-gray-700 hover:text-[#FFD700] transition-colors">
                Services
              </Link>
              <Link href="/case-studies" className="block py-2 text-gray-700 hover:text-[#FFD700] transition-colors">
                Case Studies
              </Link>
              <Link href="/blog" className="block py-2 text-gray-700 hover:text-[#FFD700] transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="block py-2 text-gray-700 hover:text-[#FFD700] transition-colors">
                Contact
              </Link>
              <Link href="/contact" className="block mt-4 bg-[#001F3F] text-white px-6 py-2 rounded-lg hover:bg-[#FFD700] hover:text-[#001F3F] transition-all duration-300 text-center whitespace-nowrap">
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}