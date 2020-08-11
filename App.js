import React from "react";
import { InMemoryCache, ApolloProvider, HttpLink } from "@apollo/client";
import ApolloClient from "apollo-boost";
import Navigator from "./navigator/StackNav";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigator/AppNavigator";
import AppNav from "./navigator/AppNav";

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
    <AppNav />
  </ApolloProvider>
);

export default App;
