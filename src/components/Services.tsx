import Image from "next/image";

export default function Services() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:space-x-8 space-y-8 lg:space-y-0 md:px-16 pb-10 pt-2">
      {/* Service 1 */}
      <div className="bg-blue-100 min-h-64 h-auto w-full rounded-2xl p-6 justify-between flex flex-col">
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
      </div>

      {/* Service 2 */}
      <div className="bg-yellow-100 min-h-64 h-auto w-full rounded-2xl p-6 justify-between flex flex-col">
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
      <div className="bg-[#F7F7F7] h-auto w-full rounded-2xl p-6 justify-between items-center flex flex-col">
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
        <p className="w-[28ch] text-center pt-6">
          Experience the best & secure care for your car with us
        </p>
      </div>
    </div>
  );
}
