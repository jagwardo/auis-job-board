import { Button } from "@components/button";
import { Input } from "@components/form";
import React from "react";

const SearchBar = ({name = "", children = ""}) => {
    return (
        <div className="container mt-8 mb-2 max-w-screen-lg mx-auto py-5 px-5">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-1">
                <Input placeholder="Keywords" />
                <Input placeholder="Location" />
                <Input className="flex-shrink" placeholder="Job Type" />
                <Input placeholder="Salary Range" />
                <Button className="bg-blue-600 text-white flex-grow" type="button">
                    Find Jobs
                </Button>
            </div>
        </div>
    );
}

export default SearchBar;