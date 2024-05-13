import React from "react";
import FeedItem from "./FeedItem";
import data2 from "../../../test/data2.test";

export default function Feed() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid gap-4">
        {data2.map((post) => (
          <FeedItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
