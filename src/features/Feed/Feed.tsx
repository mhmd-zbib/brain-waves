import data2 from "../../test/DummyPosts.test";
import FeedItem from "./components/FeedItem";

export default function Feed() {
  return (
    <div className="gap-4 flex flex-col">
      {data2.map((post, index) => {
        return <FeedItem key={index} post={post} />;
      })}
    </div>
  );
}
