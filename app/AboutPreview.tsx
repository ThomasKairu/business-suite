'use client';

import Link from 'next/link';

export default function AboutPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#001F3F] mb-6">
              Your Trusted Partner in 
              <span className="text-[#FFD700] block">Business Growth</span>
            </h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              At BrightPath Consulting, we believe every business has the potential for extraordinary growth. 
              Our mission is to unlock that potential through strategic consulting and digital transformation.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              With over a decade of experience helping businesses across industries, we've developed proven 
              methodologies that deliver results. From startups to established enterprises, we tailor our 
              approach to your unique challenges and goals.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#001F3F] mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#001F3F] mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#001F3F] mb-2">98%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#001F3F] mb-2">50+</div>
                <div className="text-gray-600">Team Members</div>
              </div>
            </div>
            
            <Link href="/about" className="bg-[#001F3F] text-white px-8 py-4 rounded-lg hover:bg-[#FFD700] hover:text-[#001F3F] transition-all duration-300 font-semibold inline-block whitespace-nowrap">
              Learn More About Us
            </Link>
          </div>
          
          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20business%20team%20in%20modern%20office%20setting%2C%20diverse%20group%20of%20consultants%20working%20together%2C%20corporate%20environment%20with%20navy%20blue%20and%20gold%20accents%2C%20teamwork%20and%20collaboration%2C%20high-quality%20professional%20photography%2C%20modern%20office%20interior%20with%20glass%20walls%20and%20contemporary%20furniture%2C%20business%20strategy%20meeting&width=600&height=700&seq=about-img&orientation=portrait"
              alt="BrightPath Consulting Team" 
              className="rounded-lg shadow-2xl object-cover object-top w-full h-[500px]"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#FFD700] text-[#001F3F] p-6 rounded-lg shadow-lg max-w-sm">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-award-line text-2xl"></i>
                </div>
                <span className="font-semibold">Award Winner</span>
              </div>
              <p className="text-sm">Best Consulting Firm 2024 - Kenya Business Awards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}