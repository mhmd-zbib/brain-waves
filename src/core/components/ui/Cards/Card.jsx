import React from "react";

function Card({ children, className, style, onClick, disabled }) {
  const cardClasses = `bg-secondary rounded-2xl  flex flex-col ${
    disabled ? "" : "hover:bg-tertiary cursor-pointer"
  } ${className}`;

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <div
      className={cardClasses}
      onClick={handleClick}
      disabled={disabled}
      style={{ cursor: disabled ? "default" : "pointer" }}>
      <div className="m-4">{children}</div>
    </div>
  );
}

export default Card;
