import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTABanner from "@/components/CTABanner";
import Testimonials from "@/components/Testimonials";
import BlogHighlights from "@/components/BlogHighlights";
import FAQ from "@/components/FAQ";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <CTABanner />
      <Testimonials />
      <FAQ />
      <BlogHighlights />
    </div>
  );
};

export default Home;