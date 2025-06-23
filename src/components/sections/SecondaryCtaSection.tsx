
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

export const SecondaryCtaSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-[#E0E6EF] via-[#F0F4F8] to-[#E0E6EF] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#FF8066]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#7ACC88]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-4xl mx-auto text-center relative">
        <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
          <CardContent className="p-16">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FF8066] to-[#7ACC88] rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#7ACC88] rounded-full flex items-center justify-center animate-bounce">
                  <Zap className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            <h2 className="text-5xl font-bold tracking-tight mb-8 text-[#0F4C5C]">
              Ready to build the future?
            </h2>
            <p className="text-xl text-[#8B9DAF] mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands of developers who've already transformed their workflow. 
              Create your first AI-powered application in the next 5 minutes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-[#FF8066] to-[#FF8066]/90 hover:from-[#FF8066]/90 hover:to-[#FF8066]/80 text-white px-12 py-6 text-lg font-medium group shadow-lg hover:shadow-xl transition-all duration-300">
                Start Building Now
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-[#8B9DAF] hover:border-[#FF8066] hover:text-[#FF8066] px-12 py-6 text-lg font-medium transition-all duration-300">
                View Live Demo
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 mt-12 pt-8 border-t border-[#E0E6EF]">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#0F4C5C]">5 min</div>
                <div className="text-sm text-[#8B9DAF]">Setup time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#0F4C5C]">$0</div>
                <div className="text-sm text-[#8B9DAF]">To get started</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#0F4C5C]">∞</div>
                <div className="text-sm text-[#8B9DAF]">Possibilities</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
