
import { Metadata } from 'next';
import BlogDetail from './BlogDetail';

const blogPosts = {
  '1': {
    title: 'Digital Transformation: A Strategic Imperative for Modern Businesses',
    metaDescription: 'Learn why digital transformation is essential for modern businesses. Expert insights on strategy, implementation, and success factors from BrightPath Consulting.',
    author: 'Dr. Catherine Mwangi',
    date: '2024-03-15',
    category: 'Digital Transformation',
    tags: ['Strategy', 'Technology', 'Innovation'],
    image: 'https://readdy.ai/api/search-image?query=Modern%20digital%20transformation%20concept%20with%20technology%20integration%2C%20professional%20business%20environment%2C%20navy%20blue%20and%20gold%20accents%2C%20digital%20innovation%20and%20growth%2C%20contemporary%20office%20setting%20with%20computers%20and%20digital%20displays&width=1200&height=600&seq=blog-digital-detail&orientation=landscape'
  },
  '2': {
    title: 'Building Resilient Business Models in Uncertain Times',
    metaDescription: 'Discover how to build resilient business models that thrive in uncertain times. Expert strategies for adaptability, risk management, and sustainable growth.',
    author: 'James Omondi',
    date: '2024-03-10',
    category: 'Business Strategy',
    tags: ['Planning', 'Risk Management', 'Growth'],
    image: 'https://readdy.ai/api/search-image?query=Business%20resilience%20and%20adaptability%20concept%2C%20professional%20strategic%20planning%20environment%2C%20navy%20blue%20and%20gold%20color%20scheme%2C%20growth%20charts%20and%20planning%20materials%2C%20modern%20office%20setting%20with%20business%20analytics&width=1200&height=600&seq=blog-resilience-detail&orientation=landscape'
  },
  '3': {
    title: 'The Future of Leadership: Embracing Change Management',
    metaDescription: 'Master modern leadership skills for effective change management. Learn proven strategies for leading organizational transformation and building adaptive capabilities.',
    author: 'Sarah Kimani',
    date: '2024-03-05',
    category: 'Leadership',
    tags: ['Leadership', 'Change', 'Management'],
    image: 'https://readdy.ai/api/search-image?query=Modern%20leadership%20and%20change%20management%20concept%2C%20professional%20business%20leaders%20in%20meeting%2C%20navy%20blue%20and%20gold%20accents%2C%20team%20collaboration%20and%20strategic%20thinking%2C%20contemporary%20office%20environment%20with%20diverse%20executives&width=1200&height=600&seq=blog-leadership-detail&orientation=landscape'
  },
  '4': {
    title: 'Data-Driven Decision Making: Tools and Techniques',
    metaDescription: 'Learn data-driven decision making tools and techniques. Expert guide to business analytics, strategic insights, and performance optimization.',
    author: 'Dr. Grace Njeri',
    date: '2024-02-28',
    category: 'Analytics',
    tags: ['Analytics', 'Data', 'Strategy'],
    image: 'https://readdy.ai/api/search-image?query=Data%20analytics%20and%20business%20intelligence%20concept%2C%20professional%20data%20visualization%20environment%2C%20navy%20blue%20and%20gold%20color%20scheme%2C%20charts%20and%20graphs%20on%20screens%2C%20modern%20office%20setting%20with%20analytics%20tools&width=1200&height=600&seq=blog-data-detail&orientation=landscape'
  },
  '5': {
    title: 'Sustainable Business Practices: Profit with Purpose',
    metaDescription: 'Learn sustainable business practices that drive profit and purpose. Expert guide to environmental responsibility, social impact, and long-term success.',
    author: 'Michael Wanjiku',
    date: '2024-02-22',
    category: 'Sustainability',
    tags: ['Sustainability', 'Innovation', 'Growth'],
    image: 'https://readdy.ai/api/search-image?query=Sustainable%20business%20practices%20concept%2C%20professional%20green%20business%20environment%2C%20navy%20blue%20and%20gold%20accents%2C%20eco-friendly%20office%20setting%2C%20modern%20workspace%20with%20sustainability%20elements%20and%20green%20technology&width=1200&height=600&seq=blog-sustainability-detail&orientation=landscape'
  },
  '6': {
    title: 'Customer Experience: The New Competitive Advantage',
    metaDescription: 'Master customer experience strategies that create competitive advantage. Expert insights on design, implementation, and optimization for business success.',
    author: 'David Mutua',
    date: '2024-02-15',
    category: 'Customer Experience',
    tags: ['Customer', 'Experience', 'Strategy'],
    image: 'https://readdy.ai/api/search-image?query=Customer%20experience%20and%20service%20excellence%20concept%2C%20professional%20customer%20service%20environment%2C%20navy%20blue%20and%20gold%20color%20scheme%2C%20happy%20customers%20and%20service%20representatives%2C%20modern%20office%20setting%20with%20customer%20interaction%20areas&width=1200&height=600&seq=blog-customer-detail&orientation=landscape'
  }
};

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
  ];
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = blogPosts[params.id as keyof typeof blogPosts];
  
  if (!post) {
    return {
      title: 'Blog Post Not Found | BrightPath Consulting',
      description: 'The requested blog post could not be found. Browse our other business insights and resources.',
      robots: 'noindex, nofollow'
    };
  }

  return {
    title: `${post.title} | BrightPath Consulting`,
    description: post.metaDescription,
    keywords: post.tags.join(', '),
    authors: [{ name: post.author }],
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.metaDescription,
      images: [post.image],
      url: `https://brightpathconsulting.com/blog/${params.id}`,
      siteName: 'BrightPath Consulting',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription,
      images: [post.image]
    },
    alternates: {
      canonical: `https://brightpathconsulting.com/blog/${params.id}`
    }
  };
}

export default function BlogPage({ params }: { params: { id: string } }) {
  return <BlogDetail blogId={params.id} />;
}
