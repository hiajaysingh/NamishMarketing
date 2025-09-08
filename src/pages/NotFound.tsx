import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <SEO
        title="404 - Page Not Found | Namish Marketing"
        description="The page you're looking for doesn't exist. Return to Namish Marketing's homepage to explore our digital marketing services."
        canonical="/404"
        noindex={true}
        nofollow={true}
      />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-8xl md:text-9xl font-bold text-primary">404</h1>
              <h2 className="text-3xl md:text-4xl font-bold">Page Not Found</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="btn-hero group">
                  <Link to="/" className="flex items-center gap-2">
                    <Home size={20} />
                    Return to Home
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" onClick={() => window.history.back()}>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <ArrowLeft size={20} />
                    Go Back
                  </div>
                </Button>
              </div>
              
              <div className="pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground mb-4">
                  Looking for something specific? Try these popular pages:
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/services" className="text-primary hover:text-primary/80 text-sm font-medium">
                    Our Services
                  </Link>
                  <Link to="/about" className="text-primary hover:text-primary/80 text-sm font-medium">
                    About Us
                  </Link>
                  <Link to="/blog" className="text-primary hover:text-primary/80 text-sm font-medium">
                    Blog
                  </Link>
                  <Link to="/contact" className="text-primary hover:text-primary/80 text-sm font-medium">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
