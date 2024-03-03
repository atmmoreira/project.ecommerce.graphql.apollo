import { courses } from "../database/database.js";

export const Genre = {
  courses: (parent, args, context) => {
    const genreId = parent.id;
    return courses.filter((item) => item.genreId === genreId);
  },
};
