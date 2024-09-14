"use client";

import { Dropdown } from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const path = usePathname();
  return (
    <div
      className={`flex w-full justify-between items-center p-8 max-h-14 py-12 md:py-8 flex-row-reverse fixed top-0 ${
        path.includes("packages")
          ? "bg-transparent"
          : "bg-gradient-to-b from-black to-transparent"
      } z-20`}
    >
      <div className="flex items-center space-x-4">
        <Link
          href={"/about"}
          className="bg-white md:flex hidden text-black px-6 py-2 rounded-full"
          // onClick={toggleMenu}
        >
          about
        </Link>
        <Link
          href={"/#navigate"}
          className="size-10 border rounded-full border-white flex items-center justify-center"
        >
          <img src="/icons/Send.svg" className="size-5" />
        </Link>
        <Link
          href={"tel:+91 99598 07722"}
          className="size-10 border rounded-full border-white flex items-center justify-center cursor-pointer"
        >
          <img
            src="/icons/Calling.svg"
            className="size-5 fill-white stroke-white"
          />
        </Link>
      </div>

      <img
        src="/logo_colored.svg"
        className="h-9 absolute hidden md:flex md:top-5 w-full pointer-events-none"
      />

      <nav className="hidden md:flex space-x-4 items-center">
        <Link href={"/"}>Home</Link>
        <Link href={"/services"}>Services</Link>
        <Link href={"/#products"}>Products</Link>
        <Dropdown label={"Packages"} dismissOnClick={true}>
          {[
            "THE TARGARYEN",
            "THE LANNISTER",
            "THE STARK",
            "THE VALE",
            "THE NARCOS",
            "THE PROFESSOR",
          ].map((packageName) => (
            <Dropdown.Item
              as={"a"}
              href={"/packages/" + packageName.split(" ")[1].toLowerCase()}
            >
              {packageName
                .split(" ")
                .map((e) => e.substring(0, 1) + e.substring(1).toLowerCase())
                .join(" ")}
            </Dropdown.Item>
          ))}
        </Dropdown>
        <div
          onClick={() => {
            alert("Coming soon.");
          }}
          className="cursor-pointer"
        >
          Franchise
        </div>
      </nav>

      <div className="md:hidden flex items-center space-x-4">
        <img src="/logo-circle.svg" className="h-9 md:hidden w-full" />
        <button
          className="bg-white text-black px-6 py-2 rounded-full"
          onClick={toggleMenu}
        >
          {isOpen ? "close" : "menu"}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-20 right-4 w-48 border bg-black border-neutral-200 rounded-xl p-2 space-y-2">
          <Link
            href={"/"}
            className="w-full block hover:bg-neutral-200/20 py-2 px-4 rounded-xl text-left"
          >
            Home
          </Link>
          <Link
            href={"/services"}
            className="w-full hover:bg-neutral-200/20 py-2 px-4 rounded-xl text-left"
          >
            Services
          </Link>
          <button className="w-full hover:bg-neutral-200/20 py-2 px-4 rounded-xl text-left">
            Products
          </button>
          <Dropdown
            label={"Packages"}
            dismissOnClick={true}
            className="bg-black text-white rounded-xl"
          >
            {[
              "THE TARGARYEN",
              "THE LANNISTER",
              "THE STARK",
              "THE VALE",
              "THE NARCOS",
              "THE PROFESSOR",
            ].map((packageName) => (
              <Dropdown.Item
                as={"a"}
                className="py-3 w-48"
                href={"/packages/" + packageName.split(" ")[1].toLowerCase()}
              >
                {packageName
                  .split(" ")
                  .map((e) => e.substring(0, 1) + e.substring(1).toLowerCase())
                  .join(" ")}
              </Dropdown.Item>
            ))}
          </Dropdown>
          <Link
            href={"/about"}
            className="w-full hover:bg-neutral-200/20 py-2 px-4 rounded-xl text-left"
          >
            About
          </Link>
          <div
            onClick={() => {
              alert("Coming soon.");
            }}
            className="w-full hover:bg-neutral-200/20 py-2 px-4 rounded-xl text-left"
          >
            Franchise
          </div>
        </div>
      )}
    </div>
  );
}
