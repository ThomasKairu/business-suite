
'use client';

import Link from 'next/link';

export default function ResultsSection() {
  const stats = [
    {
      number: '500+',
      label: 'Projects Completed',
      description: 'Successfully delivered across 15+ industries'
    },
    {
      number: '98%',
      label: 'Success Rate',
      description: 'Clients achieve their strategic objectives'
    },
    {
      number: '250%',
      label: 'Average ROI',
      description: 'Return on investment for our clients'
    },
    {
      number: '85%',
      label: 'Client Retention',
      description: 'Long-term partnerships and repeat business'
    }
  ];

  return (
    <section className="py-20 bg-[#001F3F]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Track Record
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Numbers that speak for themselves. Our proven methodology delivers 
            consistent results for businesses of all sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-[#FFD700] mb-4">{stat.number}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{stat.label}</h3>
              <p className="text-gray-400">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link 
            href="/contact"
            className="bg-[#FFD700] text-[#001F3F] px-8 py-4 rounded-lg hover:bg-white hover:text-[#001F3F] transition-all duration-300 font-semibold inline-block whitespace-nowrap"
          >
            Start Your Success Story
          </Link>
        </div>
      </div>
    </section>
  );
}
