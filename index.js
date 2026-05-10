import express from "express";
import dotenv from "dotenv";
import { ApolloServer } from "apollo-server-express";

import connectDB from "./db.connection.js";

import typeDefs from "./schema/typeDefs.js";
import resolvers from "./resolvers/resolvers.js";

dotenv.config();

const app = express();

connectDB();

const server = new ApolloServer({
  typeDefs,
  resolvers
});

await server.start();

server.applyMiddleware({ app });

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT} 🚀`);
});