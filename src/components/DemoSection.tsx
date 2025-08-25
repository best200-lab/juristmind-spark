import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageSquare, Send, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const DemoSection = () => {
  const scrollRef = useScrollReveal();

  return (
    <section ref={scrollRef} className="py-24 px-6 bg-gradient-card">
      <div className="container max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold font-universal">
            See{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              JURIST MIND
            </span>{" "}
            in Action
          </h2>
          <p className="text-xl text-muted-foreground font-universal">
            Experience the power of AI-driven legal assistance through our interactive demo
          </p>
        </div>

        {/* Demo Interface */}
        <Card className="p-2 bg-background/5 border-accent/30 shadow-elegant overflow-hidden scroll-reveal-scale">
          <div className="relative rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/4b71c4ec-139f-4890-ba26-69053cd78b0c.png" 
              alt="JURIST MIND Interface showing the legal AI assistant dashboard with sidebar navigation and main chat interface" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center mt-12 scroll-reveal">
          <Button variant="hero" size="xl" className="group font-universal">
            TRY NOW
            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;