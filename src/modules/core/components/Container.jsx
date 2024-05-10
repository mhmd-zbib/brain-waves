import React, { ReactChild, ReactNode } from "react";

const Container = ({ children, label }) => {
  return (
    <div className="border border-red-200">
      <p className="font-medium">{label}</p>
      <div>{children}</div>
    </div>
  );
};

export default Container;
