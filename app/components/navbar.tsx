'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LogoImage from '@/public/logo/Creator.svg';

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className=" w-full flex flex-col md:flex-row items-center justify-between bg-[#6981fd] pb-8">
            <div className="px-4 w-full flex items-center justify-between h-16"> {/* Adjust height as needed */}
                <Link href="/">
                    <Image
                        src={LogoImage}
                        alt="revid.ai logo"
                        width={20}
                        height={20}
                        priority
                        className="w-[28%] h-auto" // Adjust image sizing as needed
                    />
                </Link>
                <button
                    aria-label="humburger"
                    id="hamburger"
                    className={`relative -mr-2 p-2 md:hidden ${isOpen ? 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500' : ' '}`}
                    onClick={toggleMenu}
                >
                    <div aria-hidden="true" className={`m-auto h-0.5 w-5 rounded bg-sky-50 transition duration-300 dark:bg-gray-300 ${isOpen ? 'rotate-45' : ''}`} >

                    </div>
                    <div aria-hidden="true" className={`m-auto mt-1.5 h-0.5 w-5 rounded bg-sky-50 transition duration-300 dark:bg-gray-300 ${isOpen ? '-rotate-45' : ''}`} >

                    </div>
                </button>
            </div>
            <nav
                id="navlinks"
                className={` ${isOpen ? 'bg-[#506bf5] p-2 rounded-xl shadow-xl shadow-gray-500 flex w-[90%] md:flex-col md:bg-transparent md:shadow-none md:opacity-100' : 'hidden w-full text-white text-base font-medium md:flex gap-8 transition-all duration-300'
                    }`}
            >
                <ul className={`flex md:flex md:items-center md:justify-center md:ml-auto ${isOpen ? ' flex-col justify-start text-white' : 'items-center justify-center ml-auto'} `}>
                    <li className=" hover:bg-white/[0.06] p-2 mr-2 rounded-xl">
                        <Link href="/#how-it-works">What is Creatoor</Link>
                    </li>
                    <li className=" hover:bg-white/[0.06] p-2 mr-2 rounded-xl">
                        <Link href="/tiktok-videos">Blog</Link>
                    </li>

                    <li className='pt-4 md:pt-0 pb-2 md:pb-0'>
                        <Link href="/login" className="border border-[#ffffff15] rounded-full" style={{ background: 'radial-gradient(89.39% 89.39% at 50% 50%,rgba(16,18,21,.1) 0,hsla(0,0%,100%,.15) 100%)', transition: 'all .15s ease-in-out', padding: '.5rem 1.25rem' }}>
                            Sign in
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
