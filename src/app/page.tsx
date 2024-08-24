import Illustration from "../components/Illustration";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Services from "../components/Services";

export default function Home() {
  return (
    <div className="p-4 md:p-[unset] space-y-4">
      <Navbar />
      <Title />
      <Illustration />
      <div className="flex space-x-2 mt-10 ml-7"></div>
      <Services />
    </div>
  );
}
