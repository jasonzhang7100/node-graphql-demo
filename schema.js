import {
  makeExecutableSchema,
  mergeGraphQLTypes,
  mergeResolvers,
  loadFilesSync,
} from 'graphql-tools';

const typeDefs = mergeGraphQLTypes(loadFilesSync('./typeDefs'), { all: true });

const resolvers = mergeResolvers(loadFilesSync('./resolvers'));

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});
