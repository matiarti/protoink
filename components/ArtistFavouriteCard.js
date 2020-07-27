import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const ArtistFavourite = (props) => (
  <Container>
    <Row>
      <Col>
        <CoverImage source={props.coverimage} />
      </Col>
      <Col>
        <Title>{props.title}</Title>
        <Location>{props.location}</Location>
      </Col>
      <Col
        style={{
          marginLeft: -48,
        }}
      >
        <Row2>
          <Ionicons
            name="ios-star"
            size={16}
            color="#2457db"
            style={{ paddingRight: 4 }}
          />
          <Rating>{props.rating}</Rating>
        </Row2>
        <Row2>
          <Subtitle>{props.subtitle}</Subtitle>
        </Row2>
        <Row2>
          <TouchableOpacity style={{ paddingTop: 4 }}>
            <Ionicons name="ios-heart" size={16} color="#2457db" />
          </TouchableOpacity>
        </Row2>
      </Col>
    </Row>
  </Container>
);

export default ArtistFavourite;

const Rating = styled.Text`
  color: #e46399;
  font-weight: 700;
  font-size: 14px;
  text-align: right;
`;

const Subtitle = styled.Text`
  color: #939cb2;
  font-weight: 700;
  font-size: 8px;
  line-height: 16px;
  text-align: right;
`;

const Location = styled.Text`
  color: #939cb2;
  font-weight: 500;
  font-size: 10px;
  line-height: 18px;
  margin-right: 16px;
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

const Col = styled.View``;

const Row2 = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  padding-bottom: 4px;
  width: 80px;
`;

const Row = styled.View`
  padding-left: 16px;
  padding-top: 16px;
  padding-right: 16px;
  flex-direction: row;
  align-items: center;
`;

const Container = styled.View`
  background: white;
  width: 315px;
  height: 100px;
  border-radius: 8px;
  margin-right: 16px;
  margin-top: 16px;
  padding-right: 24px;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.06);
`;
