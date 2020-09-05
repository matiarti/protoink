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
  cardWidth = screenWidth - 48;
}
if (screenWidth > 600) {
  cardWidth = screenWidth - 48;
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

const SizeInfoCard = (props) => (
  <Container style={{ width: cardWidth }}>
    <Row>
      <Col style={{ alignSelf: "center", marginLeft: 8 }}>
        <SmallBody style={{ paddingBottom: 4 }}>Parte do Corpo: </SmallBody>
        <Heading2
          style={{
            color: colors.primary,
          }}
        >
          {props.title}
        </Heading2>
      </Col>
      <Col
        style={{
          alignItems: "flex-end",
          position: "absolute",
          right: -4,
          top: 16,
        }}
      >
        <SmallBody style={{ color: colors.secondary, paddingBottom: 4 }}>
          Tamanho
        </SmallBody>
        <Heading2 style={{ color: colors.accent, paddingBottom: 4 }}>
          {props.size}
        </Heading2>
      </Col>
    </Row>
  </Container>
);

export default SizeInfoCard;

const Col = styled.View``;

const Row = styled.View`
  padding-left: 16px;
  padding-top: 16px;
  padding-right: 16px;
  flex-direction: row;
  align-items: flex-start;
`;

const Container = styled.View`
  background: white;
  height: 100px;
  border-radius: 8px;
  margin-right: 16px;
  margin-top: 16px;
  padding-right: 24px;
  box-shadow: 16px 16px 30px rgba(0, 0, 0, 0.06);
`;
