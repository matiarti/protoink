import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Heading6, colors, Heading3, Heading4 } from "../../theme";
import Icon from "react-native-vector-icons/AntDesign";

const screenWidth = Dimensions.get("window").width;
var cardWidth = screenWidth - 52;

if (screenWidth > 300) {
  cardWidth = screenWidth - 48;
}
if (screenWidth > 600) {
  cardWidth = (screenWidth - 72) / 2;
}
if (screenWidth > 1400) {
  cardWidth = (screenWidth - 100) / 4;
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

const Studio = (props) => (
  <Container>
    <Row>
      <Col>
        <CoverImage source={props.logo} />
      </Col>
      <Col style={{ alignSelf: "center" }}>
        <Heading4
          style={{
            color: colors.primary,
            marginLeft: 16,
            width: titleWidth,
            marginBottom: 8,
          }}
        >
          {props.title}
        </Heading4>

        <Heading6 style={{ color: colors.neutral3, marginLeft: 16 }}>
          {props.style}
        </Heading6>
      </Col>
      <Col
        style={{
          alignItems: "flex-end",
          position: "absolute",
          right: -4,
          top: 16,
        }}
      >
        <Row2>
          <Icon
            name="star"
            size={16}
            color={colors.accent}
            style={{ paddingRight: 4, marginTop: 4, paddingBottom: 4 }}
          />

          <Heading4 style={{ color: colors.accent, paddingBottom: 4 }}>
            {props.rating}
          </Heading4>
        </Row2>
        <Heading6 style={{ color: colors.neutral3, paddingBottom: 4 }}>
          200 avaliações
        </Heading6>
        <Heading6 style={{ color: colors.primary, paddingBottom: 4 }}>
          {props.location}
        </Heading6>
      </Col>
    </Row>
  </Container>
);

export default Studio;

const CoverImage = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 8px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.08);
`;

const Col = styled.View``;

const Row2 = styled.View`
  flex-direction: row;
`;

const Row = styled.View`
  padding-left: 16px;
  padding-top: 16px;
  padding-right: 16px;
  flex-direction: row;
  align-items: flex-start;
`;

const Container = styled.View`
  background: white;
  width: ${cardWidth};
  height: 100px;
  border-radius: 8px;
  margin-right: 16px;
  margin-top: 16px;
  padding-right: 24px;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.06);
`;
