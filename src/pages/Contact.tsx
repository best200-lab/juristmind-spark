import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, HeadphonesIcon } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Contact = () => {
  const scrollRef = useScrollReveal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    inquiryType: ""
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "contact@juristmind.ai",
      description: "Send us an email anytime",
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm PST",
      color: "text-secondary"
    },
    {
      icon: MapPin,
      title: "Office",
      details: "San Francisco, CA",
      description: "123 Innovation Drive, Suite 400",
      color: "text-accent"
    },
    {
      icon: Clock,
      title: "Support Hours",
      details: "24/7 Available",
      description: "We're here to help anytime",
      color: "text-primary"
    }
  ];

  const inquiryTypes = [
    "General Inquiry",
    "Sales & Pricing",
    "Technical Support",
    "Partnership",
    "Media & Press",
    "Feedback"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
        inquiryType: ""
      });
    } catch (error: any) {
      console.error('Error sending contact form:', error);
      
      // More detailed error messaging
      let errorMessage = "Failed to send message. Please try again later.";
      if (error?.message) {
        errorMessage = `Error: ${error.message}`;
      }
      
      toast({
        title: "Message Failed",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSupportTicket = () => {
    // Open support ticket modal or redirect to support page
    window.open('mailto:Ogunseun7@gmail.com?subject=Support Ticket Request&body=Please describe your issue:', '_blank');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

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
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-universal">
              Get in Touch with{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Our Team
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 font-universal">
              Have questions about JURIST MIND? We're here to help. Reach out to our team 
              and discover how AI can transform your legal practice.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className={`bg-card/60 backdrop-blur-sm border-border/20 hover:shadow-elegant transition-all duration-300 group text-center scroll-reveal ${
                index % 2 === 0 ? 'scroll-reveal-left' : 'scroll-reveal-right'
              }`}>
                <CardContent className="p-6">
                  <div className={`w-12 h-12 ${info.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="w-full h-full" />
                  </div>
                  <h3 className="font-semibold mb-2 font-universal">{info.title}</h3>
                  <p className="text-lg font-medium mb-1 font-universal">{info.details}</p>
                  <p className="text-sm text-muted-foreground font-universal">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & FAQ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="scroll-reveal">
              <Card className="bg-card/60 backdrop-blur-sm border-border/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-universal">
                    <MessageSquare className="w-6 h-6 text-primary" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="font-universal">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Your full name"
                          className="font-universal"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="font-universal">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your@email.com"
                          className="font-universal"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company" className="font-universal">Company/Firm</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          placeholder="Your company name"
                          className="font-universal"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="inquiryType" className="font-universal">Inquiry Type</Label>
                        <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange("inquiryType", value)}>
                          <SelectTrigger className="font-universal">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            {inquiryTypes.map((type) => (
                              <SelectItem key={type} value={type} className="font-universal">
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="font-universal">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        placeholder="Brief description of your inquiry"
                        className="font-universal"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-universal">Message *</Label>
                      <Textarea
                        id="message"
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us more about your inquiry..."
                        className="font-universal"
                        required
                      />
                    </div>

                    <Button type="submit" variant="hero" className="w-full font-universal" disabled={loading}>
                      {loading ? "Sending..." : "Send Message"}
                      {!loading && <Send className="ml-2 w-4 h-4" />}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* FAQ & Support Info */}
            <div className="space-y-8 scroll-reveal-right">
              <Card className="bg-card/60 backdrop-blur-sm border-border/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-universal">
                    <HeadphonesIcon className="w-6 h-6 text-primary" />
                    Need Immediate Help?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <h4 className="font-semibold text-primary mb-2 font-universal">Technical Support</h4>
                    <p className="text-sm text-muted-foreground mb-3 font-universal">
                      For urgent technical issues, contact our support team directly.
                    </p>
                    <Button variant="outline" size="sm" className="w-full font-universal" onClick={handleSupportTicket}>
                      Open Support Ticket
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/60 backdrop-blur-sm border-border/20">
                <CardHeader>
                  <CardTitle className="font-universal">Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold font-universal">How quickly can I get started?</h4>
                    <p className="text-sm text-muted-foreground font-universal">
                      You can start using JURIST MIND immediately after signing up. 
                      Our onboarding process takes less than 5 minutes.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold font-universal">Do you offer training?</h4>
                    <p className="text-sm text-muted-foreground font-universal">
                      Yes! We provide comprehensive training sessions and ongoing support 
                      to ensure you get the most out of our platform.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold font-universal">Is my data secure?</h4>
                    <p className="text-sm text-muted-foreground font-universal">
                      Absolutely. We use enterprise-grade security measures and comply 
                      with all relevant data protection regulations including GDPR and CCPA.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold font-universal">What types of legal documents can AI analyze?</h4>
                    <p className="text-sm text-muted-foreground font-universal">
                      JURIST MIND can analyze contracts, legal briefs, case law, statutes, 
                      regulations, and virtually any legal document format.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold font-universal">Do you offer API integration?</h4>
                    <p className="text-sm text-muted-foreground font-universal">
                      Yes, we provide robust API access for enterprise clients to integrate 
                      our AI capabilities directly into their existing legal systems.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold font-universal">What is your pricing model?</h4>
                    <p className="text-sm text-muted-foreground font-universal">
                      We offer flexible pricing plans based on usage and team size, 
                      starting from individual practitioners to enterprise solutions.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="text-3xl font-bold mb-4 font-universal">Visit Our Office</h2>
            <p className="text-muted-foreground font-universal">
              Located in the heart of San Francisco's tech district
            </p>
          </div>
          
          <div className="aspect-video bg-gradient-card rounded-2xl flex items-center justify-center scroll-reveal-scale">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 font-universal">JURIST MIND Headquarters</h3>
              <p className="text-muted-foreground font-universal">123 Innovation Drive, Suite 400</p>
              <p className="text-muted-foreground font-universal">San Francisco, CA 94105</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;