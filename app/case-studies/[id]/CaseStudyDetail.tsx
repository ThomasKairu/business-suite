
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface CaseStudyDetailProps {
  caseId: string;
}

export default function CaseStudyDetail({ caseId }: CaseStudyDetailProps) {
  const [activeTab, setActiveTab] = useState('overview');

  const caseStudies = {
    '1': {
      title: 'TechFlow Solutions: 300% Revenue Growth',
      client: 'TechFlow Solutions',
      industry: 'Technology',
      location: 'Nairobi, Kenya',
      duration: '8 months',
      projectValue: '$2.5M',
      heroImage: 'https://readdy.ai/api/search-image?query=Modern%20technology%20company%20office%20with%20computers%20and%20digital%20displays%2C%20professional%20tech%20workspace%2C%20navy%20blue%20and%20gold%20accents%2C%20innovation%20and%20growth%2C%20contemporary%20office%20design%20with%20glass%20walls%20and%20modern%20furniture%2C%20software%20development%20environment&width=1920&height=600&seq=techflow-hero&orientation=landscape',
      challenge: 'TechFlow Solutions was a promising startup in the software development space, but they were struggling with scaling their operations while maintaining quality standards. Their rapid growth had created bottlenecks in their development process, leading to delayed deliveries and increasing customer complaints. The company needed a comprehensive digital transformation strategy to streamline operations and position themselves for sustainable growth.',
      solution: 'Our team implemented a comprehensive digital transformation strategy that included process optimization, team restructuring, and technology integration. We introduced agile methodologies, automated testing procedures, and established clear quality control checkpoints. Additionally, we helped them implement a customer relationship management system and created standardized operating procedures for all departments.',
      results: [
        { metric: 'Revenue Growth', value: '300%', description: 'Increased from $500K to $2M annually' },
        { metric: 'Cost Reduction', value: '50%', description: 'Operational costs decreased significantly' },
        { metric: 'Delivery Speed', value: '40% faster', description: 'Project completion time improved' },
        { metric: 'Client Satisfaction', value: '95%', description: 'Customer satisfaction score increased' }
      ],
      timeline: [
        { phase: 'Assessment', duration: '2 weeks', description: 'Comprehensive business analysis and gap identification' },
        { phase: 'Strategy Development', duration: '1 month', description: 'Created detailed transformation roadmap' },
        { phase: 'Implementation', duration: '5 months', description: 'Executed process improvements and system integration' },
        { phase: 'Optimization', duration: '1 month', description: 'Fine-tuned processes and trained staff' }
      ],
      testimonial: {
        quote: "BrightPath Consulting transformed our entire operation. Their strategic approach and hands-on implementation helped us achieve results we never thought possible.",
        author: 'David Kimani',
        position: 'CEO, TechFlow Solutions'
      },
      keyBenefits: [
        'Streamlined development processes',
        'Improved quality control systems',
        'Enhanced customer satisfaction',
        'Scalable business operations',
        'Increased market competitiveness'
      ]
    },
    '2': {
      title: 'KenRetail Chain: Market Expansion Success',
      client: 'KenRetail Chain',
      industry: 'Retail',
      location: 'East Africa',
      duration: '12 months',
      projectValue: '$5M',
      heroImage: 'https://readdy.ai/api/search-image?query=Modern%20retail%20store%20interior%20with%20professional%20lighting%2C%20contemporary%20shopping%20environment%2C%20navy%20blue%20and%20gold%20branding%20elements%2C%20successful%20retail%20business%2C%20clean%20modern%20store%20design%20with%20products%20displays%20and%20customers%20shopping&width=1920&height=600&seq=kenretail-hero&orientation=landscape',
      challenge: 'KenRetail Chain had established a strong presence in the Kenyan market but wanted to expand across East Africa. They faced challenges understanding new markets, establishing supply chains, and adapting their business model to different cultural and economic contexts. The company needed a strategic expansion plan that would minimize risks while maximizing growth opportunities.',
      solution: 'We developed a comprehensive market expansion strategy that included detailed market analysis for each target country, supply chain optimization, and cultural adaptation strategies. Our team conducted extensive research on consumer behavior, regulatory requirements, and competitive landscapes. We also helped establish local partnerships and created standardized yet flexible store formats that could adapt to different markets.',
      results: [
        { metric: 'New Stores', value: '12', description: 'Successfully opened across 4 countries' },
        { metric: 'Market Share', value: '25%', description: 'Captured significant market presence' },
        { metric: 'Profit Growth', value: '200%', description: 'Overall profitability increased' },
        { metric: 'Customer Base', value: '150K+', description: 'New customers acquired' }
      ],
      timeline: [
        { phase: 'Market Research', duration: '3 months', description: 'Comprehensive analysis of target markets' },
        { phase: 'Strategy Formulation', duration: '2 months', description: 'Developed expansion roadmap and business model' },
        { phase: 'Pilot Launch', duration: '4 months', description: 'Opened first stores in selected markets' },
        { phase: 'Full Rollout', duration: '3 months', description: 'Scaled operations across all target markets' }
      ],
      testimonial: {
        quote: "The strategic guidance from BrightPath was instrumental in our successful expansion. Their market insights and operational expertise made the difference.",
        author: 'Sarah Mutua',
        position: 'Managing Director, KenRetail Chain'
      },
      keyBenefits: [
        'Successful market entry strategy',
        'Optimized supply chain operations',
        'Cultural adaptation framework',
        'Risk mitigation strategies',
        'Sustainable growth model'
      ]
    },
    '3': {
      title: 'AgriMax Ltd: Supply Chain Optimization',
      client: 'AgriMax Ltd',
      industry: 'Agriculture',
      location: 'Kenya',
      duration: '6 months',
      projectValue: '$1.8M',
      heroImage: 'https://readdy.ai/api/search-image?query=Modern%20agricultural%20facility%20with%20advanced%20technology%2C%20professional%20farming%20operations%2C%20navy%20blue%20and%20gold%20color%20scheme%2C%20efficient%20supply%20chain%20management%2C%20contemporary%20agribusiness%20setting%20with%20modern%20equipment%20and%20organized%20operations&width=1920&height=600&seq=agrimax-hero&orientation=landscape',
      challenge: 'AgriMax Ltd was facing significant challenges with their supply chain operations, resulting in high operational costs and inefficient processes. Post-harvest losses were affecting profitability, and the company struggled with inventory management and distribution logistics. They needed a comprehensive solution to optimize their entire supply chain from farm to market.',
      solution: 'Our team implemented a complete supply chain transformation that included technology integration, process reengineering, and strategic partnerships. We introduced IoT sensors for real-time monitoring, implemented inventory management systems, and established direct relationships with retailers. We also created quality control protocols and optimized transportation routes to reduce costs and improve efficiency.',
      results: [
        { metric: 'Cost Reduction', value: '35%', description: 'Overall operational costs decreased' },
        { metric: 'Processing Speed', value: '60% faster', description: 'Improved throughput and efficiency' },
        { metric: 'Quality Improvement', value: '99%', description: 'Reduced post-harvest losses' },
        { metric: 'Profit Margin', value: '45%', description: 'Increased profitability' }
      ],
      timeline: [
        { phase: 'Analysis', duration: '1 month', description: 'Supply chain assessment and bottleneck identification' },
        { phase: 'Design', duration: '1 month', description: 'Solution architecture and technology selection' },
        { phase: 'Implementation', duration: '3 months', description: 'System deployment and process optimization' },
        { phase: 'Training', duration: '1 month', description: 'Staff training and system fine-tuning' }
      ],
      testimonial: {
        quote: "BrightPath's supply chain optimization transformed our operations completely. We now operate with efficiency levels we never imagined possible.",
        author: 'James Mwangi',
        position: 'Operations Director, AgriMax Ltd'
      },
      keyBenefits: [
        'Reduced post-harvest losses',
        'Improved inventory management',
        'Optimized transportation routes',
        'Enhanced quality control',
        'Better supplier relationships'
      ]
    },
    '4': {
      title: 'EduTech Academy: Digital Learning Platform',
      client: 'EduTech Academy',
      industry: 'Education',
      location: 'Nairobi, Kenya',
      duration: '10 months',
      projectValue: '$3M',
      heroImage: 'https://readdy.ai/api/search-image?query=Modern%20educational%20technology%20center%20with%20computers%20and%20digital%20learning%20tools%2C%20professional%20e-learning%20environment%2C%20navy%20blue%20and%20gold%20accents%2C%20innovative%20education%20setting%2C%20contemporary%20classroom%20with%20digital%20displays%20and%20students%20using%20technology&width=1920&height=600&seq=edutech-hero&orientation=landscape',
      challenge: 'EduTech Academy was a traditional educational institution that needed to transition to digital learning to remain competitive and meet changing student expectations. They lacked the technical infrastructure, digital content, and online teaching capabilities needed for effective remote education. The institution needed a comprehensive digital transformation strategy.',
      solution: 'We developed a complete digital learning ecosystem that included platform development, content digitization, and teacher training programs. Our solution included a custom learning management system, interactive course materials, virtual classroom capabilities, and student assessment tools. We also established partnerships with technology providers and created ongoing support systems.',
      results: [
        { metric: 'Student Enrollment', value: '500%', description: 'Increased from 1,000 to 6,000 students' },
        { metric: 'Cost Savings', value: '80%', description: 'Reduced operational expenses' },
        { metric: 'Satisfaction Rate', value: '95%', description: 'Student and teacher satisfaction' },
        { metric: 'Course Completion', value: '85%', description: 'Improved completion rates' }
      ],
      timeline: [
        { phase: 'Platform Development', duration: '4 months', description: 'Custom learning management system creation' },
        { phase: 'Content Migration', duration: '2 months', description: 'Digitization of existing course materials' },
        { phase: 'Teacher Training', duration: '2 months', description: 'Staff training on digital tools and methods' },
        { phase: 'Launch & Support', duration: '2 months', description: 'Platform launch and ongoing optimization' }
      ],
      testimonial: {
        quote: "The digital transformation led by BrightPath has revolutionized our educational delivery. We're now able to reach students across the continent.",
        author: 'Dr. Margaret Wanjiku',
        position: 'Principal, EduTech Academy'
      },
      keyBenefits: [
        'Scalable digital learning platform',
        'Interactive course content',
        'Remote learning capabilities',
        'Automated assessment systems',
        'Global student reach'
      ]
    },
    '5': {
      title: 'HealthCare Plus: Operational Excellence',
      client: 'HealthCare Plus',
      industry: 'Healthcare',
      location: 'Nairobi, Kenya',
      duration: '9 months',
      projectValue: '$2.2M',
      heroImage: 'https://readdy.ai/api/search-image?query=Modern%20healthcare%20facility%20with%20professional%20medical%20equipment%2C%20clean%20hospital%20environment%2C%20navy%20blue%20and%20gold%20accents%2C%20efficient%20healthcare%20operations%2C%20contemporary%20medical%20center%20with%20advanced%20technology%20and%20professional%20staff&width=1920&height=600&seq=healthcare-hero&orientation=landscape',
      challenge: 'HealthCare Plus was struggling with long patient wait times, inefficient resource allocation, and high operational costs. The facility needed to improve patient care quality while reducing expenses and optimizing staff productivity. They required a comprehensive operational transformation to achieve excellence in healthcare delivery.',
      solution: 'We implemented a lean management approach combined with technology solutions to streamline operations. Our strategy included patient flow optimization, staff scheduling improvements, inventory management systems, and quality control protocols. We also introduced patient management software and created standardized procedures for all departments.',
      results: [
        { metric: 'Patient Processing', value: '40% faster', description: 'Reduced average wait times significantly' },
        { metric: 'Cost Reduction', value: '30%', description: 'Operational efficiency improvements' },
        { metric: 'Patient Satisfaction', value: '98%', description: 'Improved patient experience scores' },
        { metric: 'Staff Productivity', value: '50%', description: 'Enhanced staff efficiency' }
      ],
      timeline: [
        { phase: 'Assessment', duration: '2 months', description: 'Comprehensive operational analysis' },
        { phase: 'Process Design', duration: '2 months', description: 'Workflow optimization and system design' },
        { phase: 'Implementation', duration: '4 months', description: 'System deployment and staff training' },
        { phase: 'Optimization', duration: '1 month', description: 'Fine-tuning and performance monitoring' }
      ],
      testimonial: {
        quote: "BrightPath's operational excellence program transformed our healthcare delivery. Patients now receive better care in less time with improved outcomes.",
        author: 'Dr. Peter Kamau',
        position: 'Medical Director, HealthCare Plus'
      },
      keyBenefits: [
        'Reduced patient wait times',
        'Improved resource utilization',
        'Enhanced patient experience',
        'Streamlined workflows',
        'Better staff satisfaction'
      ]
    },
    '6': {
      title: 'FinServe Bank: Digital Banking Revolution',
      client: 'FinServe Bank',
      industry: 'Financial Services',
      location: 'Nairobi, Kenya',
      duration: '14 months',
      projectValue: '$4M',
      heroImage: 'https://readdy.ai/api/search-image?query=Modern%20banking%20facility%20with%20digital%20technology%2C%20professional%20financial%20services%20environment%2C%20navy%20blue%20and%20gold%20color%20scheme%2C%20innovative%20banking%20operations%2C%20contemporary%20bank%20interior%20with%20digital%20displays%20and%20customer%20service%20areas&width=1920&height=600&seq=finserve-hero&orientation=landscape',
      challenge: 'FinServe Bank needed to modernize their banking services to compete with digital-first financial institutions. Their traditional banking model was losing customers to more agile competitors. They required a comprehensive digital transformation strategy to revitalize their customer experience and operational efficiency.',
      solution: 'We developed a complete digital banking platform that included mobile banking apps, online services, and automated processes. Our solution integrated modern APIs, enhanced security protocols, and created seamless customer experiences across all touchpoints. We also implemented data analytics capabilities and customer relationship management systems.',
      results: [
        { metric: 'Customer Growth', value: '150%', description: 'Significant increase in customer base' },
        { metric: 'Operational Efficiency', value: '45%', description: 'Improved process efficiency' },
        { metric: 'Digital Adoption', value: '90%', description: 'Customers using digital services' },
        { metric: 'Transaction Volume', value: '200%', description: 'Increased transaction processing' }
      ],
      timeline: [
        { phase: 'Platform Development', duration: '6 months', description: 'Core banking system modernization' },
        { phase: 'Mobile App Creation', duration: '3 months', description: 'Customer-facing mobile applications' },
        { phase: 'Integration', duration: '3 months', description: 'System integration and testing' },
        { phase: 'Launch & Support', duration: '2 months', description: 'Platform launch and optimization' }
      ],
      testimonial: {
        quote: "The digital banking transformation by BrightPath has positioned us as a leader in the financial services sector. Our customers love the new experience.",
        author: 'Robert Njuguna',
        position: 'CEO, FinServe Bank'
      },
      keyBenefits: [
        'Modern digital banking platform',
        'Enhanced customer experience',
        'Automated banking processes',
        'Improved security measures',
        'Data-driven decision making'
      ]
    }
  };

  const currentCase = caseStudies[caseId as keyof typeof caseStudies];

  if (!currentCase) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex flex-col items-center justify-center h-screen text-center px-4">
          <h1 className="text-5xl font-semibold text-[#001F3F]">404</h1>
          <h2 className="text-2xl font-semibold mt-6">Case Study Not Found</h2>
          <p className="mt-4 text-xl text-gray-500">The case study you're looking for doesn't exist.</p>
          <Link 
            href="/case-studies"
            className="mt-8 bg-[#001F3F] text-white px-6 py-3 rounded-lg hover:bg-[#FFD700] hover:text-[#001F3F] transition-all duration-300"
          >
            Back to Case Studies
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${currentCase.heroImage}')` }}
      >
        <div className="absolute inset-0 bg-[#001F3F]/70"></div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <Link 
                href="/case-studies"
                className="flex items-center text-[#FFD700] hover:text-white transition-colors"
              >
                <div className="w-6 h-6 flex items-center justify-center mr-2">
                  <i className="ri-arrow-left-line"></i>
                </div>
                Back to Case Studies
              </Link>
            </div>
            
            <h1 className="text-5xl font-bold text-white mb-6">
              {currentCase.title}
            </h1>
            
            <div className="flex flex-wrap gap-6 text-white">
              <div className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-building-line text-[#FFD700]"></i>
                </div>
                <span>Industry: {currentCase.industry}</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-map-pin-line text-[#FFD700]"></i>
                </div>
                <span>Location: {currentCase.location}</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-time-line text-[#FFD700]"></i>
                </div>
                <span>Duration: {currentCase.duration}</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-money-dollar-circle-line text-[#FFD700]"></i>
                </div>
                <span>Project Value: {currentCase.projectValue}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-gray-50 border-b">
        <div className="container mx-auto px-6">
          <div className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'results', label: 'Results' },
              { id: 'timeline', label: 'Timeline' },
              { id: 'testimonial', label: 'Testimonial' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-6 border-b-2 font-semibold whitespace-nowrap cursor-pointer transition-colors ${
                  activeTab === tab.id
                    ? 'border-[#FFD700] text-[#001F3F]'
                    : 'border-transparent text-gray-600 hover:text-[#001F3F]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-[#001F3F] mb-6">The Challenge</h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  {currentCase.challenge}
                </p>
                
                <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Our Solution</h2>
                <p className="text-gray-700 leading-relaxed">
                  {currentCase.solution}
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Key Benefits</h2>
                <ul className="space-y-4">
                  {currentCase.keyBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 flex items-center justify-center mr-3 mt-1">
                        <i className="ri-check-line text-[#FFD700] text-lg"></i>
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'results' && (
            <div>
              <h2 className="text-3xl font-bold text-[#001F3F] mb-12 text-center">
                Measurable Results
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {currentCase.results.map((result, index) => (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#FFD700]">
                    <div className="text-4xl font-bold text-[#001F3F] mb-2">
                      {result.value}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {result.metric}
                    </h3>
                    <p className="text-gray-600">
                      {result.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'timeline' && (
            <div>
              <h2 className="text-3xl font-bold text-[#001F3F] mb-12 text-center">
                Project Timeline
              </h2>
              <div className="space-y-8">
                {currentCase.timeline.map((phase, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center text-[#001F3F] font-bold text-lg mr-6">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-[#001F3F] mb-2">
                        {phase.phase}
                      </h3>
                      <div className="text-sm text-[#FFD700] font-semibold mb-2">
                        Duration: {phase.duration}
                      </div>
                      <p className="text-gray-700">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'testimonial' && (
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-[#001F3F] mb-12">
                Client Testimonial
              </h2>
              <div className="bg-gray-50 p-12 rounded-lg">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <i className="ri-double-quotes-l text-[#FFD700] text-4xl"></i>
                </div>
                <blockquote className="text-2xl text-gray-700 italic mb-8 leading-relaxed">
                  "{currentCase.testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-[#001F3F] text-lg">
                    {currentCase.testimonial.author}
                  </div>
                  <div className="text-gray-600">
                    {currentCase.testimonial.position}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#001F3F]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results and drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-[#FFD700] text-[#001F3F] px-8 py-4 rounded-lg hover:bg-white hover:text-[#001F3F] transition-all duration-300 font-semibold whitespace-nowrap"
            >
              Start Your Project
            </Link>
            <Link 
              href="/case-studies"
              className="bg-transparent border-2 border-[#FFD700] text-[#FFD700] px-8 py-4 rounded-lg hover:bg-[#FFD700] hover:text-[#001F3F] transition-all duration-300 font-semibold whitespace-nowrap"
            >
              View More Case Studies
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
