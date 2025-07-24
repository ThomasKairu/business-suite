'use client';

import { useState } from 'react';

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Kenya',
      company: 'TechStart Kenya',
      image: 'https://readdy.ai/api/search-image?query=Professional%20African%20businesswoman%20CEO%20in%20modern%20office%2C%20confident%20smile%2C%20navy%20blue%20business%20attire%2C%20corporate%20headshot%2C%20executive%20portrait%2C%20professional%20lighting%2C%20high-quality%20photography&width=100&height=100&seq=sarah-johnson&orientation=squarish',
      content: 'BrightPath Consulting transformed our startup from a struggling company to a market leader. Their strategic guidance and digital transformation expertise helped us scale from 5 to 50 employees in just 18 months.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      position: 'Founder, EcoSolutions Ltd',
      company: 'EcoSolutions Ltd',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Asian%20businessman%20founder%20in%20modern%20office%2C%20confident%20expression%2C%20dark%20business%20suit%2C%20corporate%20headshot%2C%20executive%20portrait%2C%20professional%20lighting%2C%20high-quality%20photography&width=100&height=100&seq=michael-chen&orientation=squarish',
      content: 'Working with BrightPath was a game-changer for our business. They helped us identify new market opportunities and develop strategies that increased our revenue by 250% within two years.',
      rating: 5
    },
    {
      name: 'Grace Wanjiku',
      position: 'Managing Director, AfriTrade Corp',
      company: 'AfriTrade Corp',
      image: 'https://readdy.ai/api/search-image?query=Professional%20African%20businesswoman%20managing%20director%20in%20modern%20office%2C%20confident%20smile%2C%20business%20attire%2C%20corporate%20headshot%2C%20executive%20portrait%2C%20professional%20lighting%2C%20high-quality%20photography&width=100&height=100&seq=grace-wanjiku&orientation=squarish',
      content: 'The team at BrightPath understood our unique challenges and provided tailored solutions. Their expertise in organizational development helped us build a high-performing team and streamline our operations.',
      rating: 5
    },
    {
      name: 'David Ochieng',
      position: 'COO, FinanceHub Africa',
      company: 'FinanceHub Africa',
      image: 'https://readdy.ai/api/search-image?query=Professional%20African%20businessman%20COO%20in%20modern%20office%2C%20confident%20expression%2C%20business%20suit%2C%20corporate%20headshot%2C%20executive%20portrait%2C%20professional%20lighting%2C%20high-quality%20photography&width=100&height=100&seq=david-ochieng&orientation=squarish',
      content: 'BrightPath\'s digital transformation strategy revolutionized our financial services. We saw a 40% increase in operational efficiency and significantly improved customer satisfaction scores.',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#001F3F] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what business leaders say about working with BrightPath.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <img 
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full object-cover object-top border-4 border-[#FFD700]"
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start space-x-1 mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-star-fill text-[#FFD700]"></i>
                    </div>
                  ))}
                </div>
                
                <blockquote className="text-lg text-gray-700 mb-6 italic">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                
                <div>
                  <div className="font-semibold text-[#001F3F] text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentTestimonial].position}
                  </div>
                  <div className="text-[#FFD700] font-medium">
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 bg-[#001F3F] text-white rounded-full flex items-center justify-center hover:bg-[#FFD700] hover:text-[#001F3F] transition-colors"
              >
                <i className="ri-arrow-left-line text-xl"></i>
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-[#FFD700]' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 bg-[#001F3F] text-white rounded-full flex items-center justify-center hover:bg-[#FFD700] hover:text-[#001F3F] transition-colors"
              >
                <i className="ri-arrow-right-line text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}