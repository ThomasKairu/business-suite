
'use client';

export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Assessment',
      description: 'We conduct thorough analysis of your current situation, challenges, and opportunities.',
      icon: 'ri-search-line'
    },
    {
      number: '02',
      title: 'Strategy Development',
      description: 'Our team creates customized solutions and strategic roadmaps tailored to your needs.',
      icon: 'ri-lightbulb-line'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'We work alongside your team to execute the strategy with precision and efficiency.',
      icon: 'ri-tools-line'
    },
    {
      number: '04',
      title: 'Monitoring & Optimization',
      description: 'Continuous monitoring and adjustment ensure sustainable success and growth.',
      icon: 'ri-bar-chart-line'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#001F3F] mb-4">
            Our Proven Process
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            A systematic approach that ensures successful outcomes for every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-[#001F3F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${step.icon} text-[#FFD700] text-2xl`}></i>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#FFD700] rounded-full flex items-center justify-center">
                  <span className="text-[#001F3F] font-bold text-sm">{step.number}</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#001F3F] mb-4">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
