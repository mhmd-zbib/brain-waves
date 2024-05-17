import React from "react";

interface ProfilePictureProps {
  image?: string;
  size?: "sm" | "md" | "lg";
  [key: string]: any;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({
  image,
  size = "md",
  ...props
}) => {
  let sizeClasses = "";
  if (size === "sm") {
    sizeClasses = "w-6 h-6";
  } else if (size === "md") {
    sizeClasses = "w-12 h-12";
  } else if (size === "lg") {
    sizeClasses = "w-16 h-16";
  }

  return (
    <div
      {...props}
      className={`relative inline-block rounded-full overflow-hidden ${sizeClasses} cursor-pointer`}
    >
      {image ? (
        <img
          src={image}
          alt="Profile"
          className="rounded-full object-cover w-full h-full"
        />
      ) : (
        <div className="rounded-full bg-primary w-full h-full" />
      )}
    </div>
  );
};

export default ProfilePicture;
