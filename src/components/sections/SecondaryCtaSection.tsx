
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

export const SecondaryCtaSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-orange-50 via-white to-orange-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-4xl mx-auto text-center relative">
        <Card className="border-0 shadow-2xl shadow-orange-500/20 bg-white/90 backdrop-blur-sm hover:shadow-3xl hover:shadow-orange-500/30 transition-all duration-500">
          <CardContent className="p-16">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl shadow-orange-500/40">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-black rounded-full flex items-center justify-center animate-bounce">
                  <Zap className="w-4 h-4 text-orange-400" />
                </div>
              </div>
            </div>

            <h2 className="text-5xl font-bold tracking-tight mb-8 text-black">
              Ready to build the future?
            </h2>
            <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands of developers who've already transformed their workflow. 
              Create your first AI-powered application in the next 5 minutes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 text-lg font-semibold group shadow-xl shadow-orange-500/40 hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-1">
                Start Building Now
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-black hover:bg-black hover:text-white px-12 py-6 text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-black/20">
                View Live Demo
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-black">5 min</div>
                <div className="text-sm text-gray-600">Setup time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-black">$0</div>
                <div className="text-sm text-gray-600">To get started</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500">∞</div>
                <div className="text-sm text-gray-600">Possibilities</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
