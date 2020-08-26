import React from "react";
import { InMemoryCache, ApolloProvider } from "@apollo/client";
import ApolloClient from "apollo-boost";
import SignOutStack from "./navigator/SignOutStack";
import SignInStack from "./navigator/SignInStack";
import { AppLoading } from "expo";
import {
  useFonts,
  DMSans_400Regular,
  DMSans_400Regular_Italic,
  DMSans_500Medium,
  DMSans_500Medium_Italic,
  DMSans_700Bold,
  DMSans_700Bold_Italic,
} from "@expo-google-fonts/dm-sans";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `https://graphql.contentful.com/content/v1/spaces/o6s1ytbmzdxj`,
  credentials: "same-origin",
  headers: {
    Authorization: `Bearer kXT1SoNx7qypidsaJWiYEcIBt_WfUOwli_KlA9zkPgE`,
  },
});

export default function App() {
  let [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_400Regular_Italic,
    DMSans_500Medium,
    DMSans_500Medium_Italic,
    DMSans_700Bold,
    DMSans_700Bold_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ApolloProvider client={client}>
        <SignOutStack />
      </ApolloProvider>
    );
  }
}
