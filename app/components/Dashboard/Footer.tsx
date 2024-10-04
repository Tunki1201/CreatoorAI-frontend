import Image from 'next/image';
import React from 'react';
import LogoImage from '@/public/logo/Creator.svg';

const Footer: React.FC = () => {
    return (
        <footer className="content-visibility-auto bg-[#5169e4] border-t border-[#252629] w-full">
            <section className="mx-auto max-w-screen-2xl py-16 px-4 sm:px-6 md:px-16 text-sm space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-0 lg:grid-cols-6 text-[#A8A9B0] mb-16">
                    <div className="md:col-span-2 space-y-3">
                        <Image
                            alt="revid.ai logo"
                            loading="lazy"
                            width="60"
                            height="60"
                            decoding="async"
                            data-nimg="1"
                            className='w-[240px]'
                            style={{ color: 'transparent' }}
                            src={LogoImage}
                        />
                        <p>Create viral short videos, fast.</p>
                    </div>

                </div>
                <div className="flex flex-col-reverse md:flex-row justify-between">
                    <p className="text-neutral-dark mt-4 md:mt-0">
                        Maintained with 💚 by
                        <a className="underline ml-1" target="_blank" rel="noopener noreferrer" href="https://x.com/Olumide_gbenro">Olumide</a>
                    </p>
                    <div className="text-[#BEFFD6] underline underline-offset-2 space-x-3 ml-1">
                        <a className="text-[#feffff] font-semibold text-base" href='/product'>Product</a>
                        <a className="hover:text-slate-200 ml-3" href="/pricing">Pricing</a>
                        <a className="hover:text-slate-200 ml-3" href="/blog">Blog</a>
                        <a href="/terms">Terms of Service</a>
                        <a href="/policy">Privacy Policy</a>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
