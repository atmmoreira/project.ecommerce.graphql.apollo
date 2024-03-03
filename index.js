import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema/schema.js";
import { Query } from "./resolvers/Query.js";
import { Course } from "./resolvers/Course.js";
import { Genre } from "./resolvers/Genre.js";

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Course,
    Genre,
  },
});
server.listen().then(({ url }) => console.log(`Server is running at ${url}`));
