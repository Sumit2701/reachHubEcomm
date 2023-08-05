'use client'
import React, { useState, useEffect } from 'react';
import ProductCard from './Card';
import Link from 'next/link';

function Main() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://api.unsplash.com/photos/random?count=8&orientation=squarish&query=electronics&client_id=GqbweCkNxahc1B13DaraAuQDgZ96V0p9tCNN_7pbn0U')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const productsPerRow = 4; // Number of products per row

  const rows = Array.from({ length: Math.ceil(products.length / productsPerRow) });
  if (products.length==0) {
    return<>  
    <h1 className='text-2xl font-bold text-center border mx-20 my-20 '>Loading</h1>
    </>
  }
  return (
   
    <> 
    
   
      <h1 className='text-4xl font-bold text-left mx-20 py-10'>Headphones For You</h1>
      <div className="bg-white p-4 font-sans mx-20">
        {rows.map((_, rowIndex) => (
          <div key={rowIndex} className="flex justify-between items-center mb-4">
            {products.slice(rowIndex * productsPerRow, (rowIndex + 1) * productsPerRow).map((product) => (
              <Link
                key={product.id}
                href="/product"
                as={`/product/${product.id}`} 
              >
               
                  <ProductCard product={product} />
                
              </Link>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default Main;
