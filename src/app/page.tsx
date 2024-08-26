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
        <p className="text-4xl">Navigate</p>
        <p className="md:w-[64ch] mt-4">
          We aim to provide the best Service in Fastest possible turnaround
          time, while keeping the costs affordable and economical.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4 mt-8 items-center">
          {[
            { name: "Beeramguda", placeId: "ChIJI5TKaXbzTDoRve9EGs1dw4Y" },
            { name: "Nellore", placeId: "ChIJI5TKaXbzTDoRve9EGs1dw4Y" },
            { name: "Uppals", placeId: "ChIJDYl2OiWZyzsRHozGYJB-qUk" },
            { name: "KSR Layout", placeId: "ChIJI5TKaXbzTDoRve9EGs1dw4Y" },
            { name: "Miyapur", placeId: "ChIJccrMmluTyzsRbn4j0_5_KqE" },
          ].map((e) => {
            return (
              <div
                key={e.name}
                className="aspect-[1.3] bg-neutral-200 rounded-2xl overflow-hidden relative"
              >
                <iframe
                  className="w-full h-full border-0"
                  loading="lazy"
                  src={
                    "https://www.google.com/maps/embed/v1/place?key=AIzaSyC96DnzMFaNZj5RfXeYkBH1vyZC7qSINMI&q=place_id:" +
                    e.placeId
                  }
                ></iframe>
                {/* <p className="px-4 py-1 bg-white w-max rounded-full absolute z-10 top-4 left-4 cursor-pointer">
                  {e.name}
                </p> */}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
