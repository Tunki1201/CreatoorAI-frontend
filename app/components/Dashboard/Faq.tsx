"use client"
import React, { useState } from 'react';

const FAQSection: React.FC = () => {
    const [activeQuestionIndex, setActiveQuestionIndex] = useState<number | null>(
        0
    );

    const toggleQuestion = (index: number) => {
        setActiveQuestionIndex((prevIndex) =>
            prevIndex === index ? null : index
        );
    };

    const faqs = [
        {
            question: 'Can Creatoor AI make my content go viral? ',
            answer:
                "While Creatoor AI empowers you to create high-quality, engaging video content using AI Avatars, we can't guarantee virality. Our platform leverages trend data to help you produce content that resonates with your audience, which is crucial for growth. Success in building a personal brand comes from consistently creating and posting engaging content at scale, which Creatoor AI enables you to do efficiently.",
        },
        {
            question: "How does Creatoor AI improve content creation?",
            answer:
                "Creatoor AI is your secret weapon for creating compelling videos with AI Avatars in minutes. Our AI-powered platform analyzes trending content to craft scripts and generate stunning visuals optimized for maximum impact. Whether you're creating social media content, educational videos, workplace training, product demos, or explainer videos. Creatoor AI helps you produce professional-quality videos that captivate your audience, all from simple text prompts.",
        },
        {
            question: 'Is Creatoor AI suitable for beginners?',
            answer:
                "Absolutely! Creatoor AI is designed for creators of all skill levels. Our intuitive interface and AI-driven tools make it easy to produce professional-grade videos with AI Avatars, even if you've never edited before. Simply input your text prompt, and let our AI work its magic. It's like having a video production team at your fingertips!",
        },
        {
            question: 'What types of content can I create? ',
            answer:
                "The possibilities are vast! Whether you want to turn a blog post into a video, create a viral social media clip from scratch, or produce engaging product demos and explainer videos, Creatoor AI has you covered. Our AI can generate scripts from your text prompts, find the perfect hooks, and create videos automatically using lifelike AI Avatars. If you can imagine it, Creatoor AI can help you bring it to life.",
        },
        {
            question: 'How much can I customize the AI-generated content?',
            answer:
                "While our AI is powerful, you remain in control. Creatoor AI provides a foundation of high-quality, engaging content that you can customize to your liking. From selecting different AI Avatars to fine-tuning your own, our platform empowers you to create videos that align with your brand and vision.",
        },
        {
            question: 'Can Creatoor AI help grow my audience?',
            answer:
                "Creatoor AI is your partner in audience growth and business success. Our AI is trained on trending Reels, Shorts, and TikToks, so it knows what makes videos engaging. From attention-grabbing hooks to compelling AI Avatar performances, Creatoor AI helps you create videos that demand to be watched and shared.  Our community has reported significant increases in video engagement and business growth using our platform.",
        },
        {
            question: 'Is my data secure with Creatoor AI?',
            answer:
                "Yes, we take data privacy and security very seriously. Creatoor AI employs industry-standard encryption and security measures to protect your content and personal information. We never share your data with third parties without your explicit consent. With Creatoor AI, you can focus on creating amazing videos while we take care of keeping your data safe.",
        },
        {
            question: 'How much time can Creatoor AI save me?',
            answer:
                "Creatoor AI is like having a full video production team available 24/7. Our AI handles the heavy lifting, from generating scripts to creating visuals with AI Avatars. What used to take hours or even days can now be accomplished in minutes. It's the ultimate time-saver for busy creators, coaches, and entrepreneurs who don't want to compromise on quality!",
        },
        {
            question: 'How does Creatoor AI stay current?',
            answer:
                "Our team consists of creators, experts and researchers continuously push the boundaries of what's possible. We stay on top of the latest trends, platform updates, and best practices to ensure that Creatoor AI remains a cutting-edge tool for creating irresistible videos with AI Avatars. As AI evolves at a rapid pace, so does Creatoor AI, so you can always be ahead of the game.",
        },
        {
            question: 'What support is available?',
            answer:
                "We're here for you every step of the way! Our friendly support team, made up of video experts, creators and entrepreneurs just llike you, is always ready to answer your questions, provide guidance, and help you get the most out of Creatoor AI. We're not just a software company – we're a community of passionate creators dedicated to helping you succeed.",
        },
        {
            question: 'Can I try Creatoor AI before buying?',
            answer:
                "Yes! We offer 1 free credit so you can get a feel for yourself how Creatoor works! Get a taste of the magic by using one of our stock avatars to create a short video clip. When you're ready to unleash the full potential of Creatoor AI, our flexible pricing plans make it easy to find the perfect fit for your needs and budget. Once you experience the Creatoor AI difference, you'll wonder how you ever created content without it!",
        }
    ];

    return (
        <article className="content-visibility-auto rounded-lg px-4 sm:px-6 md:px-8 border border-[#252629] w-full bg-[#5169e4]">
            <div className="w-full relative border-x border-[#353e3b]">
                {/* Decorative Dots */}
                <div className="absolute z-0 w-full h-full grid lg:grid-cols-2 gap-8 items-center">
                    <section className="-z-0 absolute w-full h-full col-span-2 grid grid-cols-2 place-content-between">
                        {[0, 1, 2, 3].map((index) => (
                            <div
                                key={index}
                                className={`bg-[#4BDE81] rounded-full w-1 h-1 my-8 outline outline-8 outline-[#5169e4] -mx-[2.5px] ${index % 2 === 1 ? 'ml-auto' : ''}`}
                            ></div>
                        ))}
                    </section>

                </div>

                {/* Content */}
                <div className="relative z-10 w-full lg:w-[90%] mx-auto py-12 lg:py-24">
                    <div className="space-y-4 mb-14">
                        <div className="mx-auto text-green-200 border border-[#c8eed6]/25 shadow-lg shadow-[#4add80]/10 w-fit font-medium text-sm rounded-full  bg-gradient-to-b from-[#737b88]/20 to-[#191b1e]/20 p-[1.5px]">
                            <div className="bg-[#5169e4]/50 flex items-center space-x-1 py-1 px-2 rounded-full ">
                                <svg
                                    width="17"
                                    height="16"
                                    viewBox="0 0 17 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M11.834 12.2868H9.16732L6.20064 14.2601C5.76064 14.5535 5.16732 14.2402 5.16732 13.7068V12.2868C3.16732 12.2868 1.83398 10.9535 1.83398 8.95349V4.95345C1.83398 2.95345 3.16732 1.62012 5.16732 1.62012H11.834C13.834 1.62012 15.1673 2.95345 15.1673 4.95345V8.95349C15.1673 10.9535 13.834 12.2868 11.834 12.2868Z"
                                        stroke="#BEFFD6"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M8.49923 7.57324V7.43327C8.49923 6.97993 8.77924 6.73992 9.05924 6.54659C9.33258 6.35992 9.60588 6.11993 9.60588 5.67993C9.60588 5.0666 9.11256 4.57324 8.49923 4.57324C7.88589 4.57324 7.39258 5.0666 7.39258 5.67993"
                                        stroke="#BEFFD6"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M8.49635 9.16634H8.50235"
                                        stroke="#BEFFD6"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </svg>
                                <span>FAQs</span>
                            </div>
                        </div>
                        <h2 className="text-white text-3xl lg:text-4xl xl:text-5xl text-center w-11/12 max-w-3xl text-pretty mx-auto">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    {/* FAQ Items */}
                    <div className="space-y-3">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-[#4066e2] rounded-xl flex flex-col justify-center px-6 md:pt-10 space-y-2 transition-all py-4 lg:py-3"
                            >
                                <div className="flex items-start justify-between lg:pt-2 ">
                                    <h5
                                        className="faq-question text-white font-medium hover:cursor-pointer my-auto"
                                        onClick={() => toggleQuestion(index)}
                                    >
                                        {faq.question}
                                    </h5>
                                    <div className="relative flex items-center justify-center h-fit">
                                        <span
                                            className={`cursor-pointer text-xl text-green-400 transition-all ${activeQuestionIndex === index ? 'rotate-45' : 'rotate-0'
                                                }`}
                                            onClick={() => toggleQuestion(index)}
                                        >
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth="0"
                                                viewBox="0 0 256 256"
                                                height="18"
                                                width="18"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"></path>
                                            </svg>
                                        </span>
                                        <span className="absolute blur-md bg-green-300/50 font-bold text-xs top-1/2 pointer-event-none h-2 w-2"></span>
                                    </div>
                                </div>
                                {/* Answer - Conditionally Rendered */}
                                {activeQuestionIndex === index && (
                                    <div
                                        className={`text-neutral-dark text-sm transition-all duration-200 whitespace-pre-line`}
                                    >
                                        <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
};

export default FAQSection;