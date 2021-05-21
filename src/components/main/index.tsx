import React from "react";

import { Button } from "@components";

export const Main: React.FC = () => {
  return (
    <div className="text-center font-light py-10">
      <div className="container mx-auto">
        <h1 data-test="main-heading" className="text-5xl lg:text-8xl mb-5">
          AUIS Job Board
        </h1>
        {/* <p className="text-lg mb-5 px-5">
          An exciting opportunity for companies and organizations to reach in-demand job candidates, but also a chance for AUIS students and alumni to connect with employers around Iraq, the Kurdistan Region, the wider Middle East, and beyond.
        </p>
        <div className="flex gap-5 justify-center">
          <Button type="button" className="bg-primary text-white col-span-1">
            <a
              data-test="docs-btn-anchor"
              href="https://pankod.github.io/superplate/"
              target="_blank"
            >
              Explore Jobs
            </a>
          </Button>
          <Button type="button" className="bg-white col-span-1">
            <a
              data-test="docs-btn-anchor"
              href="https://pankod.github.io/superplate/"
              target="_blank"
            >
              Read More
            </a>
          </Button>
        </div> */}

      </div>
    </div>
  );
};
