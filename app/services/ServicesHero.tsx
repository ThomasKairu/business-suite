
'use client';

import Link from 'next/link';

export default function ServicesHero() {
  return (
    <section 
      className="relative py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20business%20consulting%20services%20office%20with%20professional%20team%20working%2C%20strategic%20planning%20meeting%2C%20navy%20blue%20and%20gold%20corporate%20environment%2C%20collaborative%20workspace%2C%20business%20strategy%20documents%2C%20professional%20consulting%20atmosphere&width=1920&height=800&seq=services-hero&orientation=landscape')`
      }}
    >
      <div className="absolute inset-0 bg-[#001F3F]/85"></div>
      
      <div className="relative container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Our Services
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
          Comprehensive business consulting solutions designed to drive growth, 
          improve efficiency, and transform your organization for long-term success.
        </p>
        <Link href="/contact" className="bg-[#FFD700] text-[#001F3F] px-8 py-4 rounded-lg hover:bg-white hover:text-[#001F3F] transition-all duration-300 font-semibold inline-block whitespace-nowrap">
          Get Started Today
        </Link>
      </div>
    </section>
  );
}
