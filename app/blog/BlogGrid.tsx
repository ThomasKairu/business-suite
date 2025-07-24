'use client';

import Link from 'next/link';

export default function BlogGrid() {
  const blogPosts = [
    {
      id: 1,
      title: 'Digital Transformation: A Strategic Imperative for Modern Businesses',
      excerpt: 'Discover why digital transformation is no longer optional and how to navigate this critical journey successfully.',
      author: 'Dr. Catherine Mwangi',
      date: 'March 15, 2024',
      category: 'Digital Transformation',
      readTime: '8 min read',
      image: 'https://readdy.ai/api/search-image?query=Modern%20digital%20transformation%20concept%20with%20technology%20integration%2C%20professional%20business%20environment%2C%20navy%20blue%20and%20gold%20accents%2C%20digital%20innovation%20and%20growth%2C%20contemporary%20office%20setting%20with%20computers%20and%20digital%20displays&width=600&height=400&seq=blog-digital-transform&orientation=landscape',
      tags: ['Strategy', 'Technology', 'Innovation']
    },
    {
      id: 2,
      title: 'Building Resilient Business Models in Uncertain Times',
      excerpt: 'Learn how to create adaptable business models that can withstand market volatility and economic challenges.',
      author: 'James Omondi',
      date: 'March 10, 2024',
      category: 'Business Strategy',
      readTime: '6 min read',
      image: 'https://readdy.ai/api/search-image?query=Business%20resilience%20and%20adaptability%20concept%2C%20professional%20strategic%20planning%20environment%2C%20navy%20blue%20and%20gold%20color%20scheme%2C%20growth%20charts%20and%20planning%20materials%2C%20modern%20office%20setting%20with%20business%20analytics&width=600&height=400&seq=blog-resilience&orientation=landscape',
      tags: ['Planning', 'Risk Management', 'Growth']
    },
    {
      id: 3,
      title: 'The Future of Leadership: Embracing Change Management',
      excerpt: 'Explore essential leadership skills needed to guide organizations through transformational change.',
      author: 'Sarah Kimani',
      date: 'March 5, 2024',
      category: 'Leadership',
      readTime: '7 min read',
      image: 'https://readdy.ai/api/search-image?query=Modern%20leadership%20and%20change%20management%20concept%2C%20professional%20business%20leaders%20in%20meeting%2C%20navy%20blue%20and%20gold%20accents%2C%20team%20collaboration%20and%20strategic%20thinking%2C%20contemporary%20office%20environment%20with%20diverse%20executives&width=600&height=400&seq=blog-leadership&orientation=landscape',
      tags: ['Leadership', 'Change', 'Management']
    },
    {
      id: 4,
      title: 'Data-Driven Decision Making: Tools and Techniques',
      excerpt: 'Master the art of leveraging data analytics to make informed strategic decisions for your business.',
      author: 'Dr. Grace Njeri',
      date: 'February 28, 2024',
      category: 'Analytics',
      readTime: '10 min read',
      image: 'https://readdy.ai/api/search-image?query=Data%20analytics%20and%20business%20intelligence%20concept%2C%20professional%20data%20visualization%20environment%2C%20navy%20blue%20and%20gold%20color%20scheme%2C%20charts%20and%20graphs%20on%20screens%2C%20modern%20office%20setting%20with%20analytics%20tools&width=600&height=400&seq=blog-data-driven&orientation=landscape',
      tags: ['Analytics', 'Data', 'Strategy']
    },
    {
      id: 5,
      title: 'Sustainable Business Practices: Profit with Purpose',
      excerpt: 'Discover how implementing sustainable practices can drive profitability while creating positive impact.',
      author: 'Michael Wanjiku',
      date: 'February 22, 2024',
      category: 'Sustainability',
      readTime: '9 min read',
      image: 'https://readdy.ai/api/search-image?query=Sustainable%20business%20practices%20concept%2C%20professional%20green%20business%20environment%2C%20navy%20blue%20and%20gold%20accents%2C%20eco-friendly%20office%20setting%2C%20modern%20workspace%20with%20sustainability%20elements%20and%20green%20technology&width=600&height=400&seq=blog-sustainability&orientation=landscape',
      tags: ['Sustainability', 'Innovation', 'Growth']
    },
    {
      id: 6,
      title: 'Customer Experience: The New Competitive Advantage',
      excerpt: 'Learn how to design and implement customer experience strategies that differentiate your business.',
      author: 'David Mutua',
      date: 'February 15, 2024',
      category: 'Customer Experience',
      readTime: '8 min read',
      image: 'https://readdy.ai/api/search-image?query=Customer%20experience%20and%20service%20excellence%20concept%2C%20professional%20customer%20service%20environment%2C%20navy%20blue%20and%20gold%20color%20scheme%2C%20happy%20customers%20and%20service%20representatives%2C%20modern%20office%20setting%20with%20customer%20interaction%20areas&width=600&height=400&seq=blog-customer-experience&orientation=landscape',
      tags: ['Customer', 'Experience', 'Strategy']
    }
  ];

  return (
    <div className="space-y-8">
      {blogPosts.map((post) => (
        <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img 
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover object-top"
          />
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-[#FFD700] font-semibold bg-[#FFD700]/10 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-sm text-gray-500">{post.readTime}</span>
            </div>
            
            <h2 className="text-2xl font-bold text-[#001F3F] mb-3 hover:text-[#FFD700] cursor-pointer">
              <Link href={`/blog/${post.id}`}>
                {post.title}
              </Link>
            </h2>
            
            <p className="text-gray-700 mb-4 leading-relaxed">{post.excerpt}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, index) => (
                <span key={index} className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="text-sm text-gray-600">
                  By <span className="font-semibold">{post.author}</span>
                </div>
                <div className="text-sm text-gray-500">{post.date}</div>
              </div>
              
              <Link 
                href={`/blog/${post.id}`}
                className="text-[#001F3F] hover:text-[#FFD700] font-semibold flex items-center space-x-1 transition-colors"
              >
                <span>Read More</span>
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-arrow-right-line"></i>
                </div>
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}