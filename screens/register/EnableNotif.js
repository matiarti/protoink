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
import NotificationCard from "../../components/card/NofiticationCard";
import { useNavigation } from "@react-navigation/native";

function EnableNotif() {
  const navigation = useNavigation();
  return (
    <Container>
      <ScrollView vertical={true} showsHorizontalScrollIndicator={false}>
        <SafeAreaView>
          <TopBarBack
            text="Pular"
            link={() => {
              navigation.navigate("Location");
            }}
          />
          <Col style={{ paddingLeft: 24, marginTop: 32 }}>
            <Icon name="bells" size={40} color={colors.primary} />
            <Heading1 style={{ paddingTop: 24, paddingBottom: 24 }}>
              Ative suas Notificações
            </Heading1>
            <Body>
              Ative suas notificações e não perca nenhuma oferta na sua região
              ou agendamentos.
            </Body>
            <NotificationCard />
            <NotificationCard />
          </Col>
          <TouchableOpacity onPress={() => navigation.navigate("Location")}>
            <Row>
              <Button text="Ativar Notificações" />
            </Row>
          </TouchableOpacity>
        </SafeAreaView>
      </ScrollView>
    </Container>
  );
}

EnableNotif["navigationOptions"] = () => ({
  headerShown: false,
  tabBarVisible: false,
});

export default EnableNotif;

const Row = styled.View`
  width: 100%;
  padding-top: 8px;
`;

const Col = styled.View``;

const Container = styled.View`
  background: #fff;
  flex: 1;
  border-radius: 10px;
`;
