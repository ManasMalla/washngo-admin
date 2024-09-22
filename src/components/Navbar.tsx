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
      className={`w-full p-7  ${
        path !== "/"
          ? "bg-gradient-to-b from-black to-transparent via-black fixed top-0 mb-10"
          : "bg-gradient-to-br from-white/10 md:from-white/5 to-transparent mb-10 md:mb-14"
      } z-20`}
    >
      <div
        className={`flex w-full justify-between items-center max-h-14 flex-row-reverse`}
      >
        <div className="flex items-center space-x-4 md:w-[422.81px] shrink-0 justify-end">
          <Link
            href={"/about"}
            className="bg-white md:flex hidden text-black px-6 py-2 rounded-full"
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
          <button
            onClick={toggleMenu}
            className="size-10 shrink-0 md:hidden border rounded-full border-white flex items-center justify-center bg-white"
          >
            <img
              src={isOpen ? "/icons/x.svg" : "/icons/menu.svg"}
              className="size-5"
            />
          </button>
        </div>

        <Link href={"/"}>
          <img
            src="/full-width-logo.svg"
            className="h-9 md:top-5 w-full pointer-events-none"
          />
        </Link>

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
      </div>

      {isOpen && (
        <div className="flex flex-col md:hidden rounded-xl py-4 gap-y-2">
          <Link
            href={"/"}
            className="w-full block hover:bg-neutral-200/20 py-2 rounded-xl text-left"
          >
            Home
          </Link>
          <Link
            href={"/services"}
            className="w-full hover:bg-neutral-200/20 py-2 rounded-xl text-left"
          >
            Services
          </Link>
          <button className="w-full hover:bg-neutral-200/20 py-2 rounded-xl text-left">
            Products
          </button>
          <Dropdown
            label={"Packages"}
            dismissOnClick={true}
            className="bg-black text-white rounded-xl w-full"
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
            className="w-full hover:bg-neutral-200/20 py-2 rounded-xl text-left"
          >
            About
          </Link>
          <div
            onClick={() => {
              alert("Coming soon.");
            }}
            className="w-full hover:bg-neutral-200/20 py-2 rounded-xl text-left"
          >
            Franchise
          </div>
        </div>
      )}
    </div>
  );
}
