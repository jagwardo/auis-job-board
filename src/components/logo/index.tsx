import React from "react";
import Image from "next/image";

export const Logo: React.FC = () => {
  return (
    <a href="/">
      <Image
        data-test="icon"
        src="/icons/brand-logo-mobile.png"
        alt="logo"
        width="50"
        height="46"
      />
      {/* <Image
        data-test="icon"
        src="/icons/brand-logo-mobile.png"
        alt="logo"
        width="42"
        height="40"
        className="sm:invisible"
      /> */}
    </a>
  );
};
