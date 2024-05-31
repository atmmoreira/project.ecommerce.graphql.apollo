export const courses = [
  {
    id: "book-01",
    name: "NextJS Basics",
    description: "NextJS Basics for beginners",
    price: 399.99,
    discount: true,
    genreId: "cat-01",
  },
  {
    id: "book-02",
    name: "TypeScript Basics",
    description: "TypeScript Basics for beginners",
    price: 499.99,
    discount: false,
    genreId: "cat-02",
  },
  {
    id: "book-03",
    name: "React Basics",
    description: "React Basics for beginners",
    price: 599.99,
    discount: false,
    genreId: "cat-02",
  },
];

export const reviews = [
  {
    id: "rev-01",
    date: "05-31-2024",
    title: "This is Bad",
    comment: "When I bought this it broke the computer.",
    rating: 1,
    courseId: "book-01",
  },
  {
    id: "rev-02",
    date: "05-30-2024",
    title: "This is really Bad",
    comment: "When I bought this it broke the computer, again.",
    rating: 1,
    courseId: "book-01",
  },
];

export const genres = [
  { id: "cat-01", name: "Technical" },
  { id: "cat-02", name: "History" },
];
