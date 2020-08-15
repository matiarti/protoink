import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { InMemoryCache, ApolloProvider, HttpLink } from "@apollo/client";
import ApolloClient from "apollo-boost";
import AppNav from "./navigator/AppNav";
import DMSans from "./assets/DMSans-Regular.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: DMSans;
    src: url(${DMSans});
  }
`;

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `https://graphql.contentful.com/content/v1/spaces/o6s1ytbmzdxj`,
  credentials: "same-origin",
  headers: {
    Authorization: `Bearer kXT1SoNx7qypidsaJWiYEcIBt_WfUOwli_KlA9zkPgE`,
  },
});

const App = () => (
  <ThemeProvider theme={{ fontFamily: "DM Sans" }}>
    <ApolloProvider client={client}>
      <GlobalStyle />
      <AppNav />
    </ApolloProvider>
  </ThemeProvider>
);

export default App;
