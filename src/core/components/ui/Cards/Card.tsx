import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  disabled?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  style,
  onClick,
  disabled = false,
}) => {
  const cardClasses = `bg-secondary rounded-2xl flex flex-col ${
    disabled ? "" : "hover:bg-tertiary cursor-pointer p-4"
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
      style={{ ...style, cursor: disabled ? "default" : "pointer" }}
      aria-disabled={disabled}
    >
      {children}
    </div>
  );
};

export default Card;
