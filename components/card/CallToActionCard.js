import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { Heading2, Heading4, Heading5, Heading6 } from "../../theme";
import colors from "../../theme/colors";
import Icon from "react-native-vector-icons/AntDesign";

const screenWidth = Dimensions.get("window").width;
var cardWidth = screenWidth - 52;

if (screenWidth > 300) {
  cardWidth = screenWidth - 48;
}
if (screenWidth > 500) {
  cardWidth = (screenWidth - 48) / 1;
}
if (screenWidth > 1200) {
  cardWidth = (screenWidth - 120) / 1;
}

var titleWidth = cardWidth - 160;
if (screenWidth > 300) {
  titleWidth = cardWidth - 100;
}
if (screenWidth > 400) {
  titleWidth = cardWidth - 140;
}
if (screenWidth > 1200) {
  titleWidth = cardWidth - 400;
}

const CallToActionCard = (props) => (
  <Container style={{ elevation: 8, marginRight: 16 }}>
    <Col>
      <Heading5
        style={{ paddingLeft: 24, marginBottom: 8, color: colors.white }}
      >
        {props.location}
      </Heading5>
      <Image source={props.image} />

      <Row>
        <Heading2
          style={{
            color: colors.white,
            paddingLeft: 24,
            paddingBottom: 16,

            width: titleWidth,
          }}
        >
          {props.title}
        </Heading2>
      </Row>
    </Col>

    <Content>
      <Heading5 style={{ color: colors.neutral3, flexWrap: "wrap" }}>
        {props.description}
      </Heading5>
    </Content>
  </Container>
);

export default CallToActionCard;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const Container = styled.View`
  width: ${cardWidth};
  height: 200px;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  margin: 8px 0px;
`;

const Col = styled.View`
  height: 122px;
  border-top-right-radius: 14px;
  border-top-left-radius: 14px;
  overflow: hidden;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.9);
  width: ${cardWidth};
`;

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.6;
`;

const Content = styled.View`
  padding: 24px;
  width: ${cardWidth};
  justify-content: center;
`;
