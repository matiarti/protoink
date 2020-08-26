import * as React from "react";
import { ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import FavStudios from "./favourite/FavStudios";
import FavArtists from "./favourite/FavArtists";
import styled from "styled-components/native";
import { Heading1, Heading4, Link, colors } from "../theme";

function StudioTab() {
  return <FavStudios />;
}

function ArtistTab() {
  return <FavArtists />;
}

const Tab = createMaterialTopTabNavigator();

export default function FavScreen() {
  return (
    <Container>
      <ScrollView vertical={true} showsHorizontalScrollIndicator={false}>
        <Heading1
          style={{ paddingLeft: 24, paddingTop: 48, paddingBottom: 24 }}
        >
          Favoritos
        </Heading1>

        <Tab.Navigator>
          <Tab.Screen name="Estúdios" component={StudioTab} />
          <Tab.Screen name="Artistas" component={ArtistTab} />
        </Tab.Navigator>
      </ScrollView>
    </Container>
  );
}

FavScreen["navigationOptions"] = () => ({
  headerShown: false,
});

const Container = styled.View`
  background: ${colors.bg};
`;
