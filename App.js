import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import Card from "./components/Card";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <TopBar>
          <Logo source={require("./assets/logo.svg")} />
          <Icon source={require("./assets/bell.svg")} />
        </TopBar>
        <Cover>
          <Name>Olá Cliente</Name>
          <Title>Encontre o lugar perfeito para fazer aquela tattoo. </Title>
        </Cover>
        <Card />
        <Card />
        <Card />
      </Container>
    );
  }
}

const Icon = styled.Image`
  width: 40px;
  height: 40px;
`;

const Logo = styled.Image`
  width: 40px;
  height: 40px;
  background: transparent;
`;

const Title = styled.Text`
  font-size: 20px;
  color: #2457db;
  font-weight: 700;
  line-height: 28px;
  padding-top: 40px;
  width: 80%;
`;

const Name = styled.Text`
  font-size: 16px;
  color: #0e0e0e;
  font-weight: 700;
`;

const Cover = styled.View`
  width: 100%;
  padding-left: 24px;
  padding-top: 64px;
`;

const TopBar = styled.View`
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
  flex-direction: row;
  justify-content: space-between;
  height: 40px;
`;

const Container = styled.View`
  background: #f0f3f5;
  flex: 1;
`;
