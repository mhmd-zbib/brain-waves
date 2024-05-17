import React from "react";

interface InteractionPostProps {
  votes: number;
  answers: number;
}

export default function InteractionPost({
  votes,
  answers,
}: InteractionPostProps) {
  return (
    <div className="flex flex-row gap-2 items-center">
      <p className="bg-accent px-2 py-1 rounded-full text-xs">{answers} ✔</p>
      <p className="bg-accent px-2 py-1 rounded-full text-xs ">{votes}</p>
    </div>
  );
}
