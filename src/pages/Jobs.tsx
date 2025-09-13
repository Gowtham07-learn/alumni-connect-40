import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Building2, Clock, DollarSign } from "lucide-react";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: "full-time" | "part-time" | "contract" | "remote";
  salary: string;
  posted: string;
  description: string;
  applied: boolean;
}

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [jobs, setJobs] = useState<Job[]>([
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Google",
      location: "San Francisco, CA",
      type: "full-time",
      salary: "$150k - $180k",
      posted: "2 days ago",
      description: "Join our team building next-generation web applications...",
      applied: false,
    },
    {
      id: 2,
      title: "Product Manager",
      company: "Microsoft",
      location: "Seattle, WA",
      type: "full-time",
      salary: "$130k - $160k",
      posted: "3 days ago",
      description: "Lead product strategy and development for cloud services...",
      applied: false,
    },
    {
      id: 3,
      title: "UX Designer",
      company: "Apple",
      location: "Cupertino, CA",
      type: "full-time",
      salary: "$120k - $150k",
      posted: "5 days ago",
      description: "Design intuitive user experiences for mobile applications...",
      applied: true,
    },
    {
      id: 4,
      title: "DevOps Engineer",
      company: "Tesla",
      location: "Remote",
      type: "remote",
      salary: "$140k - $170k",
      posted: "1 week ago",
      description: "Build and maintain cloud infrastructure at scale...",
      applied: false,
    },
  ]);

  const handleApply = (id: number) => {
    setJobs(prev =>
      prev.map(job =>
        job.id === id
          ? { ...job, applied: !job.applied }
          : job
      )
    );
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "full-time":
        return "bg-green-100 text-green-800";
      case "part-time":
        return "bg-blue-100 text-blue-800";
      case "contract":
        return "bg-orange-100 text-orange-800";
      case "remote":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Job Opportunities</h1>
        <p className="text-muted-foreground">Discover career opportunities from your network</p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search jobs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 h-12 bg-white/70"
        />
      </div>

      <div className="space-y-4">
        {filteredJobs.map((job) => (
          <Card key={job.id} className="bg-gradient-to-br from-white to-secondary/20 border-0 hover:shadow-lg transition-all duration-200">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Building2 className="h-4 w-4 mr-1" />
                      {job.company}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {job.posted}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <Badge variant="secondary" className={getTypeColor(job.type)}>
                    {job.type.replace("-", " ")}
                  </Badge>
                  <div className="flex items-center text-sm font-medium text-primary">
                    <DollarSign className="h-4 w-4 mr-1" />
                    {job.salary}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{job.description}</p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Posted by alumni network
                </div>
                <Button
                  onClick={() => handleApply(job.id)}
                  variant={job.applied ? "secondary" : "default"}
                  disabled={job.applied}
                >
                  {job.applied ? "Applied" : "Apply Now"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Jobs;