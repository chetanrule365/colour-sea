import { Button } from "@mantine/core";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <header>
        <Image src="/logo.jpg" alt="logo" width={100} height={100} />
      </header>
      <main className="max-w-screen-2xl m-auto">
        <div className="flex flex-col md:flex-row">
          <Image
            src="/landing-img.jpg"
            alt="landing"
            width={800}
            height={400}
            className="md:w-1/2"
            objectFit="cover"
            objectPosition="center"
          />
          <div className="p-6 md:w-1/2">
            <h1 className="text-3xl lg:text-5xl tracking-wide">
              Colour Sea – Where Your Space Meets Art & Elegance!
            </h1>
            <p className="text-lg lg:text-xl my-6 tracking-wide">
              Transform your space with Colour Sea — where colors flow,
              creativity thrives, and every space tells a story.
            </p>
            <Button>Get Quote</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
