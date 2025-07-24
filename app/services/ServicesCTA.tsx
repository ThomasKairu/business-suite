
'use client';

import Link from 'next/link';

export default function ServicesCTA() {
  return (
    <section className="py-20 bg-[#001F3F]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Let's discuss how our services can help you achieve your business goals. 
          Schedule a free consultation today.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Link href="/contact" className="bg-[#FFD700] text-[#001F3F] px-8 py-4 rounded-lg hover:bg-white hover:text-[#001F3F] transition-all duration-300 font-semibold transform hover:scale-105 whitespace-nowrap">
            Schedule Consultation
          </Link>
          <Link href="/case-studies" className="border-2 border-[#FFD700] text-[#FFD700] px-8 py-4 rounded-lg hover:bg-[#FFD700] hover:text-[#001F3F] transition-all duration-300 font-semibold transform hover:scale-105 whitespace-nowrap">
            View Our Work
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center mb-4">
              <i className="ri-time-line text-[#FFD700] text-2xl"></i>
            </div>
            <h3 className="font-semibold mb-2">Quick Response</h3>
            <p className="text-sm">We respond to all inquiries within 24 hours</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center mb-4">
              <i className="ri-user-line text-[#FFD700] text-2xl"></i>
            </div>
            <h3 className="font-semibold mb-2">Expert Team</h3>
            <p className="text-sm">Work directly with senior consultants</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center mb-4">
              <i className="ri-shield-check-line text-[#FFD700] text-2xl"></i>
            </div>
            <h3 className="font-semibold mb-2">Proven Results</h3>
            <p className="text-sm">98% client satisfaction rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
