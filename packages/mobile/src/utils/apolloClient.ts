import { ApolloClient, InMemoryCache } from '@apollo/client';

// Initialize Apollo Client
export const client = new ApolloClient({
  uri: 'http://192.168.1.109:4000/graphql',
  cache: new InMemoryCache()
});
