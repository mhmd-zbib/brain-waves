// Button.tsx

import React, { ButtonHTMLAttributes, FC } from "react";

// Define the props interface for the Button component
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"; // Define possible variants
}

// Define the Button component as a functional component
const Button: FC<ButtonProps> = ({
  variant = "primary",
  children,
  ...props
}) => {
  // Assign the appropriate classes based on the variant prop
  const buttonClass = `py-2 px-4 rounded ${
    variant === "primary" ? "bg-blue-500 text-white" : "bg-gray-500 text-black"
  }`;

  // Render the button element with the provided props
  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
