// components/SignUp.tsx
'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import LogoImage from '@/public/logo/Creator.svg';
import Link from 'next/link';
import TikTokImage from '@/public/assets/images/about/tiktok.avif';
import LinkedinImage from '@/public/assets/images/about/linkedin.png';
import FaceBookImage from '@/public/assets/images/about/facebook.png';

const SignUp: React.FC = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Reset error message
        setError('');

        // Email validation
        if (!validateEmail(email)) {
            setError('Invalid email format.');
            return;
        }

        // Password confirmation validation
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        // Add sign-in logic here (e.g., API call)
        console.log('Form submitted successfully');
    };

    const handleThirdPartySignUp = (provider: string) => {
        // Add third-party sign-in logic here
    };

    return (
        <div className="flex justify-center h-screen">
            <div className="flex flex-col justify-between max-w-[440px] p-3 m-auto">
                <div className="flex justify-center items-center">
                    <Link href="/">
                        <Image
                            src={LogoImage}
                            alt="revid.ai logo"
                            width={20}
                            height={20}
                            priority
                            className="w-full h-auto" // Adjust image sizing as needed
                        />
                    </Link>
                </div>
                <div className="w-full max-w-lg m-auto my-8 border rounded-md p border-zinc-700 text-card-foreground bg-[#414c6a] p-4">
                    <div className="px-5 py-4">
                        <h3 className="mb-1 text-2xl font-medium text-white">Sign Up</h3>

                        <form onSubmit={handleSubmit} className="my-8">
                            <div className="grid gap-2">
                                <div className="grid gap-1">
                                    <label htmlFor="name" className="text-white">Name</label>
                                    <input
                                        id="name"
                                        placeholder="Jackson"
                                        autoComplete="name"
                                        autoCorrect="off"
                                        autoCapitalize="none"
                                        className="w-full p-3 rounded-md bg-white text-black"
                                        type="string"
                                        name="name"
                                        value={name}
                                        onChange={({ target: { value } }) => setName(value)}
                                    />
                                    <label htmlFor="email" className="text-white pt-2">Email</label>
                                    <input
                                        id="email"
                                        placeholder="name@example.com"
                                        autoComplete="email"
                                        autoCorrect="off"
                                        autoCapitalize="none"
                                        className="w-full p-3 rounded-md bg-white text-black"
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={({ target: { value } }) => setEmail(value)}
                                    />
                                    <label htmlFor="password" className="text-white pt-2">Password</label>
                                    <input
                                        id="password"
                                        placeholder="Password"
                                        autoComplete="current-password"
                                        className="w-full p-3 rounded-md bg-white text-black"
                                        type="password"
                                        name="password"
                                        value={password}
                                        onChange={({ target: { value } }) => setPassword(value)}
                                    />
                                    <label htmlFor="confirm-password" className="text-white pt-2">Confirm Password</label>
                                    <input
                                        id="confirm-password"
                                        placeholder="Confirm Password"
                                        autoComplete="current-password"
                                        className="w-full p-3 rounded-md bg-white text-black"
                                        type="password"
                                        name="confirm-password"
                                        value={confirmPassword}
                                        onChange={({ target: { value } }) => setConfirmPassword(value)}
                                    />
                                    {error && <p className="text-red-500 text-sm">{error}</p>}
                                </div>
                                <button
                                    className="inline-flex text-white items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mt-1"
                                    type="submit"
                                >
                                    Sign up
                                </button>
                            </div>
                        </form>
                        <p>
                            <a className="font-light text-sm text-white" href="/login">
                                Do you have already an account? Signin
                            </a>
                        </p>
                    </div>
                    <div className="relative">
                        <div className="flex items-center py-1">
                            <div className="grow border-t border-[#06060e]" />
                            <span className="mx-3 shrink text-sm leading-8 text-white">Third-party sign-in</span>
                            <div className="grow border-t border-[#06060e]" />
                        </div>
                    </div>
                    <div className="mt-8">
                        <form onSubmit={(e) => { e.preventDefault(); handleThirdPartySignUp('google'); }} className="pb-2">
                            <button
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-full p-4"
                                type="submit"
                            >
                                <span className="mr-2">
                                    {/* Google SVG Icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262">
                                        <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" />
                                        <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" />
                                        <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" />
                                        <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" />
                                    </svg>
                                </span>
                                <span className="text-white">Google</span>
                            </button>
                        </form>
                        <div className="flex items-center justify-evenly">
                            <button
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-full p-4"
                                type="submit"
                            >
                                <Image src={FaceBookImage} width={20} height={20} alt="facebook image" />
                            </button>

                            <button
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-full p-4"
                                type="submit"
                            >
                                <Image src={TikTokImage} width={20} height={20} alt="tiktok image" />
                            </button>

                            <button
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-full p-4"
                                type="submit"
                            >
                                <Image src={LinkedinImage} width={20} height={20} alt="linkedin image" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
