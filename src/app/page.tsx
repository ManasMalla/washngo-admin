import Illustration from "../components/Illustration";
import Title from "../components/Title";
import Services from "../components/Services";

export default function Home() {
  return (
    <div className="p-4 md:p-[unset]">
      <Title />
      <Illustration />
      <div className="flex space-x-2 mt-10 ml-7"></div>
      <Services />
      <section id="services" className="relative mt-16">
        <div
          className="w-full absolute top-0 -z-10"
          style={{
            maskImage:
              "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
          }}
        >
          <img
            className="w-full h-[520px] object-cover object-center"
            src="https://raw.githubusercontent.com/TheAnanta/image-repository/main/pixelcut-export%20(1).jpeg"
          />
        </div>
        <div className="p-4 md:p-16">
          <div className="h-[360px]"></div>
          <p className="text-4xl">Our Services</p>
          <p className="md:w-[54ch] opacity-80 mt-4">
            We aim to provide the best service in fastest possible turnaround
            time, while keeping the costs affordable and economical.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
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
                  className={`aspect-[1.4] bg-cover bg-right flex flex-col rounded-xl`}
                >
                  <p className="mt-auto text-white uppercase font-black text-xl pr-[25%] bg-gradient-to-t from-black to-transparent from-40% p-4 pt-12">
                    {service[0]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section
        id="navigate"
        className="md:p-16 md:pt-8 pt-4 bg-red-200 rounded-2xl text-red-800"
      >
        <p className="text-xl">OUR CENTRES</p>
        <p className="text-4xl font-semibold">We're everywhere</p>
        <p className="md:w-[48ch] mt-4">
          We aim to provide the best Service in Fastest possible turnaround
          time, while keeping the costs affordable and economical.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-12">
          {[
            {
              name: "Hyderabad",
              image:
                "https://raw.githubusercontent.com/TheAnanta/image-repository/main/WhatsApp%20Image%202024-09-01%20at%2020.39.37.jpeg",
            },
            {
              name: "KSR Layout",
              image:
                "https://raw.githubusercontent.com/TheAnanta/image-repository/main/WhatsApp%20Image%202024-09-01%20at%2020.39.37.jpeg",
            },
          ].map((center) => {
            return (
              <div
                key={center.name}
                className={`bg-cover overflow-clip text-white bg-right flex flex-col rounded-xl bg-red-800`}
              >
                <img
                  src={center.image}
                  className="aspect-[1.4] w-full object-cover"
                />
                <div className="p-4">
                  <p className="text-xl font-bold uppercase">{center.name}</p>
                  <p className="text-sm opacity-70">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia impedit dolores libero quis, iste et delectus minus ut
                    minima provident ex est doloremque, tenetur reprehenderit
                    accusamus vitae illum aut veniam!
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
