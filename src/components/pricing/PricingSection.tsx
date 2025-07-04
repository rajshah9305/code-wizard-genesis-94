
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
      popular: false
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
      popular: true
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
      popular: false
    }
  ];

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-orange-50 text-orange-600 border-orange-200 px-6 py-3 font-medium">
            Simple Pricing
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight mb-6 text-black">
            Choose your plan
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Start free, upgrade when you're ready. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative bg-white border ${plan.popular ? 'ring-2 ring-orange-500 shadow-xl shadow-orange-500/20' : 'border-gray-200 hover:shadow-orange-500/10'}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 hover:bg-orange-600 shadow-lg shadow-orange-500/30">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-8">
                <div className="text-orange-500 mb-4 flex justify-center">
                  {plan.icon}
                </div>
                <CardTitle className="text-2xl text-black">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-black">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/{plan.period}</span>
                </div>
                <p className="text-gray-700 mt-2">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-orange-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular ? 'bg-orange-500 hover:bg-orange-600 shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40' : 'border-2 border-black hover:bg-black hover:text-white'} transition-all duration-300`}
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
