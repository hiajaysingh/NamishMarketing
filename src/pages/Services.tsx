import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Megaphone, 
  Search, 
  MousePointer, 
  PenTool, 
  Mail, 
  Target,
  Palette,
  BarChart3,
  Video,
  Zap,
  Settings,
  TrendingUp,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Custom Marketing Strategy & Consultancy",
      description: "We don't believe in copy-paste marketing. Every business is unique, so we study your market, audience, and goals to create a strategy built just for you. Think of it as your personalized growth roadmap.",
      features: ["Market Analysis", "Audience Research", "Custom Strategy Design", "Growth Roadmap"],
      price: "Starting at $2,500/project"
    },
    {
      icon: Megaphone,
      title: "Social Media Marketing",
      description: "We turn your social media into more than just posts — we build engagement, community, and brand presence where your audience actually spends time.",
      features: ["Content Strategy", "Community Management", "Social Advertising", "Brand Presence"],
      price: "Starting at $1,500/month"
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Still one of the most powerful channels. We craft campaigns that nurture relationships, build trust, and drive repeat sales straight to your inbox.",
      features: ["Campaign Design", "Email Automation", "List Segmentation", "Performance Tracking"],
      price: "Starting at $800/month"
    },
    {
      icon: Settings,
      title: "Web Development",
      description: "Your website is your digital home. We design and build websites that not only look great but also convert visitors into customers.",
      features: ["Responsive Design", "Conversion Optimization", "E-commerce Setup", "Maintenance & Support"],
      price: "Starting at $5,000/project"
    },
    {
      icon: Search,
      title: "SEO (Search Engine Optimization)",
      description: "We make sure your business gets found when people are searching. From technical fixes to keyword-rich content, we optimize so you climb the rankings and stay there.",
      features: ["Keyword Research", "On-Page Optimization", "Technical SEO", "Link Building"],
      price: "Starting at $2,000/month"
    },
    {
      icon: PenTool,
      title: "Content Marketing",
      description: "Content isn't just words — it's what positions you as a trusted authority. We create articles, blogs, and resources that educate, engage, and attract your audience.",
      features: ["Blog Writing", "Content Strategy", "Resource Creation", "Authority Building"],
      price: "Starting at $1,200/month"
    },
    {
      icon: MousePointer,
      title: "Paid Advertising",
      description: "Smart ads that don't waste budget — designed to get you results fast.",
      features: ["Google Ads - Capture demand right when people are searching", "Facebook Ads - Reach the right audience with precise targeting", "Pinterest Ads - Turn inspiration into action with high buying intent", "Campaign Management & Optimization"],
      price: "Starting at $1,500/month + ad spend"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our Services - comprehensive digital marketing solutions designed to drive real business results. From strategy to execution, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="bg-card p-8 rounded-2xl border border-border/50 hover-lift group fade-in"
                style={{animationDelay: `${index * 0.05}s`}}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <service.icon size={32} className="text-primary group-hover:text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} className="text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* <div className="border-t border-border/50 pt-6">
                  <div className="text-primary font-semibold mb-4">{service.price}</div>
                  <Button variant="outline" size="sm" className="w-full hover-lift">
                    Learn More
                  </Button>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures every project delivers maximum results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Discovery & Deep Understanding", description: "We dive deep into your business, goals, and challenges" },
              { step: "02", title: "Custom Strategy & Roadmap", description: "Create a tailored strategy designed for your unique needs" },
              { step: "03", title: "Execution with the Right Specialists", description: "Our expert team brings your strategy to life" },
              { step: "04", title: "Continuous Optimization", description: "Monitor, test, and optimize for better performance" },
              { step: "05", title: "Partnership & Support", description: "Ongoing support and strategic guidance for growth" }
            ].map((process, index) => (
              <div 
                key={process.step}
                className="text-center space-y-4 fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-lg">
                  {process.step}
                </div>
                <h3 className="font-semibold">{process.title}</h3>
                <p className="text-sm text-muted-foreground">{process.description}</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl opacity-90">
              Let's discuss which services are right for your business and create a custom strategy for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact" className="flex items-center gap-2">
                  Book Free Consultation
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              {/* <Button asChild size="lg" variant="outline" className="border-white/30 text-primary">
                <Link to="/portfolio">
                  View Our Work
                </Link>
              </Button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;