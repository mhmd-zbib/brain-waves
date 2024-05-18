import React from "react";

type AnswerProps = {
  answer: Answer;
};

const Answer: React.FC<AnswerProps> = ({ answer }) => {
  const { author, content, date, replies } = answer;

  return (
    <div className="answer">
      <p>{content}</p>
      <p>Answered by: {author.name}</p>
      {/* Render replies if exist */}
      {replies.length > 0 && (
        <div className="replies">
          {replies.map((reply) => (
            <div key={reply.id} className="reply">
              <p>{reply.content}</p>
              <p>{date}</p>
              <p>Replied by: {reply.author.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Answer;
