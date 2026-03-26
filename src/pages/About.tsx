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
      description: "Seun is the founder of Artificial Intelligence and Privacy Lawyers, with years of experience in corporate law and digital transformation.",
      image: "https://pbs.twimg.com/profile_images/1650966849809444868/pyW-YSwK_400x400.jpg"
    },
    {
      name: "Adeniran Samson",
      role: "Co-Founder",
      description: "Samson is a co-founder of Jurist Mind and a Diploma Law graduate passionate about innovation in legal technology.",
      image: "https://pbs.twimg.com/profile_images/1962929871010594816/tw94NciO.jpg"
    },
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
              Redefining the Future of{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Legal Innovation in Nigeria
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 font-universal">
              At Jurist Mind AI, we are redefining the future of law in Nigeria through the nation’s most advanced AI-powered legal-tech workspace—built to empower every lawyer, law student, and legal professional with speed, accuracy, and intelligence.
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

      {/* About Jurist Mind AI Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-reveal">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-universal">
                About Jurist Mind AI
              </h2>
              <div className="space-y-6 text-muted-foreground font-universal leading-relaxed">
                <p>
                  At Jurist Mind AI, we are redefining the future of law in Nigeria through the nation’s most advanced AI-powered legal-tech workspace. Born from a deep commitment to empower Nigerian lawyers, law students, and legal professionals, our platform stands as a groundbreaking force at the intersection of law and technology—delivering unmatched intelligence, efficiency, and precision powered by real-time 2025 data and beyond.
                </p>
                <p>
                  Our mission is simple yet transformative: to bridge the gap between traditional legal practice and cutting-edge innovation. Whether you’re a seasoned attorney managing a demanding caseload, a law student mastering complex concepts, or a firm seeking smarter collaboration, Jurist Mind AI is your trusted partner. Designed exclusively for the Nigerian legal ecosystem, it seamlessly integrates local laws, precedents, and real-world needs into one intelligent workspace—helping every user work faster, think sharper, and connect better.
                </p>
                <h3 className="text-2xl font-semibold text-foreground mt-8">Why Jurist Mind AI Leads the Future of Legal Innovation</h3>
                <ul className="list-disc pl-6 space-y-4">
                  <li><b>Unmatched Drafting Precision:</b> Our AI drafting system achieves a 99.8% accuracy rate, producing flawless legal documents, contracts, pleadings, and briefs trained on extensive Nigerian datasets and current precedents.</li>
                  <li><b>Empowering Employment and Networking:</b> Beyond technology, we empower opportunity by connecting legal professionals to jobs, internships, and collaborations in one thriving ecosystem.</li>
                  <li><b>Real-Time Case Reports:</b> Access and share the latest judgments instantly, including cases that overturn existing precedents, ensuring you stay ahead of every development.</li>
                  <li><b>Intelligent Legal Diary:</b> Schedule hearings, manage tasks, and track progress with smart reminders and productivity insights—all in one secure workspace.</li>
                  <li><b>Advanced Case Management:</b> Manage matters through intuitive dashboards that track progress, identify bottlenecks, and optimize resources.</li>
                  <li><b>Seamless Lawyer–Client Connections:</b> Our algorithm matches clients to lawyers based on expertise, location, and needs—expanding reach and fostering trust.</li>
                </ul>
                <p>
                  What truly sets Jurist Mind AI apart is our holistic vision. We’re not just a tool—we’re a complete ecosystem designed to empower, connect, and elevate the entire Nigerian legal community. From case management and research to collaboration and networking, every feature simplifies your workflow and amplifies your impact.
                </p>
                <p>
                  With real-time access to verified 2025 data, our AI anticipates trends, automates tasks, and delivers actionable insights—saving time, reducing errors, and keeping you ahead of the curve. Security remains our foundation: all user data is fully encrypted and compliant with Nigerian data protection regulations.
                </p>
                <p>
                  Join the growing community of Nigerian lawyers and students transforming their practice with Jurist Mind AI. Whether you’re drafting landmark agreements, analyzing pivotal judgments, or building your career—we’re here to elevate your journey.
                </p>
                <p className="italic text-primary">
                  Discover the power of true legal innovation today at <a href="https://juristmind.com" className="underline">juristmind.com</a>.
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
              Join hundreds of legal professionals already experiencing the future of legal AI with Jurist Mind.
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
