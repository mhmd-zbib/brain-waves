import React from "react";
import { IoChatbubblesOutline } from "react-icons/io5";
import { BiUpvote } from "react-icons/bi";

interface InteractionItemProps {
  count: number;
  Icon: React.ElementType;
}

const InteractionItem: React.FC<InteractionItemProps> = ({ count, Icon }) => {
  return (
    <p className="bg-accent px-2 py-1 rounded-full text-xs flex flex-row items-center gap-1">
      {count} <Icon />
    </p>
  );
};

interface InteractionPostProps {
  votes: number;
  answers: number;
}

const InteractionPost: React.FC<InteractionPostProps> = ({
  votes,
  answers,
}) => {
  return (
    <div className="flex flex-row gap-2 items-center">
      <InteractionItem count={answers} Icon={IoChatbubblesOutline} />
      <InteractionItem count={votes} Icon={BiUpvote} />
    </div>
  );
};

export default InteractionPost;
