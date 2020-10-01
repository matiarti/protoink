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
import UserList from "../components/list/UserList";

const screenWidth = Dimensions.get("window").width;
var titleWidth = screenWidth - 40;

if (screenWidth > 800) {
  titleWidth = screenWidth - 320;
}

function MessageScreen({ navigation }) {
  return (
    <RootView>
      <Container>
        <ScrollView vertical={true} showsHorizontalScrollIndicator={false}>
          <SafeAreaView>
            <TopBar />
            <Heading1
              style={{
                paddingLeft: 24,
                paddingTop: 8,
                paddingBottom: 8,
                color: colors.secondary,
              }}
            >
              Mensagens
            </Heading1>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Message");
              }}
              style={{ zIndex: 3 }}
            >
              <TextField
                placeholder="Pesquisar"
                icon="search1"
                autocomplete="off"
                style={{ zIndex: 2 }}
              />
            </TouchableOpacity>
            <UserList />
          </SafeAreaView>
        </ScrollView>
      </Container>
    </RootView>
  );
}

export default MessageScreen;

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
