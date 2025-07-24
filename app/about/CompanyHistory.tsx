
'use client';

export default function CompanyHistory() {
  const milestones = [
    {
      year: '2009',
      title: 'Company Founded',
      description: 'BrightPath Consulting was established in Nairobi with a vision to help businesses achieve strategic excellence.'
    },
    {
      year: '2012',
      title: 'Digital Focus',
      description: 'Expanded services to include digital transformation consulting as businesses began embracing technology.'
    },
    {
      year: '2015',
      title: 'Regional Expansion',
      description: 'Opened offices across East Africa, serving clients in Kenya, Uganda, Tanzania, and Rwanda.'
    },
    {
      year: '2018',
      title: 'Award Recognition',
      description: 'Received the Kenya Business Excellence Award for Outstanding Consulting Services.'
    },
    {
      year: '2021',
      title: 'Global Partnerships',
      description: 'Formed strategic alliances with international consulting firms to serve multinational clients.'
    },
    {
      year: '2024',
      title: 'Innovation Hub',
      description: 'Launched our innovation lab focusing on AI-driven business solutions and emerging technologies.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#001F3F] mb-4">
            Our Journey of Excellence
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            From humble beginnings to becoming East Africa's leading consulting firm, 
            here's how we've grown over the years.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#FFD700]"></div>
          
          {milestones.map((milestone, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-[#FFD700] mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-semibold text-[#001F3F] mb-3">{milestone.title}</h3>
                  <p className="text-gray-700">{milestone.description}</p>
                </div>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#001F3F] rounded-full border-4 border-white shadow-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
