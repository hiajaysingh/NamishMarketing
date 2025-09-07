import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80" />
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="space-y-8 fade-in">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Your business deserves more than just marketing. It deserves a partner who cares about results as much as you do.
            </h2>
            
            <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
              Ready to transform your digital presence and drive real growth? Let's create a winning strategy together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-delay-1">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact" className="flex items-center gap-2">
                  <Calendar size={20} />
                  Book a Free Consultation
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              {/* <Button asChild size="lg" variant="outline" className="border-white/30 text-primary hover:bg-white hover:text-primary">
                <Link to="/portfolio">
                  View Success Stories
                </Link>
              </Button> */}
            </div>
            
            {/* Trust Indicators */}
            {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 opacity-80 fade-in-delay-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span className="text-sm">5.0 Client Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                <span className="text-sm">150+ Successful Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">📈</span>
                <span className="text-sm">500% Average ROI</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;