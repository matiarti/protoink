import React from "react";
import styled from "styled-components/native";

const Studio = (props) => (
  <Container>
    <Row>
      <Col>
        <Image source={props.image} resizeMode="contain" />
      </Col>
      <Col>
        <Text>{props.text}</Text>
        <Subtitle>{props.subtitle}</Subtitle>
      </Col>
    </Row>
  </Container>
);

export default Studio;

const Col = styled.View`
  padding-right: 4px;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Container = styled.View`
  flex-direction: row;
  padding: 16px 16px 16px;
  margin-top: 16px;
  margin-right: 16px;
  background: #ffffff;
  height: 72px;
  border-radius: 8px;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.06);
`;
const Image = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 8px;
`;
const Text = styled.Text`
  font-weight: 600;
  font-size: 14px;
  margin-left: 8px;
  color: #2457db;
`;

const Subtitle = styled.Text`
  font-weight: 500;
  font-size: 10px;
  margin-left: 8px;
  color: #939cb2;
  padding-top: 4px;
`;
