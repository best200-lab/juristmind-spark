import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ArrowRight, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

const NewsSection = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('news', {
          method: 'GET'
        });

        if (error) {
          console.error('Error fetching news:', error);
          return;
        }

        setNewsItems(data || []);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

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
      <section className="py-24 bg-background">
        <div className="container px-6">
          <div className="flex items-center justify-center">
            <div className="text-2xl font-bold">Loading news...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-6xl text-ultra-bold countdown-text">
            Latest <span className="text-block">NEWS</span>
          </h2>
          <Button variant="outline" className="hidden md:flex">
            VIEW ALL
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group hover:scale-105 transition-all duration-500 bg-card border-2 border-border hover:border-accent overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-90`}
                />
                <img 
                  src={item.image_url} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-background/90 text-foreground text-xs font-black rounded-full border-2 border-accent">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <CardHeader className="space-y-4">
                <CardTitle className="text-xl font-black text-foreground group-hover:text-accent transition-colors">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground font-medium leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span className="font-bold">{item.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="font-bold">{formatDate(item.published_date)}</span>
                    </div>
                  </div>
                  <Link to={`/blog/${item.id}`}>
                    <Button variant="ghost" size="sm" className="font-bold text-accent hover:text-accent-foreground">
                      READ MORE
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Button variant="outline" size="lg">
            VIEW ALL NEWS
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;