
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, ShoppingCart, Users, BarChart3, MessageCircle, Calendar } from "lucide-react";

export const UseCasesSection = () => {
  const useCases = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Landing Pages",
      description: "Create stunning marketing pages that convert visitors into customers",
      tags: ["Marketing", "SEO", "Conversion"],
      color: "bg-[#FF8066]"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-commerce Stores",
      description: "Build complete online stores with payment integration and inventory management",
      tags: ["E-commerce", "Payments", "Inventory"],
      color: "bg-[#7ACC88]"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics Dashboards",
      description: "Design data visualization dashboards with real-time charts and insights",
      tags: ["Analytics", "Charts", "Real-time"],
      color: "bg-[#0F4C5C]"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Social Platforms",
      description: "Develop social networking apps with user profiles and messaging",
      tags: ["Social", "Messaging", "Profiles"],
      color: "bg-[#FF8066]"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Chat Applications",
      description: "Build real-time chat apps with group messaging and file sharing",
      tags: ["Chat", "Real-time", "Messaging"],
      color: "bg-[#7ACC88]"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Productivity Tools",
      description: "Create task management and productivity applications for teams",
      tags: ["Productivity", "Tasks", "Teams"],
      color: "bg-[#0F4C5C]"
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#E0E6EF] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-80 h-80 bg-[#FF8066]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#7ACC88]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-[#0F4C5C]/20 text-[#0F4C5C] border-[#0F4C5C]/30 hover:bg-[#0F4C5C]/30">
            Use Cases
          </Badge>
          <h2 className="text-5xl font-bold tracking-tight mb-8 text-[#0F4C5C]">
            Build any type of
            <span className="text-[#FF8066] block">application</span>
          </h2>
          <p className="text-xl text-[#8B9DAF] max-w-3xl mx-auto leading-relaxed">
            From simple landing pages to complex enterprise applications, our AI can handle any project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {useCases.map((useCase, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white border-[#E0E6EF]/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className={`w-16 h-16 ${useCase.color} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {useCase.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#0F4C5C] mb-4 group-hover:text-[#FF8066] transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-[#8B9DAF] leading-relaxed mb-6">
                  {useCase.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {useCase.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-[#E0E6EF] text-[#8B9DAF] hover:bg-[#8B9DAF] hover:text-white transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="bg-gradient-to-r from-[#FF8066]/10 to-[#7ACC88]/10 border-[#FF8066]/20 backdrop-blur-sm max-w-2xl mx-auto">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold text-[#0F4C5C] mb-6">Ready to start building?</h3>
              <p className="text-[#8B9DAF] text-lg mb-8 leading-relaxed">
                Join thousands of developers who are already creating amazing applications with AI.
              </p>
              <Button size="lg" className="bg-[#FF8066] hover:bg-[#FF8066]/90 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
