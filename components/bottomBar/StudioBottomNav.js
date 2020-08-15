import React from "react";
import styled from "styled-components/native";
import Button from "../button/ButtonCta.js";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
var barWidth = screenWidth;
if (screenWidth > 300) {
  barWidth = screenWidth;
}

function StudioBottomNav({ navigation, props }) {
  return (
    <Container style={{ elevation: 16 }}>
      <Row>
        <Text>Veja disponibilidade</Text>
        <Row>
          <Ionicons
            name="ios-star"
            size={16}
            color="#2457DB"
            style={{ paddingRight: 4 }}
          />

          <Rating>4.8</Rating>

          <RatingAmount>(220)</RatingAmount>
        </Row>

        {buttons.map((button, index) => (
          <Button key={index} text={button.text} />
        ))}
      </Row>
    </Container>
  );
}

export default StudioBottomNav;

const Rating = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #2457db;
`;

const RatingAmount = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #939cb2;
  padding-left: 4px;
`;

const Text = styled.Text`
  font-size: 15px;
  color: #565656;
  margin-left: 24px;
  font-weight: 600;
`;

const Row = styled.View`
  padding-top: 16px;
  flex-direction: row;
  padding-bottom: 16px;
  align-items: center;
  justify-content: space-between;
  height: 64px;
`;

const Container = styled.View`
  background: white;
  width: ${barWidth};
  box-shadow: 0px -5px 16px rgba(0, 0, 0, 0.08);
  background: #f7f7fb;
`;

const buttons = [
  {
    key: "1",
    text: "Agendar",
  },
];
