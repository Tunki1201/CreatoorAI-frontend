"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import ArrowImage from "@/public/icon/arrow.png";
import GeneratedScript from "./GeneratedScript";
import LoadingSpinner from "./utils/Spinner";

const VideoGenerationComponent = () => {
  const finalPromptRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [error, setError] = useState(null);

  const handleVideoGen = () => {
    if (finalPromptRef.current) {
      console.log(finalPromptRef.current.textContent);
    } else {
      console.warn("finalPromptRef is not attached to any element.");
    }
  };

  const generateVideo = async () => {
    setLoading(true);
    setError(null);

    try {
      // Get the prompt text from the ref and handle null case
      let promptText = finalPromptRef.current
      ? finalPromptRef.current.textContent!
      : "";  // Use ! to assert it's not null

  // Remove brackets, special characters, and newline characters at the start and end of the string
  promptText = promptText.replace(/^[\[\{( \n\r]*|[\]\}) \n\r]*$/g, '');

  console.log(promptText);

  const res = await fetch("/api/generateVideo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
          promptImage: "https://static.vecteezy.com/system/resources/thumbnails/013/078/569/small/illustration-of-cute-colored-cat-cartoon-cat-image-in-format-suitable-for-children-s-book-design-elements-introduction-of-cats-to-children-books-or-posters-about-animal-free-png.png",
          promptText: promptText,
      }),
      });

      const data = await res.json();

      if (res.ok) {
        // Assuming the API returns the output URL in the format you mentioned
        setVideoUrl(data.outputUrl); // Use outputUrl instead of videoUrl
        console.log("Response OK");
      } else {
        setError(data.error || "Video generation failed.");
        console.log("Error:", data.error);
      }
    } catch (err) {
      console.error("Fetch Error:", err);
      setError(error); // Changed error to err.message
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full rounded-md border border-[#E1E8EC] relative p-6 flex flex-col bg-white mt-4">
      <span className="bg-[#F5F7FA] border rounded p-1 text-center w-[160px] mb-4">
        Generated Script
      </span>
      <div className="h-full mb-4 relative ">
        <GeneratedScript ref={finalPromptRef} />
        <LoadingSpinner />
      </div>
      <div className="border border-[#E1E8EC] rounded-md flex items-center h-[4.5rem] p-4">
        <span>Advanced settings</span>
      </div>

      <div className="w-full h-[1px] bg-[#E1E8EC] mt-4 mb-4" />

      <div>
        <h1>
          {loading ? "Generating..." : "Generate Video"}
        </h1>

        {videoUrl && (
          <div>
            <video src={videoUrl} controls width="600" />
          </div>
        )}

        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>

      <button
        onClick={generateVideo}
        type="submit"
        className="bg-[#2E3B5B] text-white w-[182px] py-2 px-4 rounded hover:bg-[#3e507b] ml-auto flex items-center justify-center"
      >
        Generate Video
        <Image
          src={ArrowImage}
          alt="ArrowImage"
          width={20}
          height={20}
          className="ml-1"
        />
      </button>
    </div>
  );
};

export default VideoGenerationComponent;
