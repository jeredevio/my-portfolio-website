import React from 'react'
import NavLink from './navLink'

export const MenuOverlay = ({ links }) => {
    return (
        <div className="fixed inset-0 top-[4rem] bg-[#121212] flex items-center justify-center">
            <ul className='flex flex-col items-center gap-16'>
                {links.map((link, index) => (
                    <li key={index}>
                        <NavLink
                            href={link.href}
                            title={link.title}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MenuOverlay;