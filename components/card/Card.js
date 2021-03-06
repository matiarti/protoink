import React from "react";
import styled from "styled-components/native";

const Card = (props) => (
  <Container>
    <Row>
      <Col>
        <CoverImage source={require("../assets/logo.png")} />
      </Col>
      <Col>
        <Title>Flash Day para sobreviver COVID</Title>
        <Location>Tatuapé, São Paulo - SP</Location>
      </Col>
      <Col>
        <Subtitle>a partir de</Subtitle>
        <Price>R$150</Price>
        <Attendees>126</Attendees>
      </Col>
    </Row>
  </Container>
);

export default Card;

const Attendees = styled.Text`
  color: #939cb2;
  font-weight: 700;
  font-size: 8px;
  padding-top: 8px;
  text-align: right;
  padding-right: 24px;
`;

const Price = styled.Text`
  color: #e46399;
  font-weight: 700;
  font-size: 14px;
  padding-top: 8px;
  text-align: right;
  padding-right: 24px;
`;

const Subtitle = styled.Text`
  color: #939cb2;
  font-weight: 700;
  font-size: 8px;
  line-height: 16px;
  text-align: right;
  padding-right: 24px;
`;

const Col = styled.View``;

const Location = styled.Text`
  color: #939cb2;
  font-weight: 500;
  font-size: 10px;
  line-height: 18px;
  padding-left: 16px;
  padding-top: 8px;
  width: 170px;
`;

const Title = styled.Text`
  color: #2457db;
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
  padding-left: 16px;
  width: 170px;
`;

const CoverImage = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 8px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08);
`;

const Row = styled.View`
  padding-left: 16px;
  padding-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

const Container = styled.View`
  background: white;
  width: 315px;
  height: 100px;
  border-radius: 4px;
  margin-left: 24px;
  margin-top: 24px;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.06);
`;
