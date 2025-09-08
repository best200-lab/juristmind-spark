import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Lightbulb, Award, ArrowRight, Brain, Scale, Zap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const About = () => {
  const scrollRef = useScrollReveal();
  
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
      name: "Adeniran Samson",
      role: "Co-Founder",
      description: "Samson is a co founder of Jurist mind and a Diploma law graduate",
      image: "https://pbs.twimg.com/profile_images/1962929871010594816/tw94NciO.jpg"
    },
    {
      name: "Emma Rodriguez",
      role: "Head of Legal Affairs",
      description: "Former federal judge with expertise in legal compliance and ethics.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <div ref={scrollRef} className="min-h-screen bg-gradient-bg">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto scroll-reveal">
            <Badge variant="outline" className="mb-6 border-primary/20 text-primary font-universal">
              About JURIST MIND
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-universal">
              Revolutionizing Legal Practice with{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Artificial Intelligence
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 font-universal">
              We're on a mission to democratize legal intelligence, making advanced AI-powered 
              legal research and analysis accessible to every legal professional and law students.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className={`text-center group scroll-reveal ${
                index % 2 === 0 ? 'scroll-reveal-left' : 'scroll-reveal-right'
              }`}>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300 font-universal">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-universal">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-reveal">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-universal">
                Our Story
              </h2>
<div className="space-y-6 text-muted-foreground">
  <p className="font-universal">
    Jurist Mind began as an experimental project aimed at exploring how <b>AI intersects with law</b> — 
    from the risks of privacy breaches to the ways AI systems handle user documents. 
    What started as a learning journey quickly revealed deeper challenges within the legal tech space.
  </p>
  <p className="font-universal">
    As these issues came to light, our mission evolved. Jurist Mind shifted from being just a research 
    initiative to becoming a <b>solution-driven platform</b> designed to support lawyers and law students. 
    Our focus is on identifying and closing the loopholes that threaten confidentiality, while building 
    trust through innovation.
  </p>
  <p className="font-universal">
    Today, Jurist Mind is dedicated to delivering <b>end-to-end AI services</b> with advanced, robust 
    technology that ensures <b>maximum privacy and security</b>. By doing so, we empower legal professionals 
    to work smarter, safer, and with greater confidence in the digital age.
  </p>
</div>

            </div>
            <div className="relative scroll-reveal-right">
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
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-universal">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-universal">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className={`bg-card/60 backdrop-blur-sm border-border/20 hover:shadow-elegant transition-all duration-300 group scroll-reveal ${
                index % 3 === 0 ? '' : index % 3 === 1 ? 'scroll-reveal-left' : 'scroll-reveal-right'
              }`}>
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${value.color} mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-full h-full" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 font-universal">{value.title}</h3>
                  <p className="text-muted-foreground font-universal">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-universal">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-universal">
              A diverse group of legal experts, AI researchers, and technology leaders
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className={`bg-card/60 backdrop-blur-sm border-border/20 hover:shadow-elegant transition-all duration-300 group overflow-hidden scroll-reveal ${
                index % 3 === 0 ? '' : index % 3 === 1 ? 'scroll-reveal-left' : 'scroll-reveal-right'
              }`}>
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 font-universal">{member.name}</h3>
                  <p className="text-primary font-medium mb-3 font-universal">{member.role}</p>
                  <p className="text-muted-foreground text-sm font-universal">{member.description}</p>
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
          <div className="text-center scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground font-universal">
              Ready to Transform Your Legal Practice?
            </h2>
            <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto font-universal">
              Join hundreds of legal professionals who are already experiencing 
              the future of legal AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="bg-background text-foreground hover:bg-background/90 font-universal">
                Join Us Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-background/20 text-foreground hover:bg-background/10 font-universal">
                Start For Free
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
