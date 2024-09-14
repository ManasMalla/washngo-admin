import Link from "next/link";

export function ServicesSection() {
  return (
    <section id="services">
      <div className="flex flex-col lg:flex-row w-full overflow-hidden">
        <img src="/images/our-services-car.svg" className="lg:w-1/2" />
        <div className="p-4 mx-auto my-auto">
          <p className="uppercase text-lg:text-xl text-[#e94218]">
            Our services
          </p>
          <p className="text-xl md:text-3xl font-light">
            What do we do to your car?
          </p>
          <p className="opacity-60 mt-4 md:w-[40ch]">
            We provide the best services to our customers that are best in
            quality, trusted, and provide 100% satisfaction
          </p>
          <ul className="list-disc">
            {[
              "Ceramic Coating",
              "Paint Protection Film",
              "Sun Film",
              "SRS Treatment",
              "Glass Restoration Treatment for Anti-Glare",
              "Complete Interior Detailing with Steam",
              "Car Foam Wash",
              "Sanitisation of Complete Car Interiors",
            ].map((service) => (
              <li key={service} className="w-max">
                <Link
                  href={
                    "/services/" + service.replaceAll(" ", "-").toLowerCase()
                  }
                >
                  <div className="flex gap-2 my-8 w-max">
                    <p>{service}</p>
                    <img src="icons/Arrow - Right Circle.svg" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
