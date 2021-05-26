import React from "react";
import { LinkButton } from "@components/button";
import { IconDotsHorizontal } from "@components/icons";

interface Job {
  title: string;
  description: string;
  url: string;
}
export const JobCard = ({ job }) => {
  return (
    <div
      key={job.title}
      className="col-span-1 rounded-md bg-white p-7 shadow-sm"
    >
      <div className="flex gap-5 justify-between mb-3">
          <a className="flex-grow" target="_blank" data-test="docs-btn-anchor" href="https://pankod.github.io/superplate/">
              <img
                  className="h-20"
                  data-test="icon"
                  src="/icons/dropbox-logo.png"
                  alt="company_logo"
              />
          </a>

          <button type="button" className="inline-flex focus:outline-none text-gray-700 h-2" id="menu-button" aria-expanded="true" aria-haspopup="true">
              <IconDotsHorizontal className="h-5" />
          </button>
      </div>
      <h2 className="text-gray-800 text-lg font-bold mb-2">{job.title}</h2>
      <p className="text-gray-600 text-sm font-medium m-0">{job.description}</p>
      <div className="flex gap-5 justify-between mt-7">
          <LinkButton target="_blank" data-test="docs-btn-anchor" href="https://pankod.github.io/superplate/" type="button" className="bg-blue-600 text-white hover:bg-blue-700 text-sm font-medium flex-grow">
              Apply Now
          </LinkButton>

          <LinkButton target="_blank" data-test="docs-btn-anchor" href="https://pankod.github.io/superplate/" type="button" className="bg-gray-100 hover:bg-gray-200 text-gray-500 text-sm font-medium flex-grow">
              Job Details
          </LinkButton>
      </div>            
    </div>
  );
};