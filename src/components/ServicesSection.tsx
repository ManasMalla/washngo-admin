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
              { name: "Ceramic Coating" },
              { name: "Paint Protection Film" },
              { name: "Sun Films" },
              { name: "SRS Treatment" },
              { name: "Glass Restoration Treatment for Anti-Glare" },
              {
                name: "Complete Interior Detailing with Steam",
                id: "interior-deep-cleaning",
              },
              { name: "Car Foam Wash" },
              {
                name: "Sanitisation of Complete Car Interiors",
                id: "interior-deep-cleaning",
              },
            ].map((service) => (
              <li key={service.name} className="w-max">
                <Link
                  href={
                    "/services/" + service.id ??
                    service.name.replaceAll(" ", "-").toLowerCase()
                  }
                >
                  <div className="flex gap-2 my-8 w-max">
                    <p>{service.name}</p>
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
