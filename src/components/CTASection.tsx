import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Mail, MessageSquare } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const benefits = [
  "Advanced AI legal research",
  "24/7 intelligent assistance", 
  "Compliance monitoring",
  "Performance analytics",
  "Team collaboration tools",
  "Secure data handling"
];

const CTASection = () => {
  const scrollRef = useScrollReveal();

  return (
    <section ref={scrollRef} className="py-24 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-hero opacity-10" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="text-center space-y-12">
          {/* Main Content */}
          <div className="max-w-3xl mx-auto space-y-6 scroll-reveal">
            <h2 className="text-4xl md:text-6xl font-bold font-universal">
              Ready to Transform Your{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Legal Practice?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-universal">
              Join thousands of legal professionals who trust JURIST MIND to enhance 
              their practice with cutting-edge AI technology. Get started today and 
              experience the future of legal work.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto scroll-reveal-scale">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-gradient-card p-4 rounded-lg border border-accent/20"
              >
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm font-medium font-universal">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 scroll-reveal">
            <Button variant="hero" size="xl" className="group font-universal">
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="group font-universal">
              <MessageSquare className="w-5 h-5" />
              Schedule Demo
            </Button>
          </div>

          {/* Contact Info */}
          <div className="pt-8 border-t border-accent/20 scroll-reveal">
            <p className="text-muted-foreground mb-4 font-universal">
              Questions? Our legal AI experts are here to help.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <a 
                href="mailto:Info@juristmind.com" 
                className="flex items-center gap-2 text-accent hover:text-accent-glow transition-colors font-universal"
              >
                <Mail className="w-4 h-4" />
                Info@juristmind.com
              </a>
              <span className="text-muted-foreground">|</span>
              <span className="text-muted-foreground font-universal">1-800-JURIST-1</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;