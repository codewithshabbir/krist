import Image from 'next/image'
import React from 'react'
import ButtonDark from '../components/Buttons/ButtonDark'

function SignUpPage() {
  return (
    <>
        <div className='grid grid-cols-12 py-20 md:py-0'>
            <div className='col-span-6 hidden md:block'>
                <Image src={'/images/sign-up.png'} alt='Sign Up' width={500} height={500} layout='responsive'/>
            </div>
            <div className='col-span-12 md:col-span-6 flex flex-col justify-center px-16'>
                <h2 className='text-2xl font-bold'>Create New Account</h2>
                <p className='text-gray-400'>Please enter details</p>

                <form action="#" className='mt-8'> 
                    <div className='mb-6'>
                        <label htmlFor="">First Name</label> <br />
                        <input className='bg-transparent w-full focus-visible:outline-none border-[1.5px] border-black rounded-lg pl-3 py-3 mt-1' type="email" placeholder='First Name'/>
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="">Last Name</label> <br />
                        <input className='bg-transparent w-full focus-visible:outline-none border-[1.5px] border-black rounded-lg pl-3 py-3 mt-1' type="text" placeholder='Last Name'/>
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="">Email Address</label> <br />
                        <input className='bg-transparent w-full focus-visible:outline-none border-[1.5px] border-black rounded-lg pl-3 py-3 mt-1' type="text" placeholder='Your Email'/>
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="">Password</label> <br />
                        <input className='bg-transparent w-full focus-visible:outline-none border-[1.5px] border-black rounded-lg pl-3 py-3 mt-1' type="password" placeholder='Your Email'/>
                    </div>
                        <div>
                            <input type="checkbox" id='remember'/>
                            <label className='ml-2 cursor-pointer' htmlFor="remember">I agree to the <span className='font-bold'>Terms & Conditions</span></label>
                        </div>
                    <div className='w-full mt-8'>
                        <ButtonDark title='Login' link='#'/>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default SignUpPage