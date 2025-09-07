import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Users, TrendingUp, Award, ArrowRight } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every strategy we create is designed with one goal in mind: driving measurable results for your business."
    },
    {
      icon: Users,
      title: "Partnership Focus",
      description: "We believe in building long-term partnerships, not just client relationships. Your success is our success."
    },
    {
      icon: TrendingUp,
      title: "Growth Mindset",
      description: "We're constantly learning, adapting, and optimizing to stay ahead of the ever-changing digital landscape."
    },
    {
      icon: Award,
      title: "Excellence Standard",
      description: "We hold ourselves to the highest standards of quality, creativity, and professionalism in everything we do."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-primary">Namish Marketing</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At Namish Marketing, we believe marketing isn't just about running ads or posting content — it's about building real growth engines for businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 fade-in">
              <h2 className="text-3xl md:text-4xl font-bold">
                Our Story & Mission
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  We're a 360-degree marketing partner, here to make sure your business not only looks good but also reaches the right people, in the right way, at the right time.
                </p>
                <p>
                  From offline branding materials to digital strategies, from consulting on the best marketing channels to executing campaigns that deliver results — we handle it all. Whether you need leads to keep your pipeline flowing or branding that sets you apart, we bring the tools, strategies, and execution to make it happen.
                </p>
                <p>
                  What makes us different? We don't believe in "one-size-fits-all." Every business is unique, every market is different — and that's why we tailor strategies to match where you are and where you want to go. We're not just service providers; we're partners in your growth journey.
                </p>
                <p>
                  Our mission is simple: to help businesses grow with clarity, creativity, and consistency. At Namish Marketing, your success is our business.
                </p>
              </div>
              <Button asChild size="lg" className="btn-hero group">
                <Link to="/contact" className="flex items-center gap-2">
                  Start Your Growth Journey
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            
            <div className="relative fade-in-delay-1">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How We Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              At Namish Marketing, we don't believe in guesswork or one-size-fits-all campaigns. Every business has its own challenges, market, and opportunities. That's why our process is designed to bring clarity, structure, and results.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-8 items-start fade-in">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Understand Your Business</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We start by diving deep into your business, market, and goals. We listen, analyze, and identify what's holding you back — and where the biggest growth opportunities lie.
                  </p>
                </div>
              </div>

              {/* Connector Line */}
              <div className="ml-8 w-0.5 h-8 bg-border"></div>

              {/* Step 2 */}
              <div className="flex gap-8 items-start fade-in-delay-1">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Build a Custom Strategy</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    No templates, no copy-paste. We design a marketing plan tailored to your exact stage and market conditions — choosing the best mix of offline and online channels for impact.
                  </p>
                </div>
              </div>

              {/* Connector Line */}
              <div className="ml-8 w-0.5 h-8 bg-border"></div>

              {/* Step 3 */}
              <div className="flex gap-8 items-start fade-in-delay-2">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Execute with Precision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    From branding materials to lead generation campaigns, we bring strategies to life. Our team ensures everything is executed with focus and consistency.
                  </p>
                </div>
              </div>

              {/* Connector Line */}
              <div className="ml-8 w-0.5 h-8 bg-border"></div>

              {/* Step 4 */}
              <div className="flex gap-8 items-start fade-in-delay-3">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl flex-shrink-0">
                  4
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Track & Optimize</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We measure what matters. Every campaign is tracked, analyzed, and refined to keep improving results and maximize your return on investment.
                  </p>
                </div>
              </div>

              {/* Connector Line */}
              <div className="ml-8 w-0.5 h-8 bg-border"></div>

              {/* Step 5 */}
              <div className="flex gap-8 items-start fade-in-delay-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl flex-shrink-0">
                  5
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Grow Together</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We're not here for short-term wins. Our goal is long-term partnerships where your growth is our shared success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do and shape how we work with our partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="bg-card p-8 rounded-2xl border border-border/50 hover-lift fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Expertise
              </h2>
              <p className="text-xl text-muted-foreground">
                5+ years of experience working with businesses across industries
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-4 fade-in-delay-1">
                <div className="text-4xl font-bold text-primary">150+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="space-y-4 fade-in-delay-2">
                <div className="text-4xl font-bold text-primary">500%</div>
                <div className="text-muted-foreground">Average ROI</div>
              </div>
              <div className="space-y-4 fade-in-delay-3">
                <div className="text-4xl font-bold text-primary">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="space-y-4 fade-in-delay-3">
                <div className="text-4xl font-bold text-primary">95%</div>
                <div className="text-muted-foreground">Client Retention</div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl opacity-90">
              Let's discuss how we can help your business achieve its growth goals.
            </p>
            <Button asChild size="lg" variant="secondary" >
              <Link to="/contact">
                Get Started Today
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;