import React from "react";
import { TouchableOpacity, StatusBar, Dimensions } from "react-native";
import styled from "styled-components/native";
import Button from "../components/button/Button.js";
import { Ionicons } from "@expo/vector-icons";
import AvailabilitySmallCard from "../components/card/AvailabilitySmallCard";
import { useQuery, gql } from "@apollo/client";
import { ScrollView } from "react-native-gesture-handler";
import StudioBottomNav from "../components/bottomBar/StudioBottomNav.js";
import Icon from "react-native-vector-icons/AntDesign";
import { Heading1, Heading3, Heading4, Heading5 } from "../theme";
import colors from "../theme/colors";

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
              <Icon
                name="arrowleft"
                size={32}
                color={colors.white}
                style={{
                  position: "absolute",
                  top: 32,
                  left: 24,
                }}
              />
            </Col>
          </TouchableOpacity>
          <Col>
            <Icon
              name="heart"
              size={24}
              color={colors.white}
              style={{
                position: "absolute",
                top: 32,
                right: 108,
              }}
            />
            <Icon
              name="message1"
              size={24}
              color={colors.white}
              style={{
                position: "absolute",
                top: 32,
                right: 64,
              }}
            />
            <Icon
              name="sharealt"
              size={24}
              color={colors.white}
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
              <Heading1
                style={{
                  color: colors.white,
                  width: titleWidth,
                  paddingLeft: 24,
                }}
              >
                {studio.title}
              </Heading1>
              <Heading3
                style={{
                  color: colors.white,
                  paddingLeft: 24,
                }}
              >
                {studio.style}
              </Heading3>
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
                <Icon name="enviromento" size={24} color={colors.neutral3} />
                <Heading4 style={{ color: colors.neutral3, paddingLeft: 4 }}>
                  {studio.location}
                </Heading4>
              </Row>
            </Col>
            <Col style={{ paddingRight: 24 }}>
              <Row>
                <Icon
                  name="star"
                  size={16}
                  color={colors.primary}
                  style={{ paddingRight: 8 }}
                />
                <Heading4 style={{ color: colors.primary }}>
                  {studio.rating}
                </Heading4>
                <Heading4 style={{ color: colors.neutral3, paddingLeft: 4 }}>
                  (220)
                </Heading4>
              </Row>
            </Col>
          </Row>
          <Heading5 style={{ color: colors.neutral3, paddingBottom: 16 }}>
            Horários disponíveis
          </Heading5>
          <ScrollView
            horizontal={true}
            style={{ paddingBottom: 8 }}
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
