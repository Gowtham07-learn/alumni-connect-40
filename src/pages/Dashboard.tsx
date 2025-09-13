import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Users, Calendar, TrendingUp, DollarSign, MessageSquare, Briefcase } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Connections",
      value: "1,234",
      icon: Users,
      trend: "+12%",
      color: "text-blue-600",
    },
    {
      title: "Upcoming Events",
      value: "8",
      icon: Calendar,
      trend: "+3",
      color: "text-green-600",
    },
    {
      title: "Job Opportunities",
      value: "42",
      icon: Briefcase,
      trend: "+8",
      color: "text-purple-600",
    },
    {
      title: "Total Donations",
      value: "$12.5K",
      icon: DollarSign,
      trend: "+15%",
      color: "text-orange-600",
    },
  ];

  const recentActivity = [
    {
      type: "connection",
      user: "Sarah Johnson",
      action: "connected with you",
      time: "2 hours ago",
      avatar: "/api/placeholder/40/40",
    },
    {
      type: "event",
      user: "Alumni Office",
      action: "invited you to Tech Meetup 2024",
      time: "5 hours ago",
      avatar: "/api/placeholder/40/40",
    },
    {
      type: "job",
      user: "Michael Chen",
      action: "shared a job opportunity",
      time: "1 day ago",
      avatar: "/api/placeholder/40/40",
    },
    {
      type: "message",
      user: "Emily Davis",
      action: "sent you a message",
      time: "2 days ago",
      avatar: "/api/placeholder/40/40",
    },
  ];

  const upcomingEvents = [
    {
      title: "Annual Alumni Gala",
      date: "Dec 15, 2024",
      attendees: 245,
    },
    {
      title: "Tech Industry Meetup",
      date: "Dec 20, 2024",
      attendees: 89,
    },
    {
      title: "Career Development Workshop",
      date: "Jan 5, 2025",
      attendees: 156,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, John!</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-gradient-to-br from-white to-secondary/20 border-0 hover:shadow-lg transition-all duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              <div className="mt-2">
                <Badge variant="secondary" className="text-xs">
                  {stat.trend} from last month
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card className="bg-gradient-to-br from-white to-secondary/20 border-0">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageSquare className="h-5 w-5 mr-2 text-primary" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={activity.avatar} />
                    <AvatarFallback className="bg-primary/10 text-primary text-sm">
                      {activity.user.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground">
                      <span className="font-medium">{activity.user}</span>{" "}
                      {activity.action}
                    </p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-4 text-primary">
              View All Activity
            </Button>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card className="bg-gradient-to-br from-white to-secondary/20 border-0">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-primary" />
              Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="p-3 rounded-lg bg-white/50 hover:bg-white/70 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-foreground">{event.title}</h4>
                      <p className="text-sm text-muted-foreground">{event.date}</p>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {event.attendees} attending
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-4 text-primary">
              View All Events
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;