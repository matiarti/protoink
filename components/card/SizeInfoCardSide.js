import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Heading6, colors, Heading2, Heading4, SmallBody } from "../../theme";
import Icon from "react-native-vector-icons/AntDesign";

const screenWidth = Dimensions.get("window").width;
var cardWidth = screenWidth - 40;

if (screenWidth > 300) {
  cardWidth = (screenWidth - 48) / 2;
}
if (screenWidth > 600) {
  cardWidth = (screenWidth - 140) / 2;
}
if (screenWidth > 1400) {
  cardWidth = screenWidth - 48;
}

var titleWidth = cardWidth;
if (screenWidth > 300) {
  titleWidth = 140;
}
if (screenWidth > 500) {
  titleWidth = 140;
}
if (screenWidth > 1400) {
  titleWidth = 140;
}

const SizeInfoCardSide = (props) => (
  <Container style={{ width: cardWidth, justifyContent: "center" }}>
    <Col>
      <SmallBody style={{ color: colors.neutral3, paddingBottom: 8 }}>
        Parte do Corpo:{" "}
      </SmallBody>
      <Heading2
        style={{
          color: colors.primary,
        }}
      >
        {props.title}
      </Heading2>

      <SmallBody
        style={{ color: colors.neutral3, paddingBottom: 4, paddingTop: 16 }}
      >
        Tamanho
      </SmallBody>
      <Heading2 style={{ color: colors.accent, paddingBottom: 4 }}>
        {props.size}
      </Heading2>
    </Col>
  </Container>
);

export default SizeInfoCardSide;

const Col = styled.View`
  padding-left: 16px;
  padding-right: 16px;
  flex-direction: column;
  align-items: flex-start;
`;

const Container = styled.View`
  background: white;
  height: ${cardWidth};
  border-radius: 8px;
  margin-right: 16px;
  margin-top: 8px;
  padding-right: 24px;
  box-shadow: 16px 16px 30px rgba(0, 0, 0, 0.06);
`;
