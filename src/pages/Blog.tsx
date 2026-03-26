import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";

interface NewsItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image_url: string;
  gradient: string;
  published_date: string;
  author: string;
  created_at: string;
  updated_at: string;
  is_published: boolean;
}

const Blog = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!id) return;
      
      try {
        const { data, error } = await supabase.functions.invoke('news', {
          method: 'GET'
        });

        if (error) {
          console.error('Error fetching article:', error);
          return;
        }

        const foundArticle = data?.find((item: NewsItem) => item.id === id);
        setArticle(foundArticle || null);
      } catch (error) {
        console.error('Error fetching article:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: '2-digit'
    }).toUpperCase();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-2xl font-bold">Loading article...</div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-6 border-b border-border">
        <div className="container px-6">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl font-black text-foreground mb-2">
              JURIST MIND
            </h1>
            <p className="text-muted-foreground">Legal News & Insights</p>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="py-12">
        <div className="container px-6 max-w-4xl mx-auto">
          <Card className="overflow-hidden border-2 border-border">
            {/* Hero Image */}
            <div className="relative h-64 md:h-96 overflow-hidden">
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${article.gradient} opacity-90`}
              />
              <img 
                src={article.image_url} 
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-background/90 text-foreground text-xs font-black rounded-full border-2 border-accent">
                  {article.category}
                </span>
              </div>
            </div>

            <CardContent className="p-8">
              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-6 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className="font-bold">{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="font-bold">{formatDate(article.published_date)}</span>
                </div>
              </div>

              {/* Article Title */}
              <h1 className="text-3xl md:text-5xl font-black text-foreground mb-6 leading-tight">
                {article.title}
              </h1>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {article.description}
                </p>
                
                {/* Extended content - in a real app, this would come from a separate field */}
                <div className="space-y-6 text-foreground">
                  <p>
                    This comprehensive analysis delves deeper into the legal implications and 
                    broader context surrounding this important development in the legal sector. 
                    Our expert legal team has conducted thorough research to provide you with 
                    the most accurate and up-to-date information.
                  </p>
                  
                  <p>
                    The impact of this development extends beyond immediate legal considerations, 
                    affecting various stakeholders across different sectors. Understanding these 
                    ramifications is crucial for legal professionals, business leaders, and 
                    concerned citizens alike.
                  </p>
                  
                  <p>
                    Moving forward, we anticipate several key developments that will shape the 
                    legal landscape. Our continued coverage will keep you informed of these 
                    changes as they unfold.
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Stay updated with the latest legal news and insights
                  </p>
                  <Link to="/">
                    <Button size="lg" className="font-bold">
                      READ MORE ARTICLES
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Blog;