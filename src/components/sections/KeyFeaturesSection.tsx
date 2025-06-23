
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Code, Sparkles, Rocket, Shield, Globe } from "lucide-react";

export const KeyFeaturesSection = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast Generation",
      description: "Transform ideas into production-ready applications in under 5 minutes with our advanced AI engine.",
      benefit: "1000x Faster",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean, Modern Code",
      description: "Generated applications use industry best practices, TypeScript, and modern frameworks out of the box.",
      benefit: "Enterprise Quality",
      gradient: "from-blue-400 to-purple-500"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Smart Design System",
      description: "Every app includes a sophisticated design system with perfect accessibility and responsive layouts.",
      benefit: "Designer Approved",
      gradient: "from-pink-400 to-red-500"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "One-Click Deployment",
      description: "Deploy your applications instantly to any platform with automated CI/CD pipelines.",
      benefit: "Zero DevOps",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security First",
      description: "Built-in security features, authentication, and compliance standards for enterprise-grade applications.",
      benefit: "Bank-Level Security",
      gradient: "from-indigo-400 to-blue-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Scale",
      description: "Applications automatically scale globally with CDN distribution and edge computing optimization.",
      benefit: "Worldwide Ready",
      gradient: "from-teal-400 to-cyan-500"
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-6 bg-orange-50 text-orange-700 border-orange-200">
            Powerful Features
          </Badge>
          <h2 className="text-5xl font-bold tracking-tight mb-8 text-slate-900">
            Everything you need to build
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent block">
              exceptional applications
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our AI doesn't just generate code—it creates complete, production-ready applications 
            with all the features and polish of a professional development team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-white/80 backdrop-blur-sm"
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <CardContent className="p-8 relative overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon with gradient background */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white mb-6 transition-transform duration-300 ${hoveredFeature === index ? 'scale-110 rotate-3' : ''}`}>
                  {feature.icon}
                </div>
                
                {/* Benefit Badge */}
                <Badge className={`mb-4 bg-gradient-to-r ${feature.gradient} text-white border-0`}>
                  {feature.benefit}
                </Badge>
                
                <h3 className="text-xl font-semibold mb-4 text-slate-900 group-hover:text-slate-800 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect decoration */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
