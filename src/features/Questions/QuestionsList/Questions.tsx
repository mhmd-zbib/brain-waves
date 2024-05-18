import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import dummydata from "../../../test/dummydata.test.json";
import QuestionPostItem from "./components/QuestionPostItem";

export default function Questions() {
  const { major, course } = useParams<{ major?: string; course?: string }>();
  const navigate = useNavigate();

  const getData = () => {
    if (!major && !course) return dummydata;
    if (!course) return dummydata.filter((post) => post.major === major);
    return dummydata.filter(
      (post) => post.major === major && post.course === course
    );
  };

  const filteredPosts = getData();

  return (
    <div className="gap-4 flex flex-col">
      <p>
        {major} {course}
      </p>

      {filteredPosts.map((post, index) => (
        <QuestionPostItem
          key={index}
          post={post}
          onClick={() => navigate(`/q/${post.major}/${post.course}/${post.id}`)}
        />
      ))}
    </div>
  );
}
