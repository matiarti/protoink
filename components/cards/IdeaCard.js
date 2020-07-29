import React from "react";
import styled from "styled-components/native";

const IdeaCard = (props) => (
  <Container>
    <Row>
      <Col>
        <CoverImage source={props.coverimage} />
      </Col>
      <Col>
        <Title>{props.title}</Title>
        <Location>{props.location}</Location>
      </Col>
      <Col>
        <Subtitle>{props.subtitle}</Subtitle>
        <Price>{props.price}</Price>
        <Attendees>{props.attendees}</Attendees>
      </Col>
    </Row>
  </Container>
);

export default IdeaCard;

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
  padding-top: 4px;
  width: 170px;
`;

const Title = styled.Text`
  color: #2457db;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  padding-left: 16px;
  width: 160px;
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
