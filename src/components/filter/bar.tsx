import { Button } from "@components/button";
import { Input } from "@components/form";
import React from "react";

const SearchBar = ({name = "", children = ""}) => {
    const search = async event => {
        event.preventDefault(); // prevents page redirection
        const res = await fetch(
            'https://hooks.zapier.com/hooks/catch/123456/abcde',
            {
              body: JSON.stringify({
                name: event.target.name.value
              }),
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'POST'
            }
          )
      
          const result = await res.json()
          console.log(result);
          // result.user => 'Ada Lovelace'

    }
    return (
        <div className="container mt-8 mb-2 w-full mx-auto py-5 px-5">
            <form onSubmit={search}>
                <div className="block grid grid-cols-1 lg:flex gap-0.5">
                    <Input className="shadow-sm rounded-l-xl flex-grow" name="search" placeholder="Keywords" />
                    <Input className="shadow-sm" name="location" placeholder="Location" />
                    <Input className="shadow-sm flex-shrink" name="job_type" placeholder="Job Type" />
                    <div className="block grid grid-cols-1 lg:flex">
                        <Input className="shadow-sm flex-shrink" name="job_type" placeholder="Company" />
                        <Button className="shadow-sm bg-blue-500 text-gray-50 flex-shrink rounded-r-xl" type="submit">
                            Find Jobs
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;