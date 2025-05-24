import { getImagePath } from "@/utils/common";
import Image from "next/image";
import React from "react";

const POINTS: Array<{
  title: string;
  description: string;
  iconUrl: string;
}> = [
  {
    title: "Tailored to You",
    description:
      "Every design is a reflection of your personality, lifestyle, and vision.",
    iconUrl: "/measuring.png",
  },
  {
    title: "Timeless & Trend-forward",
    description: "Designs that stay relevant, elegant, and inspiring.",
    iconUrl: "/virtual-reality.png",
  },
  {
    title: "Passion for Aesthetics",
    description:
      "We believe in the power of color, texture, and space to transform lives.",
    iconUrl: "/color-palette.png",
  },
];

function WhyChooseUs() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-wide text-center mb-6">
        Why Choose Us
      </h1>
      <div className="flex flex-col md:flex-row">
        <Image
          src={getImagePath("/landing-img.jpg")}
          alt="landing"
          objectFit="cover"
          objectPosition="center"
          width={800}
          height={400}
          className="hidden md:w-1/2 md:block rounded-lg"
        />
        <div className="md:w-1/2 p-6 flex flex-col justify-center">
          {POINTS.map(({ title, description, iconUrl }) => (
            <div key={title} className="mb-5 flex gap-6">
              <div className="flex-shrink-0">
                <Image
                  src={getImagePath(iconUrl)}
                  alt={title}
                  width={50}
                  height={50}
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-yellow-500">
                  {title}
                </h3>
                <p className="mt-1 text-lg">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
