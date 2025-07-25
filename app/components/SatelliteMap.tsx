'use client'

import React from 'react'
import Image from 'next/image'

export function SatelliteMap() {
  return (
    <div className="relative">
      <div className="bg-slate-200 rounded-lg shadow-xl border border-slate-100 overflow-hidden">
        <Image 
          src="/2021%20The%20Alameda.jpg"
          alt="2021 The Alameda, San Jose, CA - Office Courtyard"
          width={800}
          height={384}
          className="w-full h-96 object-cover"
        />
      </div>
      <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
        <p className="text-slate-800 font-semibold text-sm">2021 The Alameda, Suite 310</p>
        <p className="text-slate-600 text-xs">San Jose, CA 95126</p>
      </div>
    </div>
  )
} 