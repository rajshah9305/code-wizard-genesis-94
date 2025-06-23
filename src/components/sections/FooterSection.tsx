
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Github, Twitter, Linkedin, Mail, Heart } from "lucide-react";

export const FooterSection = () => {
  const footerLinks = {
    Product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Documentation", href: "#docs" },
      { name: "API Reference", href: "#api" }
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
      { name: "Examples", href: "#examples" }
    ],
    Legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "Security", href: "#security" }
    ]
  };

  return (
    <footer className="bg-slate-900 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">CodeCraft</span>
                <Badge className="bg-orange-500 hover:bg-orange-600">AI</Badge>
              </div>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              The future of application development. Transform your ideas into reality 
              with the power of AI-driven code generation.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-8">
              <h4 className="font-semibold mb-4">Stay Updated</h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <Button className="bg-orange-500 hover:bg-orange-600 px-6">
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: <Github className="w-5 h-5" />, href: "#github" },
                { icon: <Twitter className="w-5 h-5" />, href: "#twitter" },
                { icon: <Linkedin className="w-5 h-5" />, href: "#linkedin" },
                { icon: <Mail className="w-5 h-5" />, href: "#email" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 bg-slate-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                >
                  <span className="text-slate-400 group-hover:text-white transition-colors">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-6 text-white">{category}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-slate-300 hover:text-orange-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-slate-400">
              <span>© 2024 CodeCraft AI. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by developers, for developers.</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <span>Status: All systems operational</span>
              <span>•</span>
              <a href="#status" className="hover:text-orange-400 transition-colors">
                System Status
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
