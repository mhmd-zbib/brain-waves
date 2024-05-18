import React from "react";
import Answer from "./Answer.test";

type QuestionDetailsProps = {
  data: {
    id: string;
    author: { name: string; avatar: string; id: string };
    major: string;
    course: string;
    title: string;
    content: string;
    date: number;
    tags: string[];
    answers: Answer[];
    votes: number;
  };
};

const QuestionDetails: React.FC<QuestionDetailsProps> = ({ data }) => {
  const { author, title, content, answers } = data;

  return (
    <div className="question-details">
      <div className="question">
        <h2>{title}</h2>
        <p>{content}</p>
        <p>Posted by: {author.name}</p>
      </div>
      <div className="answers">
        {answers.map((answer) => (
          <Answer key={answer.id} answer={answer} />
        ))}
      </div>
    </div>
  );
};

export default QuestionDetails;
