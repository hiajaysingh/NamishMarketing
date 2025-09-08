import { Link } from "react-router-dom";

interface InternalLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  "aria-label"?: string;
}

export const InternalLink = ({ to, children, className, title, "aria-label": ariaLabel }: InternalLinkProps) => {
  return (
    <Link 
      to={to} 
      className={className}
      title={title}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
};

// SEO-optimized internal linking strategy
export const internalLinks = {
  home: {
    path: "/",
    title: "Namish Marketing - Digital Marketing Agency",
    description: "Home page with overview of services"
  },
  about: {
    path: "/about",
    title: "About Namish Marketing",
    description: "Learn about our team and mission"
  },
  services: {
    path: "/services",
    title: "Digital Marketing Services",
    description: "Our comprehensive marketing services"
  },
  blog: {
    path: "/blog",
    title: "Marketing Blog & Insights",
    description: "Latest marketing tips and strategies"
  },
  contact: {
    path: "/contact",
    title: "Contact Us",
    description: "Get in touch for a free consultation"
  }
};

// Contextual internal linking suggestions
export const getContextualLinks = (currentPage: string) => {
  const allLinks = Object.entries(internalLinks).filter(([key]) => key !== currentPage);
  
  switch (currentPage) {
    case 'home':
      return [
        { ...internalLinks.services, anchor: "Our Services" },
        { ...internalLinks.about, anchor: "About Us" },
        { ...internalLinks.contact, anchor: "Get Started" }
      ];
    case 'about':
      return [
        { ...internalLinks.services, anchor: "Our Services" },
        { ...internalLinks.contact, anchor: "Work With Us" },
        { ...internalLinks.blog, anchor: "Read Our Insights" }
      ];
    case 'services':
      return [
        { ...internalLinks.contact, anchor: "Get a Quote" },
        { ...internalLinks.about, anchor: "Why Choose Us" },
        { ...internalLinks.blog, anchor: "Learn More" }
      ];
    case 'blog':
      return [
        { ...internalLinks.services, anchor: "Our Services" },
        { ...internalLinks.contact, anchor: "Need Help?" },
        { ...internalLinks.about, anchor: "About Our Team" }
      ];
    case 'contact':
      return [
        { ...internalLinks.services, anchor: "Our Services" },
        { ...internalLinks.about, anchor: "Learn About Us" },
        { ...internalLinks.blog, anchor: "Read Our Blog" }
      ];
    default:
      return allLinks.map(([key, link]) => ({ ...link, anchor: link.title }));
  }
};

export default InternalLink;
