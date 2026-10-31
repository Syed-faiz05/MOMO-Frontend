"use client";

import * as React from "react";

import { AiResponseWriter } from "@/components/ui/ai-response-writer";

const responses = [
  `Analyzing step by step...
User needs a component that auto-opens on streaming and closes when done.
A collapsible design with clean state handling seems ideal.`,
  `Shaping the approach...
Combine controlled patterns with auto state awareness.
Keep integration flexible and UI minimal.`,
  `Outlining structure...
Define props, state flow, and basic interactions.
Sketch the logic for seamless behavior.`,
  `Polishing details...
Simplify interactions and adjust for smooth transitions.
Focus on clarity and consistency in UI flow.`,
  `Building the solution...
Auto-open with streaming, close gracefully after.
Ensure clean design and align with codebase conventions.`,
];

export default function Demo() {
  const [text, setText] = React.useState("");
  const wordsRef = React.useRef<string[]>(responses.join("\n\n").split(" "));

  React.useEffect(() => {
    let index = 0;
    setText("");
    const id = setInterval(() => {
      index += 1;
      setText(wordsRef.current.slice(0, index).join(" "));
      if (index >= wordsRef.current.length) {
        clearInterval(id);
      }
    }, 120);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="text-card-foreground bg-card ring-foreground/10 w-full max-w-2xl rounded-xl p-4 text-sm shadow-xs ring-1">
      <p className="mb-3 font-medium">AI is responding…</p>
      <AiResponseWriter text={text} className="h-40" />
    </div>
  );
}
