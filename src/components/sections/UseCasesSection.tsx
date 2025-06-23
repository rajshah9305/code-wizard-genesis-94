
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ShoppingCart, Users, BarChart3, Calendar, MessageSquare, Camera, Eye } from "lucide-react";

export const UseCasesSection = () => {
  const [selectedUseCase, setSelectedUseCase] = useState<number | null>(null);

  const useCases = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-commerce Stores",
      description: "Complete online stores with cart, payments, and inventory management",
      examples: ["Fashion marketplace", "Digital product store", "B2B wholesale platform"],
      timeToMarket: "15 minutes",
      complexity: "High",
      color: "from-emerald-400 to-green-500",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics Dashboards",
      description: "Data visualization and business intelligence applications",
      examples: ["Sales analytics", "User behavior tracking", "Financial reporting"],
      timeToMarket: "10 minutes",
      complexity: "Medium",
      color: "from-blue-400 to-indigo-500",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Social Platforms",
      description: "Community-driven applications with user interactions",
      examples: ["Professional networks", "Community forums", "Social marketplaces"],
      timeToMarket: "20 minutes",
      complexity: "High",
      color: "from-purple-400 to-pink-500",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Productivity Tools",
      description: "Task management and workflow optimization applications",
      examples: ["Project management", "Time tracking", "Team collaboration"],
      timeToMarket: "8 minutes",
      complexity: "Medium",
      color: "from-orange-400 to-red-500",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Communication Apps",
      description: "Real-time messaging and collaboration platforms",
      examples: ["Team chat", "Customer support", "Video conferencing"],
      timeToMarket: "12 minutes",
      complexity: "High",
      color: "from-teal-400 to-cyan-500",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=250&fit=crop"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Content Platforms",
      description: "Media sharing and content management systems",
      examples: ["Photo galleries", "Video streaming", "Blog platforms"],
      timeToMarket: "18 minutes",
      complexity: "Medium",
      color: "from-rose-400 to-pink-500",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-6 bg-blue-50 text-blue-700 border-blue-200">
            Use Cases & Examples
          </Badge>
          <h2 className="text-5xl font-bold tracking-tight mb-8 text-slate-900">
            Build anything you can imagine
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From simple landing pages to complex enterprise applications, 
            our AI handles any project with professional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border-0 bg-white shadow-lg">
              <div className="relative">
                <img 
                  src={useCase.image} 
                  alt={useCase.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className={`absolute top-4 left-4 p-3 rounded-xl bg-gradient-to-br ${useCase.color} text-white`}>
                  {useCase.icon}
                </div>
                <Badge className="absolute top-4 right-4 bg-white/90 text-slate-700">
                  {useCase.timeToMarket}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-slate-900">{useCase.title}</h3>
                  <Badge variant="outline" className="text-xs">
                    {useCase.complexity}
                  </Badge>
                </div>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {useCase.description}
                </p>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="sm" className="w-full group/btn hover:bg-slate-50">
                      <Eye className="w-4 h-4 mr-2" />
                      View Examples
                      <span className="ml-auto transition-transform group-hover/btn:translate-x-1">→</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${useCase.color} text-white`}>
                          {useCase.icon}
                        </div>
                        {useCase.title}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <p className="text-slate-600">{useCase.description}</p>
                      <div>
                        <h4 className="font-semibold mb-2">Example Applications:</h4>
                        <ul className="space-y-2">
                          {useCase.examples.map((example, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex gap-4 text-sm">
                        <div>
                          <span className="font-medium">Time to Market:</span> {useCase.timeToMarket}
                        </div>
                        <div>
                          <span className="font-medium">Complexity:</span> {useCase.complexity}
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
