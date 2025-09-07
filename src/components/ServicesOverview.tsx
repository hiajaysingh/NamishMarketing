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
  TrendingUp
} from "lucide-react";

const ServicesOverview = () => {
  const serviceCategories = [
    {
      title: "Digital Marketing",
      services: [
        {
          icon: Megaphone,
          title: "Social Media Marketing",
          description: "We turn your social media into more than just posts — we build engagement, community, and brand presence where your audience actually spends time."
        },
        {
          icon: Mail,
          title: "Email Marketing",
          description: "Still one of the most powerful channels. We craft campaigns that nurture relationships, build trust, and drive repeat sales straight to your inbox."
        },
        {
          icon: Search,
          title: "SEO (Search Engine Optimization)",
          description: "We make sure your business gets found when people are searching. From technical fixes to keyword-rich content, we optimize so you climb the rankings and stay there."
        }
      ]
    },
    {
      title: "Development & Content",
      services: [
        {
          icon: Settings,
          title: "Web Development",
          description: "Your website is your digital home. We design and build websites that not only look great but also convert visitors into customers."
        },
        {
          icon: PenTool,
          title: "Content Marketing",
          description: "Content isn't just words — it's what positions you as a trusted authority. We create articles, blogs, and resources that educate, engage, and attract your audience."
        },
        {
          icon: MousePointer,
          title: "Paid Advertising",
          description: "Smart ads that don't waste budget — designed to get you results fast. Google Ads, Facebook Ads, and Pinterest Ads tailored to your goals."
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Services That Drive <span className="text-primary">Real Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From startups to scaling businesses, we offer comprehensive marketing solutions tailored to your unique needs and goals.
          </p>
        </div>

        <div className="space-y-16">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={category.title} className="fade-in" style={{animationDelay: `${categoryIndex * 0.1}s`}}>
              <h3 className="text-2xl font-bold mb-8 text-center">{category.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div 
                    key={service.title} 
                    className="service-card group fade-in-delay-1"
                    style={{animationDelay: `${(categoryIndex * 0.1) + (serviceIndex * 0.1)}s`}}
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <service.icon size={32} className="text-primary group-hover:text-primary-foreground" />
                    </div>
                    <h4 className="text-xl font-semibold mb-4">{service.title}</h4>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                    {/* <Button variant="outline" size="sm">
                      Learn More
                    </Button> */}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 fade-in-delay-3">
          <Button asChild size="lg" className="btn-hero">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;