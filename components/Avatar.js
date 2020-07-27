import React from "react";
import styled from "styled-components/native";

const Avatar = (props) => (
  <Container>
    <Row>
      <Col>
        <Image source={props.image} resizeMode="contain" />
      </Col>
      <Col>
        <Name>{props.name}</Name>
      </Col>
    </Row>
  </Container>
);

export default Avatar;

const Col = styled.View`
  padding-right: 4px;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.View`
  flex-direction: row;
  height: 40px;
`;
const Image = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;
const Name = styled.Text`
  margin-left: 8px;
  font-size: 20px;
  color: #565656;
  font-weight: 700;
`;
