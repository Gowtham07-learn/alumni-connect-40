import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Heart, TrendingUp, Users, Target } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Campaign {
  id: number;
  title: string;
  description: string;
  goal: number;
  raised: number;
  contributors: number;
  category: "scholarship" | "infrastructure" | "research" | "sports";
  endDate: string;
}

const Donate = () => {
  const { toast } = useToast();
  const [customAmount, setCustomAmount] = useState("");
  const [selectedCampaign, setSelectedCampaign] = useState<number | null>(null);
  
  const campaigns: Campaign[] = [
    {
      id: 1,
      title: "Student Scholarship Fund",
      description: "Help deserving students access quality education through financial assistance.",
      goal: 100000,
      raised: 67500,
      contributors: 234,
      category: "scholarship",
      endDate: "March 31, 2025",
    },
    {
      id: 2,
      title: "New Library Construction",
      description: "Support the construction of a state-of-the-art library with modern facilities.",
      goal: 500000,
      raised: 287500,
      contributors: 156,
      category: "infrastructure",
      endDate: "June 30, 2025",
    },
    {
      id: 3,
      title: "Research Innovation Lab",
      description: "Fund cutting-edge research equipment for breakthrough discoveries.",
      goal: 200000,
      raised: 145000,
      contributors: 89,
      category: "research",
      endDate: "December 31, 2024",
    },
    {
      id: 4,
      title: "Sports Complex Renovation",
      description: "Upgrade athletic facilities to support student wellness and sports programs.",
      goal: 150000,
      raised: 92000,
      contributors: 178,
      category: "sports",
      endDate: "May 15, 2025",
    },
  ];

  const donationAmounts = [25, 50, 100, 250, 500, 1000];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "scholarship":
        return "bg-blue-100 text-blue-800";
      case "infrastructure":
        return "bg-green-100 text-green-800";
      case "research":
        return "bg-purple-100 text-purple-800";
      case "sports":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Support Our Causes</h1>
        <p className="text-muted-foreground">Make a difference in your alma mater's future</p>
      </div>

      {/* Impact Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-white to-secondary/20 border-0">
          <CardContent className="p-6 text-center">
            <Heart className="h-8 w-8 text-red-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">$892K</p>
            <p className="text-sm text-muted-foreground">Total Raised This Year</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-white to-secondary/20 border-0">
          <CardContent className="p-6 text-center">
            <Users className="h-8 w-8 text-blue-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">1,247</p>
            <p className="text-sm text-muted-foreground">Active Contributors</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-white to-secondary/20 border-0">
          <CardContent className="p-6 text-center">
            <Target className="h-8 w-8 text-green-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">89%</p>
            <p className="text-sm text-muted-foreground">Average Goal Achievement</p>
          </CardContent>
        </Card>
      </div>

      {/* Active Campaigns */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">Active Campaigns</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {campaigns.map((campaign) => {
            const progressPercentage = (campaign.raised / campaign.goal) * 100;
            
            return (
              <Card key={campaign.id} className="bg-gradient-to-br from-white to-secondary/20 border-0 hover:shadow-lg transition-all duration-200">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{campaign.title}</CardTitle>
                      <Badge variant="secondary" className={getCategoryColor(campaign.category)}>
                        {campaign.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{campaign.description}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{Math.round(progressPercentage)}%</span>
                    </div>
                    <Progress value={progressPercentage} className="h-2" />
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold">{formatCurrency(campaign.raised)}</span>
                      <span className="text-muted-foreground">of {formatCurrency(campaign.goal)}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {campaign.contributors} contributors
                    </div>
                    <div>Ends: {campaign.endDate}</div>
                  </div>

                  {selectedCampaign === campaign.id ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-2">
                        {donationAmounts.map((amount) => (
                          <Button
                            key={amount}
                            variant="outline"
                            size="sm"
                            onClick={() => setCustomAmount(amount.toString())}
                            className="text-xs"
                          >
                            ${amount}
                          </Button>
                        ))}
                      </div>
                      <Input
                        placeholder="Custom amount"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className="bg-white/70"
                      />
                      <div className="flex space-x-2">
                        <Button 
                          className="flex-1"
                          onClick={() => {
                            const amount = customAmount || "0";
                            toast({
                              title: "Donation Successful!",
                              description: `Thank you for your ${amount > "0" ? `$${amount}` : ""} donation to ${campaign.title}`,
                            });
                            setCustomAmount("");
                            setSelectedCampaign(null);
                          }}
                        >
                          Donate ${customAmount || "0"}
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={() => setSelectedCampaign(null)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <Button 
                      onClick={() => setSelectedCampaign(campaign.id)}
                      className="w-full"
                    >
                      Donate Now
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Donate;