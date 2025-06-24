
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Award, Coffee, Heart } from "lucide-react";

export const StudioSection = () => {
  const stats = [
    { label: "AI Engineers", value: "50+", icon: <Users className="w-5 h-5" /> },
    { label: "Awards Won", value: "12", icon: <Award className="w-5 h-5" /> },
    { label: "Coffee Consumed", value: "∞", icon: <Coffee className="w-5 h-5" /> },
    { label: "Happy Developers", value: "10k+", icon: <Heart className="w-5 h-5" /> }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "AI Research Lead",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=120&h=120&fit=crop&crop=face",
      bio: "Former Google AI researcher with 8+ years in machine learning"
    },
    {
      name: "Marcus Rodriguez",
      role: "Engineering Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
      bio: "Ex-Netflix engineer who scaled systems to millions of users"
    },
    {
      name: "Emily Watson",
      role: "Product Design Lead",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face",
      bio: "Award-winning designer from Apple's Human Interface team"
    }
  ];

  return (
    <section className="py-24 px-6 bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-orange-500/20 text-orange-300 border-orange-500/30 px-6 py-3 font-medium">
            Meet the Studio
          </Badge>
          <h2 className="text-5xl font-bold tracking-tight mb-8">
            Built by developers,
            <span className="text-orange-400 block">for developers</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're a team of passionate engineers, designers, and AI researchers who believe 
            that building software should be joyful, not frustrating.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/20">
              <CardContent className="p-6 text-center">
                <div className="text-orange-400 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Core Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/70 transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/20">
                <CardContent className="p-8 text-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover ring-4 ring-orange-500/20 group-hover:ring-orange-500/40 transition-all duration-300"
                  />
                  <h4 className="text-xl font-semibold text-white mb-2">{member.name}</h4>
                  <p className="text-orange-400 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission */}
        <Card className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-orange-500/20 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl font-bold mb-6 text-white">Our Mission</h3>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
              To democratize software development by making it as simple as having a conversation. 
              We believe everyone should be able to turn their ideas into reality, regardless of 
              their technical background.
            </p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-300 hover:-translate-y-1">
              Join Our Journey
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
