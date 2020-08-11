import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import FavStudios from "./favourite/FavStudios";
import FavArtists from "./favourite/FavArtists";
import styled from "styled-components/native";

function StudioTab() {
  return <FavStudios />;
}

function ArtistTab() {
  return <FavArtists />;
}

const Tab = createMaterialTopTabNavigator();

export default function FavScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Estúdios" component={StudioTab} />
      <Tab.Screen name="Artistas" component={ArtistTab} />
    </Tab.Navigator>
  );
}

FavScreen["navigationOptions"] = () => ({
  headerShown: false,
});

const Heading1 = styled.Text`
  font-size: 24px;
  color: #2457db;
  font-weight: 700;
  line-height: 32px;
  padding: 16px 0px 16px 0px;
  width: 80%;
`;

const Row = styled.View`
  width: 100%;
  padding-left: 24px;
  padding-top: 8px;
  flex-direction: row;
  justify-content: space-between;
  background: #fff;
`;
