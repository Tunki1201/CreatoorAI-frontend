'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoImage from '@/public/logo/Creator.svg';
import CloneYourSelfImage from '@/public/assets/images/about/Clone.jpg'
import CustomVideoStyleImage from '@/public/assets/images/about/VideoStyle.jpg'
import HDDownloadsImage from '@/public/assets/images/about/HDDownloads.jpg'

const ExpectComponent = () => {

    return (
        <div className="content-visibility-auto text-neutral-dark rounded-lg px-4 sm:px-6 md:px-8 border border-[#252629] w-full   bg-[#5169e4] mt-24">
            <div className="border-x border-[#353e3b]">
                <div className="space-y-12 overflow-hidden border-x border-b rounded-b-xl border-[#353e3b] py-12 lg:py-24">
                    <div className="space-y-4">
                        <div className="mx-auto text-green-200 border border-[#c8eed6]/25 shadow-lg shadow-[#4add80]/10 w-fit font-medium text-sm rounded-full bg-gradient-to-b from-[#737b88]/20 to-[#191b1e]/20 p-[1.5px]">
                            <div className="bg-[#15171a]/50 flex items-center space-x-1 py-1 px-2 rounded-full">
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.2132 13.2133C13.0865 13.2133 12.9598 13.1667 12.8598 13.0667C12.6665 12.8733 12.6665 12.5533 12.8598 12.36C15.2665 9.95333 15.2665 6.04 12.8598 3.64C12.6665 3.44666 12.6665 3.12666 12.8598 2.93333C13.0532 2.74 13.3732 2.74 13.5665 2.93333C16.3598 5.72666 16.3598 10.2733 13.5665 13.0667C13.4665 13.1667 13.3398 13.2133 13.2132 13.2133Z" fill="#BEFFD6"></path>
                                    <path d="M3.78622 13.2133C3.65956 13.2133 3.53289 13.1667 3.43289 13.0667C0.639557 10.2733 0.639557 5.72666 3.43289 2.93333C3.62622 2.74 3.94622 2.74 4.13956 2.93333C4.33289 3.12666 4.33289 3.44666 4.13956 3.64C1.73289 6.04666 1.73289 9.96 4.13956 12.36C4.33289 12.5533 4.33289 12.8733 4.13956 13.0667C4.03956 13.1667 3.91289 13.2133 3.78622 13.2133Z" fill="#BEFFD6"></path>
                                    <path d="M8.49919 15.14C7.66586 15.1333 6.87252 15 6.13252 14.74C5.87252 14.6467 5.73252 14.36 5.82585 14.1C5.91919 13.84 6.19919 13.7 6.46586 13.7933C7.10585 14.0133 7.78586 14.1333 8.50586 14.1333C9.21919 14.1333 9.90586 14.0133 10.5392 13.7933C10.7992 13.7067 11.0859 13.84 11.1792 14.1C11.2725 14.36 11.1325 14.6467 10.8725 14.74C10.1259 15 9.33252 15.14 8.49919 15.14Z" fill="#BEFFD6"></path>
                                    <path d="M10.6992 2.22667C10.6459 2.22667 10.5859 2.22 10.5325 2.2C9.89919 1.97333 9.21252 1.86 8.49919 1.86C7.78586 1.86 7.10585 1.98 6.46586 2.2C6.19919 2.28667 5.91919 2.15333 5.82585 1.89333C5.73252 1.63333 5.87252 1.34667 6.13252 1.25333C6.87919 0.993334 7.67252 0.860001 8.49919 0.860001C9.32586 0.860001 10.1259 0.993334 10.8659 1.25333C11.1259 1.34667 11.2659 1.63333 11.1725 1.89333C11.0992 2.1 10.9059 2.22667 10.6992 2.22667Z" fill="#BEFFD6"></path>
                                    <path d="M6.32617 8V6.88667C6.32617 5.5 7.30617 4.93334 8.50617 5.62667L9.47284 6.18667L10.4395 6.74667C11.6395 7.44 11.6395 8.57334 10.4395 9.26667L9.47284 9.82667L8.50617 10.3867C7.30617 11.08 6.32617 10.5133 6.32617 9.12667V8Z" fill="#BEFFD6"></path>
                                </svg>
                                <span>What You Get</span>
                            </div>
                        </div>
                        <h2 className="text-white font-[&quot;Euclid_Circular_A&quot;] text-3xl lg:text-4xl xl:text-5xl text-center w-11/12 max-w-3xl text-pretty mx-auto">High Quality Videos within minutes</h2>
                        <p className="text-center w-[90%]   max-w-xl mx-auto text-balance">Scale your content creation without having to hire an expensive video editor. Enter a prompt and get a high quality Reel, Short, TikTok in just a few clicks.</p>
                    </div>
                    <div className=" hidden lg:flex items-center relative">
                        <div className="bg-white outline w-1/2 md:max-w-[300px] absolute hidden sm:block sm:-left-1/4 md:right-1/4 mx-auto outline-[6px] outline-[#636363]/25 rounded-xl object-cover">
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
                        <div className="bg-white outline w-5/6 md:w-3/4 md:max-w-[450px] relative z-10 mx-auto outline-[6px] outline-[#636363]/25 rounded-xl object-cover">
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
                        <div className="bg-white outline w-1/2 md:max-w-[300px] absolute hidden sm:block sm:-right-1/4 md:left-1/4 -z-0 mx-auto outline-[6px] outline-[#636363]/25 rounded-xl object-cover">
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

                <div className="diagonal-pattern border-[#353e3b]">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 border border-[#353e3b] rounded-xl w-[90%]   lg:w-[90%] mx-auto divide-y md:divide-x lg:divide-y-0 divide-[#353e3b]">

                        <div className="bg-[#5169e4] px-5 py-7 rounded-t-xl md:rounded-l-xl md:rounded-bl-none lg:rounded-bl-xl md:rounded-tr-none">
                            <div className="relative w-full">
                                <Image
                                    alt="easy to use"
                                    src={CloneYourSelfImage}
                                    width={500}
                                    height={300}
                                    className="mx-auto aspect-auto rounded-t-xl object-cover object-center"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                            <div className="space-y-3">
                                <h5 className="text-white font-medium">Clone Yourself</h5>
                                <p className="text-sm">
                                    Create a digital twin of yourself that scalable to thousands of videos. Just upload 2 minutes of clear, quality footage and Creatoor takes care of the rest.
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#5169e4] px-5 py-7 rounded-none md:rounded-tr-xl lg:rounded-tr-none">
                            <div className="relative w-full">
                                <Image
                                    alt="customisable templates"
                                    src={CustomVideoStyleImage}
                                    width={500}
                                    height={300}
                                    className="mx-auto aspect-auto rounded-t-xl object-cover object-center"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                            <div className="space-y-3">
                                <h5 className="text-white font-medium">Custom Video Styles</h5>
                                <p className="text-sm">
                                    Pick your editing style whether split screen with your avatar or full screen with AI image broll. The choice is up to you.

                                </p>
                            </div>
                        </div>

                        <div className="bg-[#5169e4] px-5 py-7 lg:rounded-r-xl md:rounded-tr-none rounded-b-xl lg:rounded-bl-none md:col-span-2 lg:col-span-1 md:grid md:grid-cols-2 md:place-items-center lg:block">
                            <div className="relative w-full">
                                <Image
                                    alt="high quality exports"
                                    src={HDDownloadsImage}
                                    width={500}
                                    height={300}
                                    className="mx-auto aspect-auto rounded-t-xl object-cover object-center"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                            <div className="space-y-3 md:pl-6 lg:pl-0">
                                <h5 className="text-white font-medium">HD Downloads</h5>
                                <p className="text-sm">
                                    Download your videos in pristine HD so you can look your best across social media.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="border-x border-t rounded-t-xl border-[#353e3b] mx-auto flex flex-col items-center space-y-1 py-4 lg:pb-12">
                    <Image
                        alt="creator.ai logo"
                        loading="lazy"
                        width={90}
                        height={10}
                        className="w-[10%] md:w-[10%] lg:w-[15%]"
                        decoding="async"
                        src={LogoImage}
                    />
                    <p className="text-neutral-dark text-gray-300 text-center w-1/2 mb-3">
                        Create videos for social media with simple text prompts. Generate viral-worthy short form videos in minutes with no editing skills required.
                    </p>
                    <div className="w-fit mx-auto lg:mx-0 cursor-pointer">
                        <Link href="/login" className="flex cursor-pointer">
                            <span
                                style={{
                                    borderRadius: '9999px', // full round
                                    border: '1px solid #4bde81',
                                    padding: '0.25rem', // equivalent to p-1
                                    cursor: 'pointer',
                                    transition: 'box-shadow 0.3s ease-in-out',
                                    background: 'linear-gradient(180deg, #a8ffc8, #4bde81)',
                                    boxShadow: '0 0 0 4px rgba(255, 255, 255, 0.15), 0 0 0 1px #4bde81',
                                }}
                                // Applying hover styles using mouse events
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(75, 222, 129, 0.7), 0 0 0 4px rgba(255, 255, 255, 0.15), 0 0 0 1px #4bde81';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow = '0 0 0 4px rgba(255, 255, 255, 0.15), 0 0 0 1px #4bde81';
                                }}
                            >
                                Clone Me Now
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default ExpectComponent;
