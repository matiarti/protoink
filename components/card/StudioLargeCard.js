import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;
var cardWidth = screenWidth - 52;

if (screenWidth > 300) {
  cardWidth = screenWidth - 52;
}
if (screenWidth > 500) {
  cardWidth = (screenWidth - 72) / 2;
}
if (screenWidth > 1200) {
  cardWidth = (screenWidth - 120) / 4;
}

var titleWidth = cardWidth - 160;
if (screenWidth > 300) {
  titleWidth = cardWidth - 80;
}

const StudioLargeCard = (props) => (
  <Container style={{ elevation: 8 }}>
    <Col>
      <Image source={props.image} />
      <Row>
        <Title>{props.title}</Title>
        <Row2>
          <Ionicons
            name="ios-star"
            size={16}
            color="#fff"
            style={{ paddingRight: 4 }}
          />
          <Rating>{props.rating}</Rating>
        </Row2>
      </Row>
    </Col>

    <Content>
      <Logo source={props.logo} />
      <Caption>{props.location}</Caption>
      <Style>{props.style}</Style>
    </Content>
  </Container>
);

export default StudioLargeCard;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const Row2 = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

const Container = styled.View`
  width: ${cardWidth};
  height: 335px;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  margin: 20px 10px;
`;

const Col = styled.View`
  height: 260px;
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

const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: 700;
  margin-top: 4px;
  margin-left: 24px;
  padding-right: 24px;
  margin-bottom: 24px;
  width: ${titleWidth};
  z-index: 2;
  text-align: left;
`;

const Rating = styled.Text`
  font-size: 15px;
  color: #fff;
  font-weight: 500;
  z-index: 3;
  text-align: right;
  padding-right: 8px;
  margin-right: -16px;
  margin-bottom: 16px;
`;

const Content = styled.View`
  padding-left: 64px;
  justify-content: center;
  height: 72px;
`;

const Logo = styled.Image`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 24px;
  left: 20px;
  border-radius: 16px;
`;

const Caption = styled.Text`
  font-size: 14px;
  color: #3c4560;
  font-weight: 500;
  max-width: 260px;
`;

const Style = styled.Text`
  font-size: 12px;
  color: #939cb2;
  font-weight: 500;
  margin-top: 4px;
`;
