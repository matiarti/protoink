import React from "react";
import {
  TouchableOpacity,
  StatusBar,
  Dimensions,
  ScrollView,
} from "react-native";
import styled from "styled-components/native";
import AvailabilitySmallCard from "../components/card/AvailabilitySmallCard";
import { useQuery, gql } from "@apollo/client";
import StudioBottomNav from "../components/bottomBar/StudioBottomNav.js";
import Icon from "react-native-vector-icons/AntDesign";
import { Heading1, Heading3, Heading4, Heading5, colors } from "../theme";

const screenWidth = Dimensions.get("window").width;
var titleWidth = screenWidth - 120;
if (screenWidth > 300) {
  titleWidth = screenWidth - 120;
}

function CTAScreen({ route, navigation }) {
  const { cta } = route.params;

  return (
    <Container>
      <StatusBar hidden />
      <ScrollView>
        <Header>
          <Col>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
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
            </TouchableOpacity>
          </Col>

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
          <Image source={{ uri: cta.image.url }} />

          <Row style={{ paddingLeft: 24, paddingBottom: 64 }}>
            <Logo source={{ uri: cta.logo.url }} />
            <Col style={{ flexDirection: "column" }}>
              <Heading1
                style={{
                  color: colors.white,
                  width: titleWidth,
                  paddingLeft: 24,
                }}
              >
                {cta.title}
              </Heading1>
              <Heading6
                style={{
                  color: colors.white,
                  paddingLeft: 24,
                }}
              >
                {cta.description}
              </Heading6>
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
                  {cta.location}
                </Heading4>
              </Row>
            </Col>
          </Row>
          <Heading5 style={{ color: colors.neutral3, paddingBottom: 16 }}>
            Horários disponíveis
          </Heading5>
        </SectionTwo>
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <StudioBottomNav rating={cta.title} />
      </TouchableOpacity>
    </Container>
  );
}

export default CTAScreen;

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
  z-index: 1;
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
