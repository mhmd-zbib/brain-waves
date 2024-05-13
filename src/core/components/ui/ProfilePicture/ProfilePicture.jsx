import React from "react";

const ProfilePicture = ({ image, size, ...props }) => {
  let sizeClasses = "";
  if (size === "sm") {
    sizeClasses = "w-10 h-10";
  } else if (size === "md") {
    sizeClasses = "w-12 h-12";
  } else if (size === "lg") {
    sizeClasses = "w-16 h-16";
  }

  return (
    <div
      {...props}
      className={`relative inline-block ${sizeClasses} cursor-pointer`}>
      {image ? (
        <img src={image} alt="Profile" className="rounded-full object-cover " />
      ) : (
        <div className="rounded-full bg-primary w-full h-full" />
      )}
    </div>
  );
};

export default ProfilePicture;
