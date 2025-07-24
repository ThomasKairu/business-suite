'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CaseStudiesHero from './CaseStudiesHero';
import CaseStudiesGrid from './CaseStudiesGrid';
import ResultsSection from './ResultsSection';

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <CaseStudiesHero />
        <CaseStudiesGrid />
        <ResultsSection />
      </main>
      <Footer />
    </div>
  );
}