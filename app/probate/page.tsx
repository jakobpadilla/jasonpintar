'use client';

import Link from 'next/link'
import { useScrollReveal } from '../components/ScrollReveal'

export default function Probate() {
  // Hero Section
  const revealHeroTitle = useScrollReveal({ direction: 'up', delay: 200 });
  const revealHeroDesc = useScrollReveal({ direction: 'up', delay: 400 });

  // Overview Section
  const revealOverviewLeft = useScrollReveal({ direction: 'left', delay: 200 });
  const revealOverviewRight = useScrollReveal({ direction: 'right', delay: 400 });
  const revealWhen1 = useScrollReveal({ direction: 'left', delay: 500 });
  const revealWhen2 = useScrollReveal({ direction: 'left', delay: 600 });
  const revealWhen3 = useScrollReveal({ direction: 'left', delay: 700 });
  const revealWhen4 = useScrollReveal({ direction: 'left', delay: 800 });

  // Services Section
  const revealServicesTitle = useScrollReveal({ direction: 'up', delay: 200 });
  const revealServicesDesc = useScrollReveal({ direction: 'up', delay: 400 });
  const revealService1 = useScrollReveal({ direction: 'up', delay: 200 });
  const revealService1Icon = useScrollReveal({ direction: 'up', delay: 300 });
  const revealService1Title = useScrollReveal({ direction: 'up', delay: 400 });
  const revealService1Desc = useScrollReveal({ direction: 'up', delay: 500 });
  const revealService2 = useScrollReveal({ direction: 'up', delay: 300 });
  const revealService2Icon = useScrollReveal({ direction: 'up', delay: 400 });
  const revealService2Title = useScrollReveal({ direction: 'up', delay: 500 });
  const revealService2Desc = useScrollReveal({ direction: 'up', delay: 600 });
  const revealService3 = useScrollReveal({ direction: 'up', delay: 400 });
  const revealService3Icon = useScrollReveal({ direction: 'up', delay: 500 });
  const revealService3Title = useScrollReveal({ direction: 'up', delay: 600 });
  const revealService3Desc = useScrollReveal({ direction: 'up', delay: 700 });
  const revealService4 = useScrollReveal({ direction: 'up', delay: 500 });
  const revealService4Icon = useScrollReveal({ direction: 'up', delay: 600 });
  const revealService4Title = useScrollReveal({ direction: 'up', delay: 700 });
  const revealService4Desc = useScrollReveal({ direction: 'up', delay: 800 });
  const revealService5 = useScrollReveal({ direction: 'up', delay: 600 });
  const revealService5Icon = useScrollReveal({ direction: 'up', delay: 700 });
  const revealService5Title = useScrollReveal({ direction: 'up', delay: 800 });
  const revealService5Desc = useScrollReveal({ direction: 'up', delay: 900 });
  const revealService6 = useScrollReveal({ direction: 'up', delay: 700 });
  const revealService6Icon = useScrollReveal({ direction: 'up', delay: 800 });
  const revealService6Title = useScrollReveal({ direction: 'up', delay: 900 });
  const revealService6Desc = useScrollReveal({ direction: 'up', delay: 1000 });

  // Process Section
  const revealProcessTitle = useScrollReveal({ direction: 'up', delay: 200 });
  const revealProcessDesc = useScrollReveal({ direction: 'up', delay: 400 });
  const revealStep1 = useScrollReveal({ direction: 'left', delay: 200 });
  const revealStep2 = useScrollReveal({ direction: 'right', delay: 300 });
  const revealStep3 = useScrollReveal({ direction: 'left', delay: 400 });
  const revealStep4 = useScrollReveal({ direction: 'right', delay: 500 });
  const revealStep5 = useScrollReveal({ direction: 'left', delay: 600 });

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
                Probate Services
              </h1>
            </div>
            <div ref={revealHeroDesc.ref} style={revealHeroDesc.style}>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
                Skilled probate representation to navigate court proceedings and 
                ensure proper distribution of assets according to your wishes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div ref={revealOverviewLeft.ref} style={revealOverviewLeft.style}>
                <div>
                  <h2 className="text-4xl md:text-5xl font-serif font-semibold text-slate-900 mb-8">
                    What is Probate?
                  </h2>
                  <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                    Probate is the legal process through which a deceased person&apos;s will is 
                    validated and their estate is administered under court supervision. This 
                    process ensures that assets are distributed according to the will or 
                    state law if no will exists.
                  </p>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Our experienced probate attorneys guide executors, administrators, and 
                    beneficiaries through this complex process, ensuring compliance with 
                    California probate law while protecting everyone&apos;s interests.
                  </p>
                </div>
              </div>
              <div ref={revealOverviewRight.ref} style={revealOverviewRight.style}>
                <div className="bg-slate-50 p-10 rounded-lg shadow-xl border border-slate-100">
                  <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-6">When Probate is Required</h3>
                  <ul className="space-y-4">
                    <div ref={revealWhen1.ref} style={revealWhen1.style}>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-800 mt-1 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-slate-700 leading-relaxed">Assets held solely in decedent&apos;s name</span>
                      </li>
                    </div>
                    <div ref={revealWhen2.ref} style={revealWhen2.style}>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-800 mt-1 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-slate-700 leading-relaxed">Real estate without survivorship rights</span>
                      </li>
                    </div>
                    <div ref={revealWhen3.ref} style={revealWhen3.style}>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-800 mt-1 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-slate-700 leading-relaxed">Business interests and partnerships</span>
                      </li>
                    </div>
                    <div ref={revealWhen4.ref} style={revealWhen4.style}>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-800 mt-1 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-slate-700 leading-relaxed">Disputed wills or beneficiary claims</span>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div ref={revealServicesTitle.ref} style={revealServicesTitle.style}>
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-slate-900 mb-6">
                Our Probate Services
              </h2>
            </div>
            <div ref={revealServicesDesc.ref} style={revealServicesDesc.style}>
              <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
                Comprehensive probate services to ensure efficient and compliant 
                administration of estates through the court system.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div ref={revealService1.ref} style={revealService1.style}>
              <div className="bg-white p-10 rounded-lg shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow duration-300">
                <div ref={revealService1Icon.ref} style={revealService1Icon.style}>
                  <div className="w-16 h-16 bg-blue-800 rounded-lg flex items-center justify-center mb-8">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <div ref={revealService1Title.ref} style={revealService1Title.style}>
                  <h3 className="text-xl font-serif font-semibold text-slate-900 mb-4">Will Validation</h3>
                </div>
                <div ref={revealService1Desc.ref} style={revealService1Desc.style}>
                  <p className="text-slate-700 leading-relaxed">
                    Legal representation in will contests and validation proceedings, 
                    ensuring proper execution and testamentary capacity.
                  </p>
                </div>
              </div>
            </div>

            <div ref={revealService2.ref} style={revealService2.style}>
              <div className="bg-white p-10 rounded-lg shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow duration-300">
                <div ref={revealService2Icon.ref} style={revealService2Icon.style}>
                  <div className="w-16 h-16 bg-blue-800 rounded-lg flex items-center justify-center mb-8">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div ref={revealService2Title.ref} style={revealService2Title.style}>
                  <h3 className="text-xl font-serif font-semibold text-slate-900 mb-4">Executor Representation</h3>
                </div>
                <div ref={revealService2Desc.ref} style={revealService2Desc.style}>
                  <p className="text-slate-700 leading-relaxed">
                    Legal guidance for executors throughout the probate process, 
                    including court appearances and compliance requirements.
                  </p>
                </div>
              </div>
            </div>

            <div ref={revealService3.ref} style={revealService3.style}>
              <div className="bg-white p-10 rounded-lg shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow duration-300">
                <div ref={revealService3Icon.ref} style={revealService3Icon.style}>
                  <div className="w-16 h-16 bg-blue-800 rounded-lg flex items-center justify-center mb-8">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <div ref={revealService3Title.ref} style={revealService3Title.style}>
                  <h3 className="text-xl font-serif font-semibold text-slate-900 mb-4">Beneficiary Advocacy</h3>
                </div>
                <div ref={revealService3Desc.ref} style={revealService3Desc.style}>
                  <p className="text-slate-700 leading-relaxed">
                    Representation of beneficiaries to protect their rights and 
                    ensure proper distribution of estate assets.
                  </p>
                </div>
              </div>
            </div>

            <div ref={revealService4.ref} style={revealService4.style}>
              <div className="bg-white p-10 rounded-lg shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow duration-300">
                <div ref={revealService4Icon.ref} style={revealService4Icon.style}>
                  <div className="w-16 h-16 bg-blue-800 rounded-lg flex items-center justify-center mb-8">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                </div>
                <div ref={revealService4Title.ref} style={revealService4Title.style}>
                  <h3 className="text-xl font-serif font-semibold text-slate-900 mb-4">Asset Distribution</h3>
                </div>
                <div ref={revealService4Desc.ref} style={revealService4Desc.style}>
                  <p className="text-slate-700 leading-relaxed">
                    Facilitating the proper distribution of estate assets according 
                    to the will or intestate succession laws.
                  </p>
                </div>
              </div>
            </div>

            <div ref={revealService5.ref} style={revealService5.style}>
              <div className="bg-white p-10 rounded-lg shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow duration-300">
                <div ref={revealService5Icon.ref} style={revealService5Icon.style}>
                  <div className="w-16 h-16 bg-blue-800 rounded-lg flex items-center justify-center mb-8">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                </div>
                <div ref={revealService5Title.ref} style={revealService5Title.style}>
                  <h3 className="text-xl font-serif font-semibold text-slate-900 mb-4">Court Filings</h3>
                </div>
                <div ref={revealService5Desc.ref} style={revealService5Desc.style}>
                  <p className="text-slate-700 leading-relaxed">
                    Preparation and filing of all required probate court documents, 
                    including petitions, inventories, and final accountings.
                  </p>
                </div>
              </div>
            </div>

            <div ref={revealService6.ref} style={revealService6.style}>
              <div className="bg-white p-10 rounded-lg shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow duration-300">
                <div ref={revealService6Icon.ref} style={revealService6Icon.style}>
                  <div className="w-16 h-16 bg-blue-800 rounded-lg flex items-center justify-center mb-8">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div ref={revealService6Title.ref} style={revealService6Title.style}>
                  <h3 className="text-xl font-serif font-semibold text-slate-900 mb-4">Dispute Resolution</h3>
                </div>
                <div ref={revealService6Desc.ref} style={revealService6Desc.style}>
                  <p className="text-slate-700 leading-relaxed">
                    Resolution of probate disputes, including will contests, 
                    beneficiary disagreements, and creditor claims.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div ref={revealProcessTitle.ref} style={revealProcessTitle.style}>
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-slate-900 mb-6">
                The Probate Process
              </h2>
            </div>
            <div ref={revealProcessDesc.ref} style={revealProcessDesc.style}>
              <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
                Understanding the probate process can help you prepare for what 
                to expect and ensure a smooth administration.
              </p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div ref={revealStep1.ref} style={revealStep1.style}>
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-blue-800 text-white rounded-full flex items-center justify-center font-bold text-xl mr-8 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-slate-900 mb-3">Initial Assessment</h3>
                    <p className="text-slate-700 leading-relaxed">
                      We begin by assessing the estate, reviewing the will (if any), 
                      identifying assets, and determining the appropriate probate approach.
                    </p>
                  </div>
                </div>
              </div>

              <div ref={revealStep2.ref} style={revealStep2.style}>
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-blue-800 text-white rounded-full flex items-center justify-center font-bold text-xl mr-8 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-slate-900 mb-3">Petition Filing</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Filing the probate petition with the court and serving notice 
                      to all interested parties as required by law.
                    </p>
                  </div>
                </div>
              </div>

              <div ref={revealStep3.ref} style={revealStep3.style}>
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-blue-800 text-white rounded-full flex items-center justify-center font-bold text-xl mr-8 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-slate-900 mb-3">Court Proceedings</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Representation at court hearings, including will validation, 
                      executor appointment, and resolution of any disputes.
                    </p>
                  </div>
                </div>
              </div>

              <div ref={revealStep4.ref} style={revealStep4.style}>
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-blue-800 text-white rounded-full flex items-center justify-center font-bold text-xl mr-8 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-slate-900 mb-3">Asset Management</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Inventory and valuation of estate assets, payment of debts and taxes, 
                      and management of estate property during administration.
                    </p>
                  </div>
                </div>
              </div>

              <div ref={revealStep5.ref} style={revealStep5.style}>
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-blue-800 text-white rounded-full flex items-center justify-center font-bold text-xl mr-8 flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-slate-900 mb-3">Final Distribution</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Distribution of remaining assets to beneficiaries according to 
                      the will or intestate succession laws, followed by estate closure.
                    </p>
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
              Need Probate Assistance?
            </h2>
          </div>
          <div ref={revealCtaDesc.ref} style={revealCtaDesc.style}>
            <p className="text-xl mb-12 text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Our experienced probate attorneys are here to guide you through 
              the complex probate process with expertise and care.
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