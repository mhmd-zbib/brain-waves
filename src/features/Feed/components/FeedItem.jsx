import React from "react";
import { Card } from "../../../core/components/ui/Cards";
import { ProfilePicture } from "../../../core/components/ui/ProfilePicture";
import TagsItem from "./TagsItem";
import { IoIosArrowUp } from "react-icons/io";

function PostContent({ title, content, course, answers, votes }) {
  return (
    <div className="gap-2 flex flex-col">
      <div className="flex flex-row justify-between">
        <p>{course}</p>
        <Answers answers={answers} votes={votes} />
      </div>
      <p className="text-lg font-bold">{title}</p>
      <p className="text-sm">{content}</p>
    </div>
  );
}

function Answers({ answers, votes }) {
  return (
    <div className="flex flex-row gap-2 items-center">
      <p className="bg-accent px-2 py-1 rounded-full text-xs">{answers} ✔</p>
      <p className="bg-accent px-2 py-1 rounded-full text-xs ">
        {votes} <IoIosArrowUp />
      </p>
    </div>
  );
}

function TagsList({ tags }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <TagsItem key={index} tag={tag} />
      ))}
    </div>
  );
}

function AuthorInfo({ author, date }) {
  const { name, avatar } = author;
  return (
    <div className="flex flex-row items-center gap-2 justify-center ">
      <ProfilePicture
        onClick={() => console.log("hiii")}
        size="sm"
        image={avatar}
      />
      <div className="flex  items-center gap-2 ">
        <p className="font-medium text-sm">{name}</p> <span>•</span>
        <p className="text-textSecondary text-xs">
          {new Date(date).toDateString()}
        </p>
      </div>
    </div>
  );
}

export default function FeedItem({ post, onClick }) {
  const { title, content, course, tags, author, date, answers, votes } = post;
  return (
    <Card className="gap-3 " onClick={onClick}>
      <PostContent
        title={title}
        content={content}
        course={course}
        answers={answers}
        votes={votes}
      />
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <TagsList tags={tags} />
        <AuthorInfo author={author} date={date} />
      </div>
    </Card>
  );
}
