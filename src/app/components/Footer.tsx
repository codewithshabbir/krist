import Image from 'next/image';
import React from 'react';
import PhoneIcon from './../icons/phone.svg';
import EmailIcon from './../icons/email.svg';
import LocationIcon from './../icons/location.svg';
import ArrowRightIcon from './../icons/arrow-right.svg';
import Link from 'next/link';


function Footer() {
  return (
    <>
        <footer className='bg-black px-20 pt-20 text-white'>
            <div className='grid grid-cols-12'>
                <div className='col-span-12 mb-10 lg:mb-0 md:md:col-span-6 lg:col-span-4'>
                    <Image className='mb-6' src={'/images/footer-logo.svg'} alt='Logo' width={120} height={80}/>
                    <div className='flex my-4'>
                        <PhoneIcon className="mr-2" width={20} height={20}/>
                        (704) 555-0127
                    </div>
                    <div className='flex my-4'>
                        <EmailIcon className="mr-2" width={20} height={20}/>
                        krist@example.com
                    </div>
                    <div className='flex my-4 items-center'>
                        <LocationIcon className="mr-2" width={20} height={20}/>
                        2891 Ranchview Dr. Richardson, <br />
                        California 6856
                    </div>
                </div>
                <div className='col-span-12 mb-10 lg:mb-0 md:md:col-span-6 lg:col-span-2'>
                    <h2 className='mb-6 font-bold'>Information</h2>
                    <ul>
                        <li className='my-3'><Link href="#">My Account</Link></li>
                        <li className='my-3'><Link href="#">Login</Link></li>
                        <li className='my-3'><Link href="#">My Cart</Link></li>
                        <li className='my-3'><Link href="#">My Wishlist</Link></li>
                        <li className='my-3'><Link href="#">Checkout</Link></li>
                    </ul>
                </div>
                <div className='col-span-12 mb-10 lg:mb-0 md:md:col-span-6 lg:col-span-3'>
                <h2 className='mb-6 font-bold'>Service</h2>
                    <ul>
                        <li className='my-3'><Link href="#">About Us</Link></li>
                        <li className='my-3'><Link href="#">Careers</Link></li>
                        <li className='my-3'><Link href="#">Delivery Information</Link></li>
                        <li className='my-3'><Link href="#">Privacy Policy</Link></li>
                        <li className='my-3'><Link href="#">Terms & Conditions</Link></li>
                    </ul>
                </div>
                <div className='col-span-12 mb-10 lg:mb-0 md:md:col-span-6 lg:col-span-3'>
                    <h2 className='mb-6 font-bold'>Service</h2>
                    <p>Enter your email below to the first to know about new collections and product launches.</p>
                    <div className='flex px-2 py-3 border-[1.5px] border-white rounded-lg justify-between items-center mt-6'>
                        <EmailIcon width={20} height={20}/>
                        <input className='bg-transparent w-full pl-2 focus-visible:outline-none' type="email" placeholder='Your Email'/>
                        <ArrowRightIcon width={20} height={20}/>
                    </div>

                </div>
            </div>
            <div className='text-center py-6'>
                Design and Developed by <Link className='font-bold' href="https://codewithshabbir.vercel.app/">Muhammad Shabbir.</Link>
            </div>
        </footer>
    </>
  )
}

export default Footer