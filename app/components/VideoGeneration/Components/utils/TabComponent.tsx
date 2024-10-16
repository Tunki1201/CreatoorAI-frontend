"use client";
import { useState } from "react";
import { FileText, Headphones } from "lucide-react";
import ArrowImage from "@/public/icon/arrow.png";
import Image from "next/image";
import StarImage from "@/public/icon/star.png";
import SubmitPrompt from "./SubmitPrompt";
import { promptStore } from "@/app/store/prompt";

// EnterPrompt Component
const EnterPrompt = () => {
    const [promptInput, setPromptInput] = useState("");

    const setLoading = promptStore((state:any) => state.setLoading);
    const updateResult = promptStore((state:any) => state.updatePrompt);
    const isLoading = promptStore((state:any) => state.isLoading); // Get the loading state
  
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      setLoading(true);
      console.log("requested");
  
      try {
        const promptResult:any = await SubmitPrompt(promptInput);
        setLoading(false);
        console.log("final res: " + promptResult);
  
        updateResult({ result: promptResult });
      } catch (error) {
        console.error(error);
        setLoading(false); // Ensure loading state is reset on error
      }
    }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <label htmlFor="prompt" className="text-gray-600">
          Enter Prompt
        </label>
        <Image src={StarImage} alt="StarImage" width={20} height={20} />
      </div>

      <textarea
        id="prompt"
        value={promptInput}
        onChange={({ target: { value } }) => setPromptInput(value)}
        className="p-2 border border-gray-300 rounded"
        placeholder="Type your prompt here..."
      />
      <button
        type="submit"
        className="bg-[#2E3B5B] text-white w-[182px] py-2 px-4 rounded hover:bg-[#3e507b] ml-auto flex items-center justify-center"
      >
        Generate Script
        <Image
          src={ArrowImage}
          alt="ArrowImage"
          width={20}
          height={20}
          className="ml-1"
        />
      </button>
    </form>
  );
};

const tabs = [
  {
    key: "1",
    label: "Prompt to Script",
    children: <EnterPrompt />,
    icon: <FileText />,
  },
  {
    key: "2",
    label: "Audio to Script",
    children: "Content of Tab Pane 2",
    icon: <Headphones />,
  },
];

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <div className="w-full">
      <div className="flex border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex items-center gap-2 p-4 text-gray-600 hover:text-blue-500 focus:outline-none ${
              activeTab === tab.key ? "border-b-2 border-blue-500" : ""
            }`}
          >
            <span className="text-xl">{tab.icon}</span>
            <span className="text-sm font-medium">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="p-4">
        {tabs.map((tab) => (
          <div
            key={tab.key}
            className={`${activeTab === tab.key ? "block" : "hidden"}`}
          >
            {tab.children}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabComponent;
