import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="banner bg-gray-100 px-20">
        <div className="grid grid-cols-12">
          <div className="col-span-6 flex flex-col justify-center">
            <p className="text-xl">Classic Exclusive</p>
            <h2 className="text-4xl font-bold py-1">Women's Collection</h2>
            <p className="uppercase text-xl">Upto 40% off</p>
            <button className='bg-black text-white px-6 py-2 rounded-lg w-32 mt-8'>Shop Now</button>
          </div>
          <div className="col-span-6">
            <Image src="/images/home-banner.png" alt="home banner" width={500} height={400}/>
          </div>
        </div>
      </section>
    </>
  );
}
