import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Scale, Zap } from "lucide-react";
import professionalPerson from "@/assets/professional-person.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const HeroSection = () => {
  const scrollRef = useScrollReveal();

  return (
    <section ref={scrollRef} className="relative min-h-screen bg-glossy-white">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 scroll-reveal">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary font-universal">
              <Zap className="w-4 h-4" />
              <span>#1 Legal Ai Platform with Deep search Functionality</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-5xl md:text-7xl font-black text-primary leading-tight font-universal">
                  JURIST
                </h1>
                <h1 className="text-5xl md:text-7xl font-black text-secondary leading-tight font-universal">
                  MIND
                </h1>
              </div>
              <p className="text-lg md:text-xl text-foreground max-w-2xl leading-relaxed font-universal">
                Revolutionary <span className="text-primary font-bold">AI-POWERED</span> legal assistant that transforms how legal professionals research, 
                analyze, and practice law with <span className="text-secondary font-bold">UNPARALLELED INTELLIGENCE</span> and precision.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button variant="default" size="xl" className="group font-universal" asChild>
                <a href="/auth?mode=signup">
                  Experience JURIST MIND
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="xl" className="font-universal">
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Professional Image */}
          <div className="relative scroll-reveal-right">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={professionalPerson} 
                alt="Professional legal expert with law books and scales of justice" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>
        </div>

        
        {/* Feature Icons & Stats */}
        <div className="mt-16 space-y-12">
          <div className="flex items-center justify-center gap-8 py-6 scroll-reveal">
            <div className="flex items-center gap-2 text-primary">
              <Brain className="w-6 h-6" />
              <span className="text-sm font-medium font-universal">AI Intelligence</span>
            </div>
            <div className="flex items-center gap-2 text-secondary">
              <Scale className="w-6 h-6" />
              <span className="text-sm font-medium font-universal">Legal Expertise</span>
            </div>
            <div className="flex items-center gap-2 text-accent">
              <Zap className="w-6 h-6" />
              <span className="text-sm font-medium font-universal">Instant Results</span>
            </div>
          </div>

          {/* Stats with Countdown Animation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto scroll-reveal-scale">
            <div className="text-center">
              <div className="text-4xl font-black text-primary countdown-text font-universal">99.8%</div>
              <div className="text-sm text-muted-foreground font-medium font-universal">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-secondary countdown-text-delayed font-universal">10x</div>
              <div className="text-sm text-muted-foreground font-medium font-universal">Faster Research</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-accent countdown-text-delayed-2 font-universal">24/7</div>
              <div className="text-sm text-muted-foreground font-medium font-universal">Availability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;