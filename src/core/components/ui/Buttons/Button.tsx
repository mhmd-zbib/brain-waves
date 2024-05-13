import React, { FC } from "react";

// class buttonVariants {

//   default: "bg-primary"

// }

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button: FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
