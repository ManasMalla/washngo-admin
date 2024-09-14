"use client";
import { useState } from "react";

export default function AddressSection() {
  const [selectedCenter, setSelectedCenter] = useState("Uppals");
  return (
    <section className="my-10" id="navigate">
      <div className="flex md:px-6 flex-col lg:flex-row  gap-6">
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
  );
}
