import React from 'react';
import Image from 'next/image';


function Header() {
  return (
    <div className="sticky top-0 bg-white shadow grid grid-cols-12 px-20 py-4">
      <div className="col-span-3 flex items-center">
        <Image src="/images/logo.svg" alt="Logo" width={120} height={80} />
      </div>
      <div className="col-span-6 flex items-center justify-center">
        <ul className='flex gap-6'>
            <li><a href="">Home</a></li>
            <li><a href="">Shop</a></li>
            <li><a href="">Our Story</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact Us</a></li>
        </ul>
      </div>
      <div className="col-span-3 flex items-center justify-end gap-4">
        <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        </a>
        
        <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
        </a>
        
        <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
        </a>
        <button className='bg-black text-white px-6 py-2 rounded-lg'>Login</button>
      </div>
    </div>
  );
}

export default Header;