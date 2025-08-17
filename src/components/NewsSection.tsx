import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "JURIST MIND AI 4.0",
      description: "JURIST MIND 4.0 is the most intelligent model in the world. It includes native tool use and real-time search integration, and is available now to Supabase and enterprise customers.",
      date: "JULY 08, 2024",
      category: "AI RELEASE",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      id: 2,
      title: "Announcing JURIST MIND for Government",
      description: "We are excited to announce JURIST MIND For Government — a suite of premier AI products available for US limited States government customers.",
      date: "JULY 04, 2024",
      category: "GOVERNMENT",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center",
      gradient: "from-indigo-600 to-blue-600"
    },
    {
      id: 3,
      title: "JURIST MIND 3 Beta — The Age of Reasoning Agents",
      description: "We are thrilled to unveil an early preview of JURIST MIND 3, our most advanced model yet, blending superior reasoning with extensive pretrained knowledge.",
      date: "FEBRUARY 10, 2024",
      category: "AI BETA",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop&crop=center",
      gradient: "from-red-600 to-orange-600"
    }
  ];

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
                  src={item.image} 
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
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="font-bold">{item.date}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="font-bold text-accent hover:text-accent-foreground">
                    READ
                  </Button>
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