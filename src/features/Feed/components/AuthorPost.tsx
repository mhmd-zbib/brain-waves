import React from "react";
import { ProfilePicture } from "../../../core/components/ui/ProfilePicture";

interface AuthorInfoProps {
  author: { name: string; avatar: string };
  date: number;
}

export default function PostAuthor({ author, date }: AuthorInfoProps) {
  return (
    <div className="flex flex-row items-center gap-2 justify-center ">
      <ProfilePicture
        onClick={() => console.log("hiii")}
        size="sm"
        image={author.avatar}
      />
      <div className="flex  items-center gap-2 ">
        <p className="font-medium text-sm">{author.name}</p> <span>•</span>
        <p className="text-textSecondary text-xs">
          {new Date(date).toDateString()}
        </p>
      </div>
    </div>
  );
}
