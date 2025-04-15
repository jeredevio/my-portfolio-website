import React from 'react'

const TabButton = ({ selected, selectTab, children }) => {
    const buttonClasses = selected
        ? 'text-white border-b-2 border-sky-400'
        : 'text-[#ADB7BE]';

    return (
        <button onClick={selectTab} className="mr-6 font-semibold hover:text-white">
            <p className={`${buttonClasses}`}>{children}</p>
        </button>
    );
};

export default TabButton;
