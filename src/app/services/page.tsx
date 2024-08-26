import KnowMore from "../../components/know_more";

export default function Services() {
  return (
    <div className="p-4 md:p-16">
      <p className="text-2xl">Our Services</p>
      <p className="md:w-[48ch] mb-8 mt-4">
        We aim to provide the best Service in Fastest possible turnaround time,
        while keeping the costs affordable and economical.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            name: "Car Foam wash",
            description:
              "A thorough cleaning of your car's exterior using specialized foam to remove dirt and grime.",
          },
          {
            name: "Interior deep cleaning",
            description:
              "A detailed cleaning of your car's interior, including seats, carpets, and dashboard, to remove dirt, stains, and odors.",
          },
          {
            name: "Teflon polishing",
            description:
              "A protective coating applied to your car's paint to enhance its shine, protect against scratches, and repel water.",
          },
          {
            name: "Wash and Wax",
            description:
              "A combination of exterior washing and waxing to clean your car and provide a protective layer against the elements.",
          },
          {
            name: "Ceramic coating",
            description:
              "A durable, long-lasting coating applied to your car's paint to provide maximum protection against scratches, UV rays, and chemicals.",
          },
          {
            name: "Graphene coating",
            description:
              "An advanced, high-tech coating that offers exceptional protection and durability for your car's paintwork.",
          },
          {
            name: "Ceramic maintenance",
            description:
              "Regular maintenance to ensure the longevity and effectiveness of your ceramic coating.",
          },
          {
            name: "Graphene Maintenance",
            description:
              "Regular maintenance to maintain the performance of your graphene coating.",
          },
          {
            name: "PPF",
            description:
              "A protective film applied to your car's paint to shield it from scratches, chips, and other damage.",
          },
          {
            name: "Wrapping",
            description:
              "Applying a vinyl film to your car's exterior to change its color or add a unique design.",
          },
          {
            name: "Sun films",
            description:
              "Tinted films applied to your car's windows to reduce heat, glare, and UV rays.",
          },
          {
            name: "Head Light Restoration",
            description:
              "Restoring the clarity and brightness of your car's headlights to improve visibility.",
          },
          {
            name: "Alloy Wheels cleaning",
            description:
              "Cleaning and polishing your car's alloy wheels to maintain their appearance.",
          },
          {
            name: "Yearly Package For Wash",
            description:
              "A package offering regular car washes throughout the year for convenience and savings.",
          },
          {
            name: "Annual Maintenance Package",
            description:
              "A comprehensive package including various maintenance services for your car on an annual basis.",
          },
          {
            name: "Denting",
            description:
              "Repairing dents and dings in your car's bodywork to restore its original shape.",
          },
          {
            name: "Painting",
            description:
              "Repainting your car to restore its original color or change its appearance.",
          },
          {
            name: "Car Accessories",
            description:
              "A variety of accessories to enhance your car's functionality, comfort, or appearance.",
          },
        ].map((e) => {
          return (
            <div key={e.name} className="border rounded-xl overflow-hidden">
              {/* <img
                src="https://github.com/manasmalla.png"
                className="h-56 object-cover w-full"
              /> */}
              <div className="p-8">
                <p className="font-medium">{e.name}</p>
                <p className="text-sm mt-1 opacity-50">{e.description}</p>
                <KnowMore />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
