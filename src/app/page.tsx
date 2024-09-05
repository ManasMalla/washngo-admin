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
      </section>
    </div>
  );
}
