'use client';

export default function StatsSection() {
  const stats = [
    {
      number: '500+',
      label: 'Successful Projects',
      description: 'Delivered across various industries'
    },
    {
      number: '98%',
      label: 'Client Satisfaction',
      description: 'Based on client feedback surveys'
    },
    {
      number: '15+',
      label: 'Years Experience',
      description: 'In strategic business consulting'
    },
    {
      number: '50+',
      label: 'Expert Consultants',
      description: 'Ready to help your business grow'
    }
  ];

  return (
    <section className="py-20 bg-[#001F3F]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Proven Track Record of Success
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Numbers that speak for themselves. Our commitment to excellence drives results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-[#FFD700] mb-4">{stat.number}</div>
              <div className="text-xl font-semibold text-white mb-2">{stat.label}</div>
              <div className="text-gray-300">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}