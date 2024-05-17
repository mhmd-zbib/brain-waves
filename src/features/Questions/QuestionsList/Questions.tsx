import { useNavigate, useParams } from "react-router-dom";
import dummydata from "../../../test/dummydata.test.json";
import QuestionPostItem from "./components/QuestionPostItem";

export default function Questions() {
  const { major, course } = useParams<{ major?: string; course?: string }>();
  const navigate = useNavigate();

  return (
    <div className="gap-4 flex flex-col">
      <p>
        {major} {course}{" "}
      </p>

      {dummydata.map((post, index) => {
        return (
          <QuestionPostItem
            key={index}
            post={post}
            onClick={() =>
              navigate(`/q/${post.major}/${post.course}/${post.id}`)
            }
          />
        );
      })}
    </div>
  );
}
