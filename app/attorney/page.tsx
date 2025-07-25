'use client';

import Link from 'next/link'
import { useScrollReveal } from '../components/ScrollReveal'
import Image from 'next/image'

export default function Attorney() {
  // Hero Section
  const revealHeroTitle = useScrollReveal({ direction: 'up', delay: 200 });
  const revealHeroDesc = useScrollReveal({ direction: 'up', delay: 400 });
  const revealHeroDesc2 = useScrollReveal({ direction: 'up', delay: 600 });

  // Profile Section
  const revealProfilePhoto = useScrollReveal({ direction: 'left', delay: 200 });
  const revealProfileBio = useScrollReveal({ direction: 'right', delay: 400 });
  const revealExperience = useScrollReveal({ direction: 'up', delay: 500 });
  const revealApproach = useScrollReveal({ direction: 'up', delay: 600 });

  // Education & Credentials
  const revealEducationTitle = useScrollReveal({ direction: 'up', delay: 200 });
  const revealEducation = useScrollReveal({ direction: 'left', delay: 300 });
  const revealMemberships = useScrollReveal({ direction: 'right', delay: 400 });

  // CTA Section
  const revealCtaTitle = useScrollReveal({ direction: 'up', delay: 200 });
  const revealCtaDesc = useScrollReveal({ direction: 'up', delay: 400 });
  const revealCtaButtons = useScrollReveal({ direction: 'up', delay: 600 });

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div ref={revealHeroTitle.ref} style={revealHeroTitle.style}>
              <h1 className="text-5xl md:text-6xl font-serif font-semibold mb-8 leading-tight">
                Jason L. Pintar
              </h1>
            </div>
            <div ref={revealHeroDesc.ref} style={revealHeroDesc.style}>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
                San Jose Estate Planning & Administration Attorney
              </p>
            </div>
            <div ref={revealHeroDesc2.ref} style={revealHeroDesc2.style}>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto mt-6 leading-relaxed">
                Bringing expertise, compassion, and practical solutions to estate planning 
                and administration matters in Silicon Valley.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Attorney Profile Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="relative">
              {/* Attorney Photo & Contact - Positioned absolutely */}
              <div ref={revealProfilePhoto.ref} style={revealProfilePhoto.style}>
                <div className="absolute left-0 top-0 w-80">
                  <div className="bg-slate-50 p-10 rounded-lg shadow-xl border border-slate-100">
                    <div className="w-64 h-96 bg-slate-300 rounded-lg mx-auto mb-8 flex items-center justify-center overflow-hidden">
                      <Image
                        src="/jason img.jpg"
                        alt="Jason L. Pintar"
                        width={256}
                        height={384}
                        className="object-cover w-full h-full rounded-lg"
                        style={{ 
                          objectPosition: 'center',
                          imageRendering: 'crisp-edges',
                          filter: 'contrast(1.05) saturate(1.1)'
                        }}
                        priority
                        quality={95}
                      />
                    </div>
                    
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-2">Jason L. Pintar</h2>
                      <p className="text-blue-800 font-semibold">Managing Attorney</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-blue-800 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <a href="tel:408-983-0500" className="text-slate-700 hover:text-blue-800 transition-colors duration-200">
                          (408) 983-0500
                        </a>
                      </div>
                      
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-blue-800 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a href="mailto:jason@pintarlaw.com" className="text-slate-700 hover:text-blue-800 transition-colors duration-200">
                          jason@pintarlaw.com
                        </a>
                      </div>
                      
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-blue-800 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-slate-700">San Jose, CA</span>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-slate-200">
                      <h3 className="text-lg font-serif font-semibold text-slate-900 mb-4">Practice Areas</h3>
                      <ul className="space-y-2 text-slate-700">
                        <li>• Trust Administration</li>
                        <li>• Conservatorships</li>
                        <li>• Probate</li>
                        <li>• Estate Administration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Attorney Bio - Full width with left margin for photo */}
              <div ref={revealProfileBio.ref} style={revealProfileBio.style}>
                <div className="ml-96">
                  <h2 className="text-3xl md:text-4xl font-serif font-semibold text-slate-900 mb-8">
                    About Jason L. Pintar
                  </h2>
                  
                  <div className="text-slate-700 space-y-6 leading-relaxed text-lg">
                    <p>
                      Jason L. Pintar is the founding attorney of the Law Offices of Jason L. Pintar, 
                      a boutique estate planning and administration law firm serving clients throughout 
                      Silicon Valley and the greater Bay Area. With over a decade of experience in 
                      trust administration and probate law, Jason brings a unique combination of legal 
                      expertise and practical business acumen to every client relationship.
                    </p>
                    
                    <p>
                      Located in the heart of Silicon Valley, Jason understands the complex financial 
                      and family dynamics that often accompany estate planning in this region. His 
                      practice focuses on helping families preserve their wealth, protect their 
                      legacies, and ensure their wishes are carried out with precision and care.
                    </p>
                    
                    <p>
                      Jason&apos;s approach to estate planning is characterized by his commitment to 
                      understanding each client&apos;s unique situation, goals, and concerns. He believes 
                      that effective estate planning requires not only technical legal expertise, 
                      but also compassion, clear communication, and a deep understanding of family 
                      dynamics.
                    </p>
                  </div>

                  {/* Experience & Approach */}
                  <div className="mt-12 grid md:grid-cols-2 gap-12">
                    <div ref={revealExperience.ref} style={revealExperience.style}>
                      <div>
                        <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-6">Experience & Expertise</h3>
                        <ul className="space-y-4 text-slate-700">
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-800 mt-1 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="leading-relaxed">Comprehensive estate planning and administration</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-800 mt-1 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="leading-relaxed">Silicon Valley business and technology expertise</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-800 mt-1 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="leading-relaxed">Complex probate and conservatorship matters</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-800 mt-1 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="leading-relaxed">Tax-sensitive planning strategies</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-800 mt-1 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="leading-relaxed">Trust administration and management</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div ref={revealApproach.ref} style={revealApproach.style}>
                      <div>
                        <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-6">Our Approach</h3>
                        <ul className="space-y-4 text-slate-700">
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-800 mt-1 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="leading-relaxed">Practical, cost-effective solutions</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-800 mt-1 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="leading-relaxed">Clear, understandable legal guidance</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-800 mt-1 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="leading-relaxed">Compassionate representation</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-800 mt-1 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="leading-relaxed">Personalized attention to each client</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-800 mt-1 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="leading-relaxed">Ongoing support and guidance</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Credentials */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div ref={revealEducationTitle.ref} style={revealEducationTitle.style}>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-slate-900 text-center mb-12">
                Education & Credentials
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div ref={revealEducation.ref} style={revealEducation.style}>
                <div className="bg-white p-10 rounded-lg shadow-xl border border-slate-100">
                  <h3 className="text-xl font-serif font-semibold text-slate-900 mb-6">Education</h3>
                  <div className="space-y-4 text-slate-700">
                    <div>
                      <h4 className="font-semibold text-slate-900">Juris Doctor</h4>
                      <p>Santa Clara University School of Law</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Bachelor of Arts</h4>
                      <p>The University of Utah</p>
                    </div>
                  </div>
                </div>
              </div>

              <div ref={revealMemberships.ref} style={revealMemberships.style}>
                <div className="bg-white p-10 rounded-lg shadow-xl border border-slate-100">
                  <h3 className="text-xl font-serif font-semibold text-slate-900 mb-6">Professional Memberships</h3>
                  <div className="space-y-4 text-slate-700">
                    <div>
                      <h4 className="font-semibold text-slate-900">State Bar of California</h4>
                      <p>Member since 2010</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Santa Clara County Bar Association</h4>
                      <p>Estate Planning & Probate Section</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">American Bar Association</h4>
                      <p>Real Property, Trust & Estate Law Section</p>
                    </div>
                  </div>
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
              Ready to Work with Jason?
            </h2>
          </div>
          <div ref={revealCtaDesc.ref} style={revealCtaDesc.style}>
            <p className="text-xl mb-12 text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Contact Jason today to discuss your estate planning, administration, 
              or probate needs with an experienced Silicon Valley attorney.
            </p>
          </div>
          <div ref={revealCtaButtons.ref} style={revealCtaButtons.style}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="tel:408-983-0500" 
                className="bg-blue-800 hover:bg-blue-900 text-white px-10 py-4 rounded-md font-semibold transition-colors duration-200 shadow-lg"
              >
                Call (408) 983-0500
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