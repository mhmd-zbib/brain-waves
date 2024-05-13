import React from "react";

const Input = (props) => {
  const { label, ...inputProps } = props; // Destructure label and take all other props for inputProps
  return (
    <div>
      <p>{label}</p>
      <input
        {...inputProps}
        className=" rounded-full px-4 py-2 bg-secondary  outline-accent border-none  "
      />
    </div>
  );
};

export default Input;
