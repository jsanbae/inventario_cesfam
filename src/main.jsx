import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from 'src/context/AuthContext';
import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from "@chakra-ui/react";
import apolloClient from 'src/graphql/apolloClient';

// import graphqlClient from './graphql/graphqlClient';
// import { Provider } from 'urql';

import App from 'src/App';
import 'src/index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <Provider value={graphqlClient}>
  <AuthProvider>
    <ApolloProvider client={apolloClient}>
      <React.StrictMode>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </React.StrictMode>
    </ApolloProvider>
  </AuthProvider>
  ,
);
