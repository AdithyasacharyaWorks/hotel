import React from 'react'
import Link  from 'next/link';
function HeroSection() {
    return (
      <section className="relative py-8 md:py-16 bg-gray-900 text-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-8 flex flex-col items-center md:items-start">
          <div className="text-center md:text-left max-w-3xl">
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-2">
                Discover the Best Food in Kundapur <span className="text-red-600">Karavali</span><span className='animate-pulse '>!</span>
              </h1>
              <p className="text-lg md:text-xl mb-4">
                Explore delicious local culinary delights available in Kundapur, Karnataka.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
export default HeroSection