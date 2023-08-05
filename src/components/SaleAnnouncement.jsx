import React from 'react';
import down from './Assets/down.svg'
import Image from 'next/image';
import phone from './Assets/telephone.png'
const SaleAnnouncement = () => {
  return (
    <div className="bg-green-900 text-center py-2 justify-between flex ">
      <p className="text-white text-sm mx-4  flex items-center"> <Image className='w-5 h-4 mx-2' src={phone}/>+009279271122</p>
      <p className="text-white text-sm m-0 mx-10">
        🎉 Hurry, Limited Time Sale! Up to 50% Off Sitewide! 🎉
        | Shop Now
      </p>
      <div className='flex'>
      <p className="text-white text-sm mx-4  flex items-center">Eng <Image className='w-3 h-2 m-2' src={down}/></p>
      <p className="text-white text-sm mx-4 flex items-center">Location <Image className='w-3 h-2 m-2' src={down}/></p></div>
    </div>
  );
};

export default SaleAnnouncement;
