import React from "react";
import { TouchableOpacity, StatusBar, ScrollView } from "react-native";
import styled from "styled-components/native";
import Button from "../components/button/Button.js";
import { useQuery, gql } from "@apollo/client";
import EventCard from "../components/card/EventCard";
import TopBarBack from "../components/topBar/TopBarBack.js";
import TopBar from "../components/topBar/TopBar.js";
import { Heading1, Heading4, Link, colors } from "../theme";

function ProfileScreen() {
  return (
    <Container>
      <ScrollView vertical={true}>
        <TopBar />

        <Heading1
          style={{
            paddingLeft: 24,
            paddingTop: 8,
            paddingBottom: 8,
            color: colors.secondary,
          }}
        >
          Nome Sobrenome
        </Heading1>
      </ScrollView>
    </Container>
  );
}

export default ProfileScreen;

const Row = styled.View`
  width: 100%;

  padding-top: 8px;
`;

const Container = styled.View`
  background: #f0f3f5;
  flex: 1;
  border-radius: 10px;
`;
