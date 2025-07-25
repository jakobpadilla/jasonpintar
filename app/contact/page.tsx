'use client';

import { useScrollReveal } from '../components/ScrollReveal'
import { SatelliteMap } from '../components/SatelliteMap'

export default function Contact() {
  // Hero Section
  const revealHeroTitle = useScrollReveal({ direction: 'up', delay: 200 });
  const revealHeroDesc = useScrollReveal({ direction: 'up', delay: 400 });

  // Contact Form & Info Section
  const revealContactForm = useScrollReveal({ direction: 'left', delay: 200 });
  const revealContactInfo = useScrollReveal({ direction: 'right', delay: 400 });

  // Contact Details
  const revealPhone = useScrollReveal({ direction: 'up', delay: 500 });
  const revealEmail = useScrollReveal({ direction: 'up', delay: 600 });
  const revealOffice = useScrollReveal({ direction: 'up', delay: 700 });
  const revealHours = useScrollReveal({ direction: 'up', delay: 800 });

  // Map Section
  const revealMapTitle = useScrollReveal({ direction: 'up', delay: 200 });
  const revealMapDesc = useScrollReveal({ direction: 'up', delay: 400 });
  const revealMap = useScrollReveal({ direction: 'up', delay: 600 });
  const revealDirections = useScrollReveal({ direction: 'up', delay: 800 });

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
              <h1 className="text-5xl md:text-6xl font-serif font-semibold mb-8 leading-tight text-white">
                Contact Us
              </h1>
            </div>
            <div ref={revealHeroDesc.ref} style={revealHeroDesc.style}>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
                Ready to discuss your estate planning, administration, conservatorship, 
                or probate needs? We&apos;re here to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div ref={revealContactForm.ref} style={revealContactForm.style}>
                <div>
                  <h2 className="text-3xl md:text-4xl font-serif font-semibold text-slate-900 mb-8">
                    Request a Consultation
                  </h2>
                  <form 
                    action="https://formspree.io/f/xwpqonly"
                    method="POST"
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent transition-colors duration-200 text-slate-900"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent transition-colors duration-200 text-slate-900"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent transition-colors duration-200 text-slate-900"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent transition-colors duration-200 text-slate-900"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                        Service of Interest *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent transition-colors duration-200 text-slate-900"
                      >
                        <option value="" className="text-slate-500">Select a service</option>
                        <option value="estate-administration" className="text-slate-900">Estate Administration</option>
                        <option value="conservatorships" className="text-slate-900">Conservatorships</option>
                        <option value="probate" className="text-slate-900">Probate</option>
                        <option value="estate-planning" className="text-slate-900">Estate Planning</option>
                        <option value="other" className="text-slate-900">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent transition-colors duration-200 text-slate-900"
                        placeholder="Please describe your situation and how we can help..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-blue-800 hover:bg-blue-900 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 shadow-lg"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>

              {/* Contact Information */}
              <div ref={revealContactInfo.ref} style={revealContactInfo.style}>
                <div>
                  <h2 className="text-3xl md:text-4xl font-serif font-semibold text-slate-900 mb-8">
                    Get in Touch
                  </h2>
                  
                  <div className="space-y-8">
                    {/* Phone */}
                    <div ref={revealPhone.ref} style={revealPhone.style}>
                      <div className="flex items-start">
                        <div className="w-16 h-16 bg-blue-800 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-serif font-semibold text-slate-900 mb-2">Phone</h3>
                          <div className="mb-2">
                            <span className="block text-sm font-semibold text-slate-700">Office</span>
                            <a href="tel:408-983-0500" className="text-lg text-blue-800 hover:text-blue-900 transition-colors duration-200">
                              (408) 983-0500
                            </a>
                          </div>
                          <p className="text-slate-700 mt-1 leading-relaxed">Monday - Friday, 9:00 AM - 5:00 PM</p>
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div ref={revealEmail.ref} style={revealEmail.style}>
                      <div className="flex items-start">
                        <div className="w-16 h-16 bg-blue-800 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-serif font-semibold text-slate-900 mb-2">Email</h3>
                          <a href="mailto:jason@pintarlaw.com" className="text-lg text-blue-800 hover:text-blue-900 transition-colors duration-200">
                            jason@pintarlaw.com
                          </a>
                          <p className="text-slate-700 mt-1 leading-relaxed">Please allow 24 hours for a response</p>
                        </div>
                      </div>
                    </div>

                    {/* Office */}
                    <div ref={revealOffice.ref} style={revealOffice.style}>
                      <div className="flex items-start">
                        <div className="w-16 h-16 bg-blue-800 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-serif font-semibold text-slate-900 mb-2">Office Location</h3>
                          <address className="text-slate-700 not-italic leading-relaxed">
                            <p className="text-slate-700">2021 The Alameda</p>
                            <p className="text-slate-700">Suite 310</p>
                            <p className="text-slate-700">San Jose, CA 95126</p>
                          </address>
                        </div>
                      </div>
                    </div>

                    {/* Office Hours */}
                    <div ref={revealHours.ref} style={revealHours.style}>
                      <div className="bg-slate-50 p-8 rounded-lg shadow-xl border border-slate-100">
                        <h3 className="text-xl font-serif font-semibold text-slate-900 mb-6">Office Hours</h3>
                        <div className="space-y-3 text-slate-700">
                          <div className="flex justify-between">
                            <span className="font-medium text-slate-700">Monday - Friday</span>
                            <span className="text-slate-700">9:00 AM - 5:00 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium text-slate-700">Saturday</span>
                            <span className="text-slate-700">Closed</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium text-slate-700">Sunday</span>
                            <span className="text-slate-700">Closed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div ref={revealMapTitle.ref} style={revealMapTitle.style}>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-slate-900 mb-8">
                Visit Our Office
              </h2>
            </div>
            <div ref={revealMapDesc.ref} style={revealMapDesc.style}>
              <p className="text-lg text-slate-700 mb-12 leading-relaxed">
                Conveniently located in San Jose, we serve clients throughout Silicon Valley 
                and the greater Bay Area.
              </p>
            </div>
            <div ref={revealMap.ref} style={revealMap.style}>
              <SatelliteMap />
            </div>
            <div ref={revealDirections.ref} style={revealDirections.style}>
              <div className="mt-8 flex justify-center">
                <a 
                  href="https://maps.google.com/?q=2021+The+Alameda,San+Jose,CA+95126"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-800 hover:bg-blue-900 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div ref={revealCtaTitle.ref} style={revealCtaTitle.style}>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-8 text-white">
              Ready to Get Started?
            </h2>
          </div>
          <div ref={revealCtaDesc.ref} style={revealCtaDesc.style}>
            <p className="text-xl mb-12 text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Don&apos;t wait to protect your family&apos;s future. Contact us today for a 
              confidential consultation about your estate planning needs.
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
              <a 
                href="mailto:jason@pintarlaw.com" 
                className="border-2 border-white text-white px-10 py-4 rounded-md font-semibold hover:bg-white hover:text-slate-900 transition-colors duration-200"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 