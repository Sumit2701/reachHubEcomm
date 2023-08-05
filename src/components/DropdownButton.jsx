import React from 'react';
import down from './Assets/down.svg'; // Make sure to provide the correct path to the down image
import Image from 'next/image';
function DropdownButton({ text }) {
    return (
        <a href={`#${text}`} className="hover:text-gray-300 px-2">
            <button className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full flex items-center">
                {text}
                <Image src={down} className="ml-2" width="12px" alt="down" />
            </button>
        </a>
    );
}

export default DropdownButton;