import React from "react";
import AppNavigator from "./navigator/AppNavigator";
import { InMemoryCache, ApolloProvider, HttpLink } from "@apollo/client";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `https://graphql.contentful.com/content/v1/spaces/o6s1ytbmzdxj`,
  credentials: "same-origin",
  headers: {
    Authorization: `Bearer kXT1SoNx7qypidsaJWiYEcIBt_WfUOwli_KlA9zkPgE`,
  },
});

const App = () => (
  <ApolloProvider client={client}>
    <AppNavigator />
  </ApolloProvider>
);

export default App;
