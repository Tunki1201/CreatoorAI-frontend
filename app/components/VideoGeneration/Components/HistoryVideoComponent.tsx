import Image from "next/image";
import ArrowImage from '@/public/icon/arrow.png'
import VectorIcon from '@/public/icon/Vector.png'
import VideoIcon from '@/public/icon/video.png'

const HistoryVideoComponent = () => {

    return (
        <div className="w-full rounded-md border border-[#E1E8EC] p-2 flex flex-col bg-white mt-4">
            <div className="flex items-center justify-between">
                <span className="bg-[#F5F7FA] border rounded p-1 text-center w-[160px] mb-4">
                    Past Videos
                </span>

                <span className="text-[#64748B] ml-auto flex items-center justify-center">
                    All Videos
                    <Image src={VectorIcon} alt="VectorIcon" width={10} height={10} className="ml-1" />
                </span>
            </div>

            <div className="w-full h-[1px] bg-[#E1E8EC] mt-4 mb-4" />
            <div className="flex items-center justify-center flex-col">
                <Image src={VideoIcon} alt='ArrowImage' width={40} height={40} className='ml-1' />
                <span className="text-[#2E3B5B]">Your generated videos will appear here</span>
            </div>
        </div>
    )

}

export default HistoryVideoComponent
