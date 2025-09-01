-- Update existing news items with sample HTML blog content
UPDATE public.news 
SET blog_body = '<h2>Revolutionary AI Technology</h2>
<p>JURIST MIND AI 4.0 represents a quantum leap in legal artificial intelligence, combining cutting-edge machine learning with deep legal expertise.</p>

<h3>Key Features:</h3>
<ul>
<li><strong>Native Tool Integration:</strong> Seamlessly connects with legal databases and research tools</li>
<li><strong>Real-time Search:</strong> Instant access to current legal precedents and regulations</li>
<li><strong>Advanced Analytics:</strong> Predictive insights for case outcomes and strategy optimization</li>
</ul>

<h3>Enterprise Capabilities</h3>
<p>Built for large-scale legal operations, JURIST MIND AI 4.0 offers enterprise-grade security, compliance monitoring, and team collaboration features.</p>

<blockquote>
<p>"This technology will fundamentally change how legal professionals work, making complex research accessible in seconds rather than hours." - Legal Tech Review</p>
</blockquote>

<h3>Getting Started</h3>
<p>Available now to Supabase and enterprise customers with comprehensive onboarding and support.</p>'
WHERE id = '2f20883a-4ed4-41c8-b0db-3b2a129f999e';

UPDATE public.news 
SET blog_body = '<h2>Government-Grade Legal AI</h2>
<p>We are proud to introduce JURIST MIND For Government, a specialized suite of AI products designed specifically for US government agencies and departments.</p>

<h3>Security & Compliance</h3>
<p>Built with government-grade security standards, including:</p>
<ul>
<li>FedRAMP compliance ready</li>
<li>Advanced encryption and data protection</li>
<li>Air-gapped deployment options</li>
<li>Comprehensive audit trails</li>
</ul>

<h3>Specialized Features</h3>
<p>Government-specific capabilities include:</p>
<ul>
<li><strong>Regulatory Compliance:</strong> Automated monitoring of federal regulations</li>
<li><strong>Policy Analysis:</strong> AI-powered policy impact assessments</li>
<li><strong>Inter-agency Collaboration:</strong> Secure information sharing platforms</li>
</ul>

<h3>Pilot Program</h3>
<p>Selected government agencies can now participate in our pilot program to experience the full capabilities of JURIST MIND For Government.</p>'
WHERE id = '0e5549c1-4438-4196-a44a-96a614ff9f1e';

UPDATE public.news 
SET blog_body = '<h2>The Dawn of Reasoning AI</h2>
<p>JURIST MIND 3 Beta introduces unprecedented reasoning capabilities, marking a new era in artificial intelligence for legal professionals.</p>

<h3>Advanced Reasoning Engine</h3>
<p>Our latest model combines:</p>
<ul>
<li><strong>Logical Reasoning:</strong> Multi-step legal argument construction</li>
<li><strong>Contextual Understanding:</strong> Deep comprehension of legal nuances</li>
<li><strong>Precedent Analysis:</strong> Sophisticated case law correlation</li>
</ul>

<h3>Knowledge Integration</h3>
<p>Built upon an extensive foundation of legal knowledge:</p>
<ul>
<li>Millions of case precedents</li>
<li>Comprehensive statutory databases</li>
<li>Real-time regulatory updates</li>
<li>International legal frameworks</li>
</ul>

<h3>Beta Access</h3>
<p>Legal professionals can now apply for beta access to experience the future of AI-powered legal reasoning.</p>

<div style="background: #f8f9fa; padding: 20px; border-left: 4px solid #007bff; margin: 20px 0;">
<p><strong>Note:</strong> This is a preview release. Full production version will be available in Q3 2024.</p>
</div>'
WHERE id = '8cf72d77-4eda-4345-a36a-16f16d814402';