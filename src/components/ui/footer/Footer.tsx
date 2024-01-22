import { titleFont } from '@/config/fonts';
import Link from 'next/link';

export const Footer = () => {
    return (
        <div className='flex w-full justify-center text-xs mb-10 gap-5'>
            <Link href='/'>
                <span className={`${titleFont.className} antialiased font-bold`}>Tesla </span>
                <span>| Shop </span>
                <span>© {new Date().getFullYear()}</span>
            </Link>

            <Link href='/'>Privacy</Link>
            <Link href='/'>Locations</Link>
        </div>
    );
};
