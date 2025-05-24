import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-700 text-white">
      <header>
        <Image
          src="/logo.jpg"
          alt="logo"
          width={100}
          height={100}
          className="m-auto"
        />
      </header>
      <main className="flex flex-col gap-12">
        <Landing />
        <div className="max-w-screen-xl m-auto flex flex-col gap-12">
          <WhyChooseUs />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
