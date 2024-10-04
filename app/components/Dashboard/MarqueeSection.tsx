'use client'
import Image from 'next/image';
import React from 'react';
import BlueRightImage from '@/public/assets/images/about/blue-right-neon-line.svg'
import BlueLeftImage from '@/public/assets/images/about/blue-left-neon-line.svg'
import GreenRightImage from '@/public/assets/images/about/green-right-neon-line.svg'
import GreenLeftImage from '@/public/assets/images/about/green-left-neon-line.svg'
import PurpleRightImage from '@/public/assets/images/about/purple-right-neon-line (1).svg'
import Link from 'next/link';

const MarqueeSection: React.FC = () => {
    const marqueeItems = [
        {
            src: PurpleRightImage,
            direction: 'reverse',
            duration: 4.5,
            delay: 5,
            rotate: 180,
        },
        {
            src: GreenLeftImage,
            direction: 'reverse',
            duration: 5.25,
            delay: 0,
            rotate: 0,
        },
        {
            src: BlueLeftImage,
            direction: 'reverse',
            duration: 3.9375,
            delay: 2,
            rotate: 0,
        },
        {
            src: BlueRightImage,
            direction: 'normal',
            duration: 3.9375,
            delay: 2,
            rotate: 0,
        },
        {
            src: GreenRightImage,
            direction: 'normal',
            duration: 5.25,
            delay: 0,
            rotate: 0,
        },
        {
            src: PurpleRightImage,
            direction: 'normal',
            duration: 4.5,
            delay: 5,
            rotate: 0,
        },
    ];

    return (
        <section className="content-visibility-auto text-neutral-dark mt-24 relative flex w-full   lg:w-[90%] justify-center items-center mx-auto">
            {/* Left Marquee */}
            <div className="relative w-[10%] lg:w-[50%] mr-auto space-y-2">
                {marqueeItems.slice(0, 3).map((item, index) => (
                    <div
                        key={index}
                        className="rfm-marquee-container w-full"
                    >
                        <div
                            className="rfm-marquee"

                        >
                            <div className="rfm-initial-child-container">
                                <div className="rfm-child">
                                    <Image
                                        alt="easy to use"
                                        loading="lazy"
                                        width="500"
                                        height="300"
                                        decoding="async"
                                        data-nimg="1"
                                        className={`mx-auto aspect-auto rounded-t-xl object-cover object-center ${item.rotate ? `rotate-${item.rotate}` : ''
                                            }`}
                                        src={item.src}
                                        style={{ color: 'transparent', width: '100%', height: 'auto' }}
                                    />
                                </div>
                            </div>
                            {/* Duplicate for infinite loop */}
                            <div className="rfm-child">
                                <Image
                                    alt="easy to use"
                                    loading="lazy"
                                    width="500"
                                    height="300"
                                    decoding="async"
                                    data-nimg="1"
                                    className={`mx-auto aspect-auto rounded-t-xl object-cover object-center ${item.rotate ? `rotate-${item.rotate}` : ''
                                        }`}
                                    src={item.src}
                                    style={{ color: 'transparent', width: '100%', height: 'auto' }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Center Content */}
            <div className="space-y-5 py-4 flex flex-col items-center w-[90%]   lg:w-full border-x border-[#1a1b1e]">
                <h2 className="text-white text-3xl lg:text-4xl xl:text-5xl text-center w-11/12 text-balance mx-auto">
                    Scale Your Personal Brand Infinitely
                </h2>
                <p className="text-center w-[95%] mx-auto text-balance ">
                    Try Creatoor AI free today, enter simple prompts and create an endless amount of high quality videos with AI twins.
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
            {/* Right Marquee */}
            <div className="relative w-[10%] lg:w-[50%] ml-auto space-y-2">
                {marqueeItems.slice(3).map((item, index) => (
                    <div
                        key={index}
                        className="rfm-marquee-container"

                    >
                        <div
                            className="rfm-marquee"

                        >
                            <div className="rfm-initial-child-container">
                                <div className="rfm-child">
                                    <Image
                                        alt="easy to use"
                                        loading="lazy"
                                        width="500"
                                        height="300"
                                        decoding="async"
                                        data-nimg="1"
                                        className={`mx-auto aspect-auto rounded-t-xl object-cover object-center ${item.rotate ? `rotate-${item.rotate}` : ''
                                            }`}
                                        src={item.src}
                                        style={{ color: 'transparent', width: '100%', height: 'auto' }}
                                    />
                                </div>
                            </div>
                            {/* Duplicate for infinite loop */}
                            <div className="rfm-child">
                                <Image
                                    alt="easy to use"
                                    loading="lazy"
                                    width="500"
                                    height="300"
                                    decoding="async"
                                    data-nimg="1"
                                    className={`mx-auto aspect-auto rounded-t-xl object-cover object-center ${item.rotate ? `rotate-${item.rotate}` : ''
                                        }`}
                                    src={item.src}
                                    style={{ color: 'transparent', width: '100%', height: 'auto' }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MarqueeSection;
