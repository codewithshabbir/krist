import Image from 'next/image';
import React from 'react';
import PhoneIcon from './../icons/phone.svg';
import EmailIcon from './../icons/email.svg';
import LocationIcon from './../icons/location.svg';
import ArrowRightIcon from './../icons/arrow-right.svg';


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
                        <li className='my-3'><a href="#">My Account</a></li>
                        <li className='my-3'><a href="#">Login</a></li>
                        <li className='my-3'><a href="#">My Cart</a></li>
                        <li className='my-3'><a href="#">My Wishlist</a></li>
                        <li className='my-3'><a href="#">Checkout</a></li>
                    </ul>
                </div>
                <div className='col-span-12 mb-10 lg:mb-0 md:md:col-span-6 lg:col-span-3'>
                <h2 className='mb-6 font-bold'>Service</h2>
                    <ul>
                        <li className='my-3'><a href="#">About Us</a></li>
                        <li className='my-3'><a href="#">Careers</a></li>
                        <li className='my-3'><a href="#">Delivery Information</a></li>
                        <li className='my-3'><a href="#">Privacy Policy</a></li>
                        <li className='my-3'><a href="#">Terms & Conditions</a></li>
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
                Design and Developed by <a className='font-bold' href="#">Muhammad Shabbir.</a>
            </div>
        </footer>
    </>
  )
}

export default Footer