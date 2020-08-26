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
import { Heading1, Heading4, Link, colors } from "../theme";
import StyleRow from "../features/StyleRow";
import TopBar from "../components/topBar/TopBar";
import CTAList from "../features/CTAList";

const screenWidth = Dimensions.get("window").width;
var titleWidth = screenWidth - 40;

if (screenWidth > 800) {
  titleWidth = screenWidth - 320;
}

function HomeScreen({ navigation }) {
  return (
    <RootView>
      <Container>
        <ScrollView vertical={true} showsHorizontalScrollIndicator={false}>
          <SafeAreaView>
            <TopBar />
            <Avatar />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Explore");
              }}
              style={{ zIndex: 3 }}
            >
              <TextField
                placeholder="Estado, Cidade ou Região"
                icon="search1"
                autocomplete="off"
                style={{ zIndex: 2 }}
              />
            </TouchableOpacity>
            <Heading1
              style={{
                width: titleWidth,
                paddingTop: 24,
                paddingBottom: 16,
                paddingLeft: 24,
              }}
            >
              Encontre o lugar perfeito para fazer <Link>aquela tattoo.</Link>
            </Heading1>

            <CTAList />

            <Heading4 style={{ color: colors.secondary, paddingLeft: 24 }}>
              Qual estilo da vez?
            </Heading4>

            <StyleRow />

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

const Container = styled.View`
  background: ${colors.bg};
  flex: 1;
  border-radius: 10px;
  width: 100%;

  padding-top: 8px;
`;

const buttons = [
  {
    key: "1",
    text: "Poste sua Ideia",
  },
];
