import React from "react";

type ILabel = React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>;

const Label: React.FC<ILabel> = ({
    id="",
    className="",
    htmlFor="",
    form="",
    children=""
}) => {
    return (
        <label id={id} htmlFor={htmlFor} className={`${{className}}`}>children</label>
    )
}

export default Label;