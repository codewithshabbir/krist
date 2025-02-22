"use client";
import React, { useState } from "react";
import Image from "next/image";
import ButtonDark from "./Buttons/ButtonDark";
import Link from "next/link";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { GoSearch } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsHandbag } from "react-icons/bs";
import { useCart } from "../context/CartContext";
import CartSidebar from "./CartSidebar/CartSidebar";

function Header() {
  const [menuOpen, setmenuOpen] = useState(false);
  const [sidebarOpen, setsidebarOpen] = useState(false);

  const { cartCount } = useCart(); // Get cart item count from context

  // Toggle mobile menu visibility
  const toggleMobileMenu = (isOpen: boolean) => {
    setmenuOpen(isOpen);
  };

  // Toggle cart sidebar visibility
  const toggleAddToCartSidebar = (isOpen: boolean) => {
    setsidebarOpen(isOpen);
  };

  return (
    <>
      {/* Header for large screens */}
      <header className="sticky top-0 z-50 bg-white shadow px-10 md:px-20 py-4 transition-all">
        <div className="hidden lg:grid grid-cols-12">
          {/* Logo Section */}
          <div className="col-span-3 flex items-center">
            <Link href="/">
              <Image
                src="/images/logo.svg"
                alt="Logo"
                width={120}
                height={80}
              />
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="col-span-6 items-center justify-center lg:flex">
            <ul className="flex gap-6">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/shop">Shop</Link>
              </li>
              <li>
                <Link href="">Our Story</Link>
              </li>
              <li>
                <Link href="">Blog</Link>
              </li>
              <li>
                <Link href="">Contact Us</Link>
              </li>
            </ul>
          </nav>

          {/* Header Icons Section */}
          <div className="col-span-3 items-center justify-end gap-4 lg:flex">
            {/* Search Icon */}
            <Link href="">
              <GoSearch className="text-2xl" />
            </Link>

            {/* Wishlist Icon */}
            <Link href="">
              <IoMdHeartEmpty className="text-2xl" />
            </Link>

            {/* Cart Icon with item count */}
            <div
              onClick={() => toggleAddToCartSidebar(true)}
              className="relative cursor-pointer"
            >
              <BsHandbag className="text-2xl" />
              <span className="absolute top-0 -right-1 bg-black text-white text-[10px] rounded-lg w-4 h-4 flex justify-center items-center">
                {cartCount}
              </span>
            </div>

            {/* Login Button */}
            <div>
              <ButtonDark title="Login" link="/login" />
            </div>
          </div>

          {/* Cart Sidebar */}
          <div
            className={`absolute top-0 right-0 w-80 h-full bg-white z-10 
              transition-transform duration-300 transform 
              ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            <CartSidebar onClickFun={toggleAddToCartSidebar} value={false} />
          </div>
        </div>

        {/* Mobile Header */}
        <div className="flex lg:hidden justify-between items-center">
          {/* Logo Section */}
          <div className="col-span-3 flex items-center">
            <Link href="/">
              <Image
                src="/images/logo.svg"
                alt="Logo"
                width={120}
                height={80}
              />
            </Link>
          </div>

          {/* Mobile Header Icons */}
          <div className="flex gap-4">
            <div
              onClick={() => toggleAddToCartSidebar(true)}
              className="relative cursor-pointer"
            >
              <BsHandbag className="text-2xl" />
              <span className="absolute top-0 -right-1 bg-black text-white text-[10px] rounded-lg w-4 h-4 flex justify-center items-center">
                {cartCount}
              </span>
            </div>

            {/* Mobile Menu Toggle */}
            <FaBarsStaggered
              onClick={() => toggleMobileMenu(true)}
              className="text-2xl cursor-pointer"
            />
          </div>

          {/* Mobile Menu */}
          <div
            className={`absolute ${menuOpen ? "translate-x-0" : "-translate-x-full"} 
              transition-transform duration-300 bg-white text-black w-full h-screen top-0 left-0`}
          >
            <div className="flex justify-end mr-10 mt-8">
              {/* Close Mobile Menu */}
              <RxCross1
                onClick={() => toggleMobileMenu(false)}
                className="text-2xl cursor-pointer"
              />
            </div>

            {/* Mobile Navigation */}
            <nav className="">
              <ul className="flex justify-center items-center flex-col gap-2 mt-6">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/shop">Shop</Link>
                </li>
                <li>
                  <Link href="">Our Story</Link>
                </li>
                <li>
                  <Link href="">Blog</Link>
                </li>
                <li>
                  <Link href="">Contact Us</Link>
                </li>
              </ul>
            </nav>

            {/* Mobile Icons */}
            <div className="col-span-3 items-center justify-end gap-4 lg:flex">
              <div className="flex justify-center gap-4 mt-10">
                <Link href="">
                  <GoSearch className="text-2xl" />
                </Link>

                <Link href="">
                  <IoMdHeartEmpty className="text-2xl" />
                </Link>

                <Link href="">
                  <BsHandbag className="text-2xl" />
                </Link>
              </div>
              {/* Login Button on Mobile */}
              <div className="flex mt-6 justify-center">
                <div>
                  <ButtonDark title="Login" link="/login" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;