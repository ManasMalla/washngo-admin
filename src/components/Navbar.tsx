"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex w-full justify-between items-center p-8 max-h-14 flex-row-reverse">
      <div className="hidden md:flex items-center space-x-4">
        <button
          className="bg-black text-white px-6 py-2 rounded-full"
          // onClick={toggleMenu}
        >
          {isOpen ? "close" : "menu"}
        </button>
        <Link
          href={"/#navigate"}
          className="size-10 border rounded-full border-black flex items-center justify-center"
        >
          <img src="/icons/Send.svg" className="size-5" />
        </Link>
        <div className="size-10 border rounded-full border-black flex items-center justify-center">
          <img src="/icons/Calling.svg" className="size-5" />
        </div>
      </div>

      <Link href={"/"} className="text-2xl font-medium">
        Wash&Go
      </Link>

      <nav className="hidden md:flex space-x-4">
        <Link href={"/services"}>Services</Link>
        <button>Products</button>
        <Link href={"/about"}>About</Link>
      </nav>

      <div className="md:hidden flex items-center space-x-4">
        <button
          className="bg-black text-white px-6 py-2 rounded-full"
          onClick={toggleMenu}
        >
          {isOpen ? "close" : "menu"}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-20 right-4 w-48 bg-white border border-neutral-200 rounded-xl p-2 space-y-2">
          <Link
            href={"/services"}
            className="w-full hover:bg-neutral-200 py-2 px-4 rounded-xl text-left"
          >
            Services
          </Link>
          <button className="w-full hover:bg-neutral-200 py-2 px-4 rounded-xl text-left">
            Products
          </button>
          <Link
            href={"/about"}
            className="w-full hover:bg-neutral-200 py-2 px-4 rounded-xl text-left"
          >
            About
          </Link>
        </div>
      )}
    </div>
  );
}
