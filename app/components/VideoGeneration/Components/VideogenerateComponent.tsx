"use client";
import React, { useRef } from "react";
import Image from "next/image";
import ArrowImage from "@/public/icon/arrow.png";
import GeneratedScript from "./GeneratedScript";
import LoadingSpinner from "./utils/Spinner";
import useVideoStore from "@/app/store/videoStore";

const VideoGenerationComponent = () => {
  const finalPromptRef = useRef<HTMLDivElement | null>(null);
  const { setVideoUrl, setLoading, setError, loading } = useVideoStore();

  const generateVideo = async () => {
    setLoading(true);
    setError(null);

    try {
      let promptText = finalPromptRef.current
        ? finalPromptRef.current.textContent!
        : "";
      promptText = promptText.replace(/^[\[\{( \n\r]*|[\]\}) \n\r]*$/g, "");

      const res = await fetch("/api/generateVideo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          promptImage:
            "https://static.vecteezy.com/system/resources/thumbnails/013/078/569/small/illustration-of-cute-colored-cat-cartoon-cat-image-in-format-suitable-for-children-s-book-design-elements-introduction-of-cats-to-children-books-or-posters-about-animal-free-png.png",
          promptText: promptText,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setVideoUrl(data.outputUrl);
      } else {
        setError(data.error || "Video generation failed.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error(err);
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
