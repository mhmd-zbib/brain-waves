import React from "react";
import { Card } from "../../../core/components/layout/Cards";
import { ProfilePicture } from "../../../core/components/ui/ProfilePicture";
import TagsItem from "./TagsItem";

function PostContent({ title, content, course, answers, votes }) {
  return (
    <div className="gap-2 flex flex-col">
      <div className="flex flex-row justify-between">
        <p>{course}</p>
        <Answers answers={answers} votes={votes} />
      </div>
      <p className="text-2xl font-bold">{title}</p>
      <p className="text-md">{content}</p>
    </div>
  );
}

function Answers({ answers, votes }) {
  return (
    <div className="flex flex-row gap-2 items-center">
      <p className="bg-accent px-2 py-1 rounded-full text-xs">{answers} ✔</p>
      <p className="bg-accent px-2 py-1 rounded-full text-xs">{votes} ▲</p>
    </div>
  );
}

function TagsList({ tags }) {
  return (
    <div className="flex flex-row gap-1 ">
      {tags.map((tag, index) => (
        <TagsItem key={index} tag={tag} />
      ))}
    </div>
  );
}

function AuthorInfo({ author, date }) {
  const { name, avatar } = author;
  return (
    <div className="flex flex-row items-center gap-1 ">
      <ProfilePicture
        onClick={() => console.log("hiii")}
        size="sm"
        image={avatar}
      />
      <div className="flex flex-col">
        <div className="flex gap-2">
          <p className="font-medium">{name} </p>
          <span>•</span>
          <p className="text-textSecondary">{new Date(date).toDateString()}</p>
        </div>
      </div>
    </div>
  );
}

export default function FeedItem({ post }) {
  const { title, content, course, tags, author, date, answers, votes } = post;
  return (
    <Card className={"my-4 gap-6"}>
      <PostContent
        title={title}
        content={content}
        course={course}
        answers={answers}
        votes={votes}
      />
      <div className="flex flex-row items-center justify-between">
        <TagsList tags={tags} />
        <AuthorInfo author={author} date={date} />
      </div>
    </Card>
  );
}
