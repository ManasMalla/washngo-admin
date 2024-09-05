"use client";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <div className="flex flex-col text-black lg:flex-row justify-between items-start lg:space-x-8 space-y-8 lg:space-y-0 md:px-16 pb-10 pt-2">
      {/* Service 1 */}
      <Link
        href={"/#services"}
        className="bg-red-800 min-h-64 h-auto w-full rounded-2xl p-6 justify-between flex flex-col cursor-pointer"
      >
        <button className="bg-white px-4 py-2 rounded-full font-semibold flex items-center space-x-2 w-max">
          <span>Services</span>
          <Image
            src="/arrowd.png"
            alt="arrow"
            width={20}
            height={20}
            className="bg-neutral-300 rounded-full"
          />
        </button>
        <div className="flex items-end justify-between">
          <h1 className="text-shadow mt-10 text-4xl w-[8ch]">
            <span className="font-semibold">Secure</span> your car!
          </h1>
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mt-4">
            <Image src="/share.png" alt="share" width={20} height={20} />
          </div>
        </div>
      </Link>

      {/* Service 2 */}
      <div
        onClick={() => {
          alert("Coming soon.");
        }}
        className="bg-red-300/30 min-h-64 h-auto w-full rounded-2xl p-6 justify-between flex flex-col cursor-pointer"
      >
        <button className="bg-white px-4 py-2 rounded-full font-semibold flex items-center space-x-2 w-max">
          <span>Products</span>
          <Image
            src="/arrowd.png"
            alt="arrow"
            width={20}
            height={20}
            className="bg-neutral-300 rounded-full"
          />
        </button>
        <div className="flex items-end justify-between">
          <h1 className="mt-10 text-4xl text-shadow w-[8ch]">
            <span className="font-semibold">Regular</span> Routine
          </h1>
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mt-4">
            <Image src="/share.png" alt="share" width={20} height={20} />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-between">
        <Link
          href={"/about"}
          className="bg-[#F7F7F7]/20 h-auto w-full rounded-2xl p-6 justify-between items-center flex flex-col"
        >
          <button className="bg-white px-4 py-2 rounded-full font-semibold flex items-center space-x-2 w-max">
            <span>About</span>
            <Image
              src="/arrowd.png"
              alt="arrow"
              width={20}
              height={20}
              className="bg-neutral-300 rounded-full -rotate-[135deg]"
            />
          </button>
          <p className="w-[28ch] text-center pt-6 text-white">
            Experience the best & secure care for your car with us
          </p>
        </Link>
        <p className="mt-4 text-center text-white">
          We're the <b>first</b> car detailing studio <br />
          to introduce German Technology Machinery to <br />
          Andhra Pradesh & Telangana
        </p>
      </div>
    </div>
  );
}
