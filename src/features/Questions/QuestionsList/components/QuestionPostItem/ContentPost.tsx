import InteractionPost from "./InteractionPost";

interface ContentPostProps {
  title: string;
  content: string;
  course: string;
  votes: number;
  answers: number;
}

export default function ContentPost({
  title,
  content,
  course,
  answers,
  votes,
}: ContentPostProps) {
  return (
    <div className="gap-1 flex flex-col">
      <div className="flex flex-row justify-between">
        <p>{course}</p>
        <InteractionPost answers={answers} votes={votes} />
      </div>
      <p className="text-lg font-bold">{title}</p>
      <p className="text-sm">{content}</p>
    </div>
  );
}
