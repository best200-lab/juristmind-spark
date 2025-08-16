import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Scale, Zap } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/80" />
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-secondary/20 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse delay-500" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-card border border-accent/30 text-sm font-medium">
            <Zap className="w-4 h-4 text-accent" />
            <span>Powered by Advanced AI</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              JURIST MIND
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Revolutionary AI-powered legal assistant that transforms how legal professionals research, 
              analyze, and practice law with unparalleled intelligence and precision.
            </p>
          </div>

          {/* Feature Icons */}
          <div className="flex items-center justify-center gap-8 py-6">
            <div className="flex items-center gap-2 text-primary">
              <Brain className="w-6 h-6" />
              <span className="text-sm font-medium">AI Intelligence</span>
            </div>
            <div className="flex items-center gap-2 text-secondary">
              <Scale className="w-6 h-6" />
              <span className="text-sm font-medium">Legal Expertise</span>
            </div>
            <div className="flex items-center gap-2 text-accent">
              <Zap className="w-6 h-6" />
              <span className="text-sm font-medium">Instant Results</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" className="group">
              Experience JURIST MIND
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl">
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-glow">99.8%</div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-glow">10x</div>
              <div className="text-sm text-muted-foreground">Faster Research</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-glow">24/7</div>
              <div className="text-sm text-muted-foreground">Availability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;