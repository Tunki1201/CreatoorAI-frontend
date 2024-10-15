"use client";
import { promptStore } from "@/app/store/prompt";
import { useState, useEffect, forwardRef, ForwardedRef } from "react";

interface FinalPromptProps {} // Define props if needed

const GeneratedScript = forwardRef<HTMLDivElement, FinalPromptProps>((props, ref) => {
  const prompt = promptStore((state: any) => state.prompt); // Zustand selector
  const [editedResult, setEditedResult] = useState<string>(""); // Local state for the edited value

  // Effect to sync the local state with prompt.result
  useEffect(() => {
    if (prompt.result) { // Only set if prompt.result is truthy
      setEditedResult(prompt.result);
    }
  }, [prompt.result]); // Dependency array to watch for changes

  return (
    <div ref={ref} className="w-full h-full">
      <textarea
        id="finalPrompt"
        className="w-full h-full border rounded p-4 min-h-[70px]"
        value={editedResult} // Bind the textarea to the local state
        onChange={(e) => setEditedResult(e.target.value)} // Update local state on change
        style={{ resize: "vertical" }} // Optional: prevent resizing
      />
    </div>
  );
});

export default GeneratedScript;
