"use client";
import React, { useState } from "react";
import Image from "next/image";
import ButtonDark from "./Buttons/ButtonDark";
import Link from "next/link";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

function Header() {
  const [menuOpen, setmenuOpen] = useState(false);
  const toggleMobileMenu = (isOpen: boolean) => {
    setmenuOpen(isOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow px-10 md:px-20 py-4 transition-all">
        <div className="hidden lg:grid grid-cols-12">
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
          <div className="col-span-3 items-center justify-end gap-4 lg:flex">
            <Link href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </Link>

            <Link href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </Link>

            <Link href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </Link>
            <div>
              <ButtonDark title="Login" link="/login" />
            </div>
          </div>
        </div>
        <div className="flex lg:hidden justify-between items-center">
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
          <FaBarsStaggered
            onClick={() => toggleMobileMenu(true)}
            className="text-2xl cursor-pointer"
          />
          <div
            className={`absolute ${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 bg-white text-black w-full h-screen top-0 left-0`}
          >
            <div className="flex justify-end mr-10 mt-8">
              <RxCross1
                onClick={() => toggleMobileMenu(false)}
                className="text-2xl cursor-pointer"
              />
            </div>
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
            <div className="col-span-3 items-center justify-end gap-4 lg:flex">
              <div className="flex justify-center gap-4 mt-10">
                <Link href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </Link>
                <Link href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </Link>
                <Link href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </Link>
              </div>
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
