import React from "react";
import FeedItem from "./components/FeedItem";
import data2 from "../../test/data2.test";

export default function Feed() {
  return (
    <div className="   gap-4 flex flex-col     ">
      {data2.map((post) => (
        <FeedItem key={post.id} post={post} />
      ))}
    </div>
  );
}
