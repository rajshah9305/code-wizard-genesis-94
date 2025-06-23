
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, ArrowRight } from "lucide-react";

export const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const stats = [
    { label: "Apps Generated", value: "50,000+" },
    { label: "Active Developers", value: "12,000+" },
    { label: "Lines of Code", value: "2.5M+" },
    { label: "Countries", value: "80+" }
  ];

  return (
    <section className="py-24 px-6 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-orange-500 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-300 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-12 text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-orange-500 hover:bg-orange-600">
                <Mail className="w-4 h-4 mr-2" />
                Developer Updates
              </Badge>
            </div>
            
            <h3 className="text-3xl font-bold mb-4">
              Stay ahead of the curve
            </h3>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Get weekly insights on AI development, new features, and exclusive tips 
              from our engineering team. Join 10,000+ developers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
              />
              <Button className="bg-orange-500 hover:bg-orange-600 whitespace-nowrap">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            
            <p className="text-xs text-slate-400 mt-4">
              No spam. Unsubscribe at any time.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
