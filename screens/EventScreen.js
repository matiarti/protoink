import React from "react";
import { TouchableOpacity, StatusBar } from "react-native";
import styled from "styled-components/native";
import Button from "../components/Button.js";

function EventScreen({ navigation }) {
  const event = navigation.getParam("event");

  return (
    <Container>
      <StatusBar hidden />
      <Cover>
        <Image source={event.coverimage} />
      </Cover>
      <Text>{event.title}</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Row>
          {buttons.map((button, index) => (
            <Button key={index} text={button.text} />
          ))}
        </Row>
      </TouchableOpacity>
    </Container>
  );
}
export default EventScreen;

const Container = styled.View`
  flex: 1;
`;

const Cover = styled.View`
  height: 375px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Text = styled.Text`
  position: absolute;
  top: 80px;
  left: 24px;
  width: 170px;
  font-size: 24px;
  font-weight: 700;
  color: #fff;
`;

const Row = styled.View`
  width: 100%;
  padding-left: 24px;
  padding-top: 8px;
`;

const buttons = [
  {
    key: "1",
    text: "Close",
  },
];
