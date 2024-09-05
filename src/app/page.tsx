import Illustration from "../components/Illustration";
import Title from "../components/Title";
import Services from "../components/Services";

export default function Home() {
  return (
    <div className="p-4 md:p-[unset] space-y-4">
      <Title />
      <Illustration />
      <div className="flex space-x-2 mt-10 ml-7"></div>
      <Services />
      <section id="navigate" className="md:p-16 pt-4">
        <p className="text-4xl">Our Services</p>
        <p className="md:w-[64ch] mt-4">
          We aim to provide the best Service in Fastest possible turnaround
          time, while keeping the costs affordable and economical.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-12">
          {[
            [
              "Ceramic Coating",
              "https://www.carzspa.com/wp-content/uploads/2023/11/car-being-ceramic-coated.webp",
            ],
            [
              "Paint Protection Film (PPF)",
              "https://www.carzspa.com/wp-content/uploads/2023/10/clear-paint-protection.webp",
            ],
            [
              "Sun Film",
              "https://www.motorbeam.com/wp-content/uploads/Car-Sun-Film-1200x900.jpeg",
            ],
            [
              "SRS Treatment",
              "https://fasttrackscarcare.in/wp-content/uploads/2022/10/istockphoto-1304619401-170667a.jpg",
            ],
            [
              "Glass Restoration Treatment for Anti-Glare",
              "https://motogleam.co.in/wp-content/uploads/2023/12/Windshield-AntiGlare-treatment.jpg",
            ],
            [
              "Complete Interior Detailing with Steam",
              "https://s23226.pcdn.co/wp-content/uploads/2020/04/ChrisRiley-SteamCleaning.jpg",
            ],
            [
              "Car Foam Wash",
              "https://snowfoam.com.au/cdn/shop/collections/i-use-a-pressure-washer-231687.jpg?v=1669048157",
            ],
            [
              "Sanitisation of Complete Car Interiors",
              "https://d2hucwwplm5rxi.cloudfront.net/wp-content/uploads/2023/08/04104605/car-interior-sanitising-body-a-040820230340-1024x640.jpg",
            ],
          ].map((service) => {
            return (
              <div
                key={service[0]}
                style={{ backgroundImage: `url(${service[1]})` }}
                className={`aspect-[1.4] bg-cover bg-right p-4 flex flex-col rounded-xl`}
              >
                <p className="p-2 px-4 mt-auto bg-white w-max rounded-full text-sm">
                  {service[0]}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
