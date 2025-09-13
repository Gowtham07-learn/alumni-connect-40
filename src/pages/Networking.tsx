import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Building2 } from "lucide-react";

interface AlumniMember {
  id: number;
  name: string;
  company: string;
  position: string;
  location: string;
  year: string;
  avatar: string;
  connected: boolean;
}

const Networking = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [members, setMembers] = useState<AlumniMember[]>([
    {
      id: 1,
      name: "Sarah Johnson",
      company: "Google",
      position: "Senior Developer",
      location: "San Francisco",
      year: "2019",
      avatar: "/api/placeholder/100/100",
      connected: false,
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Microsoft",
      position: "Product Manager",
      location: "Seattle",
      year: "2020",
      avatar: "/api/placeholder/100/100",
      connected: false,
    },
    {
      id: 3,
      name: "Emily Davis",
      company: "Apple",
      position: "Design Lead",
      location: "Cupertino",
      year: "2018",
      avatar: "/api/placeholder/100/100",
      connected: false,
    },
    {
      id: 4,
      name: "James Wilson",
      company: "Tesla",
      position: "Engineer",
      location: "Austin",
      year: "2021",
      avatar: "/api/placeholder/100/100",
      connected: false,
    },
  ]);

  const handleConnect = (id: number) => {
    setMembers(prev => 
      prev.map(member => 
        member.id === id 
          ? { ...member, connected: !member.connected }
          : member
      )
    );
  };

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.position.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Networking</h1>
        <p className="text-muted-foreground">Connect with fellow alumni</p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search alumni..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 h-12 bg-white/70"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map((member) => (
          <Card key={member.id} className="hover:shadow-lg transition-all duration-200 bg-gradient-to-br from-white to-secondary/20 border-0">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={member.avatar} />
                  <AvatarFallback className="bg-primary/10 text-primary text-lg font-semibold">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    Class of {member.year}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Building2 className="h-4 w-4 mr-2" />
                  <div>
                    <p className="font-medium text-foreground">{member.position}</p>
                    <p>{member.company}</p>
                  </div>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  {member.location}
                </div>
                <Button
                  onClick={() => handleConnect(member.id)}
                  variant={member.connected ? "secondary" : "default"}
                  className="w-full"
                  size="sm"
                >
                  {member.connected ? "Connected" : "Connect"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Networking;