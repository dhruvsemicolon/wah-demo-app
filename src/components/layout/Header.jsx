import React, { useState } from 'react';
import { FiHeart, FiUser } from 'react-icons/fi';
import { IoSearch } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';
import { HEADERMENU, HEADER_CONSTANTS } from '../../helpers/constants';
import { useLocation } from 'react-router-dom';

const SearchBar = ({ className = '', fullWidth = false }) => (
    <div className={`flex items-center bg-gray-100 rounded px-2 py-1 ${className}`}>
        <input
            type="text"
            placeholder={HEADER_CONSTANTS.SEARCH.PLACEHOLDER}
            className={`bg-transparent outline-none px-2 text-sm ${fullWidth ? 'w-full' : 'w-44'}`}
        />
        <IoSearch className={HEADER_CONSTANTS.ICONS.SIZE.SMALL} />
    </div>
);

const Logo = () => (
    <div className="flex items-center flex-shrink-0">
        <img 
            src={HEADER_CONSTANTS.LOGO.SRC} 
            alt={HEADER_CONSTANTS.LOGO.ALT} 
            className={`${HEADER_CONSTANTS.LOGO.HEIGHT} ${HEADER_CONSTANTS.LOGO.WIDTH} mr-2`} 
        />
        <div className="flex flex-col leading-tight">
            <span className="font-bold text-lg text-black">{HEADER_CONSTANTS.LOGO.ALT}</span>
            <span className="text-xs text-primary font-semibold -mt-1">Smart Deals</span>
        </div>
    </div>
);

const NavigationLinks = ({ pathname }) => (
    <nav className="hidden md:flex items-center space-x-6 me-10">
        {HEADERMENU.map((item, index) => (
            <a 
                key={index} 
                href={item.path} 
                className={`text-gray-700 hover:text-primary font-semibold ${pathname === item.path ? 'text-primary' : ''}`}
            >
                {item.name}
            </a>
        ))}
    </nav>
);

const MobileDrawer = ({ isOpen, onClose }) => (
    <div className={`fixed ${isOpen ? "translate-x-0" : "-translate-x-full"} ${HEADER_CONSTANTS.MOBILE_DRAWER.TRANSITION_DURATION} top-0 bottom-0 z-50 flex ${HEADER_CONSTANTS.MOBILE_DRAWER.WIDTH}`}>
        <div className="w-full bg-white shadow-lg h-full p-6 flex flex-col">
            <button className="self-end mb-6" onClick={onClose}>
                <svg className={HEADER_CONSTANTS.ICONS.SIZE.MEDIUM} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <nav className="flex flex-col space-y-4">
                <a href="/" className="font-semibold text-orange-500">{HEADER_CONSTANTS.LOGO.ALT}</a>
                <a href="/mystuff" className="text-gray-700">My Stuff</a>
                <a href="/wallet" className="text-gray-700">Wallet</a>
                <a href="/communities" className="text-gray-700">Communities</a>
                <a href="/chat" className="text-gray-700">Chat</a>
            </nav>
            <SearchBar className="mt-8" fullWidth />
            <div className="mt-4 flex space-x-4">
                <button>
                    <FiHeart className={HEADER_CONSTANTS.ICONS.SIZE.MEDIUM} />
                </button>
                <button className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-400">
                    <FiUser className="w-5 h-5 text-white" />
                </button>
            </div>
        </div>
    </div>
);

export default function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const { pathname } = useLocation();

    return (
        <header className="w-full bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                <Logo />
                <div className="flex items-center space-x-4">
                    <NavigationLinks pathname={pathname} />
                    <SearchBar className="hidden md:flex" />
                    <button className="hidden md:block">
                        <FiHeart />
                    </button>
                    <button className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-orange-400">
                        <FiUser />
                    </button>
                    <button className="md:hidden flex items-center" onClick={() => setDrawerOpen(true)}>
                        <RxHamburgerMenu className={HEADER_CONSTANTS.ICONS.SIZE.MEDIUM} />
                    </button>
                </div>
            </div>
            <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
        </header>
    );
}
