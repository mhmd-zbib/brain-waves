import React from "react";
import { Card } from "../../../core/components/ui/Cards";
import AuthorInfo from "./AuthorPost";
import InteractionPost from "./InteractionPost";
import TagPost from "./TagPost";
import ContentPost from "./ContentPost";

const FeedItem: React.FC<{ post: QuestionPostProps }> = ({ post }) => {
  const { title, content, course, answers, votes, tags, author, date } = post;

  return (
    <Card className="flex gap-4">
      <ContentPost
        content={content}
        title={title}
        course={course}
        votes={votes}
        answers={answers}
      />
      <div className="flex justify-between">
        <TagPost tags={tags} />
        <AuthorInfo author={author} date={date} />
      </div>
    </Card>
  );
};

export default FeedItem;
