import React from "react";
import styled from "styled-components/native";

const BookingCard = (props) => (
  <Container>
    <Row>
      <Col>
        <CoverImage source={props.image} />
      </Col>
      <Col
        style={{
          marginLeft: -80,
        }}
      >
        <Title>{props.title}</Title>
        <Subtitle>
          {props.style}, {props.bodypart}
        </Subtitle>
      </Col>
      <Col
        style={{
          marginLeft: -60,
          width: 80,
        }}
      >
        <Date>{props.date}</Date>
        <Size>{props.size}</Size>
        <Location>{props.location}</Location>
      </Col>
    </Row>
  </Container>
);

export default BookingCard;

const Subtitle = styled.Text`
  color: #939cb2;
  font-weight: 700;
  font-size: 8px;
  padding-top: 8px;
  text-align: left;
`;

const Size = styled.Text`
  color: #e46399;
  font-weight: 700;
  font-size: 14px;
  padding-top: 8px;
  text-align: right;
`;

const Date = styled.Text`
  color: #939cb2;
  font-weight: 700;
  font-size: 8px;
  line-height: 16px;
  text-align: right;
`;

const Style = styled.Text`
  color: #939cb2;
  font-weight: 700;
  font-size: 8px;
  line-height: 16px;
  text-align: left;
`;

const Col = styled.View``;

const Col2 = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  padding-bottom: 4px;
  width: 80px;
`;

const Location = styled.Text`
  color: #939cb2;
  font-weight: 500;
  font-size: 10px;
  line-height: 18px;
  text-align: right;
`;

const Title = styled.Text`
  color: #2457db;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  width: 120px;
`;

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

const Container = styled.View`
  background: white;
  width: 315px;
  height: 100px;
  border-radius: 8px;
  margin-right: 16px;
  margin-top: 16px;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.06);
`;
