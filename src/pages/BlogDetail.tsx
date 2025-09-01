import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface NewsItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image_url: string;
  gradient: string;
  published_date: string;
  author: string;
  blog_body?: string;
  created_at: string;
  updated_at: string;
  is_published: boolean;
}

const BlogDetail = () => {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const scrollRef = useScrollReveal();

  useEffect(() => {
    const fetchNewsItem = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('news', {
          method: 'GET'
        });

        if (error) {
          console.error('Error fetching news:', error);
          return;
        }

        const item = data?.find((item: NewsItem) => item.id === id);
        setNewsItem(item || null);
      } catch (error) {
        console.error('Error fetching news item:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchNewsItem();
    }
  }, [id]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container px-6 py-24">
          <div className="flex items-center justify-center">
            <div className="text-2xl font-bold font-universal">Loading...</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!newsItem) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container px-6 py-24">
          <div className="text-center">
            <h1 className="text-2xl font-bold font-universal mb-4">Article Not Found</h1>
            <Link to="/blog">
              <Button variant="outline" className="font-universal">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main ref={scrollRef} className="container px-6 py-24">
        {/* Back Button */}
        <div className="mb-8 scroll-reveal">
          <Link to="/blog">
            <Button variant="ghost" className="font-universal">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All News
            </Button>
          </Link>
        </div>

        {/* Hero Image */}
        <div className="relative h-64 md:h-96 mb-8 overflow-hidden rounded-2xl scroll-reveal">
          <div 
            className={`absolute inset-0 bg-gradient-to-br ${newsItem.gradient} opacity-90`}
          />
          <img 
            src={newsItem.image_url} 
            alt={newsItem.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-6">
            <span className="px-4 py-2 bg-background/90 text-foreground text-sm font-black rounded-full border-2 border-accent font-universal">
              <Tag className="w-3 h-3 inline mr-2" />
              {newsItem.category}
            </span>
          </div>
        </div>

        {/* Article Content */}
        <Card className="max-w-4xl mx-auto bg-card border-border scroll-reveal-scale">
          <CardHeader className="space-y-6">
            <CardTitle className="text-3xl md:text-4xl font-black text-foreground font-universal">
              {newsItem.title}
            </CardTitle>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="font-bold font-universal">{newsItem.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span className="font-bold font-universal">{formatDate(newsItem.published_date)}</span>
              </div>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed font-universal">
              {newsItem.description}
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {newsItem.blog_body ? (
              <div 
                className="prose prose-lg max-w-none font-universal text-foreground"
                dangerouslySetInnerHTML={{ __html: newsItem.blog_body }}
              />
            ) : (
              <p className="text-muted-foreground font-universal">
                Full article content will be available soon.
              </p>
            )}
          </CardContent>
        </Card>

        {/* Related Articles CTA */}
        <div className="text-center mt-16 scroll-reveal">
          <h3 className="text-2xl font-bold font-universal mb-4">
            Explore More Legal Insights
          </h3>
          <Link to="/blog">
            <Button variant="secondary" size="lg" className="font-universal">
              Read More Articles
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;