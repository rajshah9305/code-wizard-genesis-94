
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Eye } from "lucide-react";

export const CodePreview = () => {
  const [activeTab, setActiveTab] = useState("code");
  const [displayedCode, setDisplayedCode] = useState("");

  const generatedCode = `import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Trash2, Plus } from 'lucide-react';

export const TaskManager = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Design homepage', completed: false },
    { id: 2, text: 'Set up authentication', completed: true },
    { id: 3, text: 'Build API endpoints', completed: false }
  ]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { 
        id: Date.now(), 
        text: newTask, 
        completed: false 
      }]);
      setNewTask('');
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Task Manager</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
          />
          <Button onClick={addTask}>
            <Plus className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="space-y-2">
          {tasks.map(task => (
            <div key={task.id} className="flex items-center gap-2 p-2 rounded border">
              <Checkbox 
                checked={task.completed}
                onCheckedChange={() => {
                  setTasks(tasks.map(t => 
                    t.id === task.id ? { ...t, completed: !t.completed } : t
                  ));
                }}
              />
              <span className={task.completed ? 'line-through text-muted-foreground' : ''}>
                {task.text}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};`;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < generatedCode.length) {
        setDisplayedCode(generatedCode.slice(0, index + 1));
        index += Math.random() > 0.5 ? 2 : 1; // Vary typing speed
      } else {
        clearInterval(timer);
      }
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <Card className="w-full h-[600px]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5" />
            Generated Code
          </CardTitle>
          <Badge variant="secondary">React + TypeScript</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-0 h-[500px]">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full">
          <TabsList className="grid w-full grid-cols-2 m-4 mb-0">
            <TabsTrigger value="code">Code</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
          
          <TabsContent value="code" className="h-full m-0">
            <div className="h-full bg-slate-950 text-slate-100 p-4 overflow-auto font-mono text-sm">
              <pre className="whitespace-pre-wrap">
                <code className="language-tsx">
                  {displayedCode}
                  <span className="animate-pulse bg-orange-500 w-2 h-5 inline-block ml-1" />
                </code>
              </pre>
            </div>
          </TabsContent>
          
          <TabsContent value="preview" className="h-full m-0 p-4 bg-slate-50">
            <div className="h-full flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <Eye className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Live preview will appear here</p>
                <p className="text-sm">Interactive component preview</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
