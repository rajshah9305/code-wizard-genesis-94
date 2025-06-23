
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Crown, Rocket } from "lucide-react";

export const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "forever",
      description: "Perfect for trying out CodeCraft",
      icon: <Zap className="w-6 h-6" />,
      features: [
        "3 apps per month",
        "Basic templates",
        "Community support",
        "Standard exports"
      ],
      buttonText: "Get Started",
      popular: false,
      gradient: "from-[#7ACC88] to-[#7ACC88]/80"
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      description: "For serious developers and teams",
      icon: <Crown className="w-6 h-6" />,
      features: [
        "Unlimited apps",
        "Premium templates",
        "Priority support",
        "Advanced customization",
        "Team collaboration",
        "Custom domains"
      ],
      buttonText: "Start Pro Trial",
      popular: true,
      gradient: "from-[#FF8066] to-[#FF8066]/80"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For large organizations",
      icon: <Rocket className="w-6 h-6" />,
      features: [
        "Everything in Pro",
        "SSO integration",
        "Dedicated support",
        "Custom integrations",
        "SLA guarantee",
        "On-premise option"
      ],
      buttonText: "Contact Sales",
      popular: false,
      gradient: "from-[#0F4C5C] to-[#0F4C5C]/80"
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#F0F4F8]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#7ACC88]/20 text-[#7ACC88] border-[#7ACC88]/30 hover:bg-[#7ACC88]/30">
            Simple Pricing
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight mb-6 text-[#0F4C5C]">
            Choose your plan
          </h2>
          <p className="text-xl text-[#8B9DAF] max-w-2xl mx-auto">
            Start free, upgrade when you're ready. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative bg-white border-[#E0E6EF] ${plan.popular ? 'ring-2 ring-[#FF8066] shadow-lg' : ''}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF8066] hover:bg-[#FF8066]/90 text-white">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-6 text-white mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {plan.icon}
                </div>
                <CardTitle className="text-2xl text-[#0F4C5C]">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-[#0F4C5C]">{plan.price}</span>
                  <span className="text-[#8B9DAF] ml-2">/{plan.period}</span>
                </div>
                <p className="text-[#8B9DAF] mt-2">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#7ACC88]" />
                      <span className="text-sm text-[#8B9DAF]">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full transition-all duration-300 ${plan.popular ? 'bg-[#FF8066] hover:bg-[#FF8066]/90 text-white shadow-lg hover:shadow-xl' : 'border-[#E0E6EF] text-[#8B9DAF] hover:bg-[#E0E6EF] hover:text-[#0F4C5C]'}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
