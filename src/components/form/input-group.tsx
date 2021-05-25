import React from "react";
import Input from "./input";

type IDiv = React.DetailedHTMLProps<
  React.HtmlHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const InputGroup: React.FC<IDiv> = ({
    id="",
    children="",
    
}) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default InputGroup;