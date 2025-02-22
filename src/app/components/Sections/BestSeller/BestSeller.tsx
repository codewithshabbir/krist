import React from 'react';
import Card from "../../Cards/Card";
import { best_seller } from "../../Cards/data";

function BestSeller() {
  console.log(best_seller); 
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-3xl font-semibold">Our Best Seller</h2>
        <div>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
            </svg>
          </button>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {best_seller.map((item) => (
          <Card id={item.id} key={item.id} title={item.title} imageUrl={item.imageUrl} price={34} rating={4.4} />
        ))}
      </div>
    </>
  );
}

export default BestSeller;
