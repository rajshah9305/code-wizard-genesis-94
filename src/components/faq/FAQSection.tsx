
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export const FAQSection = () => {
  const faqs = [
    {
      question: "How does AI code generation work?",
      answer: "Our AI analyzes your natural language description and generates clean, production-ready React components using best practices. It understands context, design patterns, and modern development standards to create code that you'd write yourself."
    },
    {
      question: "What kind of applications can I build?",
      answer: "You can build any type of web application - from simple landing pages to complex dashboards, e-commerce stores, social platforms, and enterprise applications. The AI supports all modern React patterns, state management, and integrations."
    },
    {
      question: "Is the generated code production-ready?",
      answer: "Yes! All generated code follows industry best practices, includes proper TypeScript definitions, accessibility features, and is optimized for performance. You can deploy the applications immediately or use them as a starting point for further customization."
    },
    {
      question: "Can I customize the generated applications?",
      answer: "Absolutely. The generated code is clean, well-commented, and follows standard React patterns. You can modify, extend, and customize any part of the application using your preferred development tools and workflows."
    },
    {
      question: "What technologies are supported?",
      answer: "We generate applications using React, TypeScript, Tailwind CSS, and modern libraries like Shadcn/UI. The stack is optimized for performance, maintainability, and developer experience."
    },
    {
      question: "How do I deploy my generated app?",
      answer: "Generated applications can be deployed to any modern hosting platform like Vercel, Netlify, or AWS. We also provide one-click deployment options and can generate the necessary configuration files for your preferred platform."
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            FAQ
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight mb-6">
            Frequently asked questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about CodeCraft AI.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-slate-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-semibold hover:text-orange-500 transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
