import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "../app/globals.css";
import Reader from "@/Reader";
import Snippets from "@/Snippets";
import ModeToggle from "@/components/mode-toggle";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ThemeProvider } from "@/components/theme-provider";
import { ThreadSelector } from "@/components/thread-selector";
import Threads from "@/Threads";

function App() {
  const [selectedThread, setSelectedThread] = useState(Threads[0]);
  console.log("app selected: ", selectedThread);

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="p-4 max-w-md mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Threaded Concepts: A Prototype</h1>
          <ModeToggle />
        </div>
        <h2 className="text-xl text-center font-bold mb-4">James Chapter 1</h2>

        <div className="flex flex-wrap gap-2 mb-4">
          <ThreadSelector
            selectedThread={selectedThread}
            setSelectedThread={setSelectedThread}
          />
        </div>

        <Tabs defaultValue="full-text" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="full-text">Full Text</TabsTrigger>
            <TabsTrigger value="snippets">Snippets</TabsTrigger>
          </TabsList>
          <TabsContent value="full-text">
            <ScrollArea className="h-[70vh]">
              <div className="p-4">
                <Reader selectedThread={selectedThread} />
              </div>
            </ScrollArea>
          </TabsContent>
          <TabsContent value="snippets">
            <ScrollArea className="h-[70vh]">
              <div className="space-y-4">
                <Snippets selectedThread={selectedThread} />
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </div>
    </ThemeProvider>
  );
}

export default App;
