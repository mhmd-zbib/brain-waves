/**
 *
 * @param {String} variant - this param is responsible for the color and type
 * of the button
 * @param {Function} onClick - passing a function upon clicking the button
 * @param {ReactChildren} children - the text inside the button
 *
 */
import React, { ReactChildren } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  ...rest
}) => {
  let buttonClasses = "px-4 py-2 rounded-md focus:outline-none";

  switch (variant) {
    case "secondary":
      buttonClasses += " bg-gray-300 text-gray-700 hover:bg-gray-400";
      break;
    case "danger":
      buttonClasses += " bg-red-500 text-white hover:bg-red-600";
      break;
    default:
      buttonClasses += " bg-blue-500 text-white hover:bg-blue-600";
      break;
  }

  return (
    <button className={buttonClasses} {...rest}>
      {children}
    </button>
  );
};

export default Button;
