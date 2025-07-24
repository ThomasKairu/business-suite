
'use client';

import Link from 'next/link';

export default function ServicesList() {
  const services = [
    {
      icon: 'ri-lightbulb-line',
      title: 'Strategic Planning',
      description: 'Comprehensive business strategy development that aligns with your vision and market opportunities.',
      features: [
        'Market Analysis & Competitive Intelligence',
        'Business Model Development',
        'Growth Strategy Planning',
        'Risk Assessment & Mitigation',
        'Performance Metrics & KPIs',
        'Strategic Roadmap Creation'
      ],
      benefits: [
        'Clear strategic direction',
        'Competitive advantage',
        'Risk reduction',
        'Revenue growth opportunities'
      ]
    },
    {
      icon: 'ri-computer-line',
      title: 'Digital Transformation',
      description: 'Modernize your business operations with cutting-edge technology solutions and digital workflows.',
      features: [
        'Process Automation & Optimization',
        'Cloud Migration & Integration',
        'Digital Marketing Strategy',
        'Technology Stack Assessment',
        'Data Analytics Implementation',
        'Cybersecurity Framework'
      ],
      benefits: [
        'Increased operational efficiency',
        'Cost reduction',
        'Enhanced customer experience',
        'Scalable infrastructure'
      ]
    },
    {
      icon: 'ri-team-line',
      title: 'Organizational Development',
      description: 'Build high-performing teams and optimize organizational structure for maximum effectiveness.',
      features: [
        'Leadership Development Programs',
        'Team Building & Collaboration',
        'Performance Management Systems',
        'Culture Transformation',
        'Change Management',
        'Succession Planning'
      ],
      benefits: [
        'Higher employee engagement',
        'Improved productivity',
        'Better retention rates',
        'Stronger leadership pipeline'
      ]
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Performance Optimization',
      description: 'Analyze and improve business processes to maximize efficiency and profitability.',
      features: [
        'Process Analysis & Reengineering',
        'KPI Development & Tracking',
        'Operational Excellence Programs',
        'Quality Management Systems',
        'Lean Six Sigma Implementation',
        'Continuous Improvement Culture'
      ],
      benefits: [
        'Increased profitability',
        'Reduced operational costs',
        'Improved quality standards',
        'Enhanced customer satisfaction'
      ]
    },
    {
      icon: 'ri-global-line',
      title: 'Market Expansion',
      description: 'Scale your business into new markets with strategic expansion planning and execution.',
      features: [
        'Market Research & Analysis',
        'Entry Strategy Development',
        'Partnership & Alliance Building',
        'Localization Strategies',
        'Regulatory Compliance',
        'Go-to-Market Planning'
      ],
      benefits: [
        'New revenue streams',
        'Market diversification',
        'Reduced business risk',
        'Increased brand presence'
      ]
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Risk Management',
      description: 'Identify and mitigate business risks while ensuring compliance and governance.',
      features: [
        'Risk Assessment & Analysis',
        'Compliance Management',
        'Crisis Management Planning',
        'Governance Framework Development',
        'Internal Controls Implementation',
        'Regulatory Advisory Services'
      ],
      benefits: [
        'Reduced business vulnerabilities',
        'Regulatory compliance',
        'Improved decision-making',
        'Enhanced stakeholder confidence'
      ]
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
            Our full-service approach ensures every aspect of your business transformation 
            is handled with expertise and precision.
          </p>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="w-16 h-16 bg-[#001F3F] rounded-lg flex items-center justify-center mb-6">
                  <i className={`${service.icon} text-[#FFD700] text-2xl`}></i>
                </div>
                <h3 className="text-3xl font-bold text-[#001F3F] mb-4">{service.title}</h3>
                <p className="text-lg text-gray-700 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-[#001F3F] mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                          <i className="ri-check-line text-[#FFD700] text-sm"></i>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-[#001F3F] mb-3">Benefits:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <i className="ri-star-fill text-[#FFD700] text-sm"></i>
                        </div>
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Link href="/contact" className="bg-[#001F3F] text-white px-6 py-3 rounded-lg hover:bg-[#FFD700] hover:text-[#001F3F] transition-all duration-300 font-semibold inline-block whitespace-nowrap">
                  Learn More
                </Link>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img 
                  src={`https://readdy.ai/api/search-image?query=Professional%20business%20consulting%20$%7Bservice.title.toLowerCase%28%29%7D%20in%20modern%20office%20environment%2C%20team%20collaboration%2C%20strategic%20planning%2C%20navy%20blue%20and%20gold%20corporate%20colors%2C%20business%20professionals%20working%20together%2C%20high-quality%20corporate%20photography&width=600&height=400&seq=service-${index}&orientation=landscape`}
                  alt={service.title}
                  className="rounded-lg shadow-xl object-cover object-top w-full h-[400px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
