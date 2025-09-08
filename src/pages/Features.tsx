import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileSearch, 
  MessageSquare, 
  Shield, 
  Lightbulb, 
  TrendingUp, 
  Users, 
  Clock, 
  CheckCircle, 
  Zap,
  Brain,
  Database,
  Globe,
  ArrowRight
} from "lucide-react";

const Features = () => {
  const mainFeatures = [
    {
      icon: FileSearch,
      title: "AI-Powered Legal Research",
      description: "Advanced natural language processing to analyze vast legal databases in seconds.",
      details: [
        "Search across millions of cases and statutes",
        "Contextual understanding of legal queries",
        "Instant citation and precedent identification",
        "Multi-jurisdictional research capabilities"
      ],
      color: "text-primary"
    },
    {
      icon: MessageSquare,
      title: "Intelligent Legal Chat",
      description: "Conversational AI that understands complex legal questions and provides detailed answers that match users intent.",
      details: [
        "Natural language legal consultation",
        "Case strategy recommendations",
        "Real-time legal advice",
        "Document drafting assistance"
      ],
      color: "text-secondary"
    },
    {
      icon: Shield,
      title: "Privacy Compliance & Security",
      description: "We safeguard every conversation and document with robust encryption and privacy-first architecture..",
      details: [
        "End-to-end encrypted conversations",
        "Zero data sharing with third parties",
        "Secure document handling and storage",
        "User-controlled data access and retention"
      ],
      color: "text-accent"
    }
  ];

  const additionalFeatures = [
    {
      icon: Brain,
      title: "Machine Learning Insights",
      description: "Predictive analytics for case outcomes and legal strategy optimization. Just give us the full details"
    },
    {
      icon: Database,
      title: "Comprehensive Legal Database",
      description: "Access to the most extensive collection of legal documents and precedents."
    },
    {
      icon: Globe,
      title: "Multi-Jurisdiction Support",
      description: "Research and analysis across different legal systems and jurisdictions."
    },
    {
      icon: Clock,
      title: "Real-Time Updates",
      description: "Instant notifications about relevant legal changes and new precedents."
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Track research efficiency and case success rates with detailed analytics."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamless collaboration tools for legal teams and knowledge sharing."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$30",
      period: "/month",
      description: "Perfect for solo practitioners and small firms",
      features: [
        "50 AI research queries per month",
        "Basic legal chat support",
        "Standard document templates",
        "Email support",
        "Basic analytics"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      price: "$150",
      period: "/month",
      description: "Ideal for growing law firms",
      features: [
        "500 AI research queries per month",
        "Advanced legal chat with citations",
        "Premium document templates",
        "Priority support",
        "Advanced analytics",
        "Team collaboration tools",
        "Compliance monitoring"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large firms and organizations",
      features: [
        "Unlimited AI research queries",
        "Full legal AI suite",
        "Custom integrations",
        "Dedicated account manager",
        "Custom training",
        "Advanced security features",
        "API access"
      ],
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-bg">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 border-primary/20 text-primary">
              Our Features
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Powerful AI Tools for{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Legal Excellence
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover the comprehensive suite of AI-powered features designed to 
              revolutionize your legal practice and boost productivity.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainFeatures.map((feature, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`w-16 h-16 ${feature.color} mb-6`}>
                    <feature.icon className="w-full h-full" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    {feature.title}
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    {feature.description}
                  </p>
                  <div className="space-y-3 mb-8">
                    {feature.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="hero" size="lg">
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <div className="aspect-video bg-gradient-card rounded-2xl p-8 flex items-center justify-center">
                      <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center">
                        <feature.icon className="w-16 h-16 text-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Even More Powerful Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive suite of tools designed to enhance every aspect of your legal practice
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="bg-card/60 backdrop-blur-sm border-border/20 hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-full h-full" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Select the perfect plan for your practice size and needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.highlighted ? 'border-primary shadow-primary bg-card/80' : 'bg-card/60'} backdrop-blur-sm border-border/20 hover:shadow-elegant transition-all duration-300`}>
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  <Button 
                    variant={plan.highlighted ? "hero" : "outline"} 
                    className="w-full mt-6"
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-background/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Experience the Future of Legal AI
            </h2>
            <a 
  href="/auth" 
  className="inline-block px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition"
>
  Start Your Free Trial
</a>
<p className="mt-3 text-muted-foreground">
  Discover how <b>JURIST MIND</b> can transform your legal practice with smarter, faster, and more secure AI tools.
</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;