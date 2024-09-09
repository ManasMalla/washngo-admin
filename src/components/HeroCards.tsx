"use client";
import Image from "next/image";
import Link from "next/link";
import OurServicesCard from "./OurServicesCard";
import AboutUsCard from "./AboutUsCard";
import OurProductsCard from "./OurProductsCard";

export default function HeroCards() {
  return (
    <div className="flex flex-col text-black lg:flex-row justify-between items-start lg:space-x-8 space-y-8 lg:space-y-0 md:px-16 pb-10 pt-2">
      <OurServicesCard />
      <OurProductsCard />
      <AboutUsCard />
    </div>
  );
}
