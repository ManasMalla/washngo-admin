export default function Packages({
  params,
}: {
  params: { packageId: string };
}) {
  const packages = {
    targaryen: {
      name: "The Targaryen",
      subtitle: "Fire & Blood",
      image:
        "https://github.com/TheAnanta/image-repository/blob/main/targaryen.jpg",
      services: [
        "Engine Wash",
        "Underbody Wash",
        "Full Body Foam Wash",
        "Wheels / Alloys Cleaning",
        "Tyre Polishing",
        "Internal / External Window & Mirror Cleaning",
        "Interior Vacuum",
        "Dash Board Wipe",
      ],
      addons: [
        "Dash Board Cleaning & Polishing",
        "Doors cleaning & Polishing",
        "Car perfume spray",
      ],
    },
    lannister: {
      name: "The Lannister",
      subtitle: "Hear Me Roar!",
      services: [
        "Interior vacuuming",
        "Deep cleaning the interior dash, center console & door panels",
        "Interior dressing (Glossy finish/Satin finish)",
        "Roof cleaning",
        "Upholstery & carpet cleaning",
        "Steam cleaning & feeding of leather seats",
        "Leather waxing",
        "Steam cleaning & sanitization of car",
        "A/C vents cleaning",
        "Seat belt cleaning",
        "Boot cleaning",
        "Glass cleaning from inside",
      ],
      addons: [],
      image:
        "https://7kingdoms.ru/wp-content/uploads/2009/07/wallpaper_lannister_1920.jpg",
    },
    stark: {
      name: "The Stark",
      subtitle: "Winter is Coming",
      services: [
        ...[
          "Engine Wash",
          "Underbody Wash",
          "Full Body Foam Wash",
          "Wheels / Alloys Cleaning",
          "Tyre Polishing",
          "Internal / External Window & Mirror Cleaning",
          "Interior Vacuum",
          "Dash Board Wipe",
        ],
        ...[
          "Interior vacuuming",
          "Deep cleaning the interior dash, center console & door panels",
          "Interior dressing (Glossy finish/Satin finish)",
          "Roof cleaning",
          "Upholstery & carpet cleaning",
          "Steam cleaning & feeding of leather seats",
          "Leather waxing",
          "Steam cleaning & sanitization of car",
          "A/C vents cleaning",
          "Seat belt cleaning",
          "Boot cleaning",
          "Glass cleaning from inside",
        ],
      ],
      addons: [
        "Dash Board Cleaning & Polishing",
        "Doors cleaning & Polishing",
        "Car perfume spray",
      ],
      image: "https://7kingdoms.ru/wp-content/uploads/2009/07/starks-1.jpg",
    },
    vale: {
      name: "The Vale",
      subtitle: "As High as Honor",
      services: [
        ...[
          "Engine Wash",
          "Underbody Wash",
          "Full Body Foam Wash",
          "Wheels / Alloys Cleaning",
          "Tyre Polishing",
          "Internal / External Window & Mirror Cleaning",
          "Interior Vacuum",
          "Dash Board Wipe",
        ],
        "Decontamination using clay",
        "Masking",
        "Machine compounding",
        "Machine Polishing",
      ],
      addons: [
        "Dash Board Cleaning & Polishing",
        "Doors cleaning & Polishing",
        "Car perfume spray",
      ],
      image:
        "https://7kingdoms.ru/wp-content/uploads/2009/07/wallpaper_arryn_1920.jpg",
    },
    narcos: {
      name: "The Narcos",
      subtitle: "Strength in Shadows",
      services: [
        "All services from The Targaryen",
        "Decontamination using clay",
        "Masking",
        "Multiple stages of compounding",
        "Glazing and swirl marks removal using D.A. Polisher",
        "Alloy protection",
        "Application of paint sealant",
        "Removal of hard water marks & mineral deposits",
        "Application of metal polish to remove rust & contamination",
        "Premium external glass cleaning & protection",
      ],
      addons: [
        "Dash Board Cleaning & Polishing",
        "Doors cleaning & Polishing",
        "Car perfume spray",
      ],
      image:
        "https://c4.wallpaperflare.com/wallpaper/776/803/690/narcos-pablo-escobar-movies-wallpaper-preview.jpg",
    },
    professor: {
      name: "The Professor",
      subtitle: "Knowledge is Power",
      services: [
        ...[
          ...[
            "Engine Wash",
            "Underbody Wash",
            "Full Body Foam Wash",
            "Wheels / Alloys Cleaning",
            "Tyre Polishing",
            "Internal / External Window & Mirror Cleaning",
            "Interior Vacuum",
            "Dash Board Wipe",
          ],
          ...[
            "Interior vacuuming",
            "Deep cleaning the interior dash, center console & door panels",
            "Interior dressing (Glossy finish/Satin finish)",
            "Roof cleaning",
            "Upholstery & carpet cleaning",
            "Steam cleaning & feeding of leather seats",
            "Leather waxing",
            "Steam cleaning & sanitization of car",
            "A/C vents cleaning",
            "Seat belt cleaning",
            "Boot cleaning",
            "Glass cleaning from inside",
          ],
        ],
        "Decontamination using clay",
        "Masking",
        "Multiple stages of compounding",
        "Glazing and swirl marks removal using D.A. Polisher",
        "Alloy protection",
        "Application of paint sealant",
        "Removal of hard water marks & mineral deposits",
        "Application of metal polish to remove rust & contamination",
        "Premium external glass cleaning & protection",
        "A/C treatment",
        "Windshield coating (6 months Warranty)",
      ],
      addons: [
        "Dash Board Cleaning & Polishing",
        "Doors cleaning & Polishing",
        "Car perfume spray",
      ],
      image:
        "https://wallpapers.com/images/featured/professor-money-heist-1yegj3ptnd8g5noc.jpg",
    },
  };
  const packageDets = packages[params.packageId];
  return (
    <div>
      <div
        className="w-full absolute top-0 -z-10"
        style={{
          maskImage:
            "linear-gradient(180deg, #FFF 65.25%, rgba(255, 255, 255, 0.00) 100%)",
        }}
      >
        <img src={packageDets.image} className="w-full" />
      </div>
      <div className="mt-[200px] px-6">
        <p className="text-6xl font-bold">{packageDets.name}</p>
        <p className="text-5xl mt-4">{packageDets.subtitle}</p>
        <div
          style={{
            maskImage:
              "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.5) 100%)",
          }}
        >
          <p className="w-[52ch] mt-9">
            Our belief is that each and every vehicle needs to be treated with
            utmost care, to deliver the finest possible outcome for the vehicle
            and thus for our brand.
            <br />
            <br />
            It’s a competitive world out and creating a never lasting impression
            is vital for building long term business relationship.
            <br />
            <br />
            So our main focus revolves around bringing best care methods in
            Indian market.
          </p>
        </div>
        <p className="text-2xl my-8">Services included</p>
        <div className="flex">
          <ul className="grow grid grid-cols-2 opacity-60 list-disc">
            <li>Engine Wash</li>
            <li>Underbody Wash</li>
            <li>Full Body Foam Wash</li>
            <li>Wheels / Alloys Cleaning</li>
            <li>Tyre Polishing</li>
            <li>Internal / External Window & Mirror Cleaning</li>
            <li>Interior Vacuum</li>
            <li>Dashboard Wipe</li>
          </ul>
          <div
            className="py-4 px-14 pb-8"
            style={{
              borderRadius: "24px",
              background: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(15px)",
            }}
          >
            <p className="text-xl my-4">Add ons</p>
            <ul className="space-y-3 list-disc">
              <li>Dashboard Cleaning</li>
              <li>Dashboard Polishing</li>
              <li>Doors cleaning</li>
              <li>Doors Polishing</li>
              <li>Car perfume spray</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
