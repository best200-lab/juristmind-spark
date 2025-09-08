import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail } from "lucide-react";

const Terms = () => {
  const lastUpdated = "September 3, 2025";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="secondary" className="mb-6">
              Legal Documentation
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-universal">
              Terms and Conditions
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-universal">
              Please read these terms and conditions carefully before using our website and services. By accessing or using our platform, you agree to be bound by these terms.
            </p>
            <p className="text-sm text-muted-foreground mt-4 font-universal">
              Last updated: {lastUpdated}
            </p>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  
                  <h2 className="text-2xl font-bold mb-4 text-foreground font-universal">1. Introduction</h2>
                  <p className="mb-6 text-muted-foreground font-universal">
                    These Terms and Conditions apply to the Jurist Mind AI website and services, including all related transactions involving our artificial intelligence legal assistance platform. By accessing or using our website or services, you agree to be bound by these Terms and Conditions. Additional agreements related to specific services or products provided by Jurist Mind AI may also apply. In case of any conflict between these Terms and any additional agreements, the provisions of the additional agreements will prevail.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-foreground font-universal">2. Binding</h2>
                  <p className="mb-6 text-muted-foreground font-universal">
                    By registering with, accessing, or using the Jurist Mind AI website or services, you agree to be bound by these Terms and Conditions. Your use of the website or services signifies your knowledge and acceptance of these Terms. In certain cases, we may require your explicit consent to these Terms.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-foreground font-universal">3. Electronic Communication</h2>
                  <p className="mb-6 text-muted-foreground font-universal">
                    By using the Jurist Mind AI website or communicating with us electronically, you consent to receiving communications from us via email or through our website. You agree that all agreements, notices, disclosures, and other communications provided electronically satisfy any legal requirement that such communications be in writing, as permitted under Nigerian law, including the Nigerian Electronic Transactions Act.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-foreground font-universal">4. Intellectual Property</h2>
                  <p className="mb-4 text-muted-foreground font-universal">
                    Jurist Mind AI or its licensors own and control all copyright, trademarks, and other intellectual property rights in the website, software, AI algorithms, data, and resources accessible through the platform.
                  </p>
                  <h3 className="text-xl font-semibold mb-3 text-foreground font-universal">4.1 All Rights Reserved</h3>
                  <p className="mb-6 text-muted-foreground font-universal">
                    Unless otherwise specified, you are not granted any license or rights under copyright, trademark, patent, or other intellectual property laws. You may not use, copy, reproduce, distribute, modify, reverse engineer, decompile, or commercialize any resources from the Jurist Mind AI platform without our prior written consent, except as permitted by Nigerian law, including the Copyright Act 2022.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-foreground font-universal">5. Newsletter</h2>
                  <p className="mb-6 text-muted-foreground font-universal">
                    You may forward our newsletter in electronic form to others who may be interested in visiting our website, provided such distribution complies with applicable Nigerian laws, including the Nigeria Data Protection Act 2023.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-foreground font-universal">6. Third-Party Property</h2>
                  <p className="mb-6 text-muted-foreground font-universal">
                    The Jurist Mind AI website may include links to third-party websites or services. We do not monitor or control the content of these third-party websites. Any products or services offered by third parties are subject to their own Terms and Conditions. Opinions or content on third-party websites are not necessarily endorsed by Jurist Mind AI. You assume all risks associated with using third-party websites or services, and we are not liable for any loss or damage resulting from your interactions with such third parties.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-foreground font-universal">7. Responsible Use</h2>
                  <p className="mb-6 text-muted-foreground font-universal">
                    You agree to use the Jurist Mind AI website and services only for their intended purposes, in compliance with these Terms, any additional agreements, and applicable Nigerian laws, including the Cybercrimes (Prohibition, Prevention, Etc.) Act 2015. You must not use the platform to distribute malicious software, engage in unauthorized data collection, or conduct activities that may damage, impair, or interfere with the website's performance or accessibility.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-foreground font-universal">8. Registration</h2>
                  <p className="mb-6 text-muted-foreground font-universal">
                    You may register for an account on the Jurist Mind AI website. You are responsible for maintaining the confidentiality of your password and account information. You must not share your account details with others or allow unauthorized access to your account. You are liable for all activities conducted through your account. Notify us immediately if you suspect any unauthorized use of your account. After account termination, you may not attempt to register a new account without our permission.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-foreground font-universal">9. Content Posted by You</h2>
                  <p className="mb-6 text-muted-foreground font-universal">
                    We may provide communication tools such as forums, reviews, or social media integrations. While we may not screen all user-generated content, we reserve the right to review, monitor, or remove content at our discretion. By posting content, you agree it will comply with these Terms, Nigerian law, and will not infringe on any person's legal rights or be unlawful.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-foreground font-universal">10. Idea Submission</h2>
                  <p className="mb-6 text-muted-foreground font-universal">
                    Do not submit ideas, inventions, or intellectual property to us without a prior written agreement, such as a non-disclosure agreement. If you submit such content without an agreement, you grant Jurist Mind AI a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, adapt, publish, and distribute it in any media.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-foreground font-universal">11. Termination of Use</h2>
                  <p className="mb-6 text-muted-foreground font-universal">
                    We may, at our discretion, suspend or terminate access to the Jurist Mind AI website or services at any time. We are not liable for any loss resulting from such actions, including loss of access to content you have shared. You must not attempt to bypass any access restrictions.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-foreground font-universal">12. Warranties and Liability</h2>
                  <p className="mb-6 text-muted-foreground font-universal">
                    The Jurist Mind AI website and services are provided "as is" and "as available," without warranties of accuracy, availability, or completeness. We disclaim all implied warranties to the extent permitted by Nigerian law. The platform does not provide legal advice but offers AI-generated legal information for guidance. For legal advice, consult a licensed Nigerian legal practitioner.
                  </p>
                  <p className="mb-6 text-muted-foreground font-universal">
                    We are not liable for any direct or indirect damages (including loss of profits, data, or property) arising from your use of the website, except where such liability cannot be excluded under Nigerian law. Our maximum liability for any claims related to the website or services is limited to the amount you paid for the service, where applicable.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-foreground font-universal">13. Privacy</h2>
                  <p className="mb-6 text-muted-foreground font-universal">
                    To use our services, you may need to provide personal information. You agree to provide accurate and up-to-date information. Our handling of your data complies with the Nigeria Data Protection Act 2023. For details, refer to our Privacy Policy and Cookie Policy.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-foreground font-universal">14. Accessibility</h2>
                  <p className="mb-6 text-muted-foreground font-universal">
                    We strive to make our website accessible to individuals with disabilities. If you encounter accessibility issues, please notify us with a detailed description, and we will address resolvable issues using industry-standard tools.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-foreground font-universal">15. Legal Compliance</h2>
                  <p className="mb-6 text-muted-foreground font-universal">
                    You may not access the Jurist Mind AI website or services from jurisdictions where such access is illegal. You must comply with all applicable Nigerian laws, including export control regulations.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-foreground font-universal">16. Affiliate Marketing</h2>
                  <p className="mb-6 text-muted-foreground font-universal">
                    We may engage in affiliate marketing or accept advertising compensation. This complies with Nigerian advertising regulations and applicable disclosure requirements.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-foreground font-universal">17. Assignment</h2>
                  <p className="mb-6 text-muted-foreground font-universal">
                    You may not assign or transfer your rights or obligations under these Terms without our prior written consent. Any unauthorized assignment is void.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-foreground font-universal">18. Breaches of These Terms</h2>
                  <p className="mb-6 text-muted-foreground font-universal">
                    If you breach these Terms, we may take appropriate action, including suspending your access, contacting your internet service provider, or pursuing legal action under Nigerian law.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-foreground font-universal">19. Force Majeure</h2>
                  <p className="mb-6 text-muted-foreground font-universal">
                    No party will be liable for delays or failures to perform obligations under these Terms due to events beyond their reasonable control, except for payment obligations.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-foreground font-universal">20. Indemnification</h2>
                  <p className="mb-6 text-muted-foreground font-universal">
                    You agree to indemnify and hold Jurist Mind AI harmless from claims, damages, or expenses arising from your violation of these Terms or Nigerian law, including intellectual property or privacy rights.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-foreground font-universal">21. Waiver</h2>
                  <p className="mb-6 text-muted-foreground font-universal">
                    Failure to enforce any provision of these Terms does not constitute a waiver of such provisions or affect their validity.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-foreground font-universal">22. Language</h2>
                  <p className="mb-6 text-muted-foreground font-universal">
                    These Terms are interpreted and construed in English. All notices and correspondence will be in English.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-foreground font-universal">23. Entire Agreement</h2>
                  <p className="mb-6 text-muted-foreground font-universal">
                    These Terms, along with our Privacy Policy and Cookie Policy, constitute the entire agreement between you and Jurist Mind AI regarding your use of the website and services.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-foreground font-universal">24. Updating of These Terms</h2>
                  <p className="mb-6 text-muted-foreground font-universal">
                    We may update these Terms periodically. The latest revision date is shown above. Your continued use of the website after updates constitutes acceptance of the revised Terms.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-foreground font-universal">25. Choice of Law and Jurisdiction</h2>
                  <p className="mb-6 text-muted-foreground font-universal">
                    These Terms are governed by the laws of the Federal Republic of Nigeria. Any disputes arising from these Terms will be subject to the exclusive jurisdiction of Nigerian courts. If any provision is found invalid or unenforceable, it will be modified or deleted to the extent necessary, and the remaining provisions will remain in effect.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-foreground font-universal">26. Contact Information</h2>
                  <p className="mb-6 text-muted-foreground font-universal">
                    This website is owned and operated by Jurist Mind AI. For inquiries, contact us at:
                  </p>
                  <div className="flex items-center space-x-3 text-muted-foreground p-4 bg-card/50 rounded-lg border">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="font-universal">contact@juristmind.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;