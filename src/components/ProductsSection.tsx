import Link from "next/link";

export default function ProductsSection() {
  return (
    <section id="products">
      <div className="flex flex-col lg:flex-row">
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
          <ul className="list-disc pl-8 grid-cols-2 md:grid-cols-3 grid">
            {[
              "Meguairs",
              "3M",
              "Rupes",
              "Onyx",
              "Puris",
              "Feracla",
              "Norton",
              "System X",
              "Gurware",
            ].map((service) => (
              <li key={service} className="w-max">
                <div className="flex gap-2 my-8 w-max">
                  <p>{service}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <img src="/images/our-products-group.svg" className="lg:w-1/3" />
      </div>
    </section>
  );
}
