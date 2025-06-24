
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const typewriterText = "Create a modern dashboard with user authentication, data visualization, and real-time updates";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < typewriterText.length) {
        setDisplayText(typewriterText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-32 px-6 overflow-hidden bg-white">
      {/* Geometric Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-black/3 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-orange-500/10 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Badge variant="secondary" className="mb-6 px-6 py-3 bg-orange-50 text-orange-600 border-orange-200 hover:bg-orange-100 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
              <Sparkles className="w-4 h-4 mr-2 text-orange-500" />
              AI-Powered Development
            </Badge>
          </div>

          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-8 text-black leading-tight">
              Build apps with
              <span className="text-orange-500 block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">natural language</span>
            </h1>
          </div>

          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
              Transform your ideas into production-ready React applications using AI.
              No coding required, just describe what you want to build.
            </p>
          </div>

          {/* Interactive Prompt Demo */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white rounded-2xl shadow-xl shadow-orange-500/10 p-8 mb-12 max-w-3xl mx-auto border border-orange-100 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500">
              <div className="text-left">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-orange-500 rounded-full" />
                  <div className="w-3 h-3 bg-orange-400 rounded-full" />
                  <div className="w-3 h-3 bg-orange-300 rounded-full" />
                  <span className="text-sm text-gray-600 ml-4 font-medium">AI App Builder</span>
                </div>
                <div className="bg-black rounded-lg p-4 font-mono text-sm">
                  <span className="text-gray-400">$ </span>
                  <span className="text-orange-500">describe-app</span>
                  <span className="text-white"> "{displayText}</span>
                  <span className="animate-pulse text-orange-500">|</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 hover:-translate-y-1">
                Start Building
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-black/20">
                Watch Demo
              </Button>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-sm text-gray-600 mt-8">
              No credit card required • Free tier available • Deploy anywhere
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
