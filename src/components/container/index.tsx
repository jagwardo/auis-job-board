type IDiv = React.DetailedHTMLProps<
  React.HtmlHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const Container: React.FC<IDiv> = ({ children, className }) => {
  return <div className={`min-h-screen flex flex-col bg-gray-50 ${className}`}>{children}</div>;
};
