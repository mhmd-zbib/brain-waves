interface QuestionPostProps {
  title: string;
  content: string;
  course: string;
  answers: number;
  votes: number;
  tags: string[];
  author: {
    name: string;
    avatar: string;
  };
  date: number;
}
