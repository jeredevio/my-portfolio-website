import React from 'react'
import { motion } from 'framer-motion'

const variants = {
    default: { width: 0 },
    active: { width: "calc(100%)" },
};

const TabButton = ({ selected, selectTab, children }) => {
    const buttonClasses = selected
        ? 'text-white'
        : 'text-[#ADB7BE]';

    return (
        <button onClick={selectTab} className="mr-6 font-semibold hover:text-white relative">
            <p className={`${buttonClasses}`}>{children}</p>
            <motion.div
                animate={selected ? "active" : "default"}
                variants={variants}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="h-1 bg-sky-400 mt-1"
            />
        </button>
    );
};

export default TabButton;