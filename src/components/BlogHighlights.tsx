import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const BlogHighlights = () => {
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
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Latest <span className="text-primary">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay ahead of the curve with our latest thoughts on digital marketing, growth strategies, and industry trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
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
                
                <p className="text-muted-foreground line-clamp-3">
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

        <div className="text-center mt-12 fade-in-delay-3">
          <Button asChild variant="outline" size="lg" className="hover-lift">
            <Link to="/blog">
              View All Articles
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogHighlights;