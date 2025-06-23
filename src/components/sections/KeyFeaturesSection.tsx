
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Code, Palette, Database, Shield, Rocket } from "lucide-react";

export const KeyFeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI-Powered Generation",
      description: "Transform natural language into production-ready React applications with advanced AI",
      gradient: "from-[#FF8066] to-[#FF8066]/80"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code Output",
      description: "Generate maintainable, well-structured TypeScript code following best practices",
      gradient: "from-[#7ACC88] to-[#7ACC88]/80"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Beautiful UI Components",
      description: "Modern, responsive designs with Tailwind CSS and shadcn/ui components",
      gradient: "from-[#0F4C5C] to-[#0F4C5C]/80"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Integration",
      description: "Seamless integration with popular databases and real-time data management",
      gradient: "from-[#FF8066] to-[#7ACC88]"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security First",
      description: "Built-in authentication, authorization, and security best practices",
      gradient: "from-[#7ACC88] to-[#0F4C5C]"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "One-Click Deploy",
      description: "Deploy your applications instantly to popular hosting platforms",
      gradient: "from-[#0F4C5C] to-[#FF8066]"
    }
  ];

  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#FF8066]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#7ACC88]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-[#7ACC88]/20 text-[#7ACC88] border-[#7ACC88]/30 hover:bg-[#7ACC88]/30">
            Powerful Features
          </Badge>
          <h2 className="text-5xl font-bold tracking-tight mb-8 text-[#0F4C5C]">
            Everything you need to
            <span className="text-[#FF8066] block">build amazing apps</span>
          </h2>
          <p className="text-xl text-[#8B9DAF] max-w-3xl mx-auto leading-relaxed">
            From idea to deployment, we provide all the tools and features you need for modern web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-[#E0E6EF] bg-white backdrop-blur-sm overflow-hidden">
              <CardContent className="p-8 h-full flex flex-col">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#0F4C5C] mb-4 group-hover:text-[#FF8066] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[#8B9DAF] leading-relaxed flex-grow">
                  {feature.description}
                </p>
                <div className={`h-1 w-0 bg-gradient-to-r ${feature.gradient} group-hover:w-full transition-all duration-500 mt-6 rounded-full`} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
