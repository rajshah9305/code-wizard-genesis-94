
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Code, Zap, Sparkles, Play, Github, Twitter } from "lucide-react";
import { HeroSection } from "@/components/hero/HeroSection";
import { AIStudio } from "@/components/ai-studio/AIStudio";
import { CodePreview } from "@/components/code-preview/CodePreview";
import { Navigation } from "@/components/layout/Navigation";
import { CommandPalette } from "@/components/ui/command-palette";

const Index = () => {
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("hero");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI-Powered Generation",
      description: "Transform natural language into production-ready React applications in seconds."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean, Modern Code",
      description: "Generated applications use best practices, TypeScript, and modern frameworks."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Premium Design System",
      description: "Every app includes a sophisticated design system with perfect accessibility."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation onCommandToggle={() => setIsCommandOpen(true)} />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Features Grid */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              The Future of Development
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight mb-6">
              Build faster than ever imagined
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the next generation of application development with AI that understands your vision.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Studio Demo */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-6">
              Watch AI build your app
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From concept to code in real-time. See the magic happen.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AIStudio />
            <CodePreview />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold tracking-tight mb-6">
            Ready to build the future?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Join thousands of developers who are already building with AI. Create your first app in minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
              Start Building
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          <div className="flex justify-center gap-6 mt-12 pt-12 border-t border-slate-800">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      <CommandPalette open={isCommandOpen} onOpenChange={setIsCommandOpen} />
    </div>
  );
};

export default Index;
