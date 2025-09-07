import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const featuredPost = {
    title: "The Complete Guide to Digital Marketing ROI in 2024",
    excerpt: "Learn how to measure, optimize, and maximize your digital marketing return on investment with proven strategies and real-world examples.",
    date: "December 20, 2024",
    readTime: "12 min read",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    slug: "complete-guide-digital-marketing-roi-2024"
  };

  const posts = [
    {
      title: "10 SEO Strategies That Actually Work in 2024",
      excerpt: "Discover the latest SEO techniques that are driving real results for businesses across all industries.",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "SEO",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=250&fit=crop",
      slug: "seo-strategies-2024"
    },
    {
      title: "How to Create Content That Converts",
      excerpt: "Learn the psychology behind high-converting content and how to apply it to your marketing campaigns.",
      date: "December 12, 2024",
      readTime: "7 min read",
      category: "Content Marketing",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
      slug: "content-that-converts"
    },
    {
      title: "The ROI of Social Media Marketing",
      excerpt: "Real data and case studies showing how social media marketing drives measurable business results.",
      date: "December 8, 2024",
      readTime: "6 min read",
      category: "Social Media",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      slug: "social-media-roi"
    },
    {
      title: "Email Marketing Automation: A Beginner's Guide",
      excerpt: "Set up automated email sequences that nurture leads and drive sales while you sleep.",
      date: "December 5, 2024",
      readTime: "8 min read",
      category: "Email Marketing",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=250&fit=crop",
      slug: "email-marketing-automation-guide"
    },
    {
      title: "PPC vs SEO: Which Strategy Is Right for You?",
      excerpt: "Compare the benefits and drawbacks of paid search vs organic search strategies for your business.",
      date: "December 1, 2024",
      readTime: "6 min read",
      category: "PPC",
      image: "./Ppc Vs Seo.png",
      slug: "ppc-vs-seo-strategy"
    },
    {
      title: "Building a Brand That Resonates in 2024",
      excerpt: "Essential strategies for creating authentic brand connections in an increasingly digital world.",
      date: "November 28, 2024",
      readTime: "9 min read",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop",
      slug: "building-brand-that-resonates"
    }
  ];

  const categories = ["All", "SEO", "Content Marketing", "Social Media", "PPC", "Email Marketing", "Branding"];

  // Filter posts based on selected category
  const filteredPosts = selectedCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Marketing <span className="text-primary">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Stay ahead of the curve with actionable digital marketing strategies, industry insights, and growth tactics.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 fade-in">
              <h2 className="text-3xl font-bold mb-4">Featured Article</h2>
            </div>
            
            <article className="bg-card rounded-3xl overflow-hidden border border-border/50 hover-lift group fade-in-delay-1">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full min-h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold leading-tight group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <Button asChild variant="default" className="btn-hero w-fit group/btn">
                    <Link to={`/blog/${featuredPost.slug}`} className="flex items-center gap-2">
                      Read Full Article
                      <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-10 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 fade-in">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-200 hover:scale-105"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article 
                key={post.slug}
                className="bg-card rounded-2xl overflow-hidden border border-border/50 hover-lift group fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground line-clamp-3 text-sm">
                    {post.excerpt}
                  </p>
                  
                  <Button asChild variant="ghost" className="p-0 h-auto font-semibold text-primary hover:text-primary/80">
                    <Link to={`/blog/${post.slug}`} className="flex items-center gap-2">
                      Read More
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-8 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold">
              Stay Updated
            </h2>
            <p className="text-xl opacity-90">
              Get the latest marketing insights and strategies delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Button variant="secondary" >
                Subscribe
              </Button>
            </div>
            <p className="text-sm opacity-70">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;