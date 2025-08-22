import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Lightbulb, Award, ArrowRight, Brain, Scale, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Brain,
      title: "Innovation",
      description: "Pioneering the future of legal technology with cutting-edge AI solutions.",
      color: "text-primary"
    },
    {
      icon: Scale,
      title: "Integrity",
      description: "Maintaining the highest ethical standards in everything we do.",
      color: "text-secondary"
    },
    {
      icon: Zap,
      title: "Excellence",
      description: "Delivering exceptional results that exceed expectations.",
      color: "text-accent"
    }
  ];

  const stats = [
    { number: "50K+", label: "Legal Documents Analyzed" },
    { number: "99.8%", label: "Accuracy Rate" },
    { number: "75%", label: "Time Saved" },
    { number: "500+", label: "Law Firms Trust Us" }
  ];

  const team = [
    {
      name: "Oluwaseun Ogun",
      role: "CEO & Founder",
      description: "Seun Is the founder of Artificial Inteligence And privacy Lawyers, partner with some years of experience in corporate law.",
      image: "https://pbs.twimg.com/profile_images/1650966849809444868/pyW-YSwK_400x400.jpg"
    },
    {
      name: "Dr. Michael Chen",
      role: "CTO & Co-Founder",
      description: "AI researcher with PhD from Stanford, former Google AI lead.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Emma Rodriguez",
      role: "Head of Legal Affairs",
      description: "Former federal judge with expertise in legal compliance and ethics.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face"
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
              About JURIST MIND
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Revolutionizing Legal Practice with{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Artificial Intelligence
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're on a mission to democratize legal intelligence, making advanced AI-powered 
              legal research and analysis accessible to every legal professional.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Founded in 2024 by a team of legal experts and AI researchers, JURIST MIND was born 
                  from a simple observation: legal professionals spend too much time on research and 
                  not enough time on strategy and client service.
                </p>
                <p>
                  Having worked in top-tier law firms, our founders experienced firsthand the challenges 
                  of managing overwhelming caseloads while maintaining the highest standards of legal analysis. 
                  They envisioned a future where AI could handle the heavy lifting of legal research, 
                  allowing lawyers to focus on what they do best.
                </p>
                <p>
                  Today, JURIST MIND serves hundreds of law firms worldwide, from solo practitioners 
                  to Am Law 100 firms, helping them work more efficiently and deliver better outcomes 
                  for their clients.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-card rounded-2xl p-8 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Brain className="w-16 h-16 text-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-card/60 backdrop-blur-sm border-border/20 hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${value.color} mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-full h-full" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A diverse group of legal experts, AI researchers, and technology leaders
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-card/60 backdrop-blur-sm border-border/20 hover:shadow-elegant transition-all duration-300 group overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
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
              Ready to Transform Your Legal Practice?
            </h2>
            <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Join hundreds of legal professionals who are already experiencing 
              the future of legal AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="bg-background text-foreground hover:bg-background/90">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-background/20 text-foreground hover:bg-background/10">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
