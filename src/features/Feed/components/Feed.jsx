import React from "react";
import FeedItem from "./FeedItem";
import data2 from "../../../test/data2.test";

export default function Feed() {
  return (
    <div className="container mx-auto px-2 py-4">
      {" "}
      {/* Adjusted padding */}
      <div className="grid gap-2">
        {" "}
        {/* Adjusted grid gap */}
        {data2.map((post) => (
          <FeedItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
