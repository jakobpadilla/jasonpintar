'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useScrollReveal } from './ScrollReveal';

export function ClientNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const revealBrand = useScrollReveal({ direction: 'left', delay: 100 });
  const revealNav1 = useScrollReveal({ direction: 'down', delay: 200 });
  const revealNav2 = useScrollReveal({ direction: 'down', delay: 300 });
  const revealNav3 = useScrollReveal({ direction: 'down', delay: 400 });
  const revealNav4 = useScrollReveal({ direction: 'down', delay: 500 });
  const revealNav5 = useScrollReveal({ direction: 'down', delay: 600 });
  const revealMobile = useScrollReveal({ direction: 'right', delay: 100 });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-6">
            <div ref={revealBrand.ref} style={revealBrand.style}>
              <Link href="/" className="flex items-center space-x-4" onClick={closeMobileMenu}>
                <Image
                  src="/pintarlogo.jpg"
                  alt="Law Offices of Jason L. Pintar Logo"
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                  priority
                />
                <span className="text-2xl xl:text-3xl font-serif font-semibold text-slate-900 whitespace-nowrap">
                  Law Offices of Jason L. Pintar
                </span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-10">
              <div ref={revealNav1.ref} style={revealNav1.style}>
                <Link href="/estate-administration" className="text-base xl:text-lg text-slate-700 hover:text-blue-800 transition-colors duration-200 font-medium whitespace-nowrap">
                  Estate Administration
                </Link>
              </div>
              <div ref={revealNav2.ref} style={revealNav2.style}>
                <Link href="/conservatorships" className="text-base xl:text-lg text-slate-700 hover:text-blue-800 transition-colors duration-200 font-medium whitespace-nowrap">
                  Conservatorships
                </Link>
              </div>
              <div ref={revealNav3.ref} style={revealNav3.style}>
                <Link href="/probate" className="text-base xl:text-lg text-slate-700 hover:text-blue-800 transition-colors duration-200 font-medium whitespace-nowrap">
                  Probate
                </Link>
              </div>
              <div ref={revealNav4.ref} style={revealNav4.style}>
                <Link href="/attorney" className="text-base xl:text-lg text-slate-700 hover:text-blue-800 transition-colors duration-200 font-medium whitespace-nowrap">
                  Attorney Profile
                </Link>
              </div>
              <div ref={revealNav5.ref} style={revealNav5.style}>
                <Link href="/contact" className="text-base xl:text-lg text-slate-700 hover:text-blue-800 transition-colors duration-200 font-medium whitespace-nowrap">
                  Contact
                </Link>
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <div ref={revealMobile.ref} style={revealMobile.style}>
                <button 
                  onClick={toggleMobileMenu}
                  className="p-3 text-slate-700 hover:text-blue-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2 rounded-lg"
                  aria-label="Toggle mobile menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  {isMobileMenuOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <Image
                src="/pintarlogo.jpg"
                alt="Pintar Law Logo"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <span className="text-lg font-serif font-semibold text-slate-900">
                Pintar Law
              </span>
            </div>
            <button 
              onClick={closeMobileMenu}
              className="p-2 text-slate-500 hover:text-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Links */}
          <nav className="space-y-6">
            <Link 
              href="/estate-administration" 
              className="flex items-center py-4 px-4 text-lg font-medium text-slate-700 hover:text-blue-800 hover:bg-slate-50 rounded-lg transition-all duration-200"
              onClick={closeMobileMenu}
            >
              <svg className="w-5 h-5 mr-4 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Estate Administration
            </Link>
            
            <Link 
              href="/conservatorships" 
              className="flex items-center py-4 px-4 text-lg font-medium text-slate-700 hover:text-blue-800 hover:bg-slate-50 rounded-lg transition-all duration-200"
              onClick={closeMobileMenu}
            >
              <svg className="w-5 h-5 mr-4 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Conservatorships
            </Link>
            
            <Link 
              href="/probate" 
              className="flex items-center py-4 px-4 text-lg font-medium text-slate-700 hover:text-blue-800 hover:bg-slate-50 rounded-lg transition-all duration-200"
              onClick={closeMobileMenu}
            >
              <svg className="w-5 h-5 mr-4 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              Probate
            </Link>
            
            <Link 
              href="/attorney" 
              className="flex items-center py-4 px-4 text-lg font-medium text-slate-700 hover:text-blue-800 hover:bg-slate-50 rounded-lg transition-all duration-200"
              onClick={closeMobileMenu}
            >
              <svg className="w-5 h-5 mr-4 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Attorney Profile
            </Link>
            
            <Link 
              href="/contact" 
              className="flex items-center py-4 px-4 text-lg font-medium text-white bg-blue-800 hover:bg-blue-900 rounded-lg transition-all duration-200"
              onClick={closeMobileMenu}
            >
              <svg className="w-5 h-5 mr-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </Link>
          </nav>

          {/* Mobile Contact Info */}
          <div className="mt-8 pt-8 border-t border-slate-200">
            <div className="space-y-4">
              <a 
                href="tel:408-983-0500" 
                className="flex items-center text-slate-700 hover:text-blue-800 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-3 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-medium">(408) 983-0500</span>
              </a>
              
              <a 
                href="mailto:jason@pintarlaw.com" 
                className="flex items-center text-slate-700 hover:text-blue-800 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-3 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-medium">jason@pintarlaw.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 