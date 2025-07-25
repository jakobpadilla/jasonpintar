'use client';
import Link from 'next/link';
import { useScrollReveal } from './ScrollReveal';

export function ClientFooter() {
  const revealBrand = useScrollReveal({ direction: 'up', delay: 200 });
  const revealDesc = useScrollReveal({ direction: 'up', delay: 300 });
  const revealContacts = useScrollReveal({ direction: 'up', delay: 400 });
  const revealPracticeTitle = useScrollReveal({ direction: 'up', delay: 300 });
  const revealPracticeLinks = useScrollReveal({ direction: 'up', delay: 400 });
  const revealLocationTitle = useScrollReveal({ direction: 'up', delay: 300 });
  const revealLocation = useScrollReveal({ direction: 'up', delay: 400 });
  const revealCopyright = useScrollReveal({ direction: 'up', delay: 500 });

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div ref={revealBrand.ref} style={revealBrand.style}>
              <h3 className="text-2xl font-serif font-semibold mb-6">Law Offices of Jason L. Pintar</h3>
            </div>
            <div ref={revealDesc.ref} style={revealDesc.style}>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Expert estate planning and administration services in San Jose, California. 
                Protecting your legacy with precision and care.
              </p>
            </div>
            <div ref={revealContacts.ref} style={revealContacts.style}>
              <div className="flex space-x-6">
                <a href="tel:408-983-0500" className="text-blue-300 hover:text-blue-200 transition-colors duration-200 font-medium">
                  (408) 983-0500
                </a>
                <a href="mailto:info@pintarlaw.com" className="text-blue-300 hover:text-blue-200 transition-colors duration-200 font-medium">
                  info@pintarlaw.com
                </a>
              </div>
            </div>
          </div>
          <div>
            <div ref={revealPracticeTitle.ref} style={revealPracticeTitle.style}>
              <h4 className="text-lg font-serif font-semibold mb-6">Practice Areas</h4>
            </div>
            <div ref={revealPracticeLinks.ref} style={revealPracticeLinks.style}>
              <ul className="space-y-3 text-slate-300">
                <li><Link href="/estate-administration" className="hover:text-blue-300 transition-colors duration-200">Estate Administration</Link></li>
                <li><Link href="/conservatorships" className="hover:text-blue-300 transition-colors duration-200">Conservatorships</Link></li>
                <li><Link href="/probate" className="hover:text-blue-300 transition-colors duration-200">Probate</Link></li>
                <li><Link href="/estate-planning" className="hover:text-blue-300 transition-colors duration-200">Estate Planning</Link></li>
              </ul>
            </div>
          </div>
          <div>
            <div ref={revealLocationTitle.ref} style={revealLocationTitle.style}>
              <h4 className="text-lg font-serif font-semibold mb-6">Office Location</h4>
            </div>
            <div ref={revealLocation.ref} style={revealLocation.style}>
              <address className="text-slate-300 not-italic leading-relaxed">
                <p>2021 The Alameda</p>
                <p>Suite 310</p>
                <p>San Jose, CA 95126</p>
                <p className="mt-3">P: (408) 983-0500</p>
                <p>F: (408) 983-1009</p>
              </address>
            </div>
          </div>
        </div>
        <div ref={revealCopyright.ref} style={revealCopyright.style}>
          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Law Offices of Jason L. Pintar. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
} 