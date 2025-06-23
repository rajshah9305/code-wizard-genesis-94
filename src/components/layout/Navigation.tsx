
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Menu, X, Command } from "lucide-react";

interface NavigationProps {
  onCommandToggle: () => void;
}

export const Navigation = ({ onCommandToggle }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F0F4F8]/90 backdrop-blur-lg border-b border-[#E0E6EF]/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-[#FF8066] to-[#7ACC88] rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-[#0F4C5C]">CodeCraft</span>
              <Badge className="text-xs bg-[#FF8066]/20 text-[#FF8066] border-[#FF8066]/30 hover:bg-[#FF8066]/30">AI</Badge>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-[#8B9DAF] hover:text-[#0F4C5C] transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-sm font-medium text-[#8B9DAF] hover:text-[#0F4C5C] transition-colors">
              Pricing
            </a>
            <a href="#docs" className="text-sm font-medium text-[#8B9DAF] hover:text-[#0F4C5C] transition-colors">
              Docs
            </a>
            <a href="#examples" className="text-sm font-medium text-[#8B9DAF] hover:text-[#0F4C5C] transition-colors">
              Examples
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Command Palette Trigger */}
            <Button 
              variant="outline" 
              size="sm" 
              onClick={onCommandToggle}
              className="hidden md:flex items-center gap-2 text-sm border-[#E0E6EF] text-[#8B9DAF] hover:bg-[#E0E6EF] hover:text-[#0F4C5C]"
            >
              <Command className="w-4 h-4" />
              ⌘K
            </Button>

            <Button variant="ghost" size="sm" className="text-[#8B9DAF] hover:text-[#0F4C5C] hover:bg-[#E0E6EF]">
              Sign In
            </Button>
            <Button size="sm" className="bg-[#FF8066] hover:bg-[#FF8066]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-[#8B9DAF] hover:text-[#0F4C5C]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#E0E6EF]/50">
            <nav className="flex flex-col gap-4">
              <a href="#features" className="text-sm font-medium text-[#8B9DAF]">Features</a>
              <a href="#pricing" className="text-sm font-medium text-[#8B9DAF]">Pricing</a>
              <a href="#docs" className="text-sm font-medium text-[#8B9DAF]">Docs</a>
              <a href="#examples" className="text-sm font-medium text-[#8B9DAF]">Examples</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
