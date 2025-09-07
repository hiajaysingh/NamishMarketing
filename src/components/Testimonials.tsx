import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Julian Koh",
      position: "Founder & CEO",
      company: "AEVO",
      content: "Ajay is one of the most dedicated and sharp-minded people I've come across. He listens carefully, understands the real need, and then comes back with clarity that's rare to find. What impressed me most was his commitment, he doesn't just talk, he follows through with action. I have no doubt he's on the path to building something remarkable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Sahil Kathar",
      position: "Content Creator & Blogger",
      company: "Sahil Kathar",
      content: "Ajay has been a solid support in my blogging journey. He understands content and marketing at a level that makes things simple yet powerful. What I appreciate most is his consistency and honesty — rare qualities in this space. Every conversation with him adds value, and I trust his vision is only going to take him further.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Arvind",
      position: "Founder",
      company: "Pranil Tours & Travels",
      content: "Ajay is someone who truly values relationships in business. From our very first interaction, I could see his clarity and genuine approach. He brings fresh ideas, listens carefully, and always keeps growth in focus. I respect his dedication and believe he has what it takes to create long-term impact in the business world.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Managing Partner",
      position: "Managing Partner",
      company: "Elite SEO Agency",
      content: "Ajay has been an incredible partner to work with. He and his team managed our projects with professionalism, attention to detail, and genuine ownership. What I value most is his ability to combine clear communication with consistent execution — qualities that are rare to find. It's been a smooth experience working alongside him, and I trust his journey ahead will be even bigger.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Fatemeh Nikayin",
      position: "Founder",
      company: "Reviero",
      content: "Ajay is a rare mix of clarity and commitment. From the very beginning, I could sense his genuine passion for business and growth. He takes the time to understand, asks the right questions, and always brings thoughtful solutions to the table. I deeply respect his vision and believe he's building something that will make a lasting impact.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b667f3cc?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our clients aren't just clients, they're partners in growth. Here's how they describe their experience working with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative bg-card p-8 md:p-12 rounded-3xl shadow-lg border border-border/50 fade-in-delay-1">
            <div className="absolute top-6 left-6">
              <Quote size={32} className="text-primary/20" />
            </div>
            
            <div className="text-center space-y-6">
              {/* Stars */}
              <div className="flex justify-center space-x-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Content */}
              <blockquote className="text-xl md:text-2xl leading-relaxed text-foreground">
                "{testimonials[currentIndex].content}"
              </blockquote>
              
              {/* Author */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                />
                <div className="text-center sm:text-left">
                  <div className="font-semibold text-lg">{testimonials[currentIndex].name}</div>
                  <div className="text-muted-foreground">{testimonials[currentIndex].position}</div>
                  <div className="text-primary font-medium">{testimonials[currentIndex].company}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8 fade-in-delay-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full hover-lift"
            >
              <ChevronLeft size={20} />
            </Button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary' : 'bg-border hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full hover-lift"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>

        {/* Additional testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {testimonials.filter((_, index) => index !== currentIndex).slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-secondary p-6 rounded-2xl border border-border/50 hover-lift cursor-pointer fade-in-delay-3"
              onClick={() => setCurrentIndex(testimonials.indexOf(testimonial))}
            >
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;