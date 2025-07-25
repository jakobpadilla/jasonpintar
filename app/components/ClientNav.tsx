'use client';
import Link from 'next/link';
import { useScrollReveal } from './ScrollReveal';

export function ClientNav() {
  const revealBrand = useScrollReveal({ direction: 'left', delay: 100 });
  const revealNav1 = useScrollReveal({ direction: 'down', delay: 200 });
  const revealNav2 = useScrollReveal({ direction: 'down', delay: 300 });
  const revealNav3 = useScrollReveal({ direction: 'down', delay: 400 });
  const revealNav4 = useScrollReveal({ direction: 'down', delay: 500 });
  const revealNav5 = useScrollReveal({ direction: 'down', delay: 600 });
  const revealMobile = useScrollReveal({ direction: 'right', delay: 100 });

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-6">
          <div ref={revealBrand.ref} style={revealBrand.style}>
            <Link href="/" className="text-2xl font-serif font-semibold text-slate-900">
              Law Offices of Jason L. Pintar
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <div ref={revealNav1.ref} style={revealNav1.style}>
              <Link href="/estate-administration" className="text-slate-700 hover:text-blue-800 transition-colors duration-200 font-medium">
                Estate Administration
              </Link>
            </div>
            <div ref={revealNav2.ref} style={revealNav2.style}>
              <Link href="/conservatorships" className="text-slate-700 hover:text-blue-800 transition-colors duration-200 font-medium">
                Conservatorships
              </Link>
            </div>
            <div ref={revealNav3.ref} style={revealNav3.style}>
              <Link href="/probate" className="text-slate-700 hover:text-blue-800 transition-colors duration-200 font-medium">
                Probate
              </Link>
            </div>
            <div ref={revealNav4.ref} style={revealNav4.style}>
              <Link href="/attorney" className="text-slate-700 hover:text-blue-800 transition-colors duration-200 font-medium">
                Attorney Profile
              </Link>
            </div>
            <div ref={revealNav5.ref} style={revealNav5.style}>
              <Link href="/contact" className="text-slate-700 hover:text-blue-800 transition-colors duration-200 font-medium">
                Contact
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <div ref={revealMobile.ref} style={revealMobile.style}>
              <button className="text-slate-700 hover:text-blue-800 transition-colors duration-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 