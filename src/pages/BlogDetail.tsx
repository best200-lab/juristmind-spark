
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  const [error, setError] = useState<string | null>(null);

  console.log('BlogDetail: Component mounted with ID:', id);

  useEffect(() => {
    const fetchNewsItem = async () => {
      console.log('BlogDetail: Starting to fetch news item for ID:', id);
      
      if (!id) {
        console.log('BlogDetail: No ID provided');
        setError('No article ID provided');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        
        const { data, error } = await supabase.functions.invoke('news', {
          method: 'GET'
        });

        console.log('BlogDetail: Raw API response:', { data, error });

        if (error) {
          console.error('BlogDetail: API error:', error);
          setError('Failed to fetch news data');
          return;
        }

        if (!data || !Array.isArray(data)) {
          console.error('BlogDetail: Invalid data format:', data);
          setError('Invalid news data format');
          return;
        }

        console.log('BlogDetail: Looking for item with ID:', id, 'in data:', data);
        const item = data.find((item: NewsItem) => item.id === id);
        console.log('BlogDetail: Found item:', item);

        if (!item) {
          console.log('BlogDetail: No item found with ID:', id);
          setError('Article not found');
        } else {
          console.log('BlogDetail: Setting news item:', item);
          setNewsItem(item);
        }
      } catch (error) {
        console.error('BlogDetail: Exception occurred:', error);
        setError('An error occurred while fetching the article');
      } finally {
        setLoading(false);
      }
    };

    fetchNewsItem();
  }, [id]);

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (error) {
      console.error('BlogDetail: Date formatting error:', error);
      return dateString;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container px-6 py-24">
          <div className="flex items-center justify-center min-h-96">
            <div className="text-center space-y-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto"></div>
              <div className="text-2xl font-bold font-universal text-foreground">Loading article...</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !newsItem) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container px-6 py-24">
          <div className="text-center min-h-96 flex flex-col items-center justify-center space-y-6">
            <div className="text-6xl">😕</div>
            <h1 className="text-3xl font-bold font-universal text-foreground">
              {error || 'Article Not Found'}
            </h1>
            <p className="text-muted-foreground font-universal max-w-md">
              {error === 'Article not found' 
                ? 'The article you\'re looking for doesn\'t exist or may have been removed.' 
                : 'We encountered an issue loading this article. Please try again later.'
              }
            </p>
            <Link to="/blog">
              <Button variant="outline" className="font-universal">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Articles
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
      <main className="container px-6 py-24">
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/blog">
            <Button variant="ghost" className="font-universal">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All News
            </Button>
          </Link>
        </div>

        {/* Hero Image */}
        <div className="relative h-64 md:h-96 mb-8 overflow-hidden rounded-2xl">
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
        <Card className="max-w-4xl mx-auto bg-card border-border">
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
                className="prose prose-lg max-w-none font-universal text-foreground prose-headings:text-foreground prose-strong:text-foreground prose-p:text-foreground prose-li:text-foreground prose-blockquote:text-muted-foreground prose-blockquote:border-l-accent"
                dangerouslySetInnerHTML={{ __html: newsItem.blog_body }}
              />
            ) : (
              <div className="space-y-4">
                <p className="text-foreground font-universal leading-relaxed">
                  This comprehensive analysis delves deeper into the legal implications and broader context surrounding this important development. Our expert team has conducted thorough research to provide you with the most accurate and up-to-date information.
                </p>
                <p className="text-foreground font-universal leading-relaxed">
                  The impact of this development extends beyond immediate considerations, affecting various stakeholders across different sectors. Understanding these ramifications is crucial for legal professionals, business leaders, and concerned citizens alike.
                </p>
                <p className="text-foreground font-universal leading-relaxed">
                  Moving forward, we anticipate several key developments that will shape the landscape. Our continued coverage will keep you informed of these changes as they unfold.
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Related Articles CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold font-universal text-foreground mb-4">
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
