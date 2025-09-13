import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  type: "networking" | "reunion" | "workshop" | "social";
  attendees: number;
  maxAttendees: number;
  description: string;
  registered: boolean;
}

const Events = () => {
  const { toast } = useToast();
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      title: "Annual Alumni Gala 2024",
      date: "December 15, 2024",
      time: "7:00 PM",
      location: "Grand Ballroom, Marriott Hotel",
      type: "reunion",
      attendees: 245,
      maxAttendees: 300,
      description: "Join us for an elegant evening of celebration, networking, and recognition of outstanding alumni achievements.",
      registered: false,
    },
    {
      id: 2,
      title: "Tech Industry Meetup",
      date: "December 20, 2024",
      time: "6:30 PM",
      location: "Innovation Hub, Downtown",
      type: "networking",
      attendees: 89,
      maxAttendees: 120,
      description: "Connect with fellow alumni working in technology. Featuring keynote speakers and panel discussions.",
      registered: true,
    },
    {
      id: 3,
      title: "Career Development Workshop",
      date: "January 5, 2025",
      time: "2:00 PM",
      location: "University Campus, Building A",
      type: "workshop",
      attendees: 156,
      maxAttendees: 200,
      description: "Learn essential skills for career advancement with expert-led sessions on leadership and professional growth.",
      registered: false,
    },
    {
      id: 4,
      title: "Alumni Basketball Game",
      date: "January 12, 2025",
      time: "4:00 PM",
      location: "University Sports Complex",
      type: "social",
      attendees: 78,
      maxAttendees: 100,
      description: "Friendly basketball competition followed by dinner and socializing.",
      registered: false,
    },
  ]);

  const handleRegister = (id: number) => {
    const event = events.find(e => e.id === id);
    setEvents(prev =>
      prev.map(event =>
        event.id === id
          ? {
              ...event,
              registered: !event.registered,
              attendees: event.registered ? event.attendees - 1 : event.attendees + 1,
            }
          : event
      )
    );
    
    if (event) {
      toast({
        title: event.registered ? "Registration Cancelled" : "Successfully Registered!",
        description: event.registered 
          ? `You have cancelled your registration for ${event.title}`
          : `You are now registered for ${event.title} on ${event.date}`,
      });
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "networking":
        return "bg-blue-100 text-blue-800";
      case "reunion":
        return "bg-purple-100 text-purple-800";
      case "workshop":
        return "bg-green-100 text-green-800";
      case "social":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Events</h1>
        <p className="text-muted-foreground">Discover and join alumni events</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {events.map((event) => (
          <Card key={event.id} className="bg-gradient-to-br from-white to-secondary/20 border-0 hover:shadow-lg transition-all duration-200">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <Badge variant="secondary" className={getTypeColor(event.type)}>
                      {event.type}
                    </Badge>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{event.description}</p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="h-4 w-4 mr-1" />
                  {event.attendees}/{event.maxAttendees} registered
                </div>
                <div className="w-full max-w-32 bg-secondary rounded-full h-2 ml-4">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                  />
                </div>
              </div>

              <Button
                onClick={() => handleRegister(event.id)}
                variant={event.registered ? "secondary" : "default"}
                className="w-full"
                disabled={!event.registered && event.attendees >= event.maxAttendees}
              >
                {event.registered ? "Registered" : event.attendees >= event.maxAttendees ? "Event Full" : "Register"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Events;