import Link from "next/link";

export default function ProductsSection() {
  return (
    <section id="products">
      <div className="flex flex-col lg:flex-row overflow-hidden">
        <div className="p-4 mx-auto my-auto">
          <p className="uppercase text-lg md:text-xl text-[#e94218]">
            Our products
          </p>
          <p className="text-xl md:text-3xl font-light">
            What do use for your car?
          </p>
          <p className="opacity-60 mt-4 md:w-[60ch]">
            Explore innovative solutions designed to enhance your car's
            performance, protection, and style—everything you need for a
            superior driving experience.
          </p>
          <div className="w-full inline-flex flex-nowrap md:justify-start  [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <div className="flex animate-infinite-scroll items-center justify-center ">
              {[
                "https://i.pinimg.com/originals/c4/50/b7/c450b77567a7f7149b71f92f49b89854.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/3M_wordmark.svg/300px-3M_wordmark.svg.png",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn8EkHTD6NuY_aTTa3XsBNhnCjuZr2vg737A&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3hctvkeDRpNg0CWCgFDfbUOGr0Y5w5ddfqA&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVUCmv5wW9lb1eLuFU8xebhtDiWFV_yV-3ng&s",
                "https://seekvectorlogo.com/wp-content/uploads/2019/10/farecla-products-vector-logo.png",
                "https://seeklogo.com/images/N/norton-saint-gobain-logo-34F52B2FD5-seeklogo.com.png",
                "https://www.systemx.com/wp-content/uploads/2022/10/SystemX-FI.jpg",
                "https://thenfapost.com/wp-content/uploads/2023/09/Garware-Hi-Tech-Films.png",
              ].map((service) => (
                <img
                  key={service}
                  src={service}
                  className="h-16 mx-8"
                  alt={service}
                />
              ))}
            </div>
          </div>
        </div>
        {/* <img src="/images/our-products-group.svg" className="lg:w-1/3" /> */}
      </div>
    </section>
  );
}
