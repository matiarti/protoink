import React from "react";
import {
  TouchableOpacity,
  StatusBar,
  Dimensions,
  ScrollView,
  View,
} from "react-native";
import styled from "styled-components/native";
import { Heading1, colors, SmallBody } from "../../theme";
import TopBarIdea from "../../components/topBar/TopBarIdea";
import BodyPartChosen from "../../components/vectors/BodyPartChosen";
import SizeInfoCardSide from "../../components/card/SizeInfoCardSide";
import IdeaBottomBar from "../../components/bottomBar/IdeaBottomBar.js";
import Indicator from "../../components/indicator/Indicator";
import IdeaRefGallery from "../../features/IdeaRefGallery";
import IconText from "../../components/icon/IconText";
import BookingBottomBar from "../../components/bottomBar/BookingBottomBar";
import BookingBottomBarPay from "../../components/bottomBar/BookingBottomBarPay";

const screenWidth = Dimensions.get("window").width;

var titleWidth = screenWidth - 40;
if (screenWidth > 300) {
  titleWidth = screenWidth - 144;
}
var textWidth = screenWidth - 48;
if (screenWidth > 300) {
  textWidth = screenWidth - 48;
}

var cardWidth = screenWidth - 180;
if (screenWidth > 300) {
  cardWidth = (screenWidth - 80) / 3;
}

function BookingPendingPay({ route, navigation }) {
  const { booking } = route.params;
  return (
    <Container>
      <ScrollView>
        <TopBarIdea />
        <View style={{ position: "absolute", top: 116, left: 100, zIndex: 9 }}>
          <Indicator status={colors.warning} />
        </View>
        <Cover>
          <Image source={require("../../assets/blur1.jpg")} />
          <Row style={{ paddingLeft: 24, paddingBottom: 48 }}>
            <Logo source={{ uri: booking.image.url }} />
            <Col style={{ flexDirection: "column" }}>
              <Heading1
                style={{
                  color: colors.secondary,
                  width: titleWidth,
                  paddingLeft: 24,
                }}
              >
                {booking.title}
              </Heading1>
            </Col>
          </Row>
        </Cover>

        <SectionTwo
          style={{
            paddingTop: 24,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            marginTop: -16,
          }}
        >
          <IconText text={booking.location} icon="enviromento" />
          <IconText text={booking.date} icon="calendar" />
          <IconText text={booking.style} icon="bars" />

          <Row
            style={{
              paddingTop: 8,
              paddingBottom: 24,
            }}
          >
            <Col style={{ paddingRight: 4 }}>
              <SizeInfoCardSide title={booking.bodypart} size={booking.size} />
            </Col>
            <Col>
              <BodyPartChosen />
            </Col>
          </Row>
          <IconText text="Imagens para referência" icon="picture" />

          <IdeaRefGallery />
          <View style={{ paddingTop: 24 }}>
            <IconText text="Descrição" icon="bulb1" />
            <SmallBody
              style={{
                color: colors.neutral3,
                width: textWidth,
              }}
            >
              {booking.description}
            </SmallBody>
          </View>
        </SectionTwo>
      </ScrollView>

      <BookingBottomBarPay
        text={booking.studio}
        button="Pagar"
        color="colors.success"
        link={() => {
          navigation.navigate("BookingPayConfirm");
        }}
        status={booking.status}
      />
    </Container>
  );
}

export default BookingPendingPay;

const Container = styled.View`
  flex: 1;
  background: ${colors.white};
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SectionTwo = styled.View`
  width: 100%;
  padding-left: 24px;
  padding-top: 32px;
  background: ${colors.white};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  margin-top: 16px;
`;

const Col = styled.View`
  flex-direction: row;
`;

const Cover = styled.View`
  height: 240px;
  background: #000;
  justify-content: flex-end;
`;

const Logo = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 16px;
  border: 1px solid ${colors.white};
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.98;
`;
