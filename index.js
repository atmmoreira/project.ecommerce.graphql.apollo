import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema/schema.js";
import { Query } from "./resolvers/Query.js";
import { Course } from "./resolvers/Course.js";
import { Genre } from "./resolvers/Genre.js";
import { courses, genres, reviews } from "./database/database.js";

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Course,
    Genre,    
  },
  context: {
    courses,
    genres,
    reviews
  }
});
server.listen().then(({ url }) => console.log(`Server is running at ${url}`));
