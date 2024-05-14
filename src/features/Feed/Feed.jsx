import React from "react";
import FeedItem from "./components/FeedItem";
import data2 from "../../test/DummyPosts.test";
import { Link, useNavigate } from "react-router-dom";

export default function Feed() {
  const navigate = useNavigate();

  return (
    <div className="gap-4 flex flex-col ">
      {data2.map((post) => (
        <Link to={`/post/2`}>
          <FeedItem key={post.id} post={post} />
        </Link>
      ))}
    </div>
  );
}
