import React, { useState } from 'react';
import { FiHeart, FiUser } from 'react-icons/fi';
import { IoSearch } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';
import { headerMenu } from '../../helpers/constants';
import { useLocation } from 'react-router-dom';

export default function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const pathname = useLocation();

    return (
        <header className="w-full bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                <div className="flex items-center flex-shrink-0">
                    <img src="/assets/images/logo.png" alt="Wah!" className="h-10 w-10 mr-2" />
                    <div className="flex flex-col leading-tight">
                        <span className="font-bold text-lg text-black">Wah!</span>
                        <span className="text-xs text-primary font-semibold -mt-1">Smart Deals</span>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <nav className="hidden md:flex items-center space-x-6 me-10">
                        {/* Navigation Links */}
                        {headerMenu.map((item, index) => (
                            <a key={index} href={item.path} className={`text-gray-700 hover:text-primary font-semibold ${pathname === item.path ? 'text-primary' : ''}`}>
                                {item.name}
                            </a>
                        ))}
                    </nav>
                    <div className="hidden md:flex items-center bg-gray-100 rounded px-2 py-1">
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="bg-transparent outline-none px-2 text-sm w-44"
                        />
                        <IoSearch className="size-4 text-gray-500" />
                    </div>
                    <button className="hidden md:block">
                        <FiHeart />
                    </button>
                    <button className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-orange-400">
                        <FiUser />
                    </button>
                    <button className="md:hidden flex items-center" onClick={() => setDrawerOpen(true)}>
                        <RxHamburgerMenu className='size-6' />
                    </button>
                </div>
            </div>
            {/* Mobile Drawer */}
            <div className={`fixed ${drawerOpen ? "translate-x-0" : "-translate-x-full"} duration-300 top-0 bottom-0 z-50 flex w-full`}>
                <div className="w-full bg-white shadow-lg h-full p-6 flex flex-col">
                    <button className="self-end mb-6" onClick={() => setDrawerOpen(false)}>
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <nav className="flex flex-col space-y-4">
                        <a href="/" className="font-semibold text-orange-500">Wah!</a>
                        <a href="/mystuff" className="text-gray-700">My Stuff</a>
                        <a href="/wallet" className="text-gray-700">Wallet</a>
                        <a href="/communities" className="text-gray-700">Communities</a>
                        <a href="/chat" className="text-gray-700">Chat</a>
                    </nav>
                    <div className="mt-8 flex items-center bg-gray-100 rounded px-2 py-1">
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="bg-transparent outline-none px-2 text-sm w-full"
                        />
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                    </div>
                    <div className="mt-4 flex space-x-4">
                        <button>
                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M4.318 6.318a4.5 4.5 0 016.364 0l.318.318.318-.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                            </svg>
                        </button>
                        <button className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-400">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 10a4 4 0 100-8 4 4 0 000 8zm0 2c-2.21 0-6 1.11-6 3.33V18h12v-2.67C16 13.11 12.21 12 10 12z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
