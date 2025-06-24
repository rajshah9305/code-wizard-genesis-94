
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Code, Zap, ArrowRight } from "lucide-react";

export const ProblemSolutionSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const problems = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Weeks of Development Time",
      description: "Traditional app development takes months of planning, coding, testing, and deployment.",
      color: "text-red-500"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Complex Technical Setup",
      description: "Setting up frameworks, dependencies, and configurations requires deep technical knowledge.",
      color: "text-orange-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "High Development Costs",
      description: "Hiring developers and maintaining codebases can cost thousands of dollars per month.",
      color: "text-yellow-500"
    }
  ];

  const solutions = [
    {
      title: "Minutes to Deploy",
      description: "Generate production-ready apps in under 5 minutes with natural language prompts.",
      improvement: "1000x faster"
    },
    {
      title: "Zero Setup Required",
      description: "No frameworks to learn, no dependencies to manage. Just describe and build.",
      improvement: "100% simplified"
    },
    {
      title: "Fraction of the Cost",
      description: "Build unlimited apps for less than what you'd pay a developer per hour.",
      improvement: "90% cost savings"
    }
  ];

  return (
    <section className="py-24 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Problem Statement */}
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-6 bg-red-50 text-red-600 border-red-200 px-6 py-3 font-medium">
            The Development Problem
          </Badge>
          <h2 className="text-5xl font-bold tracking-tight mb-8 text-black">
            Building apps shouldn't be this <span className="text-red-500">hard</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Developers spend countless hours on repetitive tasks, complex setups, and maintenance. 
            There has to be a better way.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {problems.map((problem, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-500 hover:-translate-y-2 border border-gray-200 bg-white"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardContent className="p-8 text-center">
                <div className={`${problem.color} mb-6 flex justify-center transition-transform duration-300 ${hoveredCard === index ? 'scale-110' : ''}`}>
                  {problem.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-black">{problem.title}</h3>
                <p className="text-gray-700 leading-relaxed">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Solution Statement */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent flex-1 max-w-32" />
            <Badge className="bg-orange-50 text-orange-600 border-orange-200 px-6 py-3 font-medium">
              Our Solution
            </Badge>
            <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent flex-1 max-w-32" />
          </div>
          <h2 className="text-5xl font-bold tracking-tight mb-8 text-black">
            AI-powered development that <span className="text-orange-500">just works</span>
          </h2>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card key={index} className="group hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-500 hover:-translate-y-2 border border-orange-200 bg-orange-50/30">
              <CardContent className="p-8 text-center">
                <Badge className="bg-orange-500 hover:bg-orange-600 text-white mb-4 px-4 py-2 font-medium shadow-lg shadow-orange-500/30">
                  {solution.improvement}
                </Badge>
                <h3 className="text-xl font-semibold mb-4 text-black">{solution.title}</h3>
                <p className="text-gray-700 leading-relaxed">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold group shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-300 hover:-translate-y-1">
            Experience the Difference
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};
