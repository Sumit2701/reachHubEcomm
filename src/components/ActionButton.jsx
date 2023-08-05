import React from 'react';

function ActionButton({ text }) {
    return (
        <button className="border-gray-900 border-4  hover:bg-green-900 hover:text-white-900 font-bold py-2 px-4 rounded-full">
      {text}
    </button>
    );
}

export default ActionButton;