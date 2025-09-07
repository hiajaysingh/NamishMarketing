import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ExternalLink, TrendingUp, Users, DollarSign } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "TechStart Inc. - Complete Digital Transformation",
      category: "Full-Service Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      description: "A complete digital marketing overhaul for a B2B tech startup, including website redesign, SEO strategy, and lead generation campaigns.",
      results: [
        { metric: "Lead Increase", value: "+300%" },
        { metric: "Organic Traffic", value: "+250%" },
        { metric: "Conversion Rate", value: "+85%" }
      ],
      tags: ["SEO", "Web Design", "Lead Generation", "Content Marketing"],
      link: "#"
    },
    {
      title: "Fashion Forward - Social Media Domination",
      category: "Social Media Marketing",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      description: "Built a thriving social media community for a fashion brand, focusing on Instagram and TikTok marketing with influencer partnerships.",
      results: [
        { metric: "Followers", value: "+500%" },
        { metric: "Engagement", value: "+400%" },
        { metric: "Sales", value: "+200%" }
      ],
      tags: ["Social Media", "Influencer Marketing", "Content Creation", "Brand Building"],
      link: "#"
    },
    {
      title: "GrowthCo - PPC Campaign Optimization",
      category: "Paid Advertising",
      image: "https://technians.com/wp-content/uploads/2020/02/Immediate-Results.jpg",
      description: "Optimized Google Ads and Facebook advertising campaigns, resulting in significantly improved ROI and lead quality.",
      results: [
        { metric: "ROI", value: "+420%" },
        { metric: "Cost per Lead", value: "-60%" },
        { metric: "Quality Score", value: "+75%" }
      ],
      tags: ["Google Ads", "Facebook Ads", "PPC", "Conversion Optimization"],
      link: "#"
    },
    {
      title: "LocalBiz - Local SEO Success",
      category: "Local SEO",
      image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=600&h=400&fit=crop",
      description: "Helped a local service business dominate local search results and increase foot traffic through strategic local SEO.",
      results: [
        { metric: "Local Rankings", value: "Top 3" },
        { metric: "Foot Traffic", value: "+180%" },
        { metric: "Phone Calls", value: "+250%" }
      ],
      tags: ["Local SEO", "Google My Business", "Local Citations", "Review Management"],
      link: "#"
    },
    {
      title: "E-commerce Empire - Conversion Optimization",
      category: "E-commerce Marketing",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      description: "Increased online sales for an e-commerce store through strategic funnel optimization and email marketing automation.",
      results: [
        { metric: "Revenue", value: "+350%" },
        { metric: "Cart Recovery", value: "+45%" },
        { metric: "Customer LTV", value: "+160%" }
      ],
      tags: ["E-commerce", "Email Marketing", "Funnel Optimization", "CRO"],
      link: "#"
    },
    {
      title: "HealthTech Solutions - Content Marketing",
      category: "Content Strategy",
      image: "./healthcare.png",
      description: "Established thought leadership in the healthcare technology space through strategic content marketing and SEO.",
      results: [
        { metric: "Organic Traffic", value: "+400%" },
        { metric: "Lead Quality", value: "+120%" },
        { metric: "Brand Awareness", value: "+300%" }
      ],
      tags: ["Content Marketing", "SEO", "Thought Leadership", "B2B Marketing"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-primary">Success Stories</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Real results for real businesses. See how we've helped companies across industries achieve their growth goals.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="bg-card rounded-3xl overflow-hidden border border-border/50 hover-lift group fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                
                <div className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4">
                    {project.results.map((result) => (
                      <div key={result.metric} className="text-center p-4 bg-secondary rounded-xl">
                        <div className="text-2xl font-bold text-primary">{result.value}</div>
                        <div className="text-xs text-muted-foreground">{result.metric}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full hover-lift group/btn">
                    <span>View Case Study</span>
                    <ExternalLink size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Results That Speak Volumes
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These numbers represent real business growth achieved for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, metric: "Average ROI", value: "500%", description: "Across all campaigns" },
              { icon: Users, metric: "Happy Clients", value: "150+", description: "And growing" },
              { icon: DollarSign, metric: "Revenue Generated", value: "$10M+", description: "For our clients" },
              { icon: TrendingUp, metric: "Client Retention", value: "95%", description: "Long-term partnerships" }
            ].map((stat, index) => (
              <div 
                key={stat.metric}
                className="text-center space-y-4 fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <stat.icon size={36} className="text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary">{stat.value}</div>
                <div className="font-semibold">{stat.metric}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-xl opacity-90">
              Let's discuss how we can help your business achieve similar results.
            </p>
            <Button asChild size="lg" variant="secondary" >
              <Link to="/contact">
                Start Your Success Story
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;