import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="bg-zinc-800">
      <Header />
      <main className="flex flex-col">
        <Landing />
        <div className="flex flex-col">
          <div className="p-6 md:p-12">
            <WhyChooseUs />
          </div>
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
