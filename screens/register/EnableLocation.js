import React, { useState } from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import styled from "styled-components/native";
import Button from "../../components/button/Button";
import { Heading1, Heading4, Heading5, Body, Link, colors } from "../../theme";
import TopBarBack from "../../components/topBar/TopBarBack";
import Icon from "react-native-vector-icons/AntDesign";

import { useNavigation } from "@react-navigation/native";

function EnableLocation() {
  const navigation = useNavigation();
  return (
    <Container>
      <ScrollView vertical={true} showsHorizontalScrollIndicator={false}>
        <SafeAreaView>
          <TopBarBack
            text="Pular"
            link={() => {
              navigation.navigate("Home");
            }}
          />
          <Col style={{ marginTop: 32, marginBottom: 24 }}>
            <Icon name="bells" size={32} color={colors.primary} />
            <Heading1 style={{ paddingTop: 16, paddingBottom: 16 }}>
              Ative sua Localização
            </Heading1>
            <Body>
              Ative sua localização e não perca nenhuma oferta na sua região ou
              agendamentos.
            </Body>
            <Image source={require("../../assets/map.jpg")} />
          </Col>

          <Row>
            <Button
              link={() => navigation.navigate("Home")}
              text="Ativar Localização"
            />
          </Row>
        </SafeAreaView>
      </ScrollView>
    </Container>
  );
}

EnableLocation["navigationOptions"] = () => ({
  headerShown: false,
  tabBarVisible: false,
});

export default EnableLocation;

const Row = styled.View`
  width: 100%;
  padding-top: 8px;
`;

const Col = styled.View`
  margin-left: 24px;
`;

const Image = styled.Image`
  margin-top: 24px;
  width: 325px;
  height: 240px;
`;

const Container = styled.View`
  background: #fff;
  flex: 1;
  border-radius: 10px;
`;
