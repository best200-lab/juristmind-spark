import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Copy, ArrowLeft, Globe, Github, CheckCircle, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Profile {
  id: string;
  username: string;
  full_name: string;
  bio?: string;
  profile_image_url?: string;
  website_url?: string;
  twitter_url?: string;
  linkedin_url?: string;
  github_url?: string;
  facebook_url?: string;
  instagram_url?: string;
  is_verified?: boolean;
  created_at: string;
}

const PublicProfile = () => {
  const { username } = useParams<{ username: string }>();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (username) {
      fetchProfile(username);
    }
  }, [username]);

  // SEO: Add meta tags dynamically
  useEffect(() => {
    if (profile) {
      const title = `${profile.full_name} (@${profile.username}) - Jurist Mind`;
      const description = profile.bio ? 
        `${profile.bio.substring(0, 155)}...` : 
        `View ${profile.full_name}'s professional profile on Jurist Mind.`;
      const imageUrl = profile.profile_image_url || '/default-avatar.png';
      const profileUrl = `${window.location.origin}/u/${profile.username}`;

      // Update title
      document.title = title;

      // Update or create meta tags
      const updateMetaTag = (name: string, content: string) => {
        let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
        if (!tag) {
          tag = document.createElement('meta');
          tag.name = name;
          document.head.appendChild(tag);
        }
        tag.content = content;
      };

      const updatePropertyTag = (property: string, content: string) => {
        let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
        if (!tag) {
          tag = document.createElement('meta');
          tag.setAttribute('property', property);
          document.head.appendChild(tag);
        }
        tag.content = content;
      };

      // Basic meta tags
      updateMetaTag('description', description);
      updatePropertyTag('og:title', title);
      updatePropertyTag('og:description', description);
      updatePropertyTag('og:image', imageUrl);
      updatePropertyTag('og:url', profileUrl);
      updatePropertyTag('og:type', 'profile');
      
      // Twitter Cards
      updateMetaTag('twitter:card', 'summary_large_image');
      updateMetaTag('twitter:title', title);
      updateMetaTag('twitter:description', description);
      updateMetaTag('twitter:image', imageUrl);

      // Canonical URL
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = profileUrl;

      // JSON-LD Schema
      const schema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": profile.full_name,
        "image": imageUrl,
        "url": profileUrl,
        "sameAs": [
          profile.website_url,
          profile.twitter_url,
          profile.linkedin_url,
          profile.github_url,
          profile.facebook_url,
          profile.instagram_url
        ].filter(Boolean)
      };

      let scriptTag = document.querySelector('script[type="application/ld+json"]');
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schema);
    }
  }, [profile]);

  const fetchProfile = async (profileUsername: string) => {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("username", profileUsername)
        .eq("is_public", true)
        .maybeSingle();

      if (error) throw error;
      
      if (!data) {
        setNotFound(true);
      } else {
        setProfile(data);
      }
    } catch (error: any) {
      console.error("Error fetching profile:", error);
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  const copyProfileLink = async () => {
    const currentUrl = window.location.href;
    await navigator.clipboard.writeText(currentUrl);
    toast({
      title: "Success",
      description: "Profile link copied to clipboard!",
    });
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map(part => part[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading profile...</p>
          </div>
        </div>
      </div>
    );
  }

  if (notFound || !profile) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <ExternalLink className="w-8 h-8 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Profile Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The profile you're looking for doesn't exist or has been set to private.
            </p>
            <Button asChild>
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Home
              </Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Avatar className="w-32 h-32 mx-auto mb-6 border-4 border-white shadow-elegant">
              <AvatarImage src={profile.profile_image_url} />
              <AvatarFallback className="text-2xl text-primary bg-white">
                {getInitials(profile.full_name)}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex items-center justify-center gap-3 mb-2">
              <h1 className="text-4xl md:text-5xl font-bold">{profile.full_name}</h1>
              {profile.is_verified && (
                <CheckCircle className="w-8 h-8 text-blue-400 fill-current" />
              )}
            </div>
            <p className="text-xl text-white/80 mb-6">@{profile.username}</p>
            
            {profile.bio && (
              <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
                {profile.bio}
              </p>
            )}

            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={copyProfileLink} variant="secondary" className="bg-white/10 hover:bg-white/20 border-white/20">
                <Copy className="w-4 h-4 mr-2" />
                Copy Profile Link
              </Button>
              
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2">
                <Calendar className="w-4 h-4 mr-2" />
                Joined {new Date(profile.created_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                })}
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Social Links */}
            {(profile.website_url || profile.twitter_url || profile.linkedin_url || profile.github_url || profile.facebook_url || profile.instagram_url) && (
              <Card className="shadow-elegant mb-8">
                <CardContent className="py-8">
                  <h2 className="text-2xl font-bold mb-6 text-center">Connect With Me</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {profile.website_url && (
                      <a
                        href={profile.website_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                          <CardContent className="flex items-center space-x-4 py-6">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                              <Globe className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold">Website</h3>
                              <p className="text-sm text-muted-foreground">Visit my site</p>
                            </div>
                          </CardContent>
                        </Card>
                      </a>
                    )}

                    {profile.twitter_url && (
                      <a
                        href={profile.twitter_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                          <CardContent className="flex items-center space-x-4 py-6">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                              </svg>
                            </div>
                            <div>
                              <h3 className="font-semibold">Twitter</h3>
                              <p className="text-sm text-muted-foreground">Follow me</p>
                            </div>
                          </CardContent>
                        </Card>
                      </a>
                    )}

                    {profile.linkedin_url && (
                      <a
                        href={profile.linkedin_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                          <CardContent className="flex items-center space-x-4 py-6">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                              <svg className="w-6 h-6 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                              </svg>
                            </div>
                            <div>
                              <h3 className="font-semibold">LinkedIn</h3>
                              <p className="text-sm text-muted-foreground">Connect with me</p>
                            </div>
                          </CardContent>
                        </Card>
                      </a>
                    )}

                     {profile.github_url && (
                      <a
                        href={profile.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                          <CardContent className="flex items-center space-x-4 py-6">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                              <Github className="w-6 h-6 text-gray-700" />
                            </div>
                            <div>
                              <h3 className="font-semibold">GitHub</h3>
                              <p className="text-sm text-muted-foreground">View my code</p>
                            </div>
                          </CardContent>
                        </Card>
                      </a>
                    )}

                    {profile.facebook_url && (
                      <a
                        href={profile.facebook_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                          <CardContent className="flex items-center space-x-4 py-6">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                              <Facebook className="w-6 h-6 text-blue-700" />
                            </div>
                            <div>
                              <h3 className="font-semibold">Facebook</h3>
                              <p className="text-sm text-muted-foreground">Connect with me</p>
                            </div>
                          </CardContent>
                        </Card>
                      </a>
                    )}

                    {profile.instagram_url && (
                      <a
                        href={profile.instagram_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                          <CardContent className="flex items-center space-x-4 py-6">
                            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                              <Instagram className="w-6 h-6 text-pink-700" />
                            </div>
                            <div>
                              <h3 className="font-semibold">Instagram</h3>
                              <p className="text-sm text-muted-foreground">Follow my journey</p>
                            </div>
                          </CardContent>
                        </Card>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* About Section */}
            <Card className="shadow-elegant">
              <CardContent className="py-8">
                <h2 className="text-2xl font-bold mb-6">About {profile.full_name.split(" ")[0]}</h2>
                {profile.bio ? (
                  <div className="prose prose-lg max-w-none">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {profile.bio}
                    </p>
                  </div>
                ) : (
                  <p className="text-muted-foreground italic">
                    {profile.full_name.split(" ")[0]} hasn't added a bio yet.
                  </p>
                )}
                
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    Member since {new Date(profile.created_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PublicProfile;