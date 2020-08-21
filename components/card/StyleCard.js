import React from "react";
import styled from "styled-components/native";
import { Heading2 } from "../../theme";
import colors from "../../theme/colors";

const Style = (props) => (
  <Container style={{ elevation: 8, marginBottom: 16, marginRight: 16 }}>
    <Cover>
      <Heading2
        style={{
          color: colors.white,
          marginTop: 72,
          marginLeft: 16,
          zIndex: 2,
        }}
      >
        {props.name}
      </Heading2>
      <Image source={props.image} />
    </Cover>
  </Container>
);

export default Style;

const Col = styled.View`
  padding-right: 4px;
`;

const Row = styled.View`
  flex-direction: column;
  justify-content: space-between;
`;

const Cover = styled.View`
  width: 100%;
  height: 120px;
  border-radius: 14px;
  overflow: hidden;
`;

const Container = styled.View`
  background-color: #fff;
  width: 280px;
  height: 120px;
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
const Name = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  width: 170px;
  margin-top: 72px;
  margin-left: 16px;
  z-index: 2;
`;
