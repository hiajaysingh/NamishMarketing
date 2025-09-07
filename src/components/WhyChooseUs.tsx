import { 
  Target, 
  Users, 
  TrendingUp, 
  Clock, 
  Award, 
  Shield,
  CheckCircle,
  Lightbulb
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Target,
      title: "Strategies, Not Templates",
      description: "We don't believe in copy-paste plans. Every strategy we create is built around your market, your stage, and your goals."
    },
    {
      icon: CheckCircle,
      title: "360° Marketing Under One Roof",
      description: "From offline branding to digital campaigns, from consulting to execution — we handle it all, so you don't need to juggle multiple vendors."
    },
    {
      icon: TrendingUp,
      title: "Focus on Growth, Not Just Activity",
      description: "We don't chase vanity metrics. Our aim is to bring real business growth — more leads, stronger brand presence, and long-term results."
    },
    {
      icon: Shield,
      title: "Transparent & Collaborative",
      description: "We keep communication open, honest, and simple. No jargon, no hidden tricks — just clear progress you can trust."
    },
    {
      icon: Users,
      title: "Partners, Not Vendors",
      description: "We see ourselves as part of your team, working side by side to build something lasting, not just another short-term campaign."
    },
    {
      icon: Clock,
      title: "Proven Results & Experience",
      description: "With years of experience and a track record of successful campaigns, we deliver measurable results that drive real business impact."
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-primary">Namish Marketing?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another marketing agency. We're your growth partners, committed to delivering exceptional results through strategic thinking and flawless execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="bg-card border border-border/50 rounded-2xl p-8 space-y-6 fade-in hover-lift group hover:shadow-lg transition-all duration-300 hover:border-primary/20"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                <feature.icon size={32} className="text-primary" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 pt-16 border-t border-border/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2 fade-in-delay-1">
              <div className="text-4xl font-bold text-primary">150+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="space-y-2 fade-in-delay-2">
              <div className="text-4xl font-bold text-primary">500%</div>
              <div className="text-muted-foreground">Average ROI</div>
            </div>
            <div className="space-y-2 fade-in-delay-3">
              <div className="text-4xl font-bold text-primary">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="space-y-2 fade-in-delay-3">
              <div className="text-4xl font-bold text-primary">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;