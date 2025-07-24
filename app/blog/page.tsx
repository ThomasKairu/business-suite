'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogHero from './BlogHero';
import BlogGrid from './BlogGrid';
import BlogSidebar from './BlogSidebar';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <BlogHero />
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <BlogGrid />
            </div>
            <div className="lg:col-span-1">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}