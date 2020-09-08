import * as React from "react";
import { ScrollView, SafeAreaView, TouchableOpacity, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import FavStudios from "./favourite/FavStudios";
import FavArtists from "./favourite/FavArtists";
import styled from "styled-components/native";
import { Heading1, Heading4, Link, colors } from "../theme";
import TopBar from "../components/topBar/TopBar";
import { StatusBar } from "expo-status-bar";

function StudioTab() {
  return <FavStudios />;
}

function ArtistTab() {
  return <FavArtists />;
}

const Tab = createMaterialTopTabNavigator();

export default function FavScreen() {
  return (
    <ScrollView vertical={true} showsHorizontalScrollIndicator={false}>
      <Container>
        <StatusBar />
        <SafeAreaView>
          <TopBar />
          <Heading1
            style={{
              paddingLeft: 24,
              paddingTop: 8,
              paddingBottom: 24,
              color: colors.secondary,
            }}
          >
            Favoritos
          </Heading1>

          <Tab.Navigator
            animationEnabled={false}
            tabBarOptions={{
              labelStyle: { fontSize: 11, marginTop: -2 },
              activeTintColor: colors.white,
              inactiveTintColor: colors.neutral3,
              indicatorStyle: {
                backgroundColor: colors.accent,
                marginLeft: 4,

                borderRadius: 8,
                height: null,
                top: 6,
                marginBottom: 4,
              },
              style: {
                backgroundColor: colors.neutral1,
                height: 40,
                borderRadius: 8,
                marginLeft: 24,
                marginRight: 24,
              },
            }}
          >
            <Tab.Screen name="Estúdios" component={StudioTab} />
            <Tab.Screen name="Artistas" component={ArtistTab} />
          </Tab.Navigator>
        </SafeAreaView>
      </Container>
    </ScrollView>
  );
}

FavScreen["navigationOptions"] = () => ({
  headerShown: false,
});

const Container = styled.View`
  background: ${colors.bg};
`;
