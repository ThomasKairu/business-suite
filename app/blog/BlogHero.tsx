'use client';

export default function BlogHero() {
  return (
    <section 
      className="relative py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20business%20knowledge%20and%20insights%20concept%2C%20professional%20reading%20and%20learning%20environment%2C%20navy%20blue%20and%20gold%20color%20scheme%2C%20business%20books%20and%20digital%20content%2C%20contemporary%20office%20library%20with%20modern%20furniture%20and%20inspiring%20atmosphere&width=1920&height=800&seq=blog-hero&orientation=landscape')`
      }}
    >
      <div className="absolute inset-0 bg-[#001F3F]/80"></div>
      
      <div className="relative container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Business Insights & Resources
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Stay ahead of the curve with expert insights, industry trends, and strategic guidance 
          from our team of consulting professionals.
        </p>
      </div>
    </section>
  );
}