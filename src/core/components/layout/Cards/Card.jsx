import React from "react";

function Card({ children, className, style, onClick }) {
  return (
    <div
      className={`bg-secondary rounded-lg p-4  flex flex-col ${className}`}
      // style={style}
      onClick={onClick}>
      {children}
    </div>
  );
}

export default Card;
