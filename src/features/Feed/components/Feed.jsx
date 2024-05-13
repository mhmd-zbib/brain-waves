import React from "react";
import posts from "../../../test/data.test";
import FeedItem from "./FeedItem";
import { Card } from "../../../core/components/layout/Cards";
import data2 from "../../../test/data2.test";

export default function Feed() {
  return (
    <div className=" justify-center items-center flex flex-col">
      <div className="  w-4/5   ">
        {data2.map((post) => (
          <FeedItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
