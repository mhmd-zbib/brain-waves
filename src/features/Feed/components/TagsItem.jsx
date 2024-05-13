import React from "react";

function TagsItem({ tag }) {
  return (
    <div className="bg-primary w-fit px-3  rounded-full text-sm text-accent">
      {tag}
    </div>
  );
}

export default TagsItem;
