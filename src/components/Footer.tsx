import { getImagePath } from "@/utils/common";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="p-12 text-white">
      <Image
        src={getImagePath("/logo-trans.png")}
        alt="logo"
        width={100}
        height={100}
        className="m-auto"
      />
      <p className="text-center mt-12">
        © 2025 Colour Sea. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
