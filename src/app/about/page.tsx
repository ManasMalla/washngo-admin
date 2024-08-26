export default function About() {
  return (
    <div className="p-8">
      <h2 className="text-2xl">About us</h2>
      <h1 className="text-7xl font-bold my-3">
        Your trusted partner
        <br />
        in car care
      </h1>
      <img
        src="https://static.vecteezy.com/system/resources/previews/036/784/293/non_2x/ai-generated-car-washed-by-cleaning-towel-man-free-photo.jpeg"
        className="h-[660px] w-full object-cover my-12 rounded-xl overflow-hidden"
      />
      <div className="flex justify-between mb-8">
        <p className="font-semibold shrink-0">Our goal</p>
        <p className="w-[65ch]">
          We’re always striving to deliver the best services and execute
          workloads to the highest standards in least turn around time. We’re
          constantly in pursuit of new trends to meet our customers’ needs in
          the best possible way.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 my-4">
        <div className="border border-black p-24 rounded-2xl flex gap-4 flex-col">
          <p>Years of experience</p>
          <p className="text-7xl">15</p>
        </div>
        <div className="border border-black p-24 rounded-2xl flex gap-4 flex-col">
          <p>Clients</p>
          <p className="text-7xl">1000+</p>
        </div>
        <div className="border border-black p-24 rounded-2xl flex gap-4 flex-col">
          <p>Awards</p>
          <p className="text-7xl">05+</p>
        </div>
      </div>
      <p className="w-[65ch] mt-12">
        Established in the year 2009, Wash & Go is the first international class
        car wash service provider in Andhra Pradesh & Telangana region. With
        less turnaround time, best quality and economical prices, our services
        are the go car detailing service in Hyderabad. No wonder we boast of a
        huge customer base in Hyderabad.
        <br />
        <br />
        We are the first Car Detailing Studio to introduce German Technology
        Machinery to Andhra Pradesh & Telangana.
      </p>
    </div>
  );
}
