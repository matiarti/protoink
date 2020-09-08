import React from "react";
import {
  TouchableOpacity,
  StatusBar,
  Dimensions,
  ScrollView,
  View,
} from "react-native";
import styled from "styled-components/native";
import { Heading1, colors, SmallBody, Body } from "../../theme";
import TopBarIdea from "../../components/topBar/TopBarIdea";
import BodyPartChosen from "../../components/vectors/BodyPartChosen";
import SizeInfoCardSide from "../../components/card/SizeInfoCardSide";
import BookingBottomBarApproved from "../../components/bottomBar/BookingBottomBarApproved.js";
import Indicator from "../../components/indicator/Indicator";
import IdeaRefGallery from "../../features/IdeaRefGallery";
import IconText from "../../components/icon/IconText";

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

function BookingConfirmed({ route, navigation }) {
  const { booking } = route.params;
  return (
    <Container>
      <ScrollView>
        <TopBarIdea />
        <View style={{ position: "absolute", top: 116, left: 100, zIndex: 9 }}>
          <Indicator status={colors.success} />
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
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            marginTop: -16,
          }}
        >
          <IconText text="Pagamento" icon="checkcircleo" />
          <Body style={{ color: colors.secondary }}>R$650 (valor total) </Body>
          <Body style={{ color: colors.success }}>
            R$325 (50% do valor total pago){" "}
          </Body>
          <Body style={{ paddingBottom: 24, color: colors.accent }}>
            R$325 (valor restante a ser pago no local)
          </Body>

          <IconText text="Estúdio" icon="isv" />
          <Body style={{ paddingBottom: 24 }}>Milk Ink</Body>

          <IconText text="Endereço" icon="enviromento" />
          <Body>R. Cesário Galero, 492 Tatuapé </Body>
          <Body style={{ paddingBottom: 24 }}>São Paulo - SP, 03071-000</Body>

          <IconText text="Data" icon="calendar" />
          <Body style={{ paddingBottom: 24 }}>20 Junho de 2020</Body>

          <IconText text="Horário" icon="clockcircleo" />
          <Body style={{ paddingBottom: 24 }}>das 14pm até 16pm</Body>

          <IconText text="Black & Grey" icon="bars" />

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
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Result");
        }}
        style={{ paddingTop: 24 }}
      >
        <BookingBottomBarApproved
          text="Mil Ink"
          button="Editar"
          status="Confirmado"
        />
      </TouchableOpacity>
    </Container>
  );
}

export default BookingConfirmed;

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
