import React from "react";
import { Card } from "../../../../../core/components/ui/Cards";
import AuthorInfo from "./AuthorPost";
import ContentPost from "./ContentPost";
import TagPost from "./TagPost";

const QuestionPostItem: React.FC<{
  post: QuestionPostProps;
  onClick?: () => void;
}> = ({ post, onClick }) => {
  const { title, content, course, answers, votes, tags, author, date } = post;

  return (
    <Card className="flex gap-4" onClick={onClick}>
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

export default QuestionPostItem;
