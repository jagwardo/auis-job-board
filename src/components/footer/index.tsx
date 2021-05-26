import React from "react";
import Image from "next/image";
import Copyright from "./copyright";
import FooterNavigation from "./footer-navigation";

export const Footer = ({is_loginScreen = false}) => {
  const FooterWrapper = ({component}) => {
    if(!is_loginScreen){
      return component
    } else{
      return null;
    }
  }
  return (
    <div className="text-center pt-10 px-5 bg-gray-800 divide-solid divide-y-2 divide-gray-700">
      <FooterWrapper component={FooterNavigation} />
      <Copyright />
    </div>
  );
};
