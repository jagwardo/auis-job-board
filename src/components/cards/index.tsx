import React from "react";

import data from "@public/meta.json";
import { JobCard } from "./job-card";

export const Cards: React.FC = () => {
  return (
    <div className="flex-1 container my-8 max-w-screen-lg mx-auto p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {(data?.jobs ?? []).map((job) => (
          <JobCard job={job} />
        ))}
      </div>
    </div>
  );
};