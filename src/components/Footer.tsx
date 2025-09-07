import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [{
    icon: Facebook,
    href: "#",
    label: "Facebook"
  }, {
    icon: Twitter,
    href: "#",
    label: "Twitter"
  }, {
    icon: Instagram,
    href: "#",
    label: "Instagram"
  }, {
    icon: Linkedin,
    href: "#",
    label: "LinkedIn"
  }];
  const quickLinks = [{
    name: "About Us",
    href: "/about"
  }, {
    name: "Services",
    href: "/services"
  }
  // {
  //   name: "Portfolio",
  //   href: "/portfolio"
  // }
  , {
    name: "Blog",
    href: "/blog"
  }, {
    name: "Contact",
    href: "/contact"
  }];
  const services = ["Social Media Marketing", "SEO Optimization", "PPC Advertising", "Content Marketing", "Brand Strategy", "Web Development"];
  return <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-black text-xl">N</span>
              </div>
              <span className="text-xl font-bold">Namish Marketing</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              We don't just sell services — we partner with you to achieve real business results.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(social => <a key={social.label} href={social.href} className="w-10 h-10 bg-background rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-accent transition-all duration-300 " aria-label={social.label}>
                  <social.icon size={20} />
                </a>)}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              {services.map(service => <li key={service}>
                  <span className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>)}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail size={18} className="text-primary" />
                <span>hello@namishmarketing.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone size={18} className="text-primary" />
                <span>+91 9243716518</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin size={18} className="text-primary" />
                <span>Madhya Pradesh</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Namish Marketing. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;