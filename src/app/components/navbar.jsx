'use client';

import React, { useState } from 'react'
import Link from 'next/link'
import NavLink from './navLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { MenuOverlay } from './menuOverlay'

const navLinks = [
    { href: "#about", title: "About" },
    { href: "#projects", title: "Projects" },
    { href: "#contact", title: "Contact" },
]

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className='fixed top-0 left-0 right-0 z-50'>
            <div className='absolute inset-0 backdrop-blur-lg bg-[#121212]/60'></div>
            <div className='relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    <Link href="/" className='text-2xl sm:text-3xl md:text-4xl font-bold text-white hover:text-cyan-400 transition-colors'>
                        Jere<span className='text-cyan-400 font-extrabold'>.codes</span>
                    </Link>

                    {/* Menu Desktop */}
                    <div className='hidden md:block'>
                        <ul className='flex items-center space-x-8'>
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.href} title={link.title} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Bouton Menu Mobile */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className='md:hidden text-white hover:text-cyan-400 transition-colors'
                    >
                        {isMenuOpen ? (
                            <XMarkIcon className='h-6 w-6' />
                        ) : (
                            <Bars3Icon className='h-6 w-6' />
                        )}
                    </button>
                </div>

                {/* Menu Mobile */}
                <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <MenuOverlay links={navLinks} setIsMenuOpen={setIsMenuOpen} />
                </div>
            </div>
        </nav>
    )
}
