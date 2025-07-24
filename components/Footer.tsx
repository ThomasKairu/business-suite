'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#001F3F] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span style={{ fontFamily: 'Pacifico, serif' }}>BrightPath</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Transforming businesses through strategic consulting and digital innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-[#FFD700] text-[#001F3F] rounded-full flex items-center justify-center hover:bg-white hover:text-[#001F3F] transition-colors">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="#" className="w-8 h-8 bg-[#FFD700] text-[#001F3F] rounded-full flex items-center justify-center hover:bg-white hover:text-[#001F3F] transition-colors">
                <i className="ri-twitter-fill"></i>
              </a>
              <a href="#" className="w-8 h-8 bg-[#FFD700] text-[#001F3F] rounded-full flex items-center justify-center hover:bg-white hover:text-[#001F3F] transition-colors">
                <i className="ri-linkedin-fill"></i>
              </a>
              <a href="#" className="w-8 h-8 bg-[#FFD700] text-[#001F3F] rounded-full flex items-center justify-center hover:bg-white hover:text-[#001F3F] transition-colors">
                <i className="ri-instagram-fill"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                  Business Strategy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                  Digital Transformation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                  Process Optimization
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                  Change Management
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                  Market Analysis
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-mail-line"></i>
                </div>
                info@brightpathconsulting.com
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-phone-line"></i>
                </div>
                +254 700 123 456
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-map-pin-line"></i>
                </div>
                Nairobi, Kenya
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            2025 BrightPath Consulting. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-300 hover:text-[#FFD700] transition-colors text-sm">
              Privacy Policy
            </Link>
            <a href="#" className="text-gray-300 hover:text-[#FFD700] transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
