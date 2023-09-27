import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// types
import { typeDefs } from './schema.js';

// Server setup
const server = new ApolloServer({
  typeDefs,
  // resolvers
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
