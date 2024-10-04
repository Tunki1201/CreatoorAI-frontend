'use client'
import Image from 'next/image';
import StarImage from '@/public/assets/images/about/star.png'
import PersonImage1 from '@/public/assets/images/portraits/portrait_1.jpg'
import PersonImage2 from '@/public/assets/images/portraits/portrait_2.jpg'
import PersonImage3 from '@/public/assets/images/portraits/portrait_3.jpg'
import PersonImage4 from '@/public/assets/images/portraits/portrait_4.jpg'
import PersonImage5 from '@/public/assets/images/portraits/portrait_5.jpg'
import PersonImage6 from '@/public/assets/images/portraits/portrait_6.jpg'

export default function IntroSectionComponent() {
    return (
        <article className="rounded-lg px-4 sm:px-6 md:px-8 border border-[#252629] w-full   gradient-bg lg:bg-none lg:bg-[#5169e4]">
            <div className="w-full relative border-x border-[#353e3b] md:px-8 py-[7.5%] grid lg:grid-cols-2 gap-8 xl:gap-16 items-start">
                {/* Decorative Background Dots */}
                <section className="z-0 absolute w-full h-full col-span-2 grid grid-cols-2 place-content-between">
                    <div className="bg-[#4BDE81] rounded-full w-1 h-1 my-8 outline outline-8 outline-[#171b1c]/60 lg:outline-[#171B1C] -mx-[2.5px]"></div>
                    <div className="bg-[#4BDE81] rounded-full w-1 h-1 my-8 outline outline-8 outline-[#171b1c]/60 lg:outline-[#171B1C] -mx-[2px] place-self-end"></div>
                    <div className="bg-[#4BDE81] rounded-full w-1 h-1 my-8 outline outline-8 outline-[#171b1c]/60 lg:outline-[#171B1C] -mx-[2.5px]"></div>
                    <div className="bg-[#4BDE81] rounded-full w-1 h-1 my-8 outline outline-8 outline-[#171b1c]/60 lg:outline-[#171B1C] -mx-[2px] place-self-end"></div>
                </section>

                {/* Main Content Section */}
                <section className="z-10 space-y-6 mt-12 lg:mt-0 lg:pl-8 flex-2">
                    <h1 className="text-4xl sm:text-[42px] xl:text-5xl 2xl:text-6xl lg:text-left leading-[50px] text-center font-[&quot;Euclid_Circular_A&quot;] text-white font-medium">
                        Create Viral Videos
                        with Your AI<br />
                        <span className="font-medium shimmer-text bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#B8860B] bg-clip-text text-transparent">
                            Twin!
                        </span>
                    </h1>

                    <style jsx>{`
                        @keyframes shimmer {
                            0% {
                                background-position: -100% 0;
                            }
                            100% {
                                background-position: 100% 0;
                            }
                        }
                        .shimmer-text {
                            background-size: 200% auto;
                            animation: shimmer 2s linear infinite;
                        }
                    `}</style>

                    <div className="flex flex-col gap-4 lg:gap-0 px-4 lg:px-0 text-sm 2xl:text-base text-center lg:text-left mx-auto lg:mx-0 leading-normal">
                        <p>Create high quality videos from simple text prompts with your AI Avatar.</p>
                        <p>Scale your content infinitely.</p>
                        <p>Our advanced AI seamlessly transforms your ideas into premium, polished videos.</p>
                        <p>Automatic subtitles and b-roll added so you can get to posting across social media.</p>
                    </div>
                    <div className="mx-auto lg:mx-0 cursor-pointer w-full">
                        <div className="email-collection-container cursor-pointer flex items-center justify-center lg:justify-start">
                            <iframe src="https://embeds.beehiiv.com/ed0d8974-c9e8-45ae-b68b-69718811ee56?slim=true"
                                data-test-id="beehiiv-embed"
                                className='w-100% lg:w-[80%]'
                                height="52"
                                frameBorder="0"
                                scrolling="no"
                                style={{ margin: 0, backgroundColor: 'transparent' }}>
                            </iframe>


                            {/* <Link href="/login" className="cursor-pointer flex items-center justify-center lg:justify-start">
                                <span
                                    className="px-4 py-2 rounded-full border border-[#4bde81] cursor-pointer transition-all ease-in-out duration-300"
                                    style={{
                                        background: 'linear-gradient(180deg, #a8ffc8, #4bde81)',
                                        boxShadow: '0 0 0 4px rgba(255, 255, 255, 0.15), 0 0 0 1px #4bde81',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.boxShadow = '0 4px 16px rgba(75, 222, 129, 0.7), 0 0 0 4px rgba(255, 255, 255, 0.15), 0 0 0 1px #4bde81';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.boxShadow = '0 0 0 4px rgba(255, 255, 255, 0.15), 0 0 0 1px #4bde81';
                                    }}
                                >
                                    Get Early Access
                                </span>
                            </Link> */}
                        </div>

                    </div>
                    <div className="space-y-5 flex flex-col items-center lg:items-start">
                        <div className="space-y-2 flex flex-col items-center lg:items-start">
                            <div className='flex'>
                                <Image
                                    alt="ratings"
                                    loading="lazy"
                                    width={30}
                                    height={30}
                                    decoding="async"
                                    src={StarImage}
                                    className="object-contain"
                                />
                                <Image
                                    alt="ratings"
                                    loading="lazy"
                                    width={30}
                                    height={30}
                                    decoding="async"
                                    src={StarImage}
                                    className="object-contain"
                                />
                                <Image
                                    alt="ratings"
                                    loading="lazy"
                                    width={30}
                                    height={30}
                                    decoding="async"
                                    src={StarImage}
                                    className="object-contain"
                                />
                                <Image
                                    alt="ratings"
                                    loading="lazy"
                                    width={30}
                                    height={30}
                                    decoding="async"
                                    src={StarImage}
                                    className="object-contain"
                                />
                                <Image
                                    alt="ratings"
                                    loading="lazy"
                                    width={30}
                                    height={30}
                                    decoding="async"
                                    src={StarImage}
                                    className="object-contain"
                                />
                            </div>

                            <article className="flex items-center flex-col w-full mt-10 space-y-2">
                                <div className="mt-0 flex flex-col justify-center items-center">
                                    <div className="flex gap-4 flex-col items-center md:flex-col xl:flex-row md:items-end">
                                        <div className="mt-4 flex -space-x-1 children:h-10 children:w-10 children:rounded-full children:object-cover children:ring-2 children:ring-white">
                                            <Image
                                                alt="user testimonial"
                                                fetchPriority="high"
                                                width={40}
                                                height={40}
                                                className='flex rounded-full'
                                                decoding="async"
                                                src={PersonImage1}
                                            />
                                            <Image
                                                alt="user testimonial"
                                                fetchPriority="high"
                                                width={40}
                                                height={40}
                                                className='flex rounded-full'
                                                decoding="async"
                                                src={PersonImage2}
                                            />
                                            <Image
                                                alt="user testimonial"
                                                fetchPriority="high"
                                                width={40}
                                                className='flex rounded-full'
                                                height={40}
                                                decoding="async"
                                                src={PersonImage3}
                                            />
                                            <Image
                                                alt="user testimonial"
                                                fetchPriority="high"
                                                width={40}
                                                height={40}
                                                className='flex rounded-full'
                                                decoding="async"
                                                src={PersonImage4}
                                            />
                                            <Image
                                                alt="user testimonial"
                                                fetchPriority="high"
                                                width={40}
                                                height={40}
                                                className='flex rounded-full'
                                                decoding="async"
                                                src={PersonImage5}
                                            />
                                            <Image
                                                alt="user testimonial"
                                                fetchPriority="high"
                                                width={40}
                                                height={40}
                                                decoding="async"
                                                className='flex rounded-full'
                                                src={PersonImage6}
                                            />
                                        </div>
                                        <div className="text-info text-sm italic">and 100+ others</div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

                {/* Video Section */}
                <div className="h-[400px] hidden lg:flex items-center relative">
                    <div className="bg-white outline w-1/2 md:max-w-[180px] absolute sm:-left-1/4 md:right-1/4 mx-auto outline-[6px] outline-[#636363]/25 rounded-xl object-cover">
                        <video
                            className="bg-white shadow-2xl rounded-[13px] border border-base-200"
                            playsInline
                            loop
                            autoPlay
                            muted // Ensures video autoplays in most browsers
                            src="/video/1.mp4"
                            width="100%"
                            height="100%"
                            style={{ visibility: 'visible' }}
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="bg-white outline w-5/6 md:w-3/4 md:max-w-[260px] relative z-10 mx-auto outline-[6px] outline-[#636363]/25 rounded-xl object-cover">
                        <video
                            className="bg-white shadow-2xl rounded-[13px] border border-base-200"
                            playsInline
                            loop
                            autoPlay
                            muted // Ensures video autoplays in most browsers
                            src="/video/3.mp4"
                            width="100%"
                            height="100%"
                            style={{ visibility: 'visible' }}
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="bg-white outline w-1/2 md:max-w-[180px] absolute sm:-right-1/4 md:left-1/4 -z-0 mx-auto outline-[6px] outline-[#636363]/25 rounded-xl object-cover">
                        <video
                            className="bg-white shadow-2xl rounded-[13px] border border-base-200"
                            playsInline
                            loop
                            autoPlay
                            muted // Ensures video autoplays in most browsers
                            src="/video/2.mp4"
                            width="100%"
                            height="100%"
                            style={{ visibility: 'visible' }}
                        >
                            Your browser does not support the video tag.
                        </video>

                    </div>
                </div>
            </div>
        </article>
    );
}
