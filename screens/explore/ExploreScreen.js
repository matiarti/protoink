import React from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Platform,
} from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Heading1, Heading4, Link, colors } from "../../theme";
import TopBarBack from "../../components/topBar/TopBarBack";
import ExploreStudios from "./ExploreStudios";

function StudioTab() {
  return <ExploreStudios />;
}

function ArtistTab() {
  return <ExploreStudios />;
}

const Tab = createMaterialTopTabNavigator();

export default function ExploreScreen() {
  return (
    <Container>
      <ScrollView vertical={true} showsHorizontalScrollIndicator={false}>
        <SafeAreaView>
          <TopBarBack />
          <Heading1
            style={{ paddingLeft: 24, paddingTop: 48, paddingBottom: 24 }}
          >
            Explorar
          </Heading1>
          <Tab.Navigator mode="modal">
            <Tab.Screen name="Estúdios" component={StudioTab} />
            <Tab.Screen name="Artistas" component={ArtistTab} />
          </Tab.Navigator>
        </SafeAreaView>
      </ScrollView>
    </Container>
  );
}

const Container = styled.View`
  background: ${colors.white};
  flex: 1;
  border-radius: 10px;
`;
