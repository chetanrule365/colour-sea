import { MOBILE_NUMBER } from "@/utils/common";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mantine/core";
import React from "react";

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-black bg-opacity-30">
      <h3 className="text-lg font-semibold text-center">
        Why wait? Get in touch with us today and let’s create something
        beautiful together!
      </h3>
      <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 mt-5">
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
