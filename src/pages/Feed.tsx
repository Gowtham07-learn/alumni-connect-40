import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Post {
  id: number;
  author: string;
  avatar: string;
  time: string;
  content: string;
  type: "update" | "achievement" | "job" | "event";
  likes: number;
  comments: number;
  liked: boolean;
}

const Feed = () => {
  const { toast } = useToast();
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      author: "Sarah Johnson",
      avatar: "/api/placeholder/50/50",
      time: "2 hours ago",
      content: "Excited to share that I've been promoted to Senior Developer at Google! Grateful for the support from my alma mater and fellow alumni.",
      type: "achievement",
      likes: 42,
      comments: 8,
      liked: false,
    },
    {
      id: 2,
      author: "Alumni Office",
      avatar: "/api/placeholder/50/50",
      time: "4 hours ago",
      content: "Registration is now open for the Annual Alumni Gala 2024! Join us for an evening of networking and celebration.",
      type: "event",
      likes: 28,
      comments: 12,
      liked: true,
    },
    {
      id: 3,
      author: "Michael Chen",
      avatar: "/api/placeholder/50/50",
      time: "1 day ago",
      content: "Microsoft is hiring! We're looking for talented Product Managers. Feel free to reach out if you're interested.",
      type: "job",
      likes: 35,
      comments: 15,
      liked: false,
    },
    {
      id: 4,
      author: "Emily Davis",
      avatar: "/api/placeholder/50/50",
      time: "2 days ago",
      content: "Just launched my new design portfolio! Would love to get feedback from the community.",
      type: "update",
      likes: 24,
      comments: 6,
      liked: false,
    },
  ]);

  const handleLike = (id: number) => {
    const post = posts.find(p => p.id === id);
    setPosts(prev =>
      prev.map(post =>
        post.id === id
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
    
    if (post && !post.liked) {
      toast({
        title: "Post Liked!",
        description: `You liked ${post.author}'s post`,
      });
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "achievement":
        return "bg-green-100 text-green-800";
      case "job":
        return "bg-blue-100 text-blue-800";
      case "event":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Feed</h1>
        <p className="text-muted-foreground">Stay updated with your network</p>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <Card key={post.id} className="bg-gradient-to-br from-white to-secondary/20 border-0 hover:shadow-lg transition-all duration-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={post.avatar} />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {post.author.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold text-foreground">{post.author}</h3>
                      <Badge variant="secondary" className={getTypeColor(post.type)}>
                        {post.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{post.time}</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-foreground mb-4">{post.content}</p>
              <div className="flex items-center justify-between border-t border-border/30 pt-4">
                <div className="flex items-center space-x-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleLike(post.id)}
                    className={`${post.liked ? 'text-red-500' : 'text-muted-foreground'} hover:text-red-500`}
                  >
                    <Heart className={`h-4 w-4 mr-1 ${post.liked ? 'fill-current' : ''}`} />
                    {post.likes}
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    {post.comments}
                  </Button>
                </div>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Feed;