
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-orange-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/30">
              <Code className="w-5 h-5 text-white" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-black">CodeCraft</span>
              <Badge variant="secondary" className="text-xs bg-orange-50 text-orange-600 border-orange-200">AI</Badge>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors duration-200">
              Features
            </a>
            <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors duration-200">
              Pricing
            </a>
            <a href="#docs" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors duration-200">
              Docs
            </a>
            <a href="#examples" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors duration-200">
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
              className="hidden md:flex items-center gap-2 text-sm border-gray-200 hover:border-orange-500 hover:text-orange-500 transition-all duration-200"
            >
              <Command className="w-4 h-4" />
              ⌘K
            </Button>

            <Button variant="ghost" size="sm" className="text-gray-700 hover:text-black hover:bg-gray-50 transition-all duration-200">
              Sign In
            </Button>
            <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 hover:-translate-y-0.5">
              Get Started
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-gray-700 hover:text-black"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-orange-100 bg-white">
            <nav className="flex flex-col gap-4">
              <a href="#features" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">Features</a>
              <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">Pricing</a>
              <a href="#docs" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">Docs</a>
              <a href="#examples" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">Examples</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
