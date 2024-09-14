export default function Page({ params }: { params: { id: string } }) {
  const items = [
    {
      name: "Car Foam Wash",
      description:
        "A thorough foam wash provides your car with an efficient, deep cleaning process that eliminates dirt and grime from its surface.\n\n" +
        "The foam not only loosens and lifts contaminants but also helps protect the paintwork by reducing the friction usually caused by traditional washing methods.\n\n" +
        "Our specialized foam wash is gentle on your vehicle's exterior while ensuring it maintains its shine and overall appearance.",
      benefits: [
        "Reduces friction and paint damage during cleaning",
        "Provides a deep, thorough clean",
        "Easily removes stubborn dirt and grime",
        "Enhances the car's overall appearance and shine",
        "Safe for all types of paint finishes",
        "Prevents water spots and streaking",
        "Helps protect the paintwork from scratches",
        "Removes contaminants from hard-to-reach areas",
        "Suitable for regular maintenance",
        "Quick and efficient cleaning process",
      ],
      image:
        "https://snowfoam.com.au/cdn/shop/collections/i-use-a-pressure-washer-231687.jpg?v=1669048157",
    },
    {
      name: "Interior Deep Cleaning",
      description:
        "Interior deep cleaning focuses on removing embedded dirt, stains, and odors from your car's upholstery, carpets, and dashboard.\n\n" +
        "Using specialized cleaning agents and techniques, we target every nook and cranny to ensure your vehicle’s interior feels fresh and looks pristine.\n\n" +
        "This service not only cleans but also helps to preserve the condition of your car's interior materials, extending their lifespan.",
      benefits: [
        "Removes deep-seated dirt and stains",
        "Eliminates unpleasant odors",
        "Preserves the condition of interior materials",
        "Restores the original look of the seats and carpets",
        "Prevents wear and tear on upholstery",
        "Improves air quality inside the car",
        "Targets hard-to-reach areas for complete cleanliness",
        "Helps protect from future spills and stains",
        "Reduces allergens inside the vehicle",
        "Enhances the overall comfort of the car",
      ],
      image:
        "https://d2hucwwplm5rxi.cloudfront.net/wp-content/uploads/2023/08/04104605/car-interior-sanitising-body-a-040820230340-1024x640.jpg",
    },
    {
      name: "Teflon Polishing",
      description:
        "Teflon polishing involves applying a high-quality protective layer to your car’s paint, ensuring long-lasting shine and defense against everyday damage.\n\n" +
        "This service enhances the vehicle's paintwork, creating a smooth surface that repels water, dust, and minor scratches.\n\n" +
        "It's an excellent solution for maintaining the aesthetic appeal of your car while also protecting it from external elements.",
      benefits: [
        "Provides a durable protective layer",
        "Repels water and dust effectively",
        "Prevents minor scratches and swirl marks",
        "Enhances the vehicle's shine and gloss",
        "Long-lasting protection against environmental damage",
        "Keeps paint looking newer for longer",
        "Easier to clean after application",
        "Prevents oxidation and fading of paint",
        "Reduces the risk of watermarks and streaks",
        "Improves overall car resale value",
      ],
      image:
        "https://d2m3nfprmhqjvd.cloudfront.net/blog/20220228144809/ezgif.com-gif-maker-2022-02-15T164047.299.jpg",
    },
    {
      name: "Wash and Wax",
      description:
        "Our wash and wax service combines a thorough exterior cleaning with a protective wax application, ensuring your car is not only clean but also shielded from external elements.\n\n" +
        "The waxing process adds a protective layer that enhances shine and helps repel dirt, water, and harmful UV rays.\n\n" +
        "This service is ideal for maintaining your car’s appearance and protecting its paintwork between more intensive treatments.",
      benefits: [
        "Provides both cleaning and protection in one step",
        "Enhances the car's shine and gloss",
        "Creates a protective barrier against environmental damage",
        "Repels water and dirt effectively",
        "Helps protect against UV rays and oxidation",
        "Reduces the appearance of scratches and swirls",
        "Makes future cleaning easier and quicker",
        "Improves the longevity of the paintwork",
        "Keeps the car looking fresh for longer",
        "Affordable maintenance between full detailing services",
      ],
      image: "https://i.ytimg.com/vi/PhdnFNHqd3c/maxresdefault.jpg",
    },
    {
      name: "Ceramic Coating",
      description:
        "Ceramic coating offers unparalleled protection for your car's paintwork, creating a semi-permanent bond that shields against scratches, UV damage, and chemical contaminants.\n\n" +
        "The coating forms a hydrophobic layer, which makes it difficult for dirt and water to cling to the surface, keeping your car cleaner for longer.\n\n" +
        "This treatment also adds a deep, glossy finish to your vehicle, making it look freshly polished for months on end.",
      benefits: [
        "Offers long-lasting paint protection",
        "Repels water, dirt, and contaminants effectively",
        "Protects against UV damage and oxidation",
        "Resists minor scratches and abrasions",
        "Provides a high-gloss, polished finish",
        "Helps maintain a cleaner appearance between washes",
        "Prevents fading and discoloration from the sun",
        "Makes cleaning easier and faster",
        "Enhances overall paint durability",
        "Increases the resale value of your vehicle",
      ],
      image:
        "https://www.carzspa.com/wp-content/uploads/2023/11/car-being-ceramic-coated.webp",
    },
    {
      name: "Graphene Coating",
      description:
        "Graphene coating represents the latest in car protection technology, providing superior durability and advanced hydrophobic properties for your vehicle’s exterior.\n\n" +
        "The graphene layer is extremely thin but incredibly strong, offering more resilience against scratches and chemical damage than traditional coatings.\n\n" +
        "Its unique structure ensures better heat dissipation, reducing the likelihood of water spots and enhancing the car's overall appearance.",
      benefits: [
        "Superior durability compared to other coatings",
        "Enhanced scratch and chemical resistance",
        "Extreme hydrophobic properties for water repellency",
        "Reduces heat retention and prevents water spots",
        "Long-lasting, requiring less maintenance",
        "Provides a smooth, sleek finish",
        "Repels dirt, making cleaning easier",
        "Increases the longevity of the paintwork",
        "Protects against UV rays and fading",
        "Boosts overall vehicle appearance and shine",
      ],
      image:
        "https://www.carzspa.com/wp-content/uploads/2024/02/graphene-ceramic-coating-placed.webp",
    },
    {
      name: "Ceramic Maintenance",
      description:
        "Ceramic maintenance ensures that the ceramic coating on your vehicle remains in top condition, maximizing its protective and hydrophobic qualities.\n\n" +
        "Regular upkeep helps prevent the coating from wearing down prematurely and restores its glossy finish.\n\n" +
        "This service also enhances the long-term benefits of ceramic protection by keeping the surface smooth and clean.",
      benefits: [
        "Prolongs the lifespan of ceramic coatings",
        "Restores hydrophobic properties",
        "Maintains a high-gloss finish",
        "Prevents wear and tear on the coating",
        "Keeps the car looking freshly polished",
        "Protects against contaminants like dirt and grime",
        "Reduces the need for more frequent washes",
        "Ensures long-term paint protection",
        "Boosts the coating's scratch resistance",
        "Increases overall durability of the protection layer",
      ],
      image:
        "https://bobmosescc.com/wp-content/uploads/shutterstock_768010027-950x450.jpg",
    },
    {
      name: "Graphene Maintenance",
      description:
        "Graphene maintenance is crucial for keeping your car's graphene coating in optimal condition, ensuring that it continues to provide the best possible protection.\n\n" +
        "This service restores the coating’s hydrophobic and self-cleaning properties, enhancing the car's appearance and protection.\n\n" +
        "Routine care ensures your graphene coating stays intact, extending its longevity and performance.",
      benefits: [
        "Extends the life of the graphene coating",
        "Restores hydrophobic and self-cleaning properties",
        "Prevents premature wear of the coating",
        "Keeps the car's surface smoother and shinier",
        "Improves resistance to scratches and contaminants",
        "Reduces the need for frequent washing",
        "Maintains long-term paint protection",
        "Enhances overall durability of the coating",
        "Protects against UV rays and environmental damage",
        "Boosts the vehicle's aesthetic appeal",
      ],
      image:
        "https://cftproducts.com/wp-content/uploads/2022/02/graphene-coating.jpg",
    },
    {
      name: "PPF",
      description:
        "Paint Protection Film (PPF) is a clear, durable film applied to your vehicle’s exterior to protect against scratches, chips, and other damage caused by daily driving.\n\n" +
        "PPF is virtually invisible and comes with self-healing properties that can remove minor scratches automatically when exposed to heat.\n\n" +
        "This is an ideal solution for keeping your car’s paintwork in pristine condition without altering its original look.",
      benefits: [
        "Provides invisible protection against scratches",
        "Self-healing properties for minor damage",
        "Protects against chips from rocks and debris",
        "Prevents fading from UV rays",
        "Resists stains from bird droppings and tree sap",
        "Keeps the car looking new without altering appearance",
        "Easily removable without damaging the paint",
        "Increases the longevity of the paintwork",
        "Reduces the risk of costly repainting",
        "Enhances the resale value of your vehicle",
      ],
      image:
        "https://www.carzspa.com/wp-content/uploads/2023/10/clear-paint-protection.webp",
    },
    {
      name: "Wrapping",
      description:
        "Car wrapping allows you to change the appearance of your vehicle by applying a vinyl wrap over its exterior.\n\n" +
        "This process gives your car a fresh, unique look while also protecting the original paint from scratches and sun damage.\n\n" +
        "It’s a versatile option that offers endless design possibilities, from color changes to custom graphics.",
      benefits: [
        "Protects original paint from damage",
        "Allows for a complete color change without painting",
        "Easily reversible to restore the original look",
        "Customizable with unique designs and finishes",
        "Protects against UV rays and fading",
        "Adds a layer of protection against minor scratches",
        "Cost-effective alternative to a full repaint",
        "Easy to clean and maintain",
        "Enhances the vehicle's resale value",
        "Offers a wide variety of textures and colors",
      ],
      image:
        "https://wheelforcestudio.com/wp-content/uploads/2022/11/Car-Wrapping.jpg",
    },
    {
      name: "Sun Films",
      description:
        "Sun films, or window tinting, help reduce the turns up heat and UV rays that enter your car’s interior, making your driving experience more comfortable.\n\n" +
        "By blocking out harmful sunrays, these films protect your car’s interior from fading and damage while also enhancing privacy.\n\n" +
        "In addition, they help improve energy efficiency by reducing the need for air conditioning.",
      benefits: [
        "Reduces heat inside the car, improving comfort",
        "Blocks harmful UV rays, protecting occupants and interior",
        "Prevents fading and cracking of upholstery",
        "Improves privacy by darkening windows",
        "Enhances energy efficiency by reducing AC usage",
        "Reduces glare from the sun and headlights",
        "Increases shatter resistance of windows",
        "Gives a sleek, stylish appearance to the vehicle",
        "Comes in a variety of shades and options",
        "Protects from prying eyes for added security",
      ],
      image:
        "https://www.motorbeam.com/wp-content/uploads/Car-Sun-Film-1200x900.jpeg",
    },
    {
      name: "Head Light Restoration",
      description:
        "Headlight restoration is essential for maintaining optimal visibility, especially during night-time driving or bad weather conditions.\n\n" +
        "By cleaning and polishing foggy, yellowed headlights, this service restores their brightness and clarity.\n\n" +
        "This not only enhances safety but also improves the overall look of your car.",
      benefits: [
        "Restores headlight clarity for better visibility",
        "Improves safety during night driving",
        "Removes yellowing and fogginess from the headlights",
        "Enhances the aesthetic appeal of the car",
        "Increases the lifespan of the headlights",
        "Boosts overall road safety by improving light output",
        "Reduces the need for expensive headlight replacements",
        "Improves resale value by refreshing the car's look",
        "Prevents further damage from UV rays",
        "Restores factory-level brightness and performance",
      ],
      image:
        "https://windshield-expert.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/08/28122447/Do-Car-Headlight-Restoration-Kits-Really-Work.png",
    },
    {
      name: "Alloy Wheels Cleaning",
      description:
        "Alloy wheel cleaning focuses on restoring the shine and cleanliness of your car’s wheels, which are often subjected to dirt, grime, and brake dust.\n\n" +
        "This service ensures that your wheels are not only clean but also free from corrosive elements that could degrade them over time.\n\n" +
        "Regular cleaning helps maintain the overarching aesthetics and integrity of your car.",
      benefits: [
        "Restores the shine of your alloy wheels",
        "Removes dirt, grime, and brake dust effectively",
        "Prevents corrosion and rust on the wheels",
        "Enhances the overall appearance of the vehicle",
        "Helps preserve the longevity of your wheels",
        "Prevents buildup of harmful contaminants",
        "Reduces the risk of damage to the wheel finish",
        "Improves safety by maintaining wheel integrity",
        "Makes future cleanings easier",
        "Boosts the resale value of the car",
      ],
      image:
        "https://thecarlaundry.com/wp-content/uploads/2019/10/alloy-wheel-cleaning.jpg",
    },
    {
      name: "Yearly Package for Wash",
      description:
        "Our yearly wash package is designed for customers who prefer consistent care for their vehicle's exterior throughout the year.\n\n" +
        "This package offers regular washes, ensuring that your car always looks its best and stays protected from dirt, grime, and other environmental elements.\n\n" +
        "It’s a cost-effective solution for maintaining a clean, polished appearance year-round.",
      benefits: [
        "Provides consistent exterior care throughout the year",
        "Keeps your car looking clean and polished",
        "Prevents buildup of dirt and contaminants",
        "Offers convenience with scheduled cleanings",
        "Cost-effective compared to individual washes",
        "Protects the paintwork from long-term damage",
        "Ensures your vehicle is always presentable",
        "Saves time by eliminating the need for frequent bookings",
        "Helps maintain the vehicle's resale value",
        "Increases the longevity of exterior finishes",
      ],
    },
    {
      name: "Annual Maintenance Package",
      description:
        "The annual maintenance package is an all-inclusive solution that ensures your car receives the necessary services to stay in top shape year-round.\n\n" +
        "This comprehensive package covers everything from exterior washes and interior cleaning to essential maintenance tasks, ensuring your car runs smoothly and looks great.\n\n" +
        "It’s designed for owners who value both convenience and thorough care for their vehicles.",
      benefits: [
        "Comprehensive care for the entire vehicle",
        "Ensures regular maintenance to prevent major issues",
        "Saves money compared to individual service bookings",
        "Provides convenience with scheduled services",
        "Preserves both the interior and exterior condition",
        "Includes essential services like cleaning and detailing",
        "Keeps the car in peak performance year-round",
        "Offers peace of mind with complete vehicle care",
        "Helps maintain the car's resale value",
        "Ideal for long-term car ownership and care",
      ],
    },
    {
      name: "Denting",
      description:
        "Denting service restores the smooth surface of your car by repairing any dents or dings caused by accidents or minor collisions.\n\n" +
        "Using specialized tools, our technicians carefully reshape your car’s body, ensuring that it looks as good as new.\n\n" +
        "This process helps maintain the structural integrity of your vehicle and prevents further damage.",
      benefits: [
        "Restores the car's original shape and appearance",
        "Prevents further damage to the bodywork",
        "Improves the overall aesthetics of the vehicle",
        "Increases the resale value by eliminating visible damage",
        "Protects against rust and corrosion",
        "Provides a cost-effective alternative to panel replacement",
        "Helps maintain the structural integrity of the vehicle",
        "Removes unsightly dings and dents",
        "Enhances the vehicle's overall presentation",
        "Saves time compared to more extensive repairs",
      ],
      image:
        "https://thedetailinggang.com/blog_admin/upload/How-To-Get-Rid-Of-Car-Dents-Body-170520211252-1024x640.jpg",
    },
    {
      name: "Painting",
      description:
        "Whether you're looking to refresh your car's original color or completely change its appearance, our painting service delivers high-quality, long-lasting results.\n\n" +
        "Using advanced techniques and premium paint, we ensure a flawless finish that enhances your car's look while protecting it from the elements.\n\n" +
        "This service is perfect for addressing scratches, fading, or simply giving your vehicle a new look.",
      benefits: [
        "Restores the car's original color and finish",
        "Provides a flawless, professional-quality paint job",
        "Protects the car's body from rust and corrosion",
        "Enhances the car's aesthetic appeal",
        "Allows for complete color changes or touch-ups",
        "Improves resale value with a refreshed look",
        "Covers scratches, chips, and faded paint",
        "Adds a durable layer of protection against environmental elements",
        "Offers customizations for a unique appearance",
        "Provides long-lasting results with high-quality paint",
      ],
      image:
        "https://carboy.com.bd/static/images/denting_painting/car%20denting%20painting.jpg",
    },
    {
      name: "Car Accessories",
      description:
        "Enhance your vehicle’s functionality and style with our wide range of car accessories. From seat covers and floor mats to high-tech gadgets, we offer everything you need to customize your car.\n\n" +
        "Our accessories are designed to improve comfort, convenience, and safety while also adding a personal touch to your vehicle’s interior and exterior.",
      benefits: [
        "Improves comfort and convenience",
        "Personalizes your vehicle",
        "Enhances functionality",
      ],
      image:
        "https://cdn.shopify.com/s/files/1/1888/4399/files/default-header.jpg?8183",
    },
  ];
  const item = items.find(
    (item) => item.name.toLowerCase() === params.id.replaceAll("-", " ")
  );
  return (
    <div>
      <div
        className="w-full "
        style={{
          maskImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))",
        }}
      >
        <img className="h-96 w-full object-cover" src={item.image} />
      </div>
      <h2 className="uppercase font-bold text-4xl px-4 md:px-12">
        {params.id.replaceAll("-", " ")}
      </h2>
      <p className="max-w-[80ch] px-4 md:px-12 my-6 whitespace-pre-line opacity-70">
        {item.description}
      </p>
      <div className="md:px-6 mb-6">
        <h3 className="px-6 text-xl uppercase font-bold mb-4">Benefits</h3>
        <ul className="list-disc px-12 grid md:grid-cols-2">
          {item.benefits.map((benefit) => (
            <li className="py-3">{benefit}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
