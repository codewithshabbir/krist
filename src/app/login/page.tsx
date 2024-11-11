import Image from 'next/image'
import React from 'react'
import ButtonDark from '../components/Buttons/ButtonDark'

function LoginPage() {
  return (
    <>
        <div className='grid grid-cols-12 py-20 md:py-0'>
            <div className='col-span-6 hidden md:block'>
                <Image src={'/images/login.png'} alt='' width={500} height={500} layout='responsive'/>
            </div>
            <div className='col-span-12 md:col-span-6 flex flex-col justify-center px-16'>
                <h2 className='text-2xl font-bold'>Welcome 👋</h2>
                <p className='text-gray-400'>Please Login here</p>

                <form action="#" className='mt-8'> 
                    <div className='mb-6'>
                        <label htmlFor="">Email Address</label> <br />
                        <input className='bg-transparent w-full focus-visible:outline-none border-[1.5px] border-black rounded-lg pl-3 py-3 mt-1' type="email" placeholder='Your Email'/>
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="">Password</label> <br />
                        <input className='bg-transparent w-full focus-visible:outline-none border-[1.5px] border-black rounded-lg pl-3 py-3 mt-1' type="password" placeholder='Your Email'/>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div>
                            <input type="checkbox" id='remember'/>
                            <label className='ml-2 cursor-pointer' htmlFor="remember">Remember Me</label>
                        </div>
                        <div>
                            <span><a href="#">Forgot Password?</a></span>
                        </div>
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

export default LoginPage