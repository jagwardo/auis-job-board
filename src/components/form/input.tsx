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
        <input className={`flex-grow p-5 focus:outline-none rounded ${{className}}`} placeholder={placeholder} />
    )
}

export default Input;