import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTABanner from "@/components/CTABanner";
import Testimonials from "@/components/Testimonials";
import BlogHighlights from "@/components/BlogHighlights";
import FAQ from "@/components/FAQ";
import SEO from "@/components/SEO";

const Home = () => {
  return (
    <>
      <SEO
        title="Namish Marketing - Your Growth. Our Mission. | Digital Marketing Agency"
        description="Partner with Namish Marketing for results-driven digital marketing. We help startups and growing businesses achieve real results through SEO, PPC, social media, and strategic marketing."
        keywords="digital marketing agency, SEO services, PPC advertising, social media marketing, content marketing, business growth, marketing strategy, online marketing, namish marketing"
        canonical="/"
        ogImage="https://namishmarketing.com/og-image.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Namish Marketing",
          "description": "Results-driven digital marketing agency helping startups and growing businesses achieve real results through SEO, PPC, social media, and strategic marketing.",
          "url": "https://namishmarketing.com",
          "logo": "https://namishmarketing.com/logo.png",
          "image": "https://namishmarketing.com/og-image.jpg",
          "telephone": "+1-555-0123",
          "email": "hello@namishmarketing.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Marketing Street",
            "addressLocality": "New York",
            "addressRegion": "NY",
            "postalCode": "10001",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "40.7128",
            "longitude": "-74.0060"
          },
          "openingHours": "Mo-Fr 09:00-18:00",
          "priceRange": "$$",
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": "40.7128",
              "longitude": "-74.0060"
            },
            "geoRadius": "100000"
          },
          "sameAs": [
            "https://www.linkedin.com/company/namish-marketing",
            "https://twitter.com/namishmarketing",
            "https://www.facebook.com/namishmarketing"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Digital Marketing Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "SEO Services",
                  "description": "Search engine optimization to improve your website's visibility in search results"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "PPC Advertising",
                  "description": "Pay-per-click advertising campaigns to drive targeted traffic to your website"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Social Media Marketing",
                  "description": "Strategic social media management to build your brand and engage with customers"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Content Marketing",
                  "description": "Creating valuable content to attract and engage your target audience"
                }
              }
            ]
          }
        }}
      />
      <div className="min-h-screen">
        <Hero />
        <ServicesOverview />
        <WhyChooseUs />
        <CTABanner />
        <Testimonials />
        <FAQ />
        <BlogHighlights />
      </div>
    </>
  );
};

export default Home;