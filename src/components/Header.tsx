import { getImagePath, MOBILE_NUMBER, WHATSAPP_LINK } from "@/utils/common";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mantine/core";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header className="p-6 flex justify-between">
      <Image
        src={getImagePath("/logo-trans.png")}
        alt="logo"
        width={100}
        height={100}
      />
      <div className="items-center gap-6 hidden md:flex">
        <div className="font-semibold flex items-center gap-2">
          <FontAwesomeIcon icon={faPhone} width={18} />
          <p className="">Call Us: +91 {MOBILE_NUMBER}</p>
        </div>
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
          CONTACT US
        </Button>
      </div>
    </header>
  );
}

export default Header;
