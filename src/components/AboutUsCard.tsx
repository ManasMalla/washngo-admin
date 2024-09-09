import Link from "next/link";
import Image from "next/image";

export default function Component() {
  return (
    <div className="w-full md:w-1/3 h-full">
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
      <div className="grow w-full h-full bg-red-500" />
      <img src="/images/about-us.svg" className="w-full mt-4" />
    </div>
  );
}
