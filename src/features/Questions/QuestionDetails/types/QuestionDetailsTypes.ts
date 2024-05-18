interface Author {
  name: string;
  avatar: string;
  id: string;
}

interface Reply {
  id: string;
  author: Author;
  content: string;
  date: number;
  upvotes: number;
  downvotes: number;
  awards: { name: string; icon: string }[];
  shares: number;
  replies: Reply[];
}

interface Answer {
  id: string;
  author: Author;
  content: string;
  date: number;
  upvotes: number;
  downvotes: number;
  awards: { name: string; icon: string }[];
  shares: number;
  replies: Reply[];
}

interface Question {
  id: string;
  author: Author;
  major: string;
  course: string;
  title: string;
  content: string;
  date: number;
  tags: string[];
  answers: Answer[];
  votes: number;
}
