export default function AboutUs() {
  return (
    <>
      {" "}
      <div className="flex w-full justify-between items-end overflow-hidden">
        <div
          style={{
            writingMode: "vertical-rl",
          }}
          className="rotate-180 w-[64ch] h-max p-8"
        >
          <p className="uppercase md:text-3xl text-lg">About us</p>
          <h3 className="text-2xl md:text-5xl">
            We've been
            <br />
            forefront leaders
          </h3>
        </div>
        <img src="/images/we-are-leader.svg" />
      </div>
      <div className="md:px-6 grid grid-cols-3 md:grid-cols-9 text-sm md:text-[unset] gap-3 my-4 w-full">
        <p className="border p-4 rounded-xl flex flex-col justify-end col-span-3 md:col-span-3 h-40">
          <span className="text-7xl">10L+</span>
          happy users
        </p>
        <p className="border p-4 rounded-xl flex flex-col justify-end grow md:col-span-2">
          Experienced and skilled technicians
        </p>
        <p className="border p-4 rounded-xl flex flex-col justify-end grow md:col-span-2">
          International standard products
        </p>
        <p className="border p-4 rounded-xl flex flex-col justify-end grow md:col-span-2">
          Quality treatment
        </p>
      </div>
    </>
  );
}
