import { getImagePath } from "@/utils/common";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="pb-6">
      <Image
        src={getImagePath("/logo.jpg")}
        alt="logo"
        width={100}
        height={100}
        className="m-auto"
      />
      <p className="text-center">© 2025 Colour Sea. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
