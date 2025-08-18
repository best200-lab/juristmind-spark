import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  FileSearch, 
  MessageSquare, 
  Shield, 
  Lightbulb, 
  TrendingUp, 
  Users 
} from "lucide-react";

const features = [
  {
    icon: FileSearch,
    title: "Intelligent Case Research",
    description: "Advanced AI algorithms analyze millions of legal documents, cases, and precedents to provide comprehensive research results in seconds.",
    color: "text-primary"
  },
  {
    icon: MessageSquare,
    title: "Legal Consultation Chat",
    description: "Natural language processing enables seamless conversations about complex legal matters with contextual understanding.",
    color: "text-secondary"
  },
  {
    icon: Shield,
    title: "Compliance Monitoring",
    description: "Stay ahead of regulatory changes with real-time compliance tracking and automated alerts for your practice areas.",
    color: "text-accent"
  },
  {
    icon: Lightbulb,
    title: "Strategic Insights",
    description: "Leverage predictive analytics to identify winning strategies and potential case outcomes based on historical data.",
    color: "text-primary-glow"
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description: "Track your legal practice performance with detailed analytics and recommendations for improvement.",
    color: "text-secondary-glow"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamlessly collaborate with your legal team through shared workspaces and real-time knowledge sharing.",
    color: "text-accent-glow"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Revolutionizing Legal Practice with{" "}
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              AI Intelligence
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Discover how JURIST MIND transforms every aspect of legal work through 
            cutting-edge artificial intelligence and deep legal expertise.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-8 bg-gradient-card border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-elegant group"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-lg bg-background/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="secondary" size="xl" className="group" asChild>
            <a href="/features">
              Explore All Features
              <FileSearch className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;