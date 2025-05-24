import { getImagePath, MOBILE_NUMBER } from "@/utils/common";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mantine/core";
import Image from "next/image";
import React from "react";

const POINTS: Array<{
  iconUrl: string;
  title: string;
}> = [
  {
    iconUrl: "/task.png",
    title: "Explore tailored solutions for your space.",
  },
  {
    iconUrl: "/discuss.png",
    title: "Get expert advice on materials, styles, and functionality.",
  },
  {
    iconUrl: "/profit.png",
    title: "Understand timelines, budgets, and the next steps.",
  },
];

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center p-12 bg-black bg-opacity-30">
      <h1 className="text-5xl font-semibold text-center">
        Book a Free Consultation
      </h1>
      <div className="my-12 flex flex-col sm:flex-row gap-12">
        {POINTS.map(({ iconUrl, title }) => (
          <div key={title} className="text-center sm:w-1/3">
            <div className="bg-primary rounded-lg p-2 w-fit m-auto mb-4">
              <Image
                src={getImagePath(iconUrl)}
                alt={title}
                width={36}
                height={36}
                className="flex-shrink-0"
              />
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
        <Button className="!bg-green-600 !h-12">
          <FontAwesomeIcon icon={faWhatsapp} width={24} height={24} />
          <span className="ml-1 tracking-wide">CONTACT US</span>
        </Button>
        <div>
          <p className="font-semibold text-center">Or Call Us Now</p>
          <p className="font-bold text-xl">{MOBILE_NUMBER}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
