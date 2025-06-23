
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle, Clock, Code, Zap } from "lucide-react";

export const ProblemSolutionSection = () => {
  const problems = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Development Takes Forever",
      description: "Months of coding, debugging, and deployment cycles slow down innovation"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Technical Barriers",
      description: "Great ideas get stuck because of complex technical requirements"
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "High Development Costs",
      description: "Hiring developers and maintaining codebases becomes expensive"
    }
  ];

  const solutions = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant App Creation",
      description: "Generate complete applications in minutes, not months"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "No-Code Required",
      description: "Transform natural language descriptions into production-ready code"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Professional Quality",
      description: "Clean, maintainable code following industry best practices"
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#F0F4F8] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#FF8066]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#7ACC88]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-[#FF8066]/20 text-[#FF8066] border-[#FF8066]/30 hover:bg-[#FF8066]/30">
            Problem → Solution
          </Badge>
          <h2 className="text-5xl font-bold tracking-tight mb-8 text-[#0F4C5C]">
            From frustration to
            <span className="text-[#FF8066] block">innovation</span>
          </h2>
          <p className="text-xl text-[#8B9DAF] max-w-3xl mx-auto leading-relaxed">
            We understand the challenges of modern development. Here's how we solve them.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problems */}
          <div className="space-y-8">
            <div className="text-center lg:text-left mb-12">
              <h3 className="text-3xl font-bold text-[#0F4C5C] mb-4">The Problem</h3>
              <p className="text-[#8B9DAF] text-lg">Development shouldn't be this hard</p>
            </div>
            
            {problems.map((problem, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-[#E0E6EF] bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="text-[#FF8066] bg-[#FF8066]/10 p-3 rounded-xl group-hover:bg-[#FF8066]/20 transition-colors">
                      {problem.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-[#0F4C5C] mb-3">{problem.title}</h4>
                      <p className="text-[#8B9DAF] leading-relaxed">{problem.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Solutions */}
          <div className="space-y-8">
            <div className="text-center lg:text-left mb-12">
              <h3 className="text-3xl font-bold text-[#0F4C5C] mb-4">Our Solution</h3>
              <p className="text-[#8B9DAF] text-lg">AI-powered development made simple</p>
            </div>
            
            {solutions.map((solution, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-[#7ACC88]/20 bg-gradient-to-r from-[#7ACC88]/5 to-[#7ACC88]/10 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="text-[#7ACC88] bg-[#7ACC88]/10 p-3 rounded-xl group-hover:bg-[#7ACC88]/20 transition-colors">
                      {solution.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-[#0F4C5C] mb-3">{solution.title}</h4>
                      <p className="text-[#8B9DAF] leading-relaxed">{solution.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
