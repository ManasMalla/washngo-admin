import KnowMore from "../../components/know_more";

export default function Services() {
  return (
    <div className="p-4 md:p-16">
      <div className="h-10" />
      <p className="text-2xl">Our Services</p>
      <p className="md:w-[48ch] mb-8 mt-4">
        At Wash & Go, we offer expert car care services, from routine
        maintenance to premium detailing. Our team ensures your vehicle stays in
        top condition, inside and out.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {[
          {
            name: "Car Foam wash",
            description:
              "A thorough cleaning of your car's exterior using specialized foam to remove dirt and grime.",
            image:
              "https://snowfoam.com.au/cdn/shop/collections/i-use-a-pressure-washer-231687.jpg?v=1669048157",
          },
          {
            name: "Interior deep cleaning",
            description:
              "A detailed cleaning of your car's interior, including seats, carpets, and dashboard, to remove dirt, stains, and odors.",
            image:
              "https://d2hucwwplm5rxi.cloudfront.net/wp-content/uploads/2023/08/04104605/car-interior-sanitising-body-a-040820230340-1024x640.jpg",
          },
          {
            name: "Teflon polishing",
            description:
              "A protective coating applied to your car's paint to enhance its shine, protect against scratches, and repel water.",
            image:
              "https://d2m3nfprmhqjvd.cloudfront.net/blog/20220228144809/ezgif.com-gif-maker-2022-02-15T164047.299.jpg",
          },
          {
            name: "Wash and Wax",
            description:
              "A combination of exterior washing and waxing to clean your car and provide a protective layer against the elements.",
            image: "https://i.ytimg.com/vi/PhdnFNHqd3c/maxresdefault.jpg",
          },
          {
            name: "Ceramic coating",
            description:
              "A durable, long-lasting coating applied to your car's paint to provide maximum protection against scratches, UV rays, and chemicals.",
            image:
              "https://www.carzspa.com/wp-content/uploads/2023/11/car-being-ceramic-coated.webp",
          },
          {
            name: "Graphene coating",
            description:
              "An advanced, high-tech coating that offers exceptional protection and durability for your car's paintwork.",
            // image:
            // "https://www.carzspa.com/wp-content/uploads/2024/02/graphene-ceramic-coating-placed.webp",
          },
          {
            name: "Ceramic maintenance",
            description:
              "Regular maintenance to ensure the longevity and effectiveness of your ceramic coating.",
            image:
              "https://bobmosescc.com/wp-content/uploads/shutterstock_768010027-950x450.jpg",
          },
          {
            name: "Graphene Maintenance",
            description:
              "Regular maintenance to maintain the performance of your graphene coating.",
            image:
              "https://cftproducts.com/wp-content/uploads/2022/02/graphene-coating.jpg",
          },
          {
            name: "PPF",
            description:
              "A protective film applied to your car's paint to shield it from scratches, chips, and other damage.",
            image:
              "https://www.carzspa.com/wp-content/uploads/2023/10/clear-paint-protection.webp",
          },
          {
            name: "Wrapping",
            description:
              "Applying a vinyl film to your car's exterior to change its color or add a unique design.",
            image:
              "https://wheelforcestudio.com/wp-content/uploads/2022/11/Car-Wrapping.jpg",
          },
          {
            name: "Sun films",
            description:
              "Tinted films applied to your car's windows to reduce heat, glare, and UV rays.",
            image:
              "https://www.motorbeam.com/wp-content/uploads/Car-Sun-Film-1200x900.jpeg",
          },
          {
            name: "Head Light Restoration",
            description:
              "Restoring the clarity and brightness of your car's headlights to improve visibility.",
            image:
              "https://windshield-expert.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/08/28122447/Do-Car-Headlight-Restoration-Kits-Really-Work.png",
          },
          {
            name: "Alloy Wheels cleaning",
            description:
              "Cleaning and polishing your car's alloy wheels to maintain their appearance.",
            image:
              "https://thecarlaundry.com/wp-content/uploads/2019/10/alloy-wheel-cleaning.jpg",
          },
          {
            name: "Yearly Package For Wash",
            description:
              "A package offering regular car washes throughout the year for convenience and savings.",
            image:
              "https://carfixo.in/wp-content/uploads/2022/05/car-wash-2.jpg",
          },
          {
            name: "Annual Maintenance Package",
            description:
              "A comprehensive package including various maintenance services for your car on an annual basis.",
            image:
              "https://goma.co.in/uploads/systems/a16fcca3d8660ac1f66bc3e2c4759849.jpg",
          },
          {
            name: "Denting",
            description:
              "Repairing dents and dings in your car's bodywork to restore its original shape.",
            image:
              "https://thedetailinggang.com/blog_admin/upload/How-To-Get-Rid-Of-Car-Dents-Body-170520211252-1024x640.jpg",
          },
          {
            name: "Painting",
            description:
              "Repainting your car to restore its original color or change its appearance.",
            image:
              "https://carboy.com.bd/static/images/denting_painting/car%20denting%20painting.jpg",
          },
          {
            name: "Car Accessories",
            description:
              "A variety of accessories to enhance your car's functionality, comfort, or appearance.",
            image:
              "https://cdn.shopify.com/s/files/1/1888/4399/files/default-header.jpg?8183",
          },
        ].map((e) => {
          return (
            <div key={e.name} className="border rounded-xl overflow-hidden">
              <img src={e.image} className="h-56 object-cover w-full" />
              <div className="p-8">
                <p className="font-medium">{e.name}</p>
                <p className="text-sm mt-1 opacity-50">{e.description}</p>
                <KnowMore id={e.name.replaceAll(" ", "-").toLowerCase()} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
