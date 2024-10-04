import TabComponent from "./utils/TabComponent"

const InputComponent = () => {

    return (
        <div className="w-full rounded-md border border-[#E1E8EC] p-2 flex flex-col bg-white">
            <span className="bg-[#F5F7FA] border rounded p-1 w-[50px] text-center">
                Input
            </span>
            <span style={{ fontWeight: '500', lineHeight: '16px' }} className="text-[#2E3B5B] py-4">
                Replica
            </span>

            <button
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="radix-:r8:"
                data-state="closed"
                className="relative mb-4 inline-flex justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground group h-auto w-full items-center rounded-md border border-border bg-background px-3 py-2 hover:border-primary hover:bg-background"
            >
                <span className="relative shrink-0 rounded-full mr-2 flex size-8 items-center justify-center overflow-hidden text-center">
                    <video
                        src="https://cdn.replica.tavus.io/4967/b93cfa96.mp4#t=1"
                        className="absolute z-20 aspect-square size-full object-cover"
                        crossOrigin="anonymous"
                    />
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
                        className="lucide lucide-loader absolute z-10 size-5 animate-spin"
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
                </span>
                <p className="mr-1 truncate text-sm font-medium">
                    <span>Kelvin - Instagram Reel</span>
                    <span className="ml-1 text-muted-foreground">(default)</span>
                </p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down ml-auto text-muted-foreground group-hover:text-primary"
                >
                    <path d="m6 9 6 6 6-6"></path>
                </svg>
            </button>

            <TabComponent />
        </div>
    )

}

export default InputComponent
