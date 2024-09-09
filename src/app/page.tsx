"use client";
import Illustration from "../components/Illustration";
import Title from "../components/Title";
import AboutUs from "../components/AboutUs";
import HeroCards from "../components/HeroCards";
import Link from "next/link";
import { use, useState } from "react";
import { Dropdown, DropdownItem } from "flowbite-react";
import { redirect } from "next/navigation";

export default function Home() {
  const [selectedCenter, setSelectedCenter] = useState("Uppals");
  return (
    <div className="p-4 md:p-[unset]">
      <div className="h-20" />
      <Title />
      <Illustration />
      <div className="flex space-x-2 mt-10 ml-7"></div>
      <HeroCards />
      <AboutUs />
      <section>
        <div className="flex flex-col lg:flex-row">
          <img src="/images/our-services-car.svg" className="lg:w-1/2" />
          <div className="p-4 mx-auto my-auto">
            <p className="uppercase text-xl text-[#e94218]">Our services</p>
            <p className="text-3xl font-light">What do we do to your car?</p>
            <p className="opacity-60 mt-4 w-[40ch]">
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
      <section>
        <div className="flex flex-col lg:flex-row">
          <div className="p-4 mx-auto my-auto">
            <p className="uppercase text-xl text-[#e94218]">Our products</p>
            <p className="text-3xl font-light">What do use for your car?</p>
            <p className="opacity-60 mt-4 w-[40ch]">
              We provide the best services to our customers that are best in
              quality, trusted, and provide 100% satisfaction
            </p>
            <ul className="list-disc">
              {[
                "Tyre Polish",
                "Dashboard Polish",
                "Interior Cleaner",
                "Glass Cleaner",
                "Car Shampoo",
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
          <img src="/images/our-products-group.svg" className="lg:w-1/3" />
        </div>
      </section>
      <section className="my-10">
        <div className="flex px-6 flex-col lg:flex-row  gap-6">
          <img src="/images/our-centers.svg" className="lg:w-3/5" />
          <div className="grow space-y-4">
            {[
              [
                "Uppals",
                `Basement 1,\nDSL Mall Parking,\nIndustrial Development
          Area,\nUppal,\nHyderabad,\nTelangana 500039`,
              ],
              [
                "KSR Layout",
                `KSR Enclave,\nAparna Hillpark Road,\nNear N9 sports academy,
PJR layout,\nChandanagar,\nHyderabad`,
              ],
              [
                "Nellore",
                `Door no 15,\nB1 - MGB Felicity Mall,\n23,\nGrand Trunk Road,\nDargamitta,\nNellore,\nAndhra Pradesh 524003`,
              ],
              [
                "Miyapur",
                `Opp Aurigene Pharmaceutical Service, \nJ.P Nagar, \nMiyapur, \nMiyapur, \nHyderabad, \nTelangana 500049`,
              ],
              [
                "Beeramguda",
                `Near SPH Box cricket,\nSymphony park homes road,\nGreen meadows colony,\nBeeramguda`,
              ],
            ].map(([name, address]) => (
              <div
                onClick={() => setSelectedCenter(name)}
                className="w-full p-6 rounded-xl cursor-pointer"
                style={{
                  backgroundColor:
                    name === selectedCenter ? "#e94218" : "#4A4A4A",
                }}
              >
                <p>{name}</p>
                {name === selectedCenter && (
                  <p className="whitespace-pre-line text-sm">{address}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
