'use client'
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import Image from 'next/image';

import ActionButton from './ActionButton';
function ProductCard({ product }) {
  const { urls, user, description,likes } = product;

  return (
    <>
   
    <div className=" rounded  mb-4  w-80  ">
      <div className="relative">
        
        <img
          src={urls.small}
          alt={user}
          className="w-full h-80	 object-cover rounded"
        />
        <div className="absolute top-2 right-2">
          <AiOutlineHeart size={20} color="red" />
        </div>
      </div>
      <div className="flex justify-between items-center">

      <h3 className="text-lg font-bold my-2">{user.name.toUpperCase()}</h3>
      <span className="text-lg font-bold">${(Math.floor(Math.random() * 5000))/10}</span>
      </div>
      <p className="text-gray-600 flex just items-start mb-2">{description? description.slice(0,20):"High Quality products that you need"}</p>
      <div className="flex items-center   mb-2">
        <span className="mr-2 text-yellow-500 flex">{(Math.floor(Math.random() * 50))/10}<AiOutlineStar className="m-1"/></span>
        <span>{likes}</span>
      </div>
      <div className="flex justify-between items-center">
       
      <ActionButton text={"Add to Cart"}/>
      </div>
    </div></>
  );
}

export default ProductCard;
