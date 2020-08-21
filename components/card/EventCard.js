import React from "react";
import styled from "styled-components/native";
import { Heading4, Heading5, Heading6 } from "../../theme";
import colors from "../../theme/colors";
import Icon from "react-native-vector-icons/AntDesign";

const EventCard = (props) => (
  <Container style={{ elevation: 8, marginRight: 16 }}>
    <Row>
      <Col>
        <CoverImage source={props.coverimage} />
      </Col>
      <Col style={{ paddingLeft: 16 }}>
        <Heading5
          style={{
            color: colors.primary,
            width: 160,
            fontWeight: "bold",
          }}
        >
          {props.title}
        </Heading5>
        <Heading6>{props.location}</Heading6>
      </Col>
      <Col>
        <Heading6 style={{ paddingRight: 24 }}>{props.subtitle}</Heading6>
        <Heading4
          style={{
            color: colors.accent,
            width: 160,
            fontWeight: "bold",

            paddingRight: 24,
          }}
        >
          {props.price}
        </Heading4>
        <Row2 style={{ paddingTop: 4 }}>
          <Icon name="user" size={16} color={colors.primary} />
          <Heading6 style={{ paddingRight: 24 }}>{props.attendees}</Heading6>
        </Row2>
      </Col>
    </Row>
  </Container>
);

export default EventCard;

const Col = styled.View``;

const CoverImage = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 8px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.08);
`;

const Row = styled.View`
  padding-left: 16px;
  padding-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

const Row2 = styled.View`
  flex-direction: row;
`;

const Container = styled.View`
  background: ${colors.white};
  width: 315px;
  height: 100px;
  border-radius: 8px;
  margin: 16px 0px 16px 0px;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.06);
`;
