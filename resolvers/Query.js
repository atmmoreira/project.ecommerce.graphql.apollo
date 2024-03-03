import { courses, genres } from "../database/database.js";

export const Query = {
  courses: () => courses,
  course: (parent, args, context) => {
    const courseId = args.id;
    const course = courses.find((item) => item.id === courseId);
    if (!course) return null;
    else return course;
  },
  genres: () => genres,
  genre: (parent, args, context) => {
    const catId = args.id;
    const genre = genres.find((item) => item.id === catId);
    if (!genre) return null;
    else return genre;
  },
};
