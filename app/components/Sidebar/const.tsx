import { House, UserRound, Video } from 'lucide-react';
import Image from 'next/image';
import VideoCategoryImage from '@/public/icon/videocategories.png'
import CloneImage from '@/public/icon/clone.png'
import CleverImage from '@/public/icon/Group 414.png'

export const SIDE_BAR_MENU = [
    {
        icon: <House size={24} />,
        title: 'Home',
        link: '/main/home'
    },
    {
        icon: <Video size={24} />,
        title: 'Create',
        link: '/main/video'
    },
    {
        icon: <Image src={VideoCategoryImage} alt='videocategories' width={24} height={24} />,
        title: 'Video Catalogue',
        link: '/main/catalogue'
    },
    {
        icon: <UserRound size={24} />,
        title: 'Clone Generation',
        link: '/main/clone-generation'
    },
    {
        icon: <Image src={CloneImage} alt='CloneImage' width={24} height={24} />,
        title: 'Clone Library',
        link: '/main/clone-library'
    },
]
