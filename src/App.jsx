import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "../app/globals.css";
import Reader from "@/Reader";
import Snippets from "@/Snippets";
import ModeToggle from "@/components/mode-toggle";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { InfoIcon } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ThemeProvider } from "@/components/theme-provider";
import { ThreadSelector } from "@/components/thread-selector";
import Threads from "@/Threads";
import Essay from "@/Essay";

function App() {
  const [selectedThread, setSelectedThread] = useState(Threads[0]);
  console.log("app selected: ", selectedThread);

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="p-4 max-w-md mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Threaded Concepts</h1>
          <br />
          <h2 className="text-lg italic">prototype</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="mx-2" variant="outline" size="icon">
                <InfoIcon className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>About Threaded Concepts</DialogTitle>
                <DialogDescription>
                  Learn about this Bible study feature
                </DialogDescription>
              </DialogHeader>
              <ScrollArea className="mt-4 h-[300px] w-full rounded-md border p-4">
                <Essay />
              </ScrollArea>
            </DialogContent>
          </Dialog>
          <ModeToggle />
        </div>
        <hr className="mb-4" />
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
