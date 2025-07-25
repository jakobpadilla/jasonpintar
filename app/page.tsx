'use client';

import Link from 'next/link'
import { useScrollReveal } from './components/ScrollReveal'
import { TypewriterText } from './components/TypewriterText'

// Constants
const PHONE_NUMBER = '(408) 983-0500'
const PHONE_HREF = 'tel:408-983-0500'

// SVG Icon Components
const DocumentIcon = () => (
  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
)

const PersonIcon = () => (
  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
)

const BankIcon = () => (
  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
)

const CheckmarkIcon = () => (
  <svg className="w-5 h-5 text-blue-800 mt-1 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
)

export default function Home() {
  // Hero Section
  const revealHeroSubtitle = useScrollReveal({ direction: "up", delay: 400 });
  const revealHeroDescription = useScrollReveal({ direction: "up", delay: 600 });

  // Practice Areas Section
  const revealPracticeTitle = useScrollReveal({ direction: "up", delay: 200 });
  const revealPracticeDesc = useScrollReveal({ direction: "up", delay: 400 });
  const revealEstateAdmin = useScrollReveal({ direction: "up", delay: 200 });
  const revealConservatorships = useScrollReveal({ direction: "up", delay: 400 });
  const revealProbate = useScrollReveal({ direction: "up", delay: 600 });

  // About Section
  const revealAboutLeft = useScrollReveal({ direction: "left", delay: 200 });
  const revealAboutRight = useScrollReveal({ direction: "right", delay: 400 });

  // CTA Section
  const revealCtaTitle = useScrollReveal({ direction: "up", delay: 200 });
  const revealCtaDesc = useScrollReveal({ direction: "up", delay: 400 });
  const revealCtaButtons = useScrollReveal({ direction: "up", delay: 600 });

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-semibold mb-8 leading-tight">
              <TypewriterText 
                text="Law Offices of Jason L. Pintar"
                speed={80}
                delay={500}
                className="text-white"
              />
            </h1>
            <div className="text-xl mb-8 text-slate-200 font-medium">
              <p ref={revealHeroSubtitle.ref} style={revealHeroSubtitle.style}>
                San Jose Estate Planning & Administration Attorney
              </p>
            </div>
            <div className="text-lg mb-12 text-slate-300 max-w-3xl mx-auto leading-relaxed">
              <p ref={revealHeroDescription.ref} style={revealHeroDescription.style}>
                Located in the heart of Silicon Valley, Jason Pintar brings his expertise and practical approach to estate planning, administration, conservatorships, and probate matters.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/contact" 
                className="bg-blue-800 hover:bg-blue-900 text-white px-10 py-4 rounded-md font-semibold transition-colors duration-200 shadow-lg"
              >
                Request Consultation
              </Link>
              <a 
                href={PHONE_HREF}
                className="border-2 border-white text-white px-10 py-4 rounded-md font-semibold hover:bg-white hover:text-slate-900 transition-colors duration-200"
              >
                Call {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div ref={revealPracticeTitle.ref} style={revealPracticeTitle.style}>
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-slate-900 mb-6">
                Estate Planning & Administration Services
              </h2>
            </div>
            <div ref={revealPracticeDesc.ref} style={revealPracticeDesc.style}>
              <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
                Comprehensive estate planning and administration services to protect your legacy and ensure your wishes are carried out with precision and care.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {/* Estate Administration */}
            <div ref={revealEstateAdmin.ref} style={revealEstateAdmin.style}>
              <div className="bg-slate-50 p-10 rounded-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100">
                <div className="w-16 h-16 bg-blue-800 rounded-lg flex items-center justify-center mb-8">
                  <DocumentIcon />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">Estate Administration</h3>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Expert guidance through the complex process of estate administration, 
                  ensuring efficient and compliant handling of estate matters.
                </p>
                <Link href="/estate-administration" className="text-blue-800 hover:text-blue-900 font-semibold transition-colors duration-200">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Conservatorships */}
            <div ref={revealConservatorships.ref} style={revealConservatorships.style}>
              <div className="bg-slate-50 p-10 rounded-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100">
                <div className="w-16 h-16 bg-blue-800 rounded-lg flex items-center justify-center mb-8">
                  <PersonIcon />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">Conservatorships</h3>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Compassionate representation in conservatorship matters, protecting 
                  the interests of vulnerable individuals and their families.
                </p>
                <Link href="/conservatorships" className="text-blue-800 hover:text-blue-900 font-semibold transition-colors duration-200">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Probate */}
            <div ref={revealProbate.ref} style={revealProbate.style}>
              <div className="bg-slate-50 p-10 rounded-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100">
                <div className="w-16 h-16 bg-blue-800 rounded-lg flex items-center justify-center mb-8">
                  <BankIcon />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">Probate</h3>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Skilled probate representation to navigate court proceedings and 
                  ensure proper distribution of assets according to your wishes.
                </p>
                <Link href="/probate" className="text-blue-800 hover:text-blue-900 font-semibold transition-colors duration-200">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div ref={revealAboutLeft.ref} style={revealAboutLeft.style}>
                <div>
                  <h2 className="text-4xl md:text-5xl font-serif font-semibold text-slate-900 mb-8">
                    San Jose Estate Planning Attorney
                  </h2>
                  <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                    You care about your family&apos;s future. You want your loved ones cared for. 
                    You rightfully want your wealth preserved and your legacy protected.
                  </p>
                  <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                    Our team of estate planning lawyers in San Jose are dedicated to preserving 
                    your wealth and assets for your loved ones, minimizing estate taxes, and 
                    ensuring your plans and desires are carried out with precision.
                  </p>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    California&apos;s probate laws and Federal tax laws can make estate planning 
                    needlessly complex. We work with our clients to develop comprehensive 
                    estate planning strategies that provide security and peace of mind.
                  </p>
                </div>
              </div>
              <div ref={revealAboutRight.ref} style={revealAboutRight.style}>
                <div className="bg-white p-10 rounded-lg shadow-xl border border-slate-100">
                  <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-6">Why Choose Us?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckmarkIcon />
                      <span className="text-slate-700 leading-relaxed">Experienced in complex estate matters</span>
                    </li>
                    <li className="flex items-start">
                      <CheckmarkIcon />
                      <span className="text-slate-700 leading-relaxed">Tax-sensitive planning strategies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckmarkIcon />
                      <span className="text-slate-700 leading-relaxed">Compassionate client representation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckmarkIcon />
                      <span className="text-slate-700 leading-relaxed">Silicon Valley expertise</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div ref={revealCtaTitle.ref} style={revealCtaTitle.style}>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-8">
              Ready to Protect Your Legacy?
            </h2>
          </div>
          <div ref={revealCtaDesc.ref} style={revealCtaDesc.style}>
            <p className="text-xl mb-12 text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Contact our San Jose estate planning office today to discuss your estate 
              administration, conservatorship, or probate needs.
            </p>
          </div>
          <div ref={revealCtaButtons.ref} style={revealCtaButtons.style}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href={PHONE_HREF}
                className="bg-blue-800 hover:bg-blue-900 text-white px-10 py-4 rounded-md font-semibold transition-colors duration-200 shadow-lg"
              >
                Call {PHONE_NUMBER}
              </a>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-10 py-4 rounded-md font-semibold hover:bg-white hover:text-slate-900 transition-colors duration-200"
              >
                Request Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
