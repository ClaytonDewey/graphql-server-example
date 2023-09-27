import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// data
import db from './db.js';

// types
import { typeDefs } from './schema.js';

const resolvers = {
  Query: {
    games() {
      return db.games;
    },
    game(_, args) {
      return db.games.find((game) => game.id === args.id);
    },
    authors() {
      return db.authors;
    },
    author(_, args) {
      return db.authors.find((author) => author.id === args.id);
    },
    reviews() {
      return db.reviews;
    },
    reviews(_, args) {
      return db.reviews.find((reviews) => reviews.id === args.id);
    },
  },
};

// Server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server ready at port`, 4000);

/**
 * Links for course:
 * https://www.apollographql.com/docs/apollo-server/getting-started/
 * https://www.youtube.com/watch?v=5199E50O7SI
 */
