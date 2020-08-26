import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { Heading4, colors } from "../../theme";

const screenWidth = Dimensions.get("window").width;
var cardWidth = screenWidth - 52;

if (screenWidth > 300) {
  cardWidth = (screenWidth - 24) / 2;
}
if (screenWidth > 500) {
  cardWidth = (screenWidth - 48) / 4;
}
if (screenWidth > 1200) {
  cardWidth = (screenWidth - 120) / 6;
}

const Style = (props) => (
  <Container style={{ elevation: 8, marginBottom: 16, marginRight: 16 }}>
    <Cover>
      <Heading4
        style={{
          color: colors.white,
          marginTop: 48,
          marginLeft: 16,
          zIndex: 2,
        }}
      >
        {props.name}
      </Heading4>
      <Image source={props.image} />
    </Cover>
  </Container>
);

export default Style;

const Cover = styled.View`
  width: 100%;
  height: 80px;
  border-radius: 14px;
  overflow: hidden;
`;

const Container = styled.View`
  background-color: #fff;
  width: ${cardWidth};
  height: 80px;
  border-radius: 14px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  margin-top: 16px;
`;
const Image = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
