import Link from "next/link";

export default function Component() {
  return (
    <Link
      href={"/#services"}
      className="bg-[#E94218] min-h-64 h-auto w-full md:w-1/3 rounded-2xl p-6 justify-between flex flex-col cursor-pointer aspect-[1.45]"
    >
      <button className="bg-white px-4 py-2 rounded-full font-semibold flex items-center space-x-2 w-max">
        <span>Services</span>
        <img
          src="/arrowd.png"
          alt="arrow"
          width={20}
          height={20}
          className="bg-neutral-300 rounded-full"
        />
      </button>
      <div className="flex items-end justify-between">
        {/* <h1 className="text-shadow mt-10 text-4xl w-[8ch]">
  <span className="font-semibold">Secure</span> your car!
</h1> */}
        <img src="/images/secure-your-car.svg" />
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mt-4">
          <img src="/share.png" alt="share" width={20} height={20} />
        </div>
      </div>
    </Link>
  );
}
