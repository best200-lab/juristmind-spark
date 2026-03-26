import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { User, Edit, ExternalLink, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { User as SupabaseUser } from "@supabase/supabase-js";

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
  created_at: string;
}

const Dashboard = () => {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/auth?mode=login");
        return;
      }
      setUser(session.user);
      await fetchProfile(session.user.id);
    };

    getSession();
  }, [navigate]);

  const fetchProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", userId)
        .maybeSingle();

      if (error) throw error;
      setProfile(data);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const copyProfileLink = async () => {
    if (!profile) return;
    const profileUrl = `${window.location.origin}/u/${profile.username}`;
    await navigator.clipboard.writeText(profileUrl);
    toast({
      title: "Success",
      description: "Profile link copied to clipboard!",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading dashboard...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">
              Welcome back, {profile?.full_name || user?.email?.split("@")[0]}!
            </h1>
            <p className="text-muted-foreground">
              Manage your profile and view your public presence on Jurist Mind
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="lg:col-span-2">
              <Card className="shadow-elegant">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar className="w-20 h-20">
                        <AvatarImage src={profile?.profile_image_url} />
                        <AvatarFallback className="text-lg">
                          {profile?.full_name?.[0] || user?.email?.[0]?.toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-xl">{profile?.full_name || "Your Name"}</CardTitle>
                        <CardDescription className="text-base">@{profile?.username}</CardDescription>
                        {profile?.bio && (
                          <p className="text-sm text-muted-foreground mt-2 max-w-md">
                            {profile.bio}
                          </p>
                        )}
                      </div>
                    </div>
                    <Badge variant="secondary" className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>Member</span>
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Social Links */}
                  {(profile?.website_url || profile?.twitter_url || profile?.linkedin_url || profile?.github_url) && (
                    <div>
                      <h3 className="font-semibold mb-2">Links</h3>
                      <div className="flex flex-wrap gap-2">
                        {profile?.website_url && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={profile.website_url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-3 h-3 mr-1" />
                              Website
                            </a>
                          </Button>
                        )}
                        {profile?.twitter_url && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={profile.twitter_url} target="_blank" rel="noopener noreferrer">
                              Twitter
                            </a>
                          </Button>
                        )}
                        {profile?.linkedin_url && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={profile.linkedin_url} target="_blank" rel="noopener noreferrer">
                              LinkedIn
                            </a>
                          </Button>
                        )}
                        {profile?.github_url && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={profile.github_url} target="_blank" rel="noopener noreferrer">
                              GitHub
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Member Since */}
                  {profile?.created_at && (
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      Member since {new Date(profile.created_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                      })}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button asChild className="w-full">
                    <Link to="/edit-profile">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Profile
                    </Link>
                  </Button>
                  
                  {profile?.username && (
                    <>
                      <Button variant="outline" asChild className="w-full">
                        <Link to={`/u/${profile.username}`}>
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Public Profile
                        </Link>
                      </Button>
                      
                      <Button variant="ghost" onClick={copyProfileLink} className="w-full">
                        Copy Profile Link
                      </Button>
                    </>
                  )}
                </CardContent>
              </Card>

              {/* Profile Completeness */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Profile Completeness</CardTitle>
                </CardHeader>
                <CardContent>
                  {profile ? (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{Math.round((
                          (profile.full_name ? 1 : 0) +
                          (profile.bio ? 1 : 0) +
                          (profile.profile_image_url ? 1 : 0) +
                          (profile.website_url || profile.twitter_url || profile.linkedin_url || profile.github_url ? 1 : 0)
                        ) / 4 * 100)}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-300" 
                          style={{ 
                            width: `${Math.round((
                              (profile.full_name ? 1 : 0) +
                              (profile.bio ? 1 : 0) +
                              (profile.profile_image_url ? 1 : 0) +
                              (profile.website_url || profile.twitter_url || profile.linkedin_url || profile.github_url ? 1 : 0)
                            ) / 4 * 100)}%` 
                          }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Complete your profile to increase visibility
                      </p>
                    </div>
                  ) : (
                    <div className="text-center py-4">
                      <p className="text-sm text-muted-foreground mb-3">
                        No profile found. Create one to get started!
                      </p>
                      <Button asChild size="sm">
                        <Link to="/edit-profile">Create Profile</Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;