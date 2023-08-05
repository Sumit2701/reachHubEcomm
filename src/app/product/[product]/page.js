"use client";
import { useEffect, useState } from "react";
import CountButton from "./count";
import c1 from './c1.png'
import c2 from './c2.png'
import c3 from './c3.png'
import c4 from './c4.png'
import c5 from './c5.png'
import truck from './truck.png';
import box from './box.png';

import Image from "next/image";
import star from './star.png'
export default function Page({ params }) {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    console.log(params.product);
    if (params) {
      // Fetch the product data based on the productId
      fetch(
        `https://api.unsplash.com/photos/${params.product}?client_id=GqbweCkNxahc1B13DaraAuQDgZ96V0p9tCNN_7pbn0U`
      )
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }
  }, []);

  if (product.length == 0) {
    return <p>Loading...</p>;
  }
  return (
    <>  <hr className="mx-20"/>
    <div className="flex mx-20 font-sans font-semibold mb-20">
    
      <div className="">
     
        <div className="my-6 mr-20 flex justify-between items-start font-semibold  text-gray-500">
          <div>Electronics</div>
          <div>/</div>
          <div>Audio</div>
          <div>/</div>
          <div>Headphones</div>
          <div>/</div>
          <div>Shop Headphone by type</div>
          <div>/</div>
          <p className="font-bold text-gray-900">airpod-max</p>
        </div>
        <div className="   ">
        <img
          src={product.urls.small}
          alt={"produc"}
          className="py-3    "
          style={{ width: "700px", height: "700px", borderRadius:"20px"}}
        />
        <div className="flex mt-5 justify-between">
        <img
          src={product.urls.small}
          alt={"produc"}
          className="py-3    "
          style={{ width: "150px", height: "150px", borderRadius:"3px"}}
        />
         <img
          src={product.urls.small}
          alt={"produc"}
          className="py-3    "
          style={{ width: "150px", height: "150px", borderRadius:"3px"}}
        />
         <img
          src={product.urls.small}
          alt={"produc"}
          className="py-3    "
          style={{ width: "150px", height: "150px", borderRadius:"3px"}}
        />
         <img
        src={product.urls.small}
        alt={"produc"}
        className="py-3    "
        style={{ width: "150px", height: "150px", borderRadius:"3px"}}
      />
        </div>
        </div>
      </div>

      <div className="mt-20 mx-20 ">
      
        <h1 className="text-5xl font-bold pt-2 ">Airpods- Max</h1>
        <p className="w-4/5 py-4 font-semibold">a perfect balance between exhalarating high-fidality audio andthe effortless magic </p>
        <div className="flex w-6 pb-5 items-center ">
        <Image  src={star}/>
        <Image src={star}/>
        <Image  src={star}/>
        <Image  src={star}/>
        (203)
        </div>
        <hr className="pt-3 my-1"/>
        <h1 className="text-3xl font-bold pt-3">$549.00 to $99.99/month</h1>
        <p className=" py-3 font-semibold">Suggested payment with 6 months special financing </p>
        <hr className=" my-4"/>
        <h1 className="text-2xl font-bold py-2">Choose a Color</h1>
      <div className="flex justify-start">
        <Image className="w-16  p-2 border-4 rounded-full  hover:bg-green-900 border-gray-600	 p-1" src={c1}/>
      <Image className="w-16  p-2 hover:bg-green-900 rounded-full	" src={c2}/>
      <Image className="w-16  p-2 hover:bg-green-900 rounded-full" src={c3}/>
      <Image className="w-16 p-2 hover:bg-green-900 rounded-full" src={c4}/>
      <Image className="w-16  p-2 hover:bg-green-900 rounded-full" src={c5}/></div> 
      <hr className=" my-4"/>
      <div className="flex items-center  py-3 ">
      <CountButton/> 
      <div className="ml-3 ">
      <div className=" flex ">Only&nbsp;&nbsp;  <p className="text-orange-400 ">12 Items&nbsp;&nbsp; </p> Left!</div> <div> Dont Miss it</div></div>
      </div>
      <div className="flex mt-1">
      <button className="bg-green-900  text-white font-bold py-2 px-20 h-16 my-5 mr-2 rounded-full">
     Buy Now
    </button>
    <button className="border-gray-900 border-4  hover:bg-green-900 hover:text-white-900 font-bold py-2 px-20 h-16 my-5 ml-2 rounded-full">
    Add to Cart
    </button>
      </div>
      <div>
       
      <div className="border-2 p-4 mt-5 font-bold block flex">
          
           
              <div className="mr-3">
              <Image className="w-7" src={truck}/></div>
              <div>
            <p> Free Deliver</p>
            <p className=" block underline">Enter Your Postal Code for delivery Availability</p> </div>
          
        </div>
        <div className="border-2 p-4 font-bold block flex">
          
           
        <div className="mr-3">
              <Image className="w-7" src={box}/></div>
              <div>
            <p> Free Deliver</p>
            <p className=" block underline">Enter Your Postal Code for delivery Availability</p> </div>
          
        </div>
        
      </div>
      </div>

      {/* <img
          src={product.urls.small}
          alt={'ejdn'}
          className="	"
        /> */}
    </div>

    </>
  );
}
