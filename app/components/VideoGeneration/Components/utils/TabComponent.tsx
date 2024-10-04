'use client'
import { useState } from 'react';
import { FileText, Headphones } from 'lucide-react';
import ArrowImage from '@/public/icon/arrow.png'
import Image from 'next/image';
import StarImage from '@/public/icon/star.png'

// EnterPrompt Component
const EnterPrompt = () => {
    const [prompt, setPrompt] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Handle the prompt submission (send to backend, etc.)
        console.log('Submitted Prompt:', prompt);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className='flex items-center justify-between'>
                <label htmlFor="prompt" className="text-gray-600">Enter Prompt</label>
                <Image src={StarImage} alt='StarImage' width={20} height={20} />
            </div>

            <textarea
                id="prompt"
                value={prompt}
                onChange={({ target: { value } }) => setPrompt(value)}
                className="p-2 border border-gray-300 rounded"
                placeholder="Type your prompt here..."
            />
            <button
                type="submit"
                className="bg-[#2E3B5B] text-white w-[182px] py-2 px-4 rounded hover:bg-[#3e507b] ml-auto flex items-center justify-center"
            >
                Generate Script
                <Image src={ArrowImage} alt='ArrowImage' width={20} height={20} className='ml-1' />
            </button>
        </form>
    );
};

const tabs = [
    {
        key: '1',
        label: 'Prompt to Script',
        children: <EnterPrompt />,
        icon: <FileText />
    },
    {
        key: '2',
        label: 'Audio to Script',
        children: 'Content of Tab Pane 2',
        icon: <Headphones />
    }
];

const TabComponent = () => {
    const [activeTab, setActiveTab] = useState('1');

    return (
        <div className="w-full">
            <div className="flex border-b border-gray-300">
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`flex items-center gap-2 p-4 text-gray-600 hover:text-blue-500 focus:outline-none ${activeTab === tab.key ? 'border-b-2 border-blue-500' : ''
                            }`}
                    >
                        <span className="text-xl">{tab.icon}</span>
                        <span className="text-sm font-medium">{tab.label}</span>
                    </button>
                ))}
            </div>

            <div className="p-4">
                {tabs.map((tab) => (
                    <div key={tab.key} className={`${activeTab === tab.key ? 'block' : 'hidden'}`}>
                        {tab.children}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TabComponent;
