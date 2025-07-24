
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from './AboutHero';
import TeamSection from './TeamSection';
import CompanyHistory from './CompanyHistory';
import ValuesSection from './ValuesSection';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <AboutHero />
        <CompanyHistory />
        <ValuesSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}
