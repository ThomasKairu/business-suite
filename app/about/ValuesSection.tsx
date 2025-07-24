
'use client';

export default function ValuesSection() {
  const values = [
    {
      icon: 'ri-lightbulb-line',
      title: 'Innovation',
      description: 'We embrace cutting-edge solutions and creative thinking to solve complex business challenges.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our business relationships and consultations.'
    },
    {
      icon: 'ri-trophy-line',
      title: 'Excellence',
      description: 'We are committed to delivering exceptional results that exceed client expectations.'
    },
    {
      icon: 'ri-team-line',
      title: 'Partnership',
      description: 'We build long-term relationships based on trust, collaboration, and mutual success.'
    },
    {
      icon: 'ri-global-line',
      title: 'Impact',
      description: 'We strive to create meaningful, sustainable change that transforms businesses and communities.'
    },
    {
      icon: 'ri-user-heart-line',
      title: 'Client Focus',
      description: 'Our clients\' success is our success. We tailor every solution to meet their unique needs.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#001F3F] mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            These principles guide everything we do and shape how we serve our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#001F3F] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${value.icon} text-[#FFD700] text-2xl`}></i>
              </div>
              <h3 className="text-xl font-semibold text-[#001F3F] mb-4">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
