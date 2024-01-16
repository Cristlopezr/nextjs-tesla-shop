import { TopMenu } from '@/components/ui';

export default function ShopLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='min-h-screen'>
            <TopMenu />
            {children}
        </div>
    );
}
