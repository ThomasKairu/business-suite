
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesHero from './ServicesHero';
import ServicesList from './ServicesList';
import ProcessSection from './ProcessSection';
import ServicesCTA from './ServicesCTA';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ServicesHero />
        <ServicesList />
        <ProcessSection />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  );
}
