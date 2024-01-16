'use client';

import { useUiStore } from '@/store/ui';
import clsx from 'clsx';
import Link from 'next/link';
import {
    IoCloseOutline,
    IoLogInOutline,
    IoLogOutOutline,
    IoPeopleOutline,
    IoPersonOutline,
    IoSearchOutline,
    IoShirtOutline,
    IoTicketOutline,
} from 'react-icons/io5';

const sidebarItems = [
    {
        href: '/',
        icon: <IoPersonOutline size={30} />,
        name: 'Profile',
    },
    {
        href: '/',
        icon: <IoTicketOutline size={30} />,
        name: 'Orders',
    },
    {
        href: '/',
        icon: <IoLogInOutline size={30} />,
        name: 'Log in',
    },
    {
        href: '/',
        icon: <IoLogOutOutline size={30} />,
        name: 'Log out',
    },
];

const sidebarItemsAdmin = [
    {
        href: '/',
        icon: <IoShirtOutline size={30} />,
        name: 'Products',
    },
    {
        href: '/',
        icon: <IoTicketOutline size={30} />,
        name: 'Orders',
    },
    {
        href: '/',
        icon: <IoPeopleOutline size={30} />,
        name: 'Users',
    },
];

export const Sidebar = () => {
    const isSidebarOpen = useUiStore(state => state.isSidebarOpen);
    const closeSidebar = useUiStore(state => state.closeSidebar);

    return (
        <div>
            {/* Background black */}
            {isSidebarOpen && (
                <div className='fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30'></div>
            )}

            {/*Blur */}
            {isSidebarOpen && (
                <div
                    onClick={closeSidebar}
                    className='fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm'
                ></div>
            )}

            <nav
                className={clsx(
                    'fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300',
                    {
                        'translate-x-full': !isSidebarOpen,
                    }
                )}
            >
                <IoCloseOutline
                    size={50}
                    className='absolute top-5 right-5 cursor-pointer'
                    onClick={closeSidebar}
                />

                <div className='relative mt-14'>
                    <IoSearchOutline size={20} className='absolute top-2 left-2' />
                    <input
                        type='text'
                        placeholder='Search'
                        className='w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500'
                    />
                </div>
                {sidebarItems.map(({ href, icon, name }) => (
                    <Link
                        href={href}
                        className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
                    >
                        {icon}
                        <span className='ml-3 text-xl'>{name}</span>
                    </Link>
                ))}

                <div className='w-full h-px bg-gray-200 my-10'></div>

                {sidebarItemsAdmin.map(({ href, icon, name }) => (
                    <Link
                        href={href}
                        className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
                    >
                        {icon}
                        <span className='ml-3 text-xl'>{name}</span>
                    </Link>
                ))}
            </nav>
        </div>
    );
};
