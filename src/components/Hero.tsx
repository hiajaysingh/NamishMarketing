import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="hero-section pt-16">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in">
            <div className="space-y-6">
              <h1 className="hero-title">
                Your Growth.<br />
                Our Mission.
              </h1>
              <p className="hero-subtitle">
                At Namish Marketing, we don't just sell services — we partner with you to achieve real business results, whether you're a startup hungry for leads or a growing brand ready to scale.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 fade-in-delay-1">
              <Button asChild size="lg" className="btn-hero group">
                <Link to="/contact" className="flex items-center gap-2">
                  Let's Grow Together
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="border-2">
                <Link to="/portfolio" className="flex items-center gap-2">
                  <Play size={18} />
                  View Our Work
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-8 fade-in-delay-2">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500%</div>
                <div className="text-sm text-muted-foreground">Avg ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative fade-in-delay-1">
            <div className="relative overflow-hidden rounded-2xl hover-lift">
              <img
                src={heroImage}
                alt="Digital Marketing Growth"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-card p-4 rounded-xl shadow-lg border border-border/50 bounce-in">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">↗</span>
                </div>
                <div>
                  <div className="text-sm font-semibold">Growth Rate</div>
                  <div className="text-xs text-muted-foreground">+127% this month</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-card p-4 rounded-xl shadow-lg border border-border/50 bounce-in" style={{animationDelay: '0.3s'}}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">★</span>
                </div>
                <div>
                  <div className="text-sm font-semibold">5.0 Rating</div>
                  <div className="text-xs text-muted-foreground">Client satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;