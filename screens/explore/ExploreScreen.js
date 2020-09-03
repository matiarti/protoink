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
import ExploreModal from "./ExploreModal";

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
          <ExploreModal />
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
