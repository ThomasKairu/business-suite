'use client';

import Link from 'next/link';

export default function ServicesOverview() {
  const services = [
    {
      icon: 'ri-lightbulb-line',
      title: 'Strategic Planning',
      description: 'Develop comprehensive business strategies that align with your vision and drive sustainable growth.',
      features: ['Market Analysis', 'Competitive Intelligence', 'Growth Strategies', 'Risk Assessment']
    },
    {
      icon: 'ri-computer-line',
      title: 'Digital Transformation',
      description: 'Modernize your operations with cutting-edge technology solutions and digital workflows.',
      features: ['Process Automation', 'Cloud Migration', 'Digital Marketing', 'Tech Integration']
    },
    {
      icon: 'ri-team-line',
      title: 'Organizational Development',
      description: 'Build high-performing teams and optimize organizational structure for maximum efficiency.',
      features: ['Leadership Training', 'Team Building', 'Performance Management', 'Culture Development']
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Performance Optimization',
      description: 'Analyze and improve business processes to maximize efficiency and profitability.',
      features: ['Process Analysis', 'KPI Development', 'Operational Excellence', 'Quality Management']
    },
    {
      icon: 'ri-global-line',
      title: 'Market Expansion',
      description: 'Scale your business into new markets with strategic expansion planning and execution.',
      features: ['Market Research', 'Entry Strategies', 'Partnership Development', 'Localization']
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Risk Management',
      description: 'Identify and mitigate business risks while ensuring compliance and governance.',
      features: ['Risk Assessment', 'Compliance Management', 'Crisis Planning', 'Governance Framework']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#001F3F] mb-4">
            Comprehensive Business Solutions
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            From strategic planning to digital transformation, we provide end-to-end consulting services 
            that drive measurable results for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#001F3F] rounded-lg flex items-center justify-center mb-6">
                <i className={`${service.icon} text-[#FFD700] text-2xl`}></i>
              </div>
              <h3 className="text-xl font-semibold text-[#001F3F] mb-4">{service.title}</h3>
              <p className="text-gray-700 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-check-line text-[#FFD700] text-sm"></i>
                    </div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="bg-[#001F3F] text-white px-8 py-4 rounded-lg hover:bg-[#FFD700] hover:text-[#001F3F] transition-all duration-300 font-semibold inline-block whitespace-nowrap">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}