'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section 
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20professional%20office%20building%20at%20sunset%2C%20glass%20windows%20reflecting%20golden%20light%2C%20corporate%20headquarters%2C%20business%20district%20skyline%2C%20contemporary%20architecture%2C%20inspiring%20corporate%20environment%2C%20navy%20blue%20and%20gold%20color%20tones%2C%20professional%20business%20photography&width=1920&height=600&seq=cta-bg&orientation=landscape')`
      }}
    >
      <div className="absolute inset-0 bg-[#001F3F]/90"></div>
      
      <div className="relative container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join hundreds of successful businesses that have partnered with BrightPath Consulting 
          to achieve extraordinary growth and success.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Link href="/contact" className="bg-[#FFD700] text-[#001F3F] px-8 py-4 rounded-lg hover:bg-white hover:text-[#001F3F] transition-all duration-300 font-semibold transform hover:scale-105 whitespace-nowrap">
            Get Free Consultation
          </Link>
          <Link href="/case-studies" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#001F3F] transition-all duration-300 font-semibold transform hover:scale-105 whitespace-nowrap">
            View Case Studies
          </Link>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-gray-300">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 flex items-center justify-center">
              <i className="ri-phone-line text-[#FFD700]"></i>
            </div>
            <span>+254 700 123 456</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 flex items-center justify-center">
              <i className="ri-mail-line text-[#FFD700]"></i>
            </div>
            <span>info@brightpathconsulting.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 flex items-center justify-center">
              <i className="ri-time-line text-[#FFD700]"></i>
            </div>
            <span>Free consultation within 24 hours</span>
          </div>
        </div>
      </div>
    </section>
  );
}