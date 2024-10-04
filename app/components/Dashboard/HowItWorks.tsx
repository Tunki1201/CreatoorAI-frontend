'use client'
import Image from "next/image";
import React from "react";
import TTVSearhImage from '@/public/assets/images/about/1.jpg'
import TTVScriptImage from '@/public/assets/images/about/2.jpg'
import TTVEditorImage from '@/public/assets/images/about/3.jpg'
import LogoImage from '@/public/logo/Creator.svg';
import Link from "next/link";

const HowItWorks = () => {

    return (
        <section id="how-it-works" className="content-visibility-auto scroll-m-20 w-full   mt-24 space-y-8">
            <div className="space-y-4 mb-14">
                <div className="mx-auto text-green-200 border border-[#c8eed6]/25 shadow-lg shadow-[#4add80]/10 w-fit font-medium text-sm rounded-full bg-gradient-to-b from-[#737b88]/20 to-[#191b1e]/20 p-[1.5px]">
                    <div className="bg-[#15171a]/50 flex items-center space-x-1 py-1 px-2 rounded-full">
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.2132 13.2133C13.0865 13.2133 12.9598 13.1667 12.8598 13.0667C12.6665 12.8733 12.6665 12.5533 12.8598 12.36C15.2665 9.95333 15.2665 6.04 12.8598 3.64C12.6665 3.44666 12.6665 3.12666 12.8598 2.93333C13.0532 2.74 13.3732 2.74 13.5665 2.93333C16.3598 5.72666 16.3598 10.2733 13.5665 13.0667C13.4665 13.1667 13.3398 13.2133 13.2132 13.2133Z" fill="#BEFFD6"></path>
                            <path d="M3.78622 13.2133C3.65956 13.2133 3.53289 13.1667 3.43289 13.0667C0.639557 10.2733 0.639557 5.72666 3.43289 2.93333C3.62622 2.74 3.94622 2.74 4.13956 2.93333C4.33289 3.12666 4.33289 3.44666 4.13956 3.64C1.73289 6.04666 1.73289 9.96 4.13956 12.36C4.33289 12.5533 4.33289 12.8733 4.13956 13.0667C4.03956 13.1667 3.91289 13.2133 3.78622 13.2133Z" fill="#BEFFD6"></path>
                            <path d="M8.49919 15.14C7.66586 15.1333 6.87252 15 6.13252 14.74C5.87252 14.6467 5.73252 14.36 5.82585 14.1C5.91919 13.84 6.19919 13.7 6.46586 13.7933C7.10585 14.0133 7.78586 14.1333 8.50586 14.1333C9.21919 14.1333 9.90586 14.0133 10.5392 13.7933C10.7992 13.7067 11.0859 13.84 11.1792 14.1C11.2725 14.36 11.1325 14.6467 10.8725 14.74C10.1259 15 9.33252 15.14 8.49919 15.14Z" fill="#BEFFD6"></path>
                            <path d="M10.6992 2.22667C10.6459 2.22667 10.5859 2.22 10.5325 2.2C9.89919 1.97333 9.21252 1.86 8.49919 1.86C7.78586 1.86 7.10585 1.98 6.46586 2.2C6.19919 2.28667 5.91919 2.15333 5.82585 1.89333C5.73252 1.63333 5.87252 1.34667 6.13252 1.25333C6.87919 0.993334 7.67252 0.860001 8.49919 0.860001C9.32586 0.860001 10.1259 0.993334 10.8659 1.25333C11.1259 1.34667 11.2659 1.63333 11.1725 1.89333C11.0992 2.1 10.9059 2.22667 10.6992 2.22667Z" fill="#BEFFD6"></path>
                            <path d="M6.32617 8V6.88667C6.32617 5.5 7.30617 4.93334 8.50617 5.62667L9.47284 6.18667L10.4395 6.74667C11.6395 7.44 11.6395 8.57334 10.4395 9.26667L9.47284 9.82667L8.50617 10.3867C7.30617 11.08 6.32617 10.5133 6.32617 9.12667V8Z" fill="#BEFFD6"></path>
                        </svg>
                        <span className="flex">How Creatoor Works
                        </span>
                    </div>
                </div>
                <h2 className="text-white font-[&quot;Euclid_Circular_A&quot;] text-3xl lg:text-4xl xl:text-5xl text-center w-11/12 max-w-3xl text-pretty mx-auto">Making viral videos just became easy</h2>
            </div>
            <div className="bg-[#5169e4] rounded-lg px-4 sm:px-6 md:px-8 pb-8 border border-[#252629] text-neutral-dark">
                <div className="rounded-lg rounded-t-none border border-t-0 border-[#353e3b] divide-y lg:divide-y-0 lg:divide-x divide-[#353e3b] grid lg:grid-cols-2">
                    <div className="p-4 sm:p-6 lg:p-8 pt-0 lg:pb-14 my-auto">
                        <div className="my-6 md:mb-8 overflow-hidden relative flex items-center justify-center size-12 rounded-xl border border-[#353e3b]">
                            <span className="font-bold text-2xl font-[&quot;Euclid_Circular_A&quot;]">1</span>
                            <span className="absolute blur-xl bg-white font-bold text-2xl font-[&quot;Euclid_Circular_A&quot;]">1</span>
                        </div>
                        <h4 className="text-white font-medium text-2xl font-[&quot;Euclid_Circular_A&quot;]">Enter your idea</h4>
                        <p className="mt-4 mb-8 text-balance">Tell Creatoor your video concept, paste a link to a news article, blog, Linkedin post, and even Youtube link.</p>
                        <ul className="*:flex *:items-start *:space-x-1.5 space-y-4 lg:space-y-3 *:text-[#eafff2] *:text-sm">
                            <li>
                                <div className="min-w-5 min-h-5">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.99935 18.3334C14.5827 18.3334 18.3327 14.5834 18.3327 10C18.3327 5.41669 14.5827 1.66669 9.99935 1.66669C5.41602 1.66669 1.66602 5.41669 1.66602 10C1.66602 14.5834 5.41602 18.3334 9.99935 18.3334Z" stroke="#46CF78" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M6.45898 10L8.81732 12.3583L13.5423 7.64166" stroke="#46CF78" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </div>
                                <span>Tell Creatoor your video concept or idea
                                </span>
                            </li>
                            <li>
                                <div className="min-w-5 min-h-5">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.99935 18.3334C14.5827 18.3334 18.3327 14.5834 18.3327 10C18.3327 5.41669 14.5827 1.66669 9.99935 1.66669C5.41602 1.66669 1.66602 5.41669 1.66602 10C1.66602 14.5834 5.41602 18.3334 9.99935 18.3334Z" stroke="#46CF78" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M6.45898 10L8.81732 12.3583L13.5423 7.64166" stroke="#46CF78" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </div>
                                <span>Enter your blogs, past Linkedin posts and get a fully edited video</span>
                            </li>
                            <li>
                                <div className="min-w-5 min-h-5">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.99935 18.3334C14.5827 18.3334 18.3327 14.5834 18.3327 10C18.3327 5.41669 14.5827 1.66669 9.99935 1.66669C5.41602 1.66669 1.66602 5.41669 1.66602 10C1.66602 14.5834 5.41602 18.3334 9.99935 18.3334Z" stroke="#46CF78" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M6.45898 10L8.81732 12.3583L13.5423 7.64166" stroke="#46CF78" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </div>
                                <span>Creator will write a killer hook and story
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-4 sm:p-6 lg:p-8">
                        <div className="w-full rounded-md shadow-xl overflow-hidden border-[#353e3b] border bg-white">
                            <Image src={TTVSearhImage} className="w-full object-cover" alt="Image Description" width={600} height={600} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#5169e4] rounded-lg px-4 sm:px-6 md:px-8 pb-8 border border-[#252629] text-neutral-dark">
                <div className="rounded-lg rounded-t-none border border-t-0 border-[#353e3b] divide-y lg:divide-y-0 divide-[#353e3b] grid lg:grid-cols-2">
                    <div className="p-4 sm:p-6 lg:p-8 pt-0 lg:pb-14 my-auto lg:order-last lg:border-l border-[#353e3b]">
                        <div className="my-6 md:mb-8 overflow-hidden relative flex items-center justify-center size-12 rounded-xl border border-[#353e3b]">
                            <span className="font-bold text-2xl font-[&quot;Euclid_Circular_A&quot;]">2</span>
                            <span className="absolute blur-xl bg-white font-bold text-2xl font-[&quot;Euclid_Circular_A&quot;]">2</span>
                        </div>
                        <h4 className="font-medium text-2xl font-[&quot;Euclid_Circular_A&quot;] text-white">
                            Generate your script
                        </h4>
                        <p className="mt-4 mb-8 text-balance">
                            Creatoor will generate a viral-worthy script based on data from over 2,000 viral videos.
                        </p>
                        <ul className="space-y-4 lg:space-y-3">
                            {[
                                'Review the audio to your final video',
                                'Pick your brand colors and theme',
                                'Choose what version you like best and generate',
                            ].map((text, idx) => (
                                <li key={idx} className="flex items-start space-x-1.5 text-[#eafff2] text-sm">
                                    <div className="min-w-5 min-h-5">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M9.99935 18.3334C14.5827 18.3334 18.3327 14.5834 18.3327 10C18.3327 5.41669 14.5827 1.66669 9.99935 1.66669C5.41602 1.66669 1.66602 5.41669 1.66602 10C1.66602 14.5834 5.41602 18.3334 9.99935 18.3334Z"
                                                stroke="#46CF78"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M6.45898 10L8.81732 12.3583L13.5423 7.64166"
                                                stroke="#46CF78"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <span>{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative pr-4 sm:pr-6 lg:pr-8 pt-6 lg:pt-8">
                        <div className="relative h-64 sm:h-96 lg:h-full w-full">
                            <Image
                                alt="from text to video in creatoor.ai"
                                loading="lazy"
                                decoding="async"
                                layout="fill"
                                className="ml-auto aspect-video overflow-hidden rounded-tr-xl rounded-bl-xl object-cover object-top"
                                src={TTVScriptImage}
                                sizes="100vw"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#5169e4] rounded-lg px-4 sm:px-6 md:px-8 pb-8 border border-[#252629] text-neutral-dark">
                <div className="rounded-lg rounded-t-none border border-t-0 border-[#353e3b] divide-y lg:divide-y-0 lg:divide-x divide-[#353e3b] grid lg:grid-cols-2">
                    <div className="p-4 sm:p-6 lg:p-8 pt-0 lg:pb-14 my-auto">
                        <div className="my-6 md:mb-8 overflow-hidden relative flex items-center justify-center size-12 rounded-xl border border-[#353e3b]">
                            <span className="font-bold text-2xl font-[&quot;Euclid_Circular_A&quot;]">3</span>
                            <span className="absolute blur-xl bg-white font-bold text-2xl font-[&quot;Euclid_Circular_A&quot;]">3</span>
                        </div>
                        <h4 className="text-white font-medium text-2xl font-[&quot;Euclid_Circular_A&quot;]">Download Your Video</h4>
                        <p className="mt-4 mb-8 text-balance">Watch your final fully edited video with branded subtitles, b-roll and download your desired format.</p>
                        <ul className="space-y-4 lg:space-y-3 text-[#eafff2] text-sm">
                            <li className="flex items-start space-x-1.5">
                                <div className="min-w-5 min-h-5">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.99935 18.3334C14.5827 18.3334 18.3327 14.5834 18.3327 10C18.3327 5.41669 14.5827 1.66669 9.99935 1.66669C5.41602 1.66669 1.66602 5.41669 1.66602 10C1.66602 14.5834 5.41602 18.3334 9.99935 18.3334Z" stroke="#46CF78" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M6.45898 10L8.81732 12.3583L13.5423 7.64166" stroke="#46CF78" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </div>
                                <span>Download HD video in minutes</span>
                            </li>
                            <li className="flex items-start space-x-1.5">
                                <div className="min-w-5 min-h-5">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.99935 18.3334C14.5827 18.3334 18.3327 14.5834 18.3327 10C18.3327 5.41669 14.5827 1.66669 9.99935 1.66669C5.41602 1.66669 1.66602 5.41669 1.66602 10C1.66602 14.5834 5.41602 18.3334 9.99935 18.3334Z" stroke="#46CF78" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M6.45898 10L8.81732 12.3583L13.5423 7.64166" stroke="#46CF78" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </div>
                                <span>Formatted for Reels, TikTok, Shorts</span>
                            </li>
                            <li className="flex items-start space-x-1.5">
                                <div className="min-w-5 min-h-5">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.99935 18.3334C14.5827 18.3334 18.3327 14.5834 18.3327 10C18.3327 5.41669 14.5827 1.66669 9.99935 1.66669C5.41602 1.66669 1.66602 5.41669 1.66602 10C1.66602 14.5834 5.41602 18.3334 9.99935 18.3334Z" stroke="#46CF78" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M6.45898 10L8.81732 12.3583L13.5423 7.64166" stroke="#46CF78" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </div>
                                <span>Autoschedule on any platform
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="relative pl-4 sm:pl-6 lg:pl-8 pt-6 lg:pt-8">
                        <div className="relative h-64 sm:h-96 lg:h-full w-full">
                            <Image
                                alt="from text to video in creatoor.ai"
                                loading="lazy"
                                decoding="async"
                                layout="fill"
                                className="ml-auto aspect-video overflow-hidden rounded-tl-xl rounded-br-xl object-cover object-top"
                                src={TTVEditorImage}
                                sizes="100vw"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto flex flex-col items-center">
                <Image
                    alt="creator.ai logo"
                    loading="lazy"
                    width={50}
                    height={50}
                    className="w-[10%] md:w-[10%] lg:w-[15%]"
                    decoding="async"
                    src={LogoImage}
                />
                <p className="text-neutral-dark text-gray-300 mb-2" style={{ fontSize: '18px' }}>Clone yourself. Create viral videos.</p>
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

        </section>
    )

}

export default HowItWorks;
