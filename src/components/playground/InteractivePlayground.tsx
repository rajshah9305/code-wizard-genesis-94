
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Code, Eye } from "lucide-react";

export const InteractivePlayground = () => {
  const [prompt, setPrompt] = useState("Create a modern login form with email and password fields, social login buttons, and a forgot password link");
  const [isGenerating, setIsGenerating] = useState(false);

  const examples = [
    {
      title: "Login Form",
      prompt: "Create a modern login form with email and password fields, social login buttons, and a forgot password link"
    },
    {
      title: "Dashboard Card",
      prompt: "Build a dashboard analytics card showing revenue with a chart, percentage change, and trend indicator"
    },
    {
      title: "Product Card",
      prompt: "Design a product card with image, title, price, rating stars, and add to cart button"
    }
  ];

  const generatedCode = `import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const LoginForm = () => {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Welcome Back</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button className="w-full">Sign In</Button>
      </CardContent>
    </Card>
  );
};`;

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 3000);
  };

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Try It Live
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight mb-6">
            Experience AI generation
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Describe any component and watch as our AI generates clean, production-ready React code.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Side */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-orange-500" />
                  Describe Your Component
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe what you want to build..."
                  className="min-h-[120px] resize-none"
                />
                
                <Button 
                  onClick={handleGenerate}
                  className="w-full bg-orange-500 hover:bg-orange-600"
                  disabled={isGenerating}
                >
                  <Play className="w-4 h-4 mr-2" />
                  {isGenerating ? "Generating..." : "Generate Component"}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Quick Examples</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {examples.map((example, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start text-left h-auto p-3"
                    onClick={() => setPrompt(example.prompt)}
                  >
                    <div>
                      <div className="font-medium">{example.title}</div>
                      <div className="text-xs text-muted-foreground truncate">
                        {example.prompt}
                      </div>
                    </div>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Output Side */}
          <div className="space-y-6">
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="preview">
                  <Eye className="w-4 h-4 mr-2" />
                  Preview
                </TabsTrigger>
                <TabsTrigger value="code">
                  <Code className="w-4 h-4 mr-2" />
                  Code
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="preview" className="mt-6">
                <Card className="h-96">
                  <CardContent className="p-8 flex items-center justify-center">
                    {isGenerating ? (
                      <div className="text-center">
                        <div className="animate-spin w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                        <p className="text-muted-foreground">Generating component...</p>
                      </div>
                    ) : (
                      <div className="w-full max-w-md">
                        <Card>
                          <CardHeader>
                            <CardTitle>Welcome Back</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <input 
                              type="email" 
                              placeholder="Email"
                              className="w-full px-3 py-2 border rounded-md"
                            />
                            <input 
                              type="password" 
                              placeholder="Password"
                              className="w-full px-3 py-2 border rounded-md"
                            />
                            <Button className="w-full bg-orange-500 hover:bg-orange-600">
                              Sign In
                            </Button>
                          </CardContent>
                        </Card>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="code" className="mt-6">
                <Card className="h-96">
                  <CardContent className="p-0">
                    <pre className="h-full overflow-auto p-6 text-sm bg-slate-900 text-slate-100 rounded-lg">
                      <code>{generatedCode}</code>
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};
