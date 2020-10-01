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
import TextField from "../../components/input/TextField.js";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const screenWidth = Dimensions.get("window").width;

var titleWidth = screenWidth - 40;
var cardWidth = screenWidth - 40;

if (screenWidth > 300) {
  cardWidth = (screenWidth - 64) / 2;
}

if (screenWidth > 800) {
  titleWidth = screenWidth - 320;
}

function AddPayCard() {
  const navigation = useNavigation();

  return (
    <Container>
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={false}
      >
        <ScrollView vertical={true} showsHorizontalScrollIndicator={false}>
          <SafeAreaView>
            <TopBarBack />

            <Title title="Adicionar Cartão" />
            <ImageCard source={require("../../assets/Card.png")} />

            <TextField
              placeholder="Número no Cartão"
              icon="creditcard"
              autocomplete="off"
              changetext={(text) => setDate(text)}
              name="cardnumber"
              id="cardnumber"
              text="cardnumber"
            />
            <TextField
              placeholder="Data de Expiração"
              icon="calendar"
              autocomplete="off"
              changetext={(text) => setDate(text)}
              name="expiredate"
              id="expiredate"
              text="expiredate"
            />
            <TextField
              placeholder="Código de Segurança"
              icon="infocirlceo"
              autocomplete="off"
              changetext={(text) => setDate(text)}
              name="expiredate"
              id="expiredate"
              text="expiredate"
            />
            <Button
              text="Adicionar"
              link={() => {
                navigation.navigate("BookingCardAdded");
              }}
            />
          </SafeAreaView>
        </ScrollView>
      </KeyboardAwareScrollView>
    </Container>
  );
}

export default AddPayCard;

const Container = styled.View`
  background: ${colors.bg};
  flex: 1;
  border-radius: 10px;
  width: 100%;
  padding-top: 8px;
`;

const ImageCard = styled.Image`
  width: 100%;
  height: 200px;
  margin-top: -16px;
`;

const SubtitleRow = styled.Text`
  padding-left: 24px;
  padding-top: 0px;
  padding-bottom: 8px;
`;
