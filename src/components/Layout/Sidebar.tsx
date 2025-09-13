import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  LayoutDashboard, 
  Rss, 
  Briefcase, 
  Users, 
  Calendar, 
  Heart,
  User,
  LogOut 
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    { icon: Rss, label: "Feed", path: "/feed" },
    { icon: Briefcase, label: "Jobs", path: "/jobs" },
    { icon: Users, label: "Networking", path: "/networking" },
    { icon: Calendar, label: "Events", path: "/events" },
    { icon: Heart, label: "Donate", path: "/donate" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="w-64 bg-white/90 backdrop-blur-sm border-r border-border/50 flex flex-col h-screen">
      {/* Logo/Header */}
      <div className="p-6 border-b border-border/30">
        <h2 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
          Alumni Network
        </h2>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <Button
            key={item.path}
            variant={isActive(item.path) ? "default" : "ghost"}
            className={`w-full justify-start h-12 ${
              isActive(item.path) 
                ? "bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg" 
                : "hover:bg-secondary/50"
            }`}
            onClick={() => navigate(item.path)}
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.label}
          </Button>
        ))}
      </nav>

      {/* User Profile Section */}
      <div className="p-4 border-t border-border/30">
        <div className="flex items-center space-x-3 mb-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/api/placeholder/40/40" />
            <AvatarFallback className="bg-primary/10 text-primary text-sm font-semibold">
              JD
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">John Doe</p>
            <p className="text-xs text-muted-foreground truncate">Class of 2020</p>
          </div>
        </div>
        
        <div className="space-y-2">
          <Button
            variant="ghost"
            className="w-full justify-start h-10 text-sm"
            onClick={() => navigate("/profile")}
          >
            <User className="h-4 w-4 mr-3" />
            Profile
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start h-10 text-sm hover:bg-destructive/10 hover:text-destructive"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4 mr-3" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;