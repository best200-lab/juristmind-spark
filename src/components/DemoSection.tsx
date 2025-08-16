import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageSquare, Send, Sparkles } from "lucide-react";

const DemoSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-card">
      <div className="container max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            See{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              JURIST MIND
            </span>{" "}
            in Action
          </h2>
          <p className="text-xl text-muted-foreground">
            Experience the power of AI-driven legal assistance through our interactive demo
          </p>
        </div>

        {/* Demo Interface */}
        <Card className="p-8 bg-background/5 border-accent/30 shadow-elegant">
          <div className="space-y-6">
            {/* Chat Header */}
            <div className="flex items-center gap-3 pb-4 border-b border-accent/20">
              <div className="w-10 h-10 rounded-full bg-gradient-secondary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">JURIST MIND Assistant</h3>
                <p className="text-sm text-muted-foreground">Legal AI Expert</p>
              </div>
              <div className="ml-auto">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
              </div>
            </div>

            {/* Chat Messages */}
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {/* User Message */}
              <div className="flex justify-end">
                <div className="max-w-[80%] bg-primary/20 rounded-2xl rounded-br-sm p-4">
                  <p className="text-sm">
                    "I need to understand the implications of the new data privacy regulations 
                    for my corporate clients. Can you help me research recent case law?"
                  </p>
                </div>
              </div>

              {/* AI Response */}
              <div className="flex justify-start">
                <div className="max-w-[80%] bg-gradient-card rounded-2xl rounded-bl-sm p-4 border border-accent/20">
                  <p className="text-sm mb-3">
                    I'll analyze the latest data privacy regulations and relevant case law for you. 
                    Based on my research of 50,000+ recent legal documents:
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span>GDPR Article 82 implications (3 key cases)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>Corporate liability frameworks (Updated 2024)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      <span>Compliance strategies (5 recommendations)</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-accent/10">
                    <p className="text-xs text-muted-foreground">
                      Analysis complete in 2.3 seconds • 99.8% confidence
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="flex items-center gap-3 pt-4 border-t border-accent/20">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Ask JURIST MIND anything about law..."
                  className="w-full bg-input border border-accent/30 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                  disabled
                />
                <MessageSquare className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
              <Button variant="accent" size="icon" disabled>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="xl" className="group">
            Try Interactive Demo
            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;