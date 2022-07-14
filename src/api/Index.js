import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';


  export const GET_LOCATIONS = gql`



  query Query {
    dates {
      transactions {
        title
        id
        date
        status
        type
      }
    }
  }
      

   
  `;



  


/// export const { loading, error, data } = useQuery(GET_LOCATIONS);


//  export const data  = useQuery(GET_LOCATIONS);
//  export const error = useQuery(GET_LOCATIONS);
//  export const loading = useQuery(GET_LOCATIONS);