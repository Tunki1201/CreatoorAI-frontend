import PanelLayout from '@/app/components/panel-layout';
// import { checkUserSession } from '@/shared/utils/auth-helpers/server';
// import { getURL } from '@/shared/utils/helpers';
import { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'white' },
        { media: '(prefers-color-scheme: dark)', color: 'black' },
    ],
};

const meta = {
    title: {
        template: '%s | Creatoor AI',
        default: 'Creatoor AI',
    },
    description: '',
    //   url: getURL(),
    url: '/main',
    favicon: '/favicon.svg',
};

// export async function generateMetadata(): Promise<Metadata> {
//     return {
//         ...meta,
//         icons: { icon: meta.favicon },
//         metadataBase: new URL(meta.url),
//     };
// }

export default async function Panel({
    children,
}: {
    children: React.ReactNode;
}) {
    //   await checkUserSession();

    return <PanelLayout>{children}</PanelLayout>;
}
