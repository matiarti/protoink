import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import Card from "./components/Card";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <TitleBar>
          <Avatar source={require("./assets/logo.png")} />
          <Title>Protoink</Title>
          <Name>Protoink</Name>
        </TitleBar>
        <Subtitle>Continue Tattooing</Subtitle>
        <Card />
      </Container>
    );
  }
}

const Subtitle = styled.Text`
color: 
font-weight: 800;
font-size: 10px;
margin-top: 24px;
margin-left: 24px;
text-transform: uppercase;
`;

const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  background: black;
  border-radius: 24px;
  margin-left: 24px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Container = styled.View`
  background: #f0f3f5;
  flex: 1;
`;

const Title = styled.Text`
  font-size: 20px;
  color: #000000;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 16px;
  color: #0e0e0e;
  font-weight: 500;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 24px;
  padding-left: 80px;
`;
