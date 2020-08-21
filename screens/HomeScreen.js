import React from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import styled from "styled-components/native";
import Avatar from "../components/avatar/Avatar";
import TextField from "../components/input/TextField";
import Button from "../components/button/Button.js";
import { Heading1, Heading4, colors } from "../theme";
import StyleRow from "../features/StyleRow";
import TopBar from "../components/topBar/TopBar";
import EventRow from "../features/EventRow";
import StudioList from "../features/StudioList";

const screenWidth = Dimensions.get("window").width;
var titleWidth = screenWidth - 40;

if (screenWidth > 800) {
  titleWidth = screenWidth - 320;
}

function HomeScreen() {
  return (
    <RootView>
      <Container>
        <ScrollView vertical={true} showsHorizontalScrollIndicator={false}>
          <SafeAreaView>
            <TopBar />

            <Avatar />

            <TextField
              placeholder="Estado, Cidade ou Região"
              icon="search1"
              autocomplete="off"
            />

            <Heading1
              style={{ width: titleWidth, paddingTop: 24, paddingBottom: 24 }}
            >
              Encontre o lugar perfeito para fazer aquela tattoo.
            </Heading1>

            <Heading4 style={{ color: colors.neutral3 }}>
              Qual estilo da vez?
            </Heading4>

            <StyleRow />

            <Heading4 style={{ color: colors.neutral3 }}>
              Eventos recentes
            </Heading4>

            <EventRow />

            <StudioList />

            <TouchableOpacity>
              {buttons.map((button, index) => (
                <Button key={index} text={button.text} />
              ))}
            </TouchableOpacity>
          </SafeAreaView>
        </ScrollView>
      </Container>
    </RootView>
  );
}

HomeScreen["navigationOptions"] = (screenProps) => ({
  headerShown: false,
});

export default HomeScreen;

const RootView = styled.View`
  background: #fff;
  flex: 1;
`;

const Row = styled.View`
  width: 100%;
  padding-left: 24px;
  padding-top: 8px;
`;

const Container = styled.View`
  background: ${colors.neutral1};
  flex: 1;
  border-radius: 10px;
  width: 100%;
  padding-left: 24px;
  padding-top: 8px;
`;

const buttons = [
  {
    key: "1",
    text: "Poste sua Ideia",
  },
];
