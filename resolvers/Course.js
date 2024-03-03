import { genres } from "../database/database.js";

export const Course = {
  genre: (parent, args, context) => {
    const genreId = parent.genreId;
    return genres.find((item) => item.id === genreId);
  },
};
