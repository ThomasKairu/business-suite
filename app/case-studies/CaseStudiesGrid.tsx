'use client';

import Link from 'next/link';

export default function CaseStudiesGrid() {
  const caseStudies = [
    {
      id: 1,
      title: 'TechFlow Solutions: 300% Revenue Growth',
      client: 'TechFlow Solutions',
      industry: 'Technology',
      challenge: 'Scaling operations while maintaining quality',
      solution: 'Digital transformation and process optimization',
      results: ['300% revenue increase', '50% cost reduction', '40% faster delivery'],
      image: 'https://readdy.ai/api/search-image?query=Modern%20technology%20company%20office%20with%20computers%20and%20digital%20displays%2C%20professional%20tech%20workspace%2C%20navy%20blue%20and%20gold%20accents%2C%20innovation%20and%20growth%2C%20contemporary%20office%20design%20with%20glass%20walls%20and%20modern%20furniture%2C%20software%20development%20environment&width=500&height=300&seq=techflow-case&orientation=landscape',
      duration: '8 months'
    },
    {
      id: 2,
      title: 'KenRetail Chain: Market Expansion Success',
      client: 'KenRetail Chain',
      industry: 'Retail',
      challenge: 'Expanding to new markets across East Africa',
      solution: 'Strategic planning and market analysis',
      results: ['12 new stores opened', '25% market share increase', '200% profit growth'],
      image: 'https://readdy.ai/api/search-image?query=Modern%20retail%20store%20interior%20with%20professional%20lighting%2C%20contemporary%20shopping%20environment%2C%20navy%20blue%20and%20gold%20branding%20elements%2C%20successful%20retail%20business%2C%20clean%20modern%20store%20design%20with%20products%20displays%20and%20customers%20shopping&width=500&height=300&seq=kenretail-case&orientation=landscape',
      duration: '12 months'
    },
    {
      id: 3,
      title: 'AgriMax Ltd: Supply Chain Optimization',
      client: 'AgriMax Ltd',
      industry: 'Agriculture',
      challenge: 'Inefficient supply chain and high operational costs',
      solution: 'Process reengineering and technology integration',
      results: ['35% cost reduction', '60% faster processing', '99% quality improvement'],
      image: 'https://readdy.ai/api/search-image?query=Modern%20agricultural%20facility%20with%20advanced%20technology%2C%20professional%20farming%20operations%2C%20navy%20blue%20and%20gold%20color%20scheme%2C%20efficient%20supply%20chain%20management%2C%20contemporary%20agribusiness%20setting%20with%20modern%20equipment%20and%20organized%20operations&width=500&height=300&seq=agrimax-case&orientation=landscape',
      duration: '6 months'
    },
    {
      id: 4,
      title: 'EduTech Academy: Digital Learning Platform',
      client: 'EduTech Academy',
      industry: 'Education',
      challenge: 'Transitioning from traditional to digital education',
      solution: 'Digital transformation and platform development',
      results: ['500% student enrollment increase', '80% cost savings', '95% satisfaction rate'],
      image: 'https://readdy.ai/api/search-image?query=Modern%20educational%20technology%20center%20with%20computers%20and%20digital%20learning%20tools%2C%20professional%20e-learning%20environment%2C%20navy%20blue%20and%20gold%20accents%2C%20innovative%20education%20setting%2C%20contemporary%20classroom%20with%20digital%20displays%20and%20students%20using%20technology&width=500&height=300&seq=edutech-case&orientation=landscape',
      duration: '10 months'
    },
    {
      id: 5,
      title: 'HealthCare Plus: Operational Excellence',
      client: 'HealthCare Plus',
      industry: 'Healthcare',
      challenge: 'Improving patient care while reducing costs',
      solution: 'Lean management and process optimization',
      results: ['40% faster patient processing', '30% cost reduction', '98% patient satisfaction'],
      image: 'https://readdy.ai/api/search-image?query=Modern%20healthcare%20facility%20with%20professional%20medical%20equipment%2C%20clean%20hospital%20environment%2C%20navy%20blue%20and%20gold%20accents%2C%20efficient%20healthcare%20operations%2C%20contemporary%20medical%20center%20with%20advanced%20technology%20and%20professional%20staff&width=500&height=300&seq=healthcare-case&orientation=landscape',
      duration: '9 months'
    },
    {
      id: 6,
      title: 'FinServe Bank: Digital Banking Revolution',
      client: 'FinServe Bank',
      industry: 'Financial Services',
      challenge: 'Modernizing banking services for digital-first customers',
      solution: 'Digital banking platform and customer experience redesign',
      results: ['150% customer growth', '45% operational efficiency', '90% digital adoption'],
      image: 'https://readdy.ai/api/search-image?query=Modern%20banking%20facility%20with%20digital%20technology%2C%20professional%20financial%20services%20environment%2C%20navy%20blue%20and%20gold%20color%20scheme%2C%20innovative%20banking%20operations%2C%20contemporary%20bank%20interior%20with%20digital%20displays%20and%20customer%20service%20areas&width=500&height=300&seq=finserve-case&orientation=landscape',
      duration: '14 months'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#001F3F] mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Real results from real businesses. See how our strategic consulting 
            has transformed companies across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={study.image}
                alt={study.title}
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-[#FFD700] font-semibold bg-[#FFD700]/10 px-3 py-1 rounded-full">
                    {study.industry}
                  </span>
                  <span className="text-sm text-gray-500">{study.duration}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-[#001F3F] mb-3">{study.title}</h3>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Challenge:</h4>
                  <p className="text-sm text-gray-600">{study.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Solution:</h4>
                  <p className="text-sm text-gray-600">{study.solution}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Results:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-4 h-4 flex items-center justify-center mr-2">
                          <i className="ri-check-line text-[#FFD700] text-sm"></i>
                        </div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  href={`/case-studies/${study.id}`}
                  className="w-full bg-[#001F3F] text-white py-3 rounded-lg hover:bg-[#FFD700] hover:text-[#001F3F] transition-all duration-300 font-semibold text-center block whitespace-nowrap"
                >
                  View Full Case Study
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}