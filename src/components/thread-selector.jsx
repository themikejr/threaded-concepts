import { Button } from "@/components/ui/button";
import Threads from "@/Threads";

export function ThreadSelector({ selectedThread, setSelectedThread }) {
  return (
    <>
      {Threads.map((thread) => {
        return (
          <Button
            key={thread.name}
            onClick={() => {
              console.log("select");
              if (selectedThread) {
                setSelectedThread(thread);
              }
            }}
            variant={
              selectedThread.name === thread.name ? "default" : "outline"
            }
          >
            {thread.name}
          </Button>
        );
      })}
    </>
  );
}
