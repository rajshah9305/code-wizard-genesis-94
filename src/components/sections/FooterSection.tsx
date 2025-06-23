
import { Code, Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const FooterSection = () => {
  const footerLinks = {
    Product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Examples", href: "#examples" },
      { name: "Documentation", href: "#docs" }
    ],
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Blog", href: "#blog" },
      { name: "Press Kit", href: "#press" }
    ],
    Resources: [
      { name: "Help Center", href: "#help" },
      { name: "Community", href: "#community" },
      { name: "Tutorials", href: "#tutorials" },
      { name: "API Reference", href: "#api" }
    ],
    Legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "GDPR", href: "#gdpr" }
    ]
  };

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Mail className="w-5 h-5" />, href: "#", label: "Email" }
  ];

  return (
    <footer className="bg-[#0F4C5C] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-6 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FF8066] to-[#7ACC88] rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">CodeCraft</span>
                <Badge className="bg-[#FF8066]/20 text-[#FF8066] border-[#FF8066]/30">AI</Badge>
              </div>
            </div>
            <p className="text-[#E0E6EF] leading-relaxed mb-6">
              Transform your ideas into production-ready applications using the power of AI. 
              Build faster, smarter, and better with natural language programming.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-[#F0F4F8]/10 rounded-lg flex items-center justify-center text-[#E0E6EF] hover:bg-[#FF8066] hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold mb-4 text-[#FF8066]">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-[#E0E6EF] hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#F0F4F8]/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-[#E0E6EF] text-sm">
              © 2024 CodeCraft AI. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-[#E0E6EF]">
              <span>Made with ❤️ for developers</span>
              <span>•</span>
              <span>Version 2.0</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
