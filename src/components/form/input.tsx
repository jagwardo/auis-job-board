import React from "react";

type IInput = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input: React.FC<IInput> = ({
    id="",
    name="",
    className="",
    placeholder=""
}) => {
    return (
        <input className={`p-5 focus:outline-none ${className}`} placeholder={placeholder} />
    )
}

export default Input;