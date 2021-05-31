import React from "react";
import data from "@public/companies.json";
import { JobCard } from "./job-card";
import CompanyCard from "./company-card";

type IDiv = React.DetailedHTMLProps<
  React.HtmlHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const CompanyList: React.FC<IDiv> = ({className=""}) => {
  return (
    <div className={`container max-w-screen-lg mx-auto px-5 ${className}`}>
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-gray-700">Showing {data?.companies?.length} Companies</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
        {(data?.companies ?? []).map((company) => (
          <CompanyCard company={company} />
        ))}
      </div>
    </div>
  );
};