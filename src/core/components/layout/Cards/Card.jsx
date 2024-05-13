import React from "react";

function Card({ children, className, style, onClick }) {
  return (
    <div
      style={{}}
      className={`bg-secondary rounded-lg p-4  flex flex-col hover:bg-tertiary  cursor-pointer ${className}`}
      // style={style}
      onClick={onClick}>
      {children}
    </div>
  );
}

export default Card;
