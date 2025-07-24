'use client';

export default function CaseStudiesHero() {
  return (
    <section 
      className="relative py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20business%20success%20visualization%20with%20charts%20and%20graphs%2C%20professional%20corporate%20environment%2C%20navy%20blue%20and%20gold%20color%20scheme%2C%20data%20analytics%20and%20growth%20metrics%2C%20inspiring%20business%20achievement%20imagery%2C%20clean%20office%20setting%20with%20financial%20charts%20on%20screens&width=1920&height=800&seq=case-studies-hero&orientation=landscape')`
      }}
    >
      <div className="absolute inset-0 bg-[#001F3F]/80"></div>
      
      <div className="relative container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Success Stories
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Discover how we've helped businesses transform their operations, increase revenue, 
          and achieve sustainable growth through strategic consulting and innovation.
        </p>
      </div>
    </section>
  );
}