import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

var cardWidth = screenWidth - 120;
if (screenWidth > 300) {
  cardWidth = (screenWidth - 80) / 3;
}

function IdeaRefGallery() {
  return (
    <Row style={{ paddingTop: 8 }}>
      <ImageRef source={require("../assets/img-ref-1.jpg")} />
      <ImageRef source={require("../assets/img-ref-2.jpg")} />
      <ImageRef source={require("../assets/img-ref-3.jpg")} />
    </Row>
  );
}

export default IdeaRefGallery;

const ImageRef = styled.Image`
  width: ${cardWidth};
  height: ${cardWidth};
  border-radius: 16px;
  margin-right: 16px;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;
