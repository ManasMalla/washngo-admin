import Illustration from "../components/Illustration";
import Title from "../components/Title";
import AboutUs from "../components/AboutUs";
import HeroCards from "../components/HeroCards";
import Link from "next/link";
import { use, useState } from "react";
import { Dropdown, DropdownItem } from "flowbite-react";
import { redirect } from "next/navigation";
import ProductsSection from "../components/ProductsSection";
import { ServicesSection } from "../components/ServicesSection";
import AddressSection from "../components/AddressSection";

export default function Home() {
  return (
    <div className="p-4 md:p-[unset]">
      <Title />
      <Illustration />
      <div className="flex space-x-2 mt-10 ml-7"></div>
      <HeroCards />
      <AboutUs />
      <ServicesSection />
      <ProductsSection />
      <AddressSection />
    </div>
  );
}
