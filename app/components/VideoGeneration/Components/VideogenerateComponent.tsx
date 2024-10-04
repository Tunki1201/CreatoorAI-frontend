import Image from "next/image";
import ArrowImage from '@/public/icon/arrow.png'

const VideoGenerationComponent = () => {

    return (
        <div className="w-full rounded-md border border-[#E1E8EC] p-2 flex flex-col bg-white mt-4">
            <span className="bg-[#F5F7FA] border rounded p-1 text-center w-[160px] mb-4">
                Generated Script
            </span>
            <div className="h-[120px]">

            </div>
            <div className="border border-[#E1E8EC] rounded-md flex items-center h-[4.5rem] p-4">
                <span>
                    Advanced settings
                </span>
            </div>

            <div className="w-full h-[1px] bg-[#E1E8EC] mt-4 mb-4" />

            <button
                type="submit"
                className="bg-[#2E3B5B] text-white w-[182px] py-2 px-4 rounded hover:bg-[#3e507b] ml-auto flex items-center justify-center"
            >
                Generate Video
                <Image src={ArrowImage} alt='ArrowImage' width={20} height={20} className='ml-1' />
            </button>
        </div>
    )

}

export default VideoGenerationComponent
