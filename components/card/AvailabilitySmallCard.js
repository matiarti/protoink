import React from "react";
import styled from "styled-components/native";

const AvailabitilySmallCard = (props) => (
  <Container>
    <Col>
      <Day>{props.day}</Day>
      <Month>{props.month}</Month>
      <Separator />
      <WeekDay>{props.weekDay}</WeekDay>
      <Time>{props.time}</Time>
    </Col>
  </Container>
);

export default AvailabitilySmallCard;

const Day = styled.Text`
  font-size: 28px;
  color: #565656;
`;

const Month = styled.Text`
  font-size: 20px;
  color: #939cb2;
  padding-bottom: 4px;
`;

const Separator = styled.View`
  border: 1px solid #e5eff3;
  margin-top: 8px;
  margin-bottom: 8px;
  width: 48px;
  height: 2px;
`;

const WeekDay = styled.Text`
  font-size: 10px;
  font-weight: 700;
  color: #939cb2;
  padding-bottom: 4px;
  padding-top: 4px;
`;

const Time = styled.Text`
  font-size: 10px;
  font-weight: 700;
  color: #939cb2;
`;

const Col = styled.View`
  flex-direction: column;
  padding-top: 16px;
  padding-bottom: 24px;
  align-items: center;
  justify-content: center;
  height: 164px;
`;

const Container = styled.View`
  background: white;
  width: 100px;
  border-radius: 8px;
  margin-right: 16px;
  margin-bottom: 16px;
  background: #f7f7fb;
`;
