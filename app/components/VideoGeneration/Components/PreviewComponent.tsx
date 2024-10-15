"use client";
import Image from "next/image";
import CardImage from "@/public/icon/card.png";
import PlayIcon from "@/public/icon/paly.png";
import useVideoStore from "@/app/store/videoStore";
import LoadingSpinner from "./utils/Spinner";

const PreviewComponent = () => {
  const { videoUrl, loading } = useVideoStore();

  return (
    <div className="w-full rounded-md border border-[#E1E8EC] p-2 flex flex-col bg-white">
      <span className="bg-[#F5F7FA] border rounded p-1 w-[85px] text-center">
        Preview
      </span>

      <div className="relative flex items-center justify-center mt-4 min-h-[450px]">
        {loading ? (
          // Show loading text when video is being generated
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-loader z-10 size-8 animate-spin"
          >
            <path d="M12 2v4"></path>
            <path d="m16.2 7.8 2.9-2.9"></path>
            <path d="M18 12h4"></path>
            <path d="m16.2 16.2 2.9 2.9"></path>
            <path d="M12 18v4"></path>
            <path d="m4.9 19.1 2.9-2.9"></path>
            <path d="M2 12h4"></path>
            <path d="m4.9 4.9 2.9 2.9"></path>
          </svg>
        ) : videoUrl ? (
          // Render video if videoUrl is available
          <video
            src={videoUrl}
            controls
            width={555}
            height={450}
            className="rounded-md"
          />
        ) : (
          // Render the placeholder image with play icon if no videoUrl
          <>
            <Image src={CardImage} alt="CardImage" width={555} height={450} />
            <div className="absolute inset-0 flex items-center justify-center">
              <Image src={PlayIcon} alt="PlayIcon" width={50} height={50} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PreviewComponent;
