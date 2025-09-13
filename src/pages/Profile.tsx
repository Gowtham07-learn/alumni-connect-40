import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Camera, Edit2, MapPin, Building2, Calendar, Mail, Phone, Globe } from "lucide-react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    graduation: "2020",
    degree: "Computer Science",
    position: "Senior Software Engineer",
    company: "Tech Corp",
    location: "San Francisco, CA",
    website: "johndoe.dev",
    bio: "Passionate software engineer with 4+ years of experience building scalable web applications. Alumni volunteer and mentor.",
    avatar: "/api/placeholder/150/150",
  });

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  const skills = ["JavaScript", "React", "Node.js", "Python", "AWS", "Docker"];
  const interests = ["Mentoring", "Open Source", "AI/ML", "Startups"];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Profile</h1>
          <p className="text-muted-foreground">Manage your profile information</p>
        </div>
        <Button 
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          className="flex items-center space-x-2"
        >
          <Edit2 className="h-4 w-4" />
          <span>{isEditing ? "Save Changes" : "Edit Profile"}</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card className="lg:col-span-1 bg-gradient-to-br from-white to-secondary/20 border-0">
          <CardContent className="p-6 text-center">
            <div className="relative mb-4">
              <Avatar className="h-32 w-32 mx-auto">
                <AvatarImage src={profile.avatar} />
                <AvatarFallback className="bg-primary/10 text-primary text-3xl">
                  {profile.name.split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              {isEditing && (
                <Button
                  size="icon"
                  className="absolute bottom-0 right-1/2 transform translate-x-12 translate-y-2"
                >
                  <Camera className="h-4 w-4" />
                </Button>
              )}
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">{profile.name}</h3>
            <p className="text-muted-foreground mb-2">{profile.position}</p>
            <p className="text-sm text-muted-foreground mb-4">{profile.company}</p>
            <Badge variant="secondary" className="mb-4">
              Class of {profile.graduation}
            </Badge>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {profile.bio}
            </p>
          </CardContent>
        </Card>

        {/* Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Contact Information */}
          <Card className="bg-gradient-to-br from-white to-secondary/20 border-0">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </label>
                  {isEditing ? (
                    <Input
                      value={profile.email}
                      onChange={(e) => setProfile({...profile, email: e.target.value})}
                      className="bg-white/70"
                    />
                  ) : (
                    <p className="text-muted-foreground">{profile.email}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    Phone
                  </label>
                  {isEditing ? (
                    <Input
                      value={profile.phone}
                      onChange={(e) => setProfile({...profile, phone: e.target.value})}
                      className="bg-white/70"
                    />
                  ) : (
                    <p className="text-muted-foreground">{profile.phone}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Location
                  </label>
                  {isEditing ? (
                    <Input
                      value={profile.location}
                      onChange={(e) => setProfile({...profile, location: e.target.value})}
                      className="bg-white/70"
                    />
                  ) : (
                    <p className="text-muted-foreground">{profile.location}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center">
                    <Globe className="h-4 w-4 mr-2" />
                    Website
                  </label>
                  {isEditing ? (
                    <Input
                      value={profile.website}
                      onChange={(e) => setProfile({...profile, website: e.target.value})}
                      className="bg-white/70"
                    />
                  ) : (
                    <p className="text-muted-foreground">{profile.website}</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Information */}
          <Card className="bg-gradient-to-br from-white to-secondary/20 border-0">
            <CardHeader>
              <CardTitle>Professional Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center">
                    <Building2 className="h-4 w-4 mr-2" />
                    Current Position
                  </label>
                  {isEditing ? (
                    <Input
                      value={profile.position}
                      onChange={(e) => setProfile({...profile, position: e.target.value})}
                      className="bg-white/70"
                    />
                  ) : (
                    <p className="text-muted-foreground">{profile.position}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Company</label>
                  {isEditing ? (
                    <Input
                      value={profile.company}
                      onChange={(e) => setProfile({...profile, company: e.target.value})}
                      className="bg-white/70"
                    />
                  ) : (
                    <p className="text-muted-foreground">{profile.company}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Graduation Year
                  </label>
                  {isEditing ? (
                    <Input
                      value={profile.graduation}
                      onChange={(e) => setProfile({...profile, graduation: e.target.value})}
                      className="bg-white/70"
                    />
                  ) : (
                    <p className="text-muted-foreground">{profile.graduation}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Degree</label>
                  {isEditing ? (
                    <Input
                      value={profile.degree}
                      onChange={(e) => setProfile({...profile, degree: e.target.value})}
                      className="bg-white/70"
                    />
                  ) : (
                    <p className="text-muted-foreground">{profile.degree}</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills & Interests */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-white to-secondary/20 border-0">
              <CardHeader>
                <CardTitle>Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white to-secondary/20 border-0">
              <CardHeader>
                <CardTitle>Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <Badge key={index} variant="outline">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;