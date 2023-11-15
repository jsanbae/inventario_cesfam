
import { Client, cacheExchange, fetchExchange } from 'urql';

const graphqlClient = new Client({
  url: import.meta.env.VITE_APOLLO_SERVER,
  exchanges: [cacheExchange, fetchExchange],
});

export default graphqlClient;