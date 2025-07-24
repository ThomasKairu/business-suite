
'use client';

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Dr. Catherine Mwangi',
      position: 'CEO & Founder',
      image: 'https://readdy.ai/api/search-image?query=Professional%20African%20businesswoman%20CEO%20in%20modern%20office%2C%20confident%20smile%2C%20navy%20blue%20business%20attire%2C%20executive%20portrait%2C%20leadership%20presence%2C%20professional%20lighting%2C%20high-quality%20corporate%20photography&width=300&height=350&seq=catherine-mwangi&orientation=portrait',
      bio: 'With over 20 years of experience in strategic consulting, Dr. Mwangi leads our vision of transforming businesses across Africa.',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'James Omondi',
      position: 'Chief Strategy Officer',
      image: 'https://readdy.ai/api/search-image?query=Professional%20African%20businessman%20executive%20in%20modern%20office%2C%20confident%20expression%2C%20dark%20business%20suit%2C%20strategic%20leadership%20portrait%2C%20professional%20lighting%2C%20high-quality%20corporate%20photography&width=300&height=350&seq=james-omondi&orientation=portrait',
      bio: 'James brings 15 years of strategic planning expertise, helping Fortune 500 companies navigate complex market challenges.',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Sarah Kimani',
      position: 'Head of Digital Transformation',
      image: 'https://readdy.ai/api/search-image?query=Professional%20African%20businesswoman%20technology%20executive%20in%20modern%20office%2C%20confident%20smile%2C%20business%20attire%2C%20tech%20leadership%20portrait%2C%20professional%20lighting%2C%20high-quality%20corporate%20photography&width=300&height=350&seq=sarah-kimani&orientation=portrait',
      bio: 'Sarah leads our digital transformation initiatives, specializing in AI, cloud computing, and process automation.',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Michael Wanjiku',
      position: 'Senior Partner',
      image: 'https://readdy.ai/api/search-image?query=Professional%20African%20businessman%20senior%20partner%20in%20modern%20office%2C%20confident%20expression%2C%20business%20suit%2C%20executive%20portrait%2C%20professional%20lighting%2C%20high-quality%20corporate%20photography&width=300&height=350&seq=michael-wanjiku&orientation=portrait',
      bio: 'Michael specializes in organizational development and change management, with a track record of successful transformations.',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Dr. Grace Njeri',
      position: 'Head of Research & Analytics',
      image: 'https://readdy.ai/api/search-image?query=Professional%20African%20businesswoman%20research%20executive%20in%20modern%20office%2C%20confident%20smile%2C%20business%20attire%2C%20analytical%20leadership%20portrait%2C%20professional%20lighting%2C%20high-quality%20corporate%20photography&width=300&height=350&seq=grace-njeri&orientation=portrait',
      bio: 'Dr. Njeri leads our research team, providing data-driven insights that inform strategic decision-making.',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'David Mutua',
      position: 'Operations Director',
      image: 'https://readdy.ai/api/search-image?query=Professional%20African%20businessman%20operations%20director%20in%20modern%20office%2C%20confident%20expression%2C%20business%20suit%2C%20operational%20leadership%20portrait%2C%20professional%20lighting%2C%20high-quality%20corporate%20photography&width=300&height=350&seq=david-mutua&orientation=portrait',
      bio: 'David ensures operational excellence across all our projects, managing client relationships and service delivery.',
      linkedin: '#',
      twitter: '#'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#001F3F] mb-4">
            Meet Our Leadership Team
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Our diverse team of experts brings decades of combined experience in strategic consulting 
            and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#001F3F] mb-2">{member.name}</h3>
                <div className="text-[#FFD700] font-medium mb-4">{member.position}</div>
                <p className="text-gray-700 mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  <a 
                    href={member.linkedin}
                    className="w-8 h-8 bg-[#001F3F] text-white rounded-full flex items-center justify-center hover:bg-[#FFD700] hover:text-[#001F3F] transition-colors"
                  >
                    <i className="ri-linkedin-fill"></i>
                  </a>
                  <a 
                    href={member.twitter}
                    className="w-8 h-8 bg-[#001F3F] text-white rounded-full flex items-center justify-center hover:bg-[#FFD700] hover:text-[#001F3F] transition-colors"
                  >
                    <i className="ri-twitter-fill"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
