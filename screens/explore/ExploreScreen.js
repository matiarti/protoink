import React from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Platform,
} from "react-native";
import styled from "styled-components/native";
import EventCard from "../components/card/EventCard";
import { Ionicons } from "@expo/vector-icons";
import LogoSvg from "../components/brand/LogoSymbol";
import Style from "../components/card/StyleCard";
import AvatarAPI from "../components/AvatarAPI";
import Explore from "../components/form/Explore";
import Button from "../components/button/Button.js";
import { useQuery, gql } from "@apollo/client";
import StudioLargeCard from "../components/card/StudioLargeCard";

function ExploreScreen({ navigation }) {
  return (
    <RootView>
      <Container>
        <ScrollView vertical={true} showsHorizontalScrollIndicator={false}>
          <SafeAreaView>
            <Row>
              <Explore />
            </Row>
          </SafeAreaView>
        </ScrollView>
      </Container>
    </RootView>
  );
}

ExploreScreen["navigationOptions"] = (screenProps) => ({
  title: "Explorar",
});

export default ExploreScreen;

const StudiosContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const RootView = styled.View`
  background: #fff;
  flex: 1;
`;

const Heading3 = styled.Text`
  font-size: 16px;
  color: #565656;
  font-weight: 600;
`;

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
`;

const TopBar = styled.View`
  padding-top: 8px;
  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 16px;
  flex-direction: row;
  justify-content: space-between;
  height: 64px;
`;

const Container = styled.View`
  background: #f0f3f5;
  flex: 1;
  border-radius: 10px;
`;

const events = [
  {
    key: "1",
    coverimage: require("../assets/logo.png"),
    title: "Flash Day para vender a COVID19 forever",
    location: "Tatuapé, São Paulo",
    subtitle: "a partir de",
    price: "R$150",
    attendees: "126",
  },
  {
    coverimage: require("../assets/logo.png"),
    title: "Flash Day para sobreviver COVID",
    location: "Tatuapé, São Paulo",
    subtitle: "a partir de",
    price: "R$150",
    attendees: "126",
  },
  {
    coverimage: require("../assets/logo.png"),
    title: "Flash Day para sobreviver COVID",
    location: "Tatuapé, São Paulo",
    subtitle: "a partir de",
    price: "R$150",
    attendees: "126",
  },
];

const buttons = [
  {
    key: "1",
    text: "Poste sua Ideia",
  },
];
