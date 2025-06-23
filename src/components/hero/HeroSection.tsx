
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
    <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-br from-[#0F4C5C] to-[#0F4C5C]/90">
      {/* Geometric Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF8066]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#7ACC88]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#F0F4F8]/10 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Badge variant="secondary" className="mb-6 px-4 py-2 bg-[#FF8066]/20 text-[#FF8066] border-[#FF8066]/30 hover:bg-[#FF8066]/30">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Development
            </Badge>
          </div>

          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-8 text-[#F0F4F8]">
              Build apps with
              <span className="text-[#FF8066] block">natural language</span>
            </h1>
          </div>

          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-xl md:text-2xl text-[#E0E6EF] mb-12 leading-relaxed">
              Transform your ideas into production-ready React applications using AI.
              No coding required, just describe what you want to build.
            </p>
          </div>

          {/* Interactive Prompt Demo */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-[#F0F4F8] rounded-2xl shadow-2xl p-8 mb-12 max-w-3xl mx-auto border border-[#E0E6EF]">
              <div className="text-left">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-[#FF8066] rounded-full" />
                  <div className="w-3 h-3 bg-[#7ACC88] rounded-full" />
                  <div className="w-3 h-3 bg-[#0F4C5C] rounded-full" />
                  <span className="text-sm text-[#8B9DAF] ml-4">AI App Builder</span>
                </div>
                <div className="bg-[#E0E6EF] rounded-lg p-4 font-mono text-sm">
                  <span className="text-[#8B9DAF]">$ </span>
                  <span className="text-[#FF8066]">describe-app</span>
                  <span className="text-[#0F4C5C]"> "{displayText}</span>
                  <span className="animate-pulse">|</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-[#FF8066] hover:bg-[#FF8066]/90 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                Start Building
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-medium border-[#F0F4F8] text-[#F0F4F8] hover:bg-[#F0F4F8] hover:text-[#0F4C5C] transition-all duration-300">
                Watch Demo
              </Button>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-sm text-[#E0E6EF] mt-8">
              No credit card required • Free tier available • Deploy anywhere
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
