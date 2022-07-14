import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';

export const Client = new ApolloClient({
    uri: 'https://helicarrier.devtunde.xyz/',
    cache: new InMemoryCache(),
   
  });