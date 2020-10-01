import React, { useState } from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
  View,
} from "react-native";
import styled from "styled-components/native";
import Button from "../../components/button/Button.js";
import { Heading1, Heading3, Heading4, Link, colors, Body } from "../../theme";
import TopBarBack from "../../components/topBar/TopBarBack";
import { useNavigation } from "@react-navigation/native";
import Title from "../../components/text/Title.js";
import SingleIdeaCard from "../../features/SingleIdeaCard";
import IconText from "../../components/icon/IconText";
import Icon from "react-native-vector-icons/AntDesign";

const screenWidth = Dimensions.get("window").width;

var titleWidth = screenWidth - 40;
var cardWidth = screenWidth - 40;

if (screenWidth > 300) {
  cardWidth = (screenWidth - 64) / 2;
}

if (screenWidth > 800) {
  titleWidth = screenWidth - 320;
}

function BookingCardAdded() {
  const navigation = useNavigation();

  return (
    <Container>
      <ScrollView vertical={true} showsHorizontalScrollIndicator={false}>
        <SafeAreaView>
          <TopBarBack />

          <Title title="Confirme as Informações" />
          <SubtitleRow>
            <Heading3>Ideia</Heading3>
          </SubtitleRow>

          <SingleIdeaCard />

          <SubtitleRow>
            <Heading3>Studio</Heading3>
          </SubtitleRow>
          <SingleIdeaCard />
          <View style={{ paddingLeft: 24 }}>
            <IconText text="Cartão selecionado" icon="creditcard" />
          </View>
          <Row>
            <BrandCard source={require("../../assets/mastercard.png")} />
            <Body style={{ marginRight: 40 }}>**** **** **** 3872</Body>
            <IconText text="Alterar" icon="edit" color={colors.accent} />
          </Row>
          <Button
            text="Pagar R$330"
            link={() => {
              navigation.navigate("BookingPayConfirmed");
            }}
          />
        </SafeAreaView>
      </ScrollView>
    </Container>
  );
}

export default BookingCardAdded;

const Container = styled.View`
  background: ${colors.bg};
  flex: 1;
  border-radius: 10px;
  width: 100%;
  padding-top: 8px;
`;

const Row = styled.View`
  flex-direction: row;
  margin-top: 16px;
  box-shadow: 0px 1px 25px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  padding-left: 24px;
  margin-bottom: 24px;
`;

const BrandCard = styled.Image`
  width: 40px;
  height: 30px;
  align-self: center;
  padding-left: 24px;
  background: #ffffff;

  margin-right: 16px;
`;

const SubtitleRow = styled.Text`
  padding-left: 24px;
  padding-top: 0px;
  padding-bottom: 8px;
`;
