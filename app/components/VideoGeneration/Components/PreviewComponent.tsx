import Image from "next/image"
import CardImage from '@/public/icon/card.png'
import PlayIcon from '@/public/icon/paly.png'

const PreviewComponent = () => {

    return (
        <div className="w-full rounded-md border border-[#E1E8EC] p-2 flex flex-col bg-white">
            <span className="bg-[#F5F7FA] border rounded p-1 w-[85px] text-center">
                Preview
            </span>
            <div className="relative flex items-center justify-center">
                {/* Card Image */}
                <Image src={CardImage} alt="CardImage" width={555} height={450} />

                {/* Play Icon in the center */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <Image src={PlayIcon} alt="PlayIcon" width={50} height={50} />
                </div>
            </div>
        </div>
    )
}

export default PreviewComponent
