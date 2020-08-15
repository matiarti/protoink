import React from "react";
import { TouchableOpacity, StatusBar, Dimensions } from "react-native";
import styled from "styled-components/native";
import Button from "../components/button/Button.js";
import { Ionicons } from "@expo/vector-icons";
import AvailabilitySmallCard from "../components/card/AvailabilitySmallCard";
import { useQuery, gql } from "@apollo/client";
import { ScrollView } from "react-native-gesture-handler";
import StudioBottomNav from "../components/bottomBar/StudioBottomNav.js";

const AvailabilityQuery = gql`
  {
    availabilityCollection {
      items {
        day
        month
        weekDay
        time
      }
    }
  }
`;

const screenWidth = Dimensions.get("window").width;
var titleWidth = screenWidth - 120;
if (screenWidth > 300) {
  titleWidth = screenWidth - 120;
}

function StudioScreen({ route, navigation }) {
  const { studio } = route.params;

  const { loading, error, data } = useQuery(AvailabilityQuery);

  if (loading) return <Title>Loading...</Title>;
  if (error) return <Title>Error :(</Title>;

  return (
    <Container>
      <StatusBar hidden />
      <ScrollView>
        <Header>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Col>
              <Ionicons
                name="ios-arrow-back"
                size={32}
                color="#fff"
                style={{
                  position: "absolute",
                  top: 32,
                  left: 24,
                }}
              />
            </Col>
          </TouchableOpacity>
          <Col>
            <Ionicons
              name="ios-chatbubbles"
              size={32}
              color="#fff"
              style={{
                position: "absolute",
                top: 32,
                right: 140,
              }}
            />
            <Ionicons
              name="ios-heart"
              size={32}
              color="#fff"
              style={{
                position: "absolute",
                top: 32,
                right: 80,
              }}
            />
            <Ionicons
              name="ios-share"
              size={32}
              color="#fff"
              style={{
                position: "absolute",
                top: 32,
                right: 24,
              }}
            />
          </Col>
        </Header>

        <Cover>
          <Image source={{ uri: studio.image.url }} />

          <Row style={{ paddingLeft: 24, paddingBottom: 64 }}>
            <Logo source={{ uri: studio.logo.url }} />
            <Col style={{ flexDirection: "column" }}>
              <Title>{studio.title}</Title>
              <Style>{studio.style}</Style>
            </Col>
          </Row>
        </Cover>

        <SectionTwo
          style={{
            paddingTop: 24,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            marginTop: -16,
          }}
        >
          <Row style={{ justifyContent: "space-between", paddingBottom: 24 }}>
            <Col>
              <Row>
                <Ionicons name="ios-pin" size={32} color="#939CB2" />
                <Location>{studio.location}</Location>
              </Row>
            </Col>
            <Col style={{ paddingRight: 24 }}>
              <Row>
                <Ionicons
                  name="ios-star"
                  size={24}
                  color="#2457DB"
                  style={{ paddingRight: 8 }}
                />
                <Rating>{studio.rating}</Rating>
                <RatingAmount>(220)</RatingAmount>
              </Row>
            </Col>
          </Row>
          <ScrollView
            horizontal={true}
            style={{ paddingBottom: 8, paddingLeft: 8 }}
            showsHorizontalScrollIndicator={false}
          >
            <Row>
              {data.availabilityCollection.items.map((availability, index) => (
                <AvailabilitySmallCard
                  key={index}
                  day={availability.day}
                  month={availability.month.substring(0, 3)}
                  weekDay={availability.weekDay}
                  time={availability.time}
                />
              ))}
            </Row>
          </ScrollView>
          <Row></Row>
        </SectionTwo>
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <StudioBottomNav rating={studio.rating} />
      </TouchableOpacity>
    </Container>
  );
}

export default StudioScreen;

const Container = styled.View`
  flex: 1;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SectionTwo = styled.View`
  width: 100%;
  padding-left: 24px;
  padding-top: 32px;
  background: #fff;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  margin-top: 16px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  z-index: 2;
`;

const Col = styled.View`
  flex-direction: row;
`;

const Cover = styled.View`
  height: 375px;
  background: #000;
  justify-content: flex-end;
`;

const Logo = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 16px;
  border: 1px solid #ffffff;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.6;
`;

const Title = styled.Text`
  font-size: 28px;
  font-weight: 700;
  color: #fff;
  padding-left: 24px;
  width: ${titleWidth};
`;

const Style = styled.Text`
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  padding-left: 24px;
  padding-top: 8px;
`;

const Location = styled.Text`
  font-size: 18px;
  font-weight: 400;
  color: #939cb2;
  padding-left: 8px;
`;

const Rating = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #2457db;
`;

const RatingAmount = styled.Text`
  font-size: 18px;
  font-weight: 400;
  color: #939cb2;
  padding-left: 8px;
`;

const buttons = [
  {
    key: "1",
    text: "Close",
  },
];
