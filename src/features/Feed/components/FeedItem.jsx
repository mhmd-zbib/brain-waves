import React from "react";
import { Card } from "../../../core/components/layout/Cards";
import { ProfilePicture } from "../../../core/components/ui/ProfilePicture";
import TagsItem from "./TagsItem";

export default function FeedItem({ post }) {
  return (
    <Card className={"my-4 gap-6"}>
      <div className="flex flex-row justify-between flex-1 ">
        <div className="flex flex-row items-center gap-3">
          <ProfilePicture
            onClick={() => console.log("hiii")}
            size="sm"
            image={post.author.image}
          />
          <div>
            <p className="font-medium">{post.author.name}</p>
            <p className="  text-xs  text-textSecondary">{post.date}</p>
          </div>
        </div>
        <p> . . . </p>
      </div>

      <div className="gap-2 flex flex-col">
        <p className=" text-2xl font-bold ">{post.title}</p>
        <p className="text-md">{post.content}</p>
      </div>

      <div className="flex flex-row gap-1">
        {post.tags.map((tag) => (
          <TagsItem tag={tag} />
        ))}
      </div>
    </Card>
  );
}
