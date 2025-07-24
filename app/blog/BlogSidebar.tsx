'use client';

export default function BlogSidebar() {
  const categories = [
    { name: 'Digital Transformation', count: 12 },
    { name: 'Business Strategy', count: 8 },
    { name: 'Leadership', count: 15 },
    { name: 'Analytics', count: 6 },
    { name: 'Sustainability', count: 9 },
    { name: 'Customer Experience', count: 7 }
  ];

  const recentPosts = [
    {
      title: 'AI Integration in Small Businesses',
      date: 'March 20, 2024'
    },
    {
      title: 'Remote Work: Building Effective Teams',
      date: 'March 18, 2024'
    },
    {
      title: 'Supply Chain Optimization Strategies',
      date: 'March 16, 2024'
    },
    {
      title: 'Financial Planning for Growth',
      date: 'March 14, 2024'
    }
  ];

  const tags = [
    'Strategy', 'Innovation', 'Growth', 'Leadership', 'Technology', 'Analytics',
    'Planning', 'Change', 'Digital', 'Transformation', 'Success', 'Management'
  ];

  return (
    <div className="space-y-8">
      {/* Search */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Search</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700] text-sm"
          />
          <div className="absolute right-3 top-3 w-4 h-4 flex items-center justify-center">
            <i className="ri-search-line text-gray-400"></i>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Categories</h3>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
              <a href="#" className="text-gray-700 hover:text-[#FFD700] transition-colors">
                {category.name}
              </a>
              <span className="text-gray-500 text-sm">({category.count})</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Recent Posts</h3>
        <ul className="space-y-4">
          {recentPosts.map((post, index) => (
            <li key={index} className="pb-4 border-b border-gray-100 last:border-b-0">
              <a href="#" className="text-gray-700 hover:text-[#FFD700] transition-colors font-medium">
                {post.title}
              </a>
              <div className="text-sm text-gray-500 mt-1">{post.date}</div>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <a
              key={index}
              href="#"
              className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full hover:bg-[#FFD700] hover:text-[#001F3F] transition-colors"
            >
              {tag}
            </a>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-[#001F3F] rounded-lg p-6">
        <h3 className="text-xl font-bold text-white mb-4">Subscribe to Our Newsletter</h3>
        <p className="text-gray-300 mb-4">Get the latest insights delivered to your inbox.</p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700] text-sm"
          />
          <button
            type="submit"
            className="w-full bg-[#FFD700] text-[#001F3F] py-3 rounded-lg hover:bg-white hover:text-[#001F3F] transition-all duration-300 font-semibold whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}