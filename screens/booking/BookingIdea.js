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
import SmallBookingOpenListSelect from "../../features/SmallBookingOpenListSelect";
import IconText from "../../components/icon/IconText";

const screenWidth = Dimensions.get("window").width;

var titleWidth = screenWidth - 40;
var cardWidth = screenWidth - 40;

if (screenWidth > 300) {
  cardWidth = (screenWidth - 64) / 2;
}

if (screenWidth > 800) {
  titleWidth = screenWidth - 320;
}

function BookingIdea() {
  const navigation = useNavigation();

  return (
    <Container>
      <ScrollView vertical={true} showsHorizontalScrollIndicator={false}>
        <SafeAreaView>
          <TopBarBack />
          <Title title="Escolha a ideia" />
          <View style={{ paddingLeft: 24 }}>
            <IconText text="Suas ideias" icon="user" />
          </View>
          <SmallBookingOpenListSelect />
          <View style={{ paddingLeft: 24 }}>
            <IconText text="Ideias do Estúdio" icon="isv" />
          </View>
          <SmallBookingOpenListSelect />
          <Button
            text="Continuar"
            link={() => {
              navigation.navigate("BookingSent");
            }}
          />
          <View style={{ alignSelf: "center", paddingTop: 16 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Body");
              }}
            >
              <Heading3>
                <Link>Criar nova Ideia</Link>
              </Heading3>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </Container>
  );
}

export default BookingIdea;

const Container = styled.View`
  background: ${colors.bg};
  flex: 1;
  border-radius: 10px;
  width: 100%;
  padding-top: 8px;
`;
