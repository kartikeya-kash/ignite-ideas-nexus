import Navigation from '@/components/Navigation';
import ParticleBackground from '@/components/ParticleBackground';
import Footer from '@/components/Footer';
import { Calendar, User, Clock, ArrowRight, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const featuredPost = {
    title: 'The Future of Student Entrepreneurship in India',
    excerpt: 'Exploring how young entrepreneurs are reshaping the Indian startup ecosystem with innovative solutions and fresh perspectives.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
    author: 'Arjun Sharma',
    date: '2024-03-10',
    readTime: '8 min read',
    category: 'Entrepreneurship',
    slug: 'future-of-student-entrepreneurship'
  };

  const blogPosts = [
    {
      title: 'Building Your First Startup: A Complete Guide',
      excerpt: 'Everything you need to know about starting your entrepreneurial journey, from ideation to execution.',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop',
      author: 'Priya Patel',
      date: '2024-03-08',
      readTime: '6 min read',
      category: 'Startup',
      slug: 'building-first-startup-guide'
    },
    {
      title: 'Fintech Revolution: Opportunities for Young Entrepreneurs',
      excerpt: 'How financial technology is creating new opportunities for innovation and disruption.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop',
      author: 'Rohit Kumar',
      date: '2024-03-05',
      readTime: '5 min read',
      category: 'Finance',
      slug: 'fintech-opportunities'
    },
    {
      title: 'AI and Machine Learning for Startups',
      excerpt: 'Practical applications of AI and ML in early-stage startups and how to get started.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop',
      author: 'Vikash Singh',
      date: '2024-03-02',
      readTime: '7 min read',
      category: 'Technology',
      slug: 'ai-ml-for-startups'
    },
    {
      title: 'Funding Your Startup: Beyond Traditional VC',
      excerpt: 'Alternative funding options for entrepreneurs including crowdfunding, grants, and bootstrapping.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop',
      author: 'Karthik Nair',
      date: '2024-02-28',
      readTime: '9 min read',
      category: 'Finance',
      slug: 'alternative-startup-funding'
    },
    {
      title: 'Design Thinking for Entrepreneurs',
      excerpt: 'How to apply design thinking principles to create user-centered products and services.',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=250&fit=crop',
      author: 'Meera Iyer',
      date: '2024-02-25',
      readTime: '6 min read',
      category: 'Design',
      slug: 'design-thinking-entrepreneurs'
    },
    {
      title: 'Building a Strong Team Culture in Startups',
      excerpt: 'Essential strategies for creating a positive and productive team culture in early-stage companies.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop',
      author: 'Ishita Gupta',
      date: '2024-02-22',
      readTime: '8 min read',
      category: 'Leadership',
      slug: 'startup-team-culture'
    }
  ];

  const categories = ['All', 'Entrepreneurship', 'Technology', 'Finance', 'Design', 'Leadership', 'Startup'];

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'entrepreneurship': return 'text-primary';
      case 'technology': return 'text-accent';
      case 'finance': return 'text-secondary';
      case 'design': return 'text-violet';
      case 'leadership': return 'text-neon-green';
      case 'startup': return 'text-electric-blue';
      default: return 'text-primary';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <ParticleBackground />
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-gradient-primary">E-Cell </span>
                <span className="text-gradient-accent">Blog</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Insights, tips, and stories from the world of entrepreneurship. 
                Learn from experts, discover trends, and get inspired to build something amazing.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-gradient-primary">Featured Article</span>
                </h2>
              </div>

              <div className="glass rounded-3xl overflow-hidden hover-glow glow-blue group transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                  </div>
                  
                  <div className="p-8 lg:p-12">
                    <div className="mb-4">
                      <span className={`text-sm font-semibold px-3 py-1 rounded-full bg-muted/20 ${getCategoryColor(featuredPost.category)}`}>
                        {featuredPost.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gradient-primary group-hover:text-gradient-accent transition-all duration-300">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 text-lg">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-6 mb-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    
                    <Button className="bg-gradient-primary hover:scale-105 transition-all duration-300 group/btn">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-6 py-2 rounded-full border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-gradient-accent">Latest Articles</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Stay updated with the latest trends and insights in entrepreneurship
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <article
                    key={index}
                    className="glass rounded-2xl overflow-hidden hover-glow glow-green group transition-all duration-300 cursor-pointer"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full bg-background/80 backdrop-blur-sm ${getCategoryColor(post.category)}`}>
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-gradient-accent group-hover:text-gradient-primary transition-all duration-300">
                        {post.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {post.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </span>
                        </div>
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="glass rounded-3xl p-12 text-center hover-glow glow-violet">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-primary">
                  Stay Updated
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Subscribe to our newsletter and never miss the latest insights, 
                  tips, and stories from the world of entrepreneurship.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-muted/20 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
                  />
                  <Button className="bg-gradient-accent hover:scale-105 transition-all duration-300 whitespace-nowrap">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  No spam, unsubscribe at any time
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;