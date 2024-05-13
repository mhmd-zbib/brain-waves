import React from "react";
import posts from "../../../test/data.test";
import FeedItem from "./FeedItem";
import { Card } from "../../../core/components/layout/Cards";

export default function Feed() {
  return (
    <div>
      {posts.map((post) => (
        <FeedItem key={post.id} post={post} />
      ))}
    </div>
  );
}
