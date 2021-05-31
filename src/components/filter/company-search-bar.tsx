import { Button } from "@components/button";
import { Input } from "@components/form";
import { IconSearch } from "@components/icons";
import React from "react";

const CompanySearchBar = ({name = "", children = ""}) => {
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
            <form onSubmit={search} className="mx-auto">
                <div className="block grid grid-cols-1 lg:flex gap-3 lg:gap-0.5 justify-center">
                    <Input className="shadow-sm lg:rounded-l-xl focus:ring-2 focus:ring-blue-300" name="company" placeholder="Company" autoComplete="off" />
                    <div className="block grid grid-cols-1 gap-5 lg:gap-0 lg:flex">
                        <Input className="shadow-sm focus:ring-2 focus:ring-blue-300" autoComplete="off" name="location" placeholder="Location" />
                        <Button className="shadow-sm bg-blue-500 text-gray-50 flex-shrink lg:rounded-r-xl p-5" type="submit">
                            <IconSearch />
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CompanySearchBar;