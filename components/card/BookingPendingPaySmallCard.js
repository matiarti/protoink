import React from "react";
import styled from "styled-components/native";
import { Dimensions, View, TouchableOpacity } from "react-native";

import {
  Heading6,
  Heading5,
  colors,
  Heading3,
  Heading4,
  Link,
} from "../../theme";
import Icon from "react-native-vector-icons/AntDesign";
import IndicatorSmall from "../indicator/IndicatorSmall";

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

const BookingPendingPaySmallCard = (props) => (
  <Container style={{ width: cardWidth }}>
    <Row>
      <Col>
        <CoverImage source={props.image} />
      </Col>
      <Col style={{ alignSelf: "center" }}>
        <Heading4
          style={{
            color: colors.primary,
            marginLeft: 16,
            width: titleWidth,
            marginBottom: 4,
          }}
        >
          {props.title}
        </Heading4>

        <Heading6 style={{ color: colors.secondary, marginLeft: 16 }}>
          <Link>{props.studio}</Link>, {props.location}
        </Heading6>

        <Heading6 style={{ color: colors.neutral3, marginLeft: 16 }}>
          {props.bodypart}, {props.style}
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
            name="calendar"
            size={12}
            color={colors.neutral3}
            style={{ paddingRight: 6, marginTop: 8, paddingBottom: 4 }}
          />

          <Heading5
            style={{ color: colors.neutral3, paddingBottom: 4, paddingTop: 4 }}
          >
            {props.date}
          </Heading5>
        </Row2>
        <Heading4
          style={{ color: colors.accent, paddingBottom: 4, paddingTop: 4 }}
        >
          {props.price}
        </Heading4>

        <Row2>
          <View style={{ paddingTop: 4, paddingRight: 4 }}>
            <IndicatorSmall status={colors.warning} />
          </View>
          <Heading6 style={{ color: colors.warning, paddingBottom: 8 }}>
            Pag. Pendente
          </Heading6>
        </Row2>
      </Col>
    </Row>
  </Container>
);

export default BookingPendingPaySmallCard;

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

  height: 100px;
  border-radius: 8px;
  margin-right: 16px;
  margin-top: 16px;
  padding-right: 24px;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.06);
`;
