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

function BookingPayConfirm() {
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
            <IconText text="Nenuhum cartão disponível" icon="creditcard" />
          </View>
          <Button
            text="Adicionar Cartão"
            link={() => {
              navigation.navigate("AddPayCard");
            }}
          />
        </SafeAreaView>
      </ScrollView>
    </Container>
  );
}

export default BookingPayConfirm;

const Container = styled.View`
  background: ${colors.bg};
  flex: 1;
  border-radius: 10px;
  width: 100%;
  padding-top: 8px;
`;

const SubtitleRow = styled.Text`
  padding-left: 24px;
  padding-top: 0px;
  padding-bottom: 8px;
`;
