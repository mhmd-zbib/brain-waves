interface FeedProps {
  post: {
    title: string;
    content: string;
    course: string;
    answers: number;
    votes: number;
    tags: [];
    author: {
      name: string;
      avatar: string;
    };
    date: number;
  };
}
