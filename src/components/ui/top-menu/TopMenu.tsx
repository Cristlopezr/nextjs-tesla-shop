'use client';

import { titleFont } from '@/config/fonts';
import { useUiStore } from '@/store/ui';
import Link from 'next/link';
import { IoSearchOutline, IoCartOutline } from 'react-icons/io5';

const links = [
    {
        href: '/category/men',
        name: "MEN'S",
    },
    {
        href: '/category/women',
        name: "WOMEN'S",
    },
    {
        href: '/category/kid',
        name: "KIDS'",
    },
];

export const TopMenu = () => {
    const openSidebar = useUiStore(state => state.openSidebar);
    return (
        <nav className='flex px-5 justify-between items-center w-full'>
            <div>
                <Link href='/'>
                    <span className={`${titleFont.className} antialiased font-bold`}>Tesla</span>
                    <span> | Shop</span>
                </Link>
            </div>

            <div className='hidden sm:block'>
                {links.map(({ href, name }) => (
                    <Link
                        key={href}
                        className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'
                        href={href}
                    >
                        {name}
                    </Link>
                ))}
            </div>

            <div className='flex items-center'>
                <Link href='/search' className='mx-2'>
                    <IoSearchOutline className='w-5 h-5' />
                </Link>

                <Link href='/cart' className='mx-2'>
                    <div className='relative'>
                        <span className='absolute text-xs rounded-full px-1 font-bold -top-2 bg-blue-700 text-white -right-2'>
                            3
                        </span>
                        <IoCartOutline className='w-5 h-5' />
                    </div>
                </Link>
                <button onClick={openSidebar} className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'>
                    MENU
                </button>
            </div>
        </nav>
    );
};
