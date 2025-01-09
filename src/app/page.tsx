import Image from "next/image";
import BestSeller from "./components/Sections/BestSeller/BestSeller";
import TopRated from "./components/Sections/BestSeller/TopRated";
import ButtonDark from "./components/Buttons/ButtonDark";
import ReviewIcon from './icons/review.svg'
import ShippingIcon from './icons/shipping.svg'
import Categories from "./components/Sections/Categories/Categories";

export default function Home() {
  return (
    <>
      <section className="banner bg-gray-100 px-20">
        <div className="grid grid-cols-12">
          <div className="col-span-6 flex flex-col justify-center">
            <p className="text-md md:text-xl">Classic Exclusive</p>
            <h2 className="text-xl md:text-4xl font-bold py-1">Women&apos;s Collection</h2>
            <p className="uppercase text-lg md:text-xl mb-4">Upto 40% off</p>
            <div className="w-full md:w-2/4">
                <ButtonDark title="Shop Now" link="/shop"/>
            </div>
          </div>
          <div className="col-span-6 flex justify-center">
            <Image src="/images/home-banner.png" alt="home banner" width={500} height={400}/>
          </div>
        </div>
      </section>
      <section className="category p-20">
        <Categories/>
      </section>
      <section className="best-seller p-20">
        <BestSeller></BestSeller>
      </section>
      <section className="p-20">
        <TopRated></TopRated>
      </section>
      <section className="p-20">
        <div className="grid grid-cols-12 gap-y-10">
          <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
            <h2 className="text-3xl">Deals of the Month</h2>
            <p className="pt-4 pb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque veritatis, animi magni nulla labore voluptatem architecto nisi tenetur. Dolores hic rerum explicabo architecto quis voluptatem perspiciatis, necessitatibus quam tempora error.</p>
            <ul className="flex gap-4">
              <li className="border-gray-300 rounded inline-block border-[1px] py-1 px-3">
                <span className="font-bold">120</span> <br />
                Days
              </li>
              <li className="border-gray-300 rounded inline-block border-[1px] py-1 px-3">
                <span className="font-bold">120</span> <br />
                Days
              </li>
              <li className="border-gray-300 rounded inline-block border-[1px] py-1 px-3">
                <span className="font-bold">120</span> <br />
                Days
              </li>
              <li className="border-gray-300 rounded inline-block border-[1px] py-1 px-3">
                <span className="font-bold">120</span> <br />
                Days
              </li>
            </ul>
            <div className="pt-10 w-full md:w-3/5 lg:md:w-2/5">
              <ButtonDark title="View All Products" link="#"></ButtonDark>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <Image src={'/images/deals-of-the-month.jpg'} alt="Deal of the month" width={500} height={500}/>
          </div>
        </div>
      </section>
      <section className="p-20 bg-gray-100">
        <div className="flex justify-between">
          <h2 className="text-3xl font-semibold">What our Customers say&apos;s</h2>
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
        <div className="grid grid-cols-12 mt-10 gap-5">
          <div className="col-span-12 md:col-span-4 bg-white gap-y-4 p-6 rounded-lg">
            <div className="flex">
              <ReviewIcon width={20} height={20} className="text-yellow-500 fill-yellow-500"></ReviewIcon>
              <ReviewIcon width={20} height={20} className="text-yellow-500 fill-yellow-500"></ReviewIcon>
              <ReviewIcon width={20} height={20} className="text-yellow-500 fill-yellow-500"></ReviewIcon>
              <ReviewIcon width={20} height={20} className="text-yellow-500 fill-yellow-500"></ReviewIcon>
            </div>
            <p className="pt-1 pb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In autem ullam fuga aliquam nesciunt aspernatur facere libero, saepe laborum odio veritatis nihil blanditiis. Ex expedita minus vel ut magni porro.</p>
            <div className="flex gap-3">
              <Image className="rounded-full" src={'/images/deals-of-the-month.jpg'} alt="Client Picture" width={45} height={45}/>
              <div>
                <h4 className="font-bold">Lexlie Alexander</h4>
                <p className="text-gray-300">Model</p>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 bg-white gap-y-4 p-6 rounded-lg">
            <div className="flex">
              <ReviewIcon width={20} height={20} className="text-yellow-500 fill-yellow-500"></ReviewIcon>
              <ReviewIcon width={20} height={20} className="text-yellow-500 fill-yellow-500"></ReviewIcon>
              <ReviewIcon width={20} height={20} className="text-yellow-500 fill-yellow-500"></ReviewIcon>
              <ReviewIcon width={20} height={20} className="text-yellow-500 fill-yellow-500"></ReviewIcon>
            </div>
            <p className="pt-1 pb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In autem ullam fuga aliquam nesciunt aspernatur facere libero, saepe laborum odio veritatis nihil blanditiis. Ex expedita minus vel ut magni porro.</p>
            <div className="flex gap-3">
              <Image className="rounded-full" src={'/images/deals-of-the-month.jpg'} alt="Client Picture" width={45} height={45}/>
              <div>
                <h4 className="font-bold">Lexlie Alexander</h4>
                <p className="text-gray-300">Model</p>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 bg-white gap-y-4 p-6 rounded-lg">
            <div className="flex">
              <ReviewIcon width={20} height={20} className="text-yellow-500 fill-yellow-500"></ReviewIcon>
              <ReviewIcon width={20} height={20} className="text-yellow-500 fill-yellow-500"></ReviewIcon>
              <ReviewIcon width={20} height={20} className="text-yellow-500 fill-yellow-500"></ReviewIcon>
              <ReviewIcon width={20} height={20} className="text-yellow-500 fill-yellow-500"></ReviewIcon>
            </div>
            <p className="pt-1 pb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In autem ullam fuga aliquam nesciunt aspernatur facere libero, saepe laborum odio veritatis nihil blanditiis. Ex expedita minus vel ut magni porro.</p>
            <div className="flex gap-3">
              <Image className="rounded-full" src={'/images/deals-of-the-month.jpg'} alt="Client Picture" width={45} height={45}/>
              <div>
                <h4 className="font-bold">Lexlie Alexander</h4>
                <p className="text-gray-300">Model</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-20">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6 lg:col-span-3 mb-6 md:mb-10 lg:mb-0">
            <ShippingIcon width={25} height={25}/>
            <h2 className="font-bold pt-2">Free Shipping</h2>
            <p>Free shipping for order above $150</p>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3 mb-6 md:mb-10 lg:mb-0">
            <ShippingIcon width={25} height={25}/>
            <h2 className="font-bold pt-2">Money Guarantee</h2>
            <p>Within 30 days for an exchange</p>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3 mb-6 md:mb-10 lg:mb-0">
            <ShippingIcon width={25} height={25}/>
            <h2 className="font-bold pt-2">Online Support</h2>
            <p>24 hours a day, 7 days a week</p>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3 mb-6 md:mb-10 lg:mb-0">
            <ShippingIcon width={25} height={25}/>
            <h2 className="font-bold pt-2">Flexible Payment</h2>
            <p>Pay with multiple credit cards</p>
          </div>
        </div>
      </section>
    </>
  );
}
