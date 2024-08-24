"use client";

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
          onClick={toggleMenu}
        >
          {isOpen ? "close" : "menu"}
        </button>
        <div className="size-10 border rounded-full border-black"></div>
        <div className="size-10 border rounded-full border-black"></div>
      </div>

      <h3 className="text-2xl font-medium">Wash&Go</h3>

      <nav className="hidden md:flex space-x-4">
        <button>Services</button>
        <button>Products</button>
        <button>About</button>
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
          <button className="w-full hover:bg-neutral-200 py-2 px-4 rounded-xl text-left">
            Services
          </button>
          <button className="w-full hover:bg-neutral-200 py-2 px-4 rounded-xl text-left">
            Products
          </button>
          <button className="w-full hover:bg-neutral-200 py-2 px-4 rounded-xl text-left">
            About
          </button>
        </div>
      )}
    </div>
  );
}
