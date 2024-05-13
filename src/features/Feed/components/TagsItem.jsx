import React from "react";

function TagsItem({ tag }) {
  return (
    <div className="bg-accent w-fit px-2 py-1 rounded-full text-sm">{tag}</div>
  );
}

export default TagsItem;
