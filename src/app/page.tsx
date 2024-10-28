import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="banner bg-gray-100 px-20">
        <div className="grid grid-cols-12">
          <div className="col-span-6 flex flex-col justify-center">
            <p className="text-xl">Classic Exclusive</p>
            <h2 className="text-4xl font-bold py-1">Women&apos;s Collection</h2>
            <p className="uppercase text-xl">Upto 40% off</p>
            <button className='bg-black text-white px-6 py-2 rounded-lg w-32 mt-8'>Shop Now</button>
          </div>
          <div className="col-span-6">
            <Image src="/images/home-banner.png" alt="home banner" width={500} height={400}/>
          </div>
        </div>
      </section>
      <section className="category p-20">
        <div className="flex justify-between">
          <h2 className="text-3xl font-semibold">Shop by Categories</h2>
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
        <div className="grid grid-cols-12 pt-10 gap-5">
          <div className="col-span-3 bg-gray-100 w-full rounded-lg relative overflow-hidden">
            <h3 className="absolute left-6 top-1 text-gray-200 text-6xl font-bold whitespace-nowrap">Casual Wear</h3>
            <Image className=" relative z-[1]" src="/images/home-banner.png" alt="home banner" width={500} height={400} layout="responsive"/>
            <button className="absolute z-[2] bottom-4 left-1/2 transform -translate-x-1/2 bg-white w-4/5 py-4 rounded-lg">
              Casual Wear
            </button>
          </div>
          <div className="col-span-3 bg-gray-100 w-full rounded-lg relative overflow-hidden">
            <h3 className="absolute left-6 top-1 text-gray-200 text-6xl font-bold whitespace-nowrap">Casual Wear</h3>
            <Image className=" relative z-[1]" src="/images/home-banner.png" alt="home banner" width={500} height={400} layout="responsive"/>
            <button className="absolute z-[2] bottom-4 left-1/2 transform -translate-x-1/2 bg-white w-4/5 py-4 rounded-lg">
              Casual Wear
            </button>
          </div>
          <div className="col-span-3 bg-gray-100 w-full rounded-lg relative overflow-hidden">
            <h3 className="absolute left-6 top-1 text-gray-200 text-6xl font-bold whitespace-nowrap">Casual Wear</h3>
            <Image className=" relative z-[1]" src="/images/home-banner.png" alt="home banner" width={500} height={400} layout="responsive"/>
            <button className="absolute z-[2] bottom-4 left-1/2 transform -translate-x-1/2 bg-white w-4/5 py-4 rounded-lg">
              Casual Wear
            </button>
          </div>
          <div className="col-span-3 bg-gray-100 w-full rounded-lg relative overflow-hidden">
            <h3 className="absolute left-6 top-1 text-gray-200 text-6xl font-bold whitespace-nowrap">Casual Wear</h3>
            <Image className=" relative z-[1]" src="/images/home-banner.png" alt="home banner" width={500} height={400} layout="responsive"/>
            <button className="absolute z-[2] bottom-4 left-1/2 transform -translate-x-1/2 bg-white w-4/5 py-4 rounded-lg">
              Casual Wear
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
