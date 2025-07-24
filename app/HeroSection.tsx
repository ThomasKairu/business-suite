
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20business%20consulting%20office%20environment%20with%20modern%20architecture%2C%20clean%20white%20and%20navy%20blue%20color%20scheme%2C%20sophisticated%20lighting%2C%20minimalist%20design%2C%20businesspeople%20in%20background%20blur%2C%20corporate%20atmosphere%2C%20high-end%20consulting%20firm%20aesthetic%2C%20left%20side%20has%20plain%20white%2Flight%20blue%20background%20area%20for%20text%20overlay%2C%20right%20side%20shows%20modern%20office%20space%20with%20glass%20walls%20and%20professional%20ambiance&width=1920&height=1080&seq=hero-bg&orientation=landscape')`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/98 via-white/95 to-white/30"></div>
      
      <div className="relative container mx-auto px-8 py-24 min-h-screen flex items-center">
        <div className="w-full max-w-3xl">
          <div className={`transition-all duration-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-[#001F3F] mb-8 leading-[1.1] transition-all duration-800 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Transform Your Business with
              <span className={`text-[#FFD700] block mt-3 transition-all duration-800 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}>Strategic Excellence</span>
            </h1>
            
            <p className={`text-lg md:text-xl text-gray-700 mb-12 max-w-2xl leading-relaxed font-medium transition-all duration-800 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              We empower businesses through strategic consulting and digital transformation. 
              Navigate the path to sustainable growth with our expert guidance.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-6 mb-16 transition-all duration-800 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <Link href="/contact" className="bg-[#001F3F] text-white px-10 py-4 rounded-lg hover:bg-[#FFD700] hover:text-[#001F3F] transition-all duration-300 font-semibold text-center transform hover:scale-105 hover:shadow-xl whitespace-nowrap text-base">
                Get Free Consultation
              </Link>
              <Link href="/services" className="border-2 border-[#001F3F] text-[#001F3F] px-10 py-4 rounded-lg hover:bg-[#001F3F] hover:text-white transition-all duration-300 font-semibold text-center transform hover:scale-105 hover:shadow-xl whitespace-nowrap text-base">
                Our Services
              </Link>
            </div>
            
            <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 text-sm text-gray-600 transition-all duration-800 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="flex items-center space-x-3 transform hover:scale-105 transition-transform duration-300">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-check-line text-[#FFD700] text-lg"></i>
                </div>
                <span className="font-medium">Trusted by 500+ businesses</span>
              </div>
              <div className="flex items-center space-x-3 transform hover:scale-105 transition-transform duration-300">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-check-line text-[#FFD700] text-lg"></i>
                </div>
                <span className="font-medium">98% success rate</span>
              </div>
              <div className="flex items-center space-x-3 transform hover:scale-105 transition-transform duration-300">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-check-line text-[#FFD700] text-lg"></i>
                </div>
                <span className="font-medium">Award-winning team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
