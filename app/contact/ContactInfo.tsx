
'use client';

export default function ContactInfo() {
  return (
    <section className="py-20 bg-[#001F3F] text-white">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">
              Let's Start a Conversation
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We're here to help you transform your business. Whether you're looking to 
              optimize operations, expand into new markets, or navigate digital transformation, 
              our team of experts is ready to guide you every step of the way.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-6 h-6 flex items-center justify-center mt-1">
                <i className="ri-mail-line text-[#FFD700] text-xl"></i>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-gray-300">info@brightpathconsulting.com</p>
                <p className="text-sm text-gray-400">We respond within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-6 h-6 flex items-center justify-center mt-1">
                <i className="ri-phone-line text-[#FFD700] text-xl"></i>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-gray-300">+254 700 123 456</p>
                <p className="text-sm text-gray-400">Mon-Fri 8:00 AM - 6:00 PM EAT</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-6 h-6 flex items-center justify-center mt-1">
                <i className="ri-map-pin-line text-[#FFD700] text-xl"></i>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Visit Our Office</h3>
                <p className="text-gray-300">
                  Westlands Business Park<br />
                  Nairobi, Kenya
                </p>
                <p className="text-sm text-gray-400">By appointment only</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 2:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-[#FFD700] text-[#001F3F] rounded-full flex items-center justify-center hover:bg-white hover:text-[#001F3F] transition-colors">
                <i className="ri-linkedin-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-[#FFD700] text-[#001F3F] rounded-full flex items-center justify-center hover:bg-white hover:text-[#001F3F] transition-colors">
                <i className="ri-twitter-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-[#FFD700] text-[#001F3F] rounded-full flex items-center justify-center hover:bg-white hover:text-[#001F3F] transition-colors">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-[#FFD700] text-[#001F3F] rounded-full flex items-center justify-center hover:bg-white hover:text-[#001F3F] transition-colors">
                <i className="ri-instagram-fill"></i>
              </a>
            </div>
          </div>

          <div className="bg-[#FFD700] text-[#001F3F] rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Free Consultation</h3>
            <p className="text-sm">
              Schedule a complimentary 30-minute consultation to discuss your business needs 
              and explore how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
