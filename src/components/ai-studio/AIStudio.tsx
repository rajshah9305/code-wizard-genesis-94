
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Play, CheckCircle } from "lucide-react";

export const AIStudio = () => {
  const [prompt, setPrompt] = useState("Build a modern task management app with drag-and-drop functionality, user authentication, and real-time collaboration features.");
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState("");

  const steps = [
    "Analyzing requirements...",
    "Planning architecture...",
    "Generating components...",
    "Setting up routing...",
    "Adding styling...",
    "Optimizing code...",
    "Finalizing build..."
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    setProgress(0);
    
    steps.forEach((step, index) => {
      setTimeout(() => {
        setCurrentStep(step);
        setProgress(((index + 1) / steps.length) * 100);
        
        if (index === steps.length - 1) {
          setTimeout(() => {
            setIsGenerating(false);
            setCurrentStep("Complete! Your app is ready.");
          }, 500);
        }
      }, index * 800);
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-orange-500" />
          AI Generation Studio
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <label className="text-sm font-medium mb-2 block">
            Describe your app
          </label>
          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe what you want to build..."
            className="min-h-[120px] resize-none"
            disabled={isGenerating}
          />
        </div>

        {!isGenerating ? (
          <Button 
            onClick={handleGenerate}
            className="w-full bg-orange-500 hover:bg-orange-600"
            size="lg"
          >
            <Play className="w-4 h-4 mr-2" />
            Generate App
          </Button>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{currentStep}</span>
              <Badge variant="secondary">{Math.round(progress)}%</Badge>
            </div>
            <Progress value={progress} className="w-full" />
          </div>
        )}

        {progress === 100 && !isGenerating && (
          <div className="flex items-center gap-2 text-green-600 text-sm">
            <CheckCircle className="w-4 h-4" />
            Generation complete! Your app is ready to deploy.
          </div>
        )}
      </CardContent>
    </Card>
  );
};
