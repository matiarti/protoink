import React from "react";
import styled from "styled-components/native";
import { Dimensions, View } from "react-native";
import { Heading2, Heading4, Heading5, Heading6 } from "../../theme";
import colors from "../../theme/colors";
import Icon from "react-native-vector-icons/AntDesign";
import Heart from "../icon/Heart";

const screenWidth = Dimensions.get("window").width;
var cardWidth = screenWidth - 52;

if (screenWidth > 300) {
  cardWidth = screenWidth - 48;
}
if (screenWidth > 500) {
  cardWidth = (screenWidth - 72) / 2;
}
if (screenWidth > 1200) {
  cardWidth = (screenWidth - 120) / 4;
}

var titleWidth = cardWidth - 160;
if (screenWidth > 300) {
  titleWidth = cardWidth - 92;
}

const ArtistLargeCard = (props) => (
  <Container style={{ elevation: 8, marginRight: 16 }}>
    <Col>
      <Image source={props.image} />
      <Row>
        <Heading2
          style={{
            color: colors.white,
            paddingLeft: 24,
            paddingBottom: 24,

            width: titleWidth,
          }}
        >
          {props.title}
        </Heading2>
        <Row2>
          <Icon
            name="star"
            size={16}
            color={colors.white}
            style={{ paddingRight: 4, marginTop: 4 }}
          />

          <Heading4 style={{ marginBottom: 24, color: colors.white }}>
            {props.rating}
          </Heading4>
        </Row2>
      </Row>
    </Col>

    <Content>
      <Logo source={props.logo} />
      <Heading4>{props.location}</Heading4>
      <Heading5 style={{ color: colors.neutral3 }}>{props.style}</Heading5>
      <View style={{ position: "absolute", top: 24, right: 24 }}>
        <Heart size={20} />
      </View>
    </Content>
  </Container>
);

export default ArtistLargeCard;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const Row2 = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-left: 24px;
`;

const Container = styled.View`
  width: ${cardWidth};
  height: 335px;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  margin: 20px 0px;
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
