
'use client';

export default function AboutHero() {
  return (
    <section 
      className="relative py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20corporate%20office%20building%20exterior%20with%20glass%20facades%2C%20professional%20business%20environment%2C%20navy%20blue%20and%20gold%20architectural%20elements%2C%20contemporary%20design%2C%20inspiring%20corporate%20headquarters%2C%20business%20district%20setting%2C%20clean%20professional%20architecture%20with%20large%20windows&width=1920&height=800&seq=about-hero&orientation=landscape')`
      }}
    >
      <div className="absolute inset-0 bg-[#001F3F]/80"></div>
      
      <div className="relative container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          About BrightPath Consulting
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          We are a team of strategic visionaries and digital transformation experts committed to 
          helping businesses navigate the complexities of modern commerce and achieve sustainable growth.
        </p>
      </div>
    </section>
  );
}
