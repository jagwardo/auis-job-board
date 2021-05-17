import React from "react";

import { Logo } from "@components";

export const Header: React.FC = ({ children }) => {
  return (
    <div className="text-center bg-gray-800">
      <Logo />
      <ul>
        {children}
      </ul>
    </div>
  );
};
