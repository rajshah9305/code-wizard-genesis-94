
import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Command, Search, Sparkles, Code, Settings, HelpCircle, ArrowRight } from "lucide-react";

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CommandPalette = ({ open, onOpenChange }: CommandPaletteProps) => {
  const [query, setQuery] = useState("");

  const commands = [
    {
      category: "Generate",
      items: [
        { icon: <Sparkles className="w-4 h-4" />, title: "Generate New App", description: "Create a new application from description", action: "generate" },
        { icon: <Code className="w-4 h-4" />, title: "Generate Component", description: "Create a custom React component", action: "component" },
      ]
    },
    {
      category: "Navigate",
      items: [
        { icon: <Search className="w-4 h-4" />, title: "Browse Templates", description: "Explore pre-built app templates", action: "templates" },
        { icon: <Settings className="w-4 h-4" />, title: "Project Settings", description: "Configure your project settings", action: "settings" },
        { icon: <HelpCircle className="w-4 h-4" />, title: "Documentation", description: "View help and documentation", action: "docs" },
      ]
    }
  ];

  const filteredCommands = commands.map(category => ({
    ...category,
    items: category.items.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 max-w-2xl">
        <div className="flex items-center gap-3 p-4 border-b">
          <Command className="w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Type a command or search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border-0 focus-visible:ring-0 text-lg"
            autoFocus
          />
          <Badge variant="secondary" className="text-xs">⌘K</Badge>
        </div>

        <div className="max-h-96 overflow-auto p-2">
          {filteredCommands.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">
              <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p>No commands found</p>
            </div>
          ) : (
            filteredCommands.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-4 last:mb-0">
                <div className="px-2 py-1 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {category.category}
                </div>
                <div className="space-y-1">
                  {category.items.map((item, itemIndex) => (
                    <button
                      key={itemIndex}
                      className="w-full flex items-center gap-3 p-3 rounded-md hover:bg-slate-100 transition-colors text-left group"
                      onClick={() => {
                        onOpenChange(false);
                        console.log(`Executing: ${item.action}`);
                      }}
                    >
                      <div className="text-muted-foreground group-hover:text-foreground">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{item.title}</div>
                        <div className="text-xs text-muted-foreground">{item.description}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-4 border-t bg-slate-50 text-xs text-muted-foreground">
          Use ↑↓ to navigate • Enter to select • Esc to close
        </div>
      </DialogContent>
    </Dialog>
  );
};
