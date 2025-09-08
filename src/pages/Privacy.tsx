import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, FileText, Users, Settings } from "lucide-react";

const Privacy = () => {
  const lastUpdated = "January 15, 2024";

  const sections = [
    {
      icon: FileText,
      title: "Information We Collect",
      content: [
        "Account information (name, email, company details)",
        "Usage data and analytics to improve our services",
        "Legal documents and research queries you submit",
        "Communication records when you contact support",
        "Technical information (IP address, browser type, device information)"
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "Provide and improve our AI-powered legal services",
        "Respond to your inquiries and provide customer support",
        "Send important updates about our services",
        "Conduct research and analytics to enhance our platform",
        "Ensure security and prevent fraud or abuse"
      ]
    },
    {
      icon: Users,
      title: "Information Sharing",
      content: [
        "We do not sell, trade, or rent your personal information",
        "We may share data with trusted service providers under strict agreements",
        "Legal compliance: We may disclose information when required by law",
        "Business transfers: In case of merger or acquisition with proper notice",
        "With your consent: We may share information with your explicit permission"
      ]
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        "End-to-end encryption for all data transmission",
        "Regular security audits and vulnerability assessments",
        "Secure data centers with 24/7 monitoring",
        "Access controls and authentication requirements",
        "Regular backups and disaster recovery procedures"
      ]
    },
    {
      icon: Settings,
      title: "Your Rights and Controls",
      content: [
        "Access and review your personal information",
        "Request corrections to inaccurate data",
        "Delete your account and associated data",
        "Export your data in a portable format",
        "Opt-out of non-essential communications"
      ]
    },
    {
      icon: Shield,
      title: "Data Retention",
      content: [
        "Account data: Retained while your account is active",
        "Legal documents: Retained for service provision and legal compliance",
        "Usage analytics: Anonymized and aggregated data may be retained longer",
        "Communication records: Retained for customer service purposes",
        "You can request deletion of your data at any time"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <Badge variant="outline" className="mb-6 border-primary/20 text-primary">
              Privacy Policy
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Privacy is{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Our Priority
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              We are committed to protecting your privacy and ensuring the security of your data. 
              This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: <span className="font-medium">{lastUpdated}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-16 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Privacy Principles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We built JURIST MIND with privacy and security at its core, following these fundamental principles.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card/60 backdrop-blur-sm border-border/20 text-center">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Transparency</h3>
                <p className="text-sm text-muted-foreground">
                  We're clear about what data we collect and how we use it.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/60 backdrop-blur-sm border-border/20 text-center">
              <CardContent className="p-6">
                <Lock className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Security</h3>
                <p className="text-sm text-muted-foreground">
                  Your data is protected with enterprise-grade security measures.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/60 backdrop-blur-sm border-border/20 text-center">
              <CardContent className="p-6">
                <Settings className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Control</h3>
                <p className="text-sm text-muted-foreground">
                  You have full control over your data and privacy settings.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <Card key={index} className="bg-card/60 backdrop-blur-sm border-border/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <section.icon className="w-6 h-6 text-primary" />
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Compliance */}
      <section className="py-16 bg-card/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-card/60 backdrop-blur-sm border-border/20">
            <CardHeader>
              <CardTitle className="text-center">Legal Compliance & Regulations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold">GDPR Compliance</h4>
                  <p className="text-sm text-muted-foreground">
                    We comply with the EU General Data Protection Regulation, ensuring your rights 
                    to data portability, rectification, and erasure.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold">CCPA Compliance</h4>
                  <p className="text-sm text-muted-foreground">
                    California residents have additional rights under the California Consumer 
                    Privacy Act, which we fully respect and support.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold">SOC 2 Type II</h4>
                  <p className="text-sm text-muted-foreground">
                    Our security practices are audited and certified to meet SOC 2 Type II 
                    standards for security and availability.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold">Attorney-Client Privilege</h4>
                  <p className="text-sm text-muted-foreground">
                    We understand the sensitive nature of legal work and maintain strict 
                    confidentiality protocols to protect privileged communications.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-card/60 backdrop-blur-sm border-border/20">
            <CardHeader>
              <CardTitle className="text-center">Questions About Privacy?</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy or our data practices, 
                please don't hesitate to contact us.
              </p>
              
              <div className="space-y-2">
                <p className="font-medium">Privacy Officer</p>
                <p className="text-sm text-muted-foreground">privacy@juristmind.com</p>
                <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
              </div>
              
              <div className="pt-4">
                <p className="text-sm text-muted-foreground">
                  JURIST MIND, Inc.<br />
                  Office Complex, Phase 3 LSDPC, Ogba<br />
                  Lagos, Nigeria.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;