import React from "react";
import { LinkButton } from "@components/button";
import { IconDotsHorizontal } from "@components/icons";

const CompanyCard = ({ company }) => {
  return (
    <div
      key={company.name}
      className="col-span-1 rounded-md bg-white p-7 shadow-sm"
    >
      <div className="grid md:flex gap-5 justify-between items-center mb-3">
          <div className="">
            <a className="h-20 w-20" target="_blank" data-test="docs-btn-anchor" href={company.website? company.website : '#'}>
                <img
                    className="h-20 w-auto"
                    data-test="icon"
                    src={company.logo}
                    alt="company_logo"
                />
            </a>
          </div>
            <div className="">
                <h2 className="text-gray-800 text-md font-bold mb-2">{company.name}</h2>
                <a className="text-gray-600 text-xs font-medium m-0" rel="no refferer" href={company.website}>{company.website}</a>
                <div className="flex gap-5 mt-7">
                    <LinkButton data-test="docs-btn-anchor" href="#" type="button" className="bg-blue-600 text-white hover:bg-blue-700 text-xs font-medium flex-grow">
                        View Reviews
                    </LinkButton>

                    {/* <LinkButton target="_blank" data-test="docs-btn-anchor" href="https://pankod.github.io/superplate/" type="button" className="bg-gray-100 hover:bg-gray-200 text-gray-500 text-sm font-medium flex-grow">
                        View Reviews
                    </LinkButton> */}
                </div>
            </div>
        </div>
    </div>
  );
};

export default CompanyCard;