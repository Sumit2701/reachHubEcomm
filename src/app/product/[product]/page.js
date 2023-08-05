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
    return <div className='justify-center items-center flex m-20 '>  
    <div role="status" className='w-20'>
     <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
         <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
     </svg>
    
 </div> <span class="text-3xl  pl-5 ">Loading...</span>
     </div>
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
