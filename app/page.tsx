'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './HeroSection';
import ServicesOverview from './ServicesOverview';
import AboutPreview from './AboutPreview';
import TestimonialsSection from './TestimonialsSection';
import CTASection from './CTASection';
import StatsSection from './StatsSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutPreview />
        <ServicesOverview />
        <StatsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}