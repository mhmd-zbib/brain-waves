const posts = [
  {
    id: 1,
    author: {
      id: 1,
      name: "John Doe",
      avatar: "https://example.com/avatar1.png",
    },
    title: "How to learn React?",
    content:
      "You can start with the official React documentation. It's really helpful! I'm interested in learning React JS but don't know where to start. Can anyone provide some beginner-friendly resources or tips?I'm interested in learning React JS but don't know where to start. Can anyone provide some beginner-friendly resources or tips?I'm interested in learning React JS but don't know where to start. Can anyone provide some beginner-friendly resources or tips?",
    tags: ["React", "JavaScript"],
    comments: [
      {
        id: 1,
        author: {
          id: 2,
          name: "Jane Smith",
          avatar: "https://example.com/avatar2.png",
        },
        content:
          "You can start with the official React documentation. It's really helpful! I'm interested in learning React JS but don't know where to start. Can anyone provide some beginner-friendly resources or tips?I'm interested in learning React JS but don't know where to start. Can anyone provide some beginner-friendly resources or tips?I'm interested in learning React JS but don't know where to start. Can anyone provide some beginner-friendly resources or tips?",
        rating: 4,
        replies: [
          {
            id: 1,
            author: {
              id: 3,
              name: "Alice Johnson",
              avatar: "https://example.com/avatar3.png",
            },
            content: "I agree, the documentation is great!",
          },
        ],
      },
      {
        id: 2,
        author: {
          id: 4,
          name: "Bob Brown",
          avatar: "https://example.com/avatar4.png",
        },
        content: "Check out some React tutorials on YouTube as well.",
        rating: 3,
        replies: [],
      },
    ],
    date: Date.now(), // Current timestamp
  },
  {
    id: 2,
    author: {
      id: 5,
      name: "Emily Wilson",
      avatar: "https://example.com/avatar5.png",
    },
    title: "Best resources for learning Python?",
    content:
      "I want to learn Python. Any recommendations for online courses or books?",
    tags: ["Python", "Programming"],
    comments: [
      {
        id: 3,
        author: {
          id: 6,
          name: "David Rodriguez",
          avatar: "https://example.com/avatar6.png",
        },
        content:
          "Check out 'Python Crash Course' by Eric Matthes. It's a great book for beginners!",
        rating: 5,
        replies: [],
      },
    ],
    date: Date.now(), // Current timestamp
  },
];

export default posts;
