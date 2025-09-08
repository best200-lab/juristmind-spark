import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Logo from "@/assets/logo.png";

const Footer = () => {
  const scrollRef = useScrollReveal();
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Features", path: "/features" },
    { name: "Contact Us", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms & Conditions", path: "/terms" },
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <footer ref={scrollRef} className="bg-black text-white border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4 scroll-reveal">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                <img src={Logo} alt="Jurist Mind Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-xl font-bold text-white">
                JURIST MIND
              </span>
            </Link>
            <p className="text-white/80 max-w-sm font-universal">
              Revolutionizing legal practice with cutting-edge AI technology. 
              Experience the future of legal research and analysis.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="sm"
                  className="p-2 hover:bg-white/10 hover:text-primary"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="w-5 h-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4 scroll-reveal-left">
            <h3 className="text-lg font-semibold text-white font-universal">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-primary transition-colors duration-300 font-universal"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 scroll-reveal">
            <h3 className="text-lg font-semibold text-white font-universal">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-white/80">
                <Mail className="w-4 h-4 text-primary" />
                <span className="font-universal">contact@juristmind.com</span>
              </li>
              <li className="flex items-center space-x-3 text-white/80">
                <Phone className="w-4 h-4 text-primary" />
                <span className="font-universal">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-white/80">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-universal">Lagos, Nigeria</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4 scroll-reveal-right">
            <h3 className="text-lg font-semibold text-white font-universal">Stay Updated</h3>
            <p className="text-white/80 text-sm font-universal">
              Get the latest updates on AI legal technology and new features.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-black/50 border border-white/20 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 font-universal text-white placeholder:text-white/50"
              />
              <Button variant="hero" size="sm" className="w-full font-universal">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/20 scroll-reveal">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-white/80 text-sm font-universal">
              © 2025 JURIST MIND. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-white/80">
              <Link to="/privacy" className="hover:text-primary transition-colors font-universal">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors font-universal">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;