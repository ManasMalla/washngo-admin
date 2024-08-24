import Link from "next/link";

export default function Title() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start p-4 space-y-4 md:py-0 md:space-y-0 px-8">
      <div className="flex-1 mr-auto shrink-0">
        <button className="bg-[#EEF7FF] text-black px-6 py-2 rounded-full underline">
          Subscribe
        </button>
      </div>
      <h1 className="text-center text-5xl lg:text-6xl">
        Car Detailing & <br /> Wash Studio
      </h1>
      <Link href={""} className="text-end ml-auto flex-1 shrink-0 w-full">
        Your trusted partner in <br /> car care
      </Link>
    </div>
  );
}
