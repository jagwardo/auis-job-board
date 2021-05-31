import React from "react";

export type IButton = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type IAnchor = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export const Button: React.FC<IButton> = ({
  className = "",
  children,
  ...rest
}) => {
  return (
    <button
      className={`ring-opacity-75 ring-green-400 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export const LinkButton: React.FC<IAnchor> = ({
  className = "",
  children,
  href,
  ...rest
}) => {
  return (
    <a
      href={href}
      className={`text-center py-2 px-4 rounded ring-opacity-75 ring-green-400 ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
};