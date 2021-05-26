import React from "react";

import { Logo } from "@components";

export const Header = ({ children }) => {
  return (
    <div className="text-center bg-white shadow">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          <Logo />
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              {children.map((child) => (
                <a href={child.url} className="text-gray-800 px-3 py-2 rounded-md text-sm capitalize font-medium" aria-current="page">{child.name}</a>
              ))}
            </div>
          </div>
          <div className="sm:block sm:ml-6">
            <div className="flex space-x-4">
                <a href="/login" className="text-gray-800 px-3 py-2 rounded-md text-sm capitalize font-medium" aria-current="page">Login</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
