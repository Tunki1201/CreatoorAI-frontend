"use client"
import { promptStore } from "@/app/store/prompt";

const LoadingSpinner = () => {
  const isLoading = promptStore((state: any) => state.isLoading);

  if (!isLoading) return null;

  return (
    <div className="absolute top-0 left-0 bg-white bg-opacity-[0.9] border h-full w-full flex justify-center items-center">
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
    </div>
  );
};

export default LoadingSpinner;
