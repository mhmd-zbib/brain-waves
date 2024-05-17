import { useParams } from "react-router-dom";

interface RouteParams {
  major: string;
  course: string;
  id: number;
}

export default function QuestionDetails() {
  const { major, course, id } = useParams<RouteParams>();

  return (
    <div>
      {major} {course} {id}
    </div>
  );
}
