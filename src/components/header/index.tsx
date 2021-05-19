import React from "react";

import { Logo } from "@components";

export const Header = ({ children }) => {
  return (
    <div className="text-center bg-primary">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          <div className="relative flex items-center justify-between">
            <Logo />
            <div className="hidden sm:block sm:ml-6 flex-grow">
              <div className="flex space-x-4">
                {children.map((child) => (
                  <a href={child.url} className="text-white px-3 py-2 rounded-md text-sm capitalize font-medium" aria-current="page">{child.name}</a>
                ))}
              </div>
            </div>
          </div>
          <div className="sm:block sm:ml-6">
            <div className="flex space-x-4">
                <a href="/login" className="text-white px-3 py-2 rounded-md text-sm capitalize font-medium" aria-current="page">Login</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
