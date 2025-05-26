import {
  DESCRIPTION,
  getImagePath,
  NAME,
  TAGLINE,
  WHATSAPP_LINK,
} from "@/utils/common";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mantine/core";
import Image from "next/image";
import React from "react";

function Landing() {
  return (
    <div className="relative h-[calc(100vh_/_1.5)] text-white">
      <Image
        src={getImagePath("/landing-img.jpg")}
        alt="landing"
        width={1440}
        height={720}
        className="w-full h-full object-cover"
        objectFit="cover"
        objectPosition="center"
      />
      <div className="absolute top-0 left-0 bg-black bg-opacity-85 w-full h-full text-center">
        <div className="flex flex-col justify-center h-full w-full max-w-3xl m-auto p-6">
          <h1 className="text-4xl lg:text-5xl font-semibold tracking-wide">
            <span className="text-primary">{NAME} - </span>
            <span>{TAGLINE}</span>
          </h1>
          <p className="text-lg lg:text-xl my-8 tracking-wide text-gray-300">
            {DESCRIPTION}
          </p>
          <div>
            <Button
              className="!bg-green-600 !h-12 tracking-wide"
              component="a"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              leftSection={
                <FontAwesomeIcon icon={faWhatsapp} width={24} height={24} />
              }
            >
              HIRE US NOW
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
