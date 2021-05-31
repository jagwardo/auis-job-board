import React from "react";
import data from "@public/meta.json";
import { JobCard } from "./job-card";

type IDiv = React.DetailedHTMLProps<
  React.HtmlHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const Cards: React.FC<IDiv> = ({className=""}) => {
  return (
    <div className={`container max-w-screen-lg mx-auto px-5 ${className}`}>
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-gray-700">Showing {data?.jobs?.length} Jobs</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {(data?.jobs ?? []).map((job) => (
          <JobCard job={job} />
        ))}
      </div>
    </div>
  );
};