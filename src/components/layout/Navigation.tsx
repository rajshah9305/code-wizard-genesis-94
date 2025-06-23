
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">CodeCraft</span>
              <Badge variant="secondary" className="text-xs">AI</Badge>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#docs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Docs
            </a>
            <a href="#examples" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
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
              className="hidden md:flex items-center gap-2 text-sm"
            >
              <Command className="w-4 h-4" />
              ⌘K
            </Button>

            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
              Get Started
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200/50">
            <nav className="flex flex-col gap-4">
              <a href="#features" className="text-sm font-medium text-muted-foreground">Features</a>
              <a href="#pricing" className="text-sm font-medium text-muted-foreground">Pricing</a>
              <a href="#docs" className="text-sm font-medium text-muted-foreground">Docs</a>
              <a href="#examples" className="text-sm font-medium text-muted-foreground">Examples</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
