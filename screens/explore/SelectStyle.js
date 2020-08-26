import React, { useState } from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Platform,
} from "react-native";
import styled from "styled-components/native";
import { Heading1, Heading4, Link, colors } from "../../theme";
import TopBarBack from "../../components/topBar/TopBarBack";
import Button from "../../components/button/Button";
import { useNavigation } from "@react-navigation/native";
import StyleList from "../../features/StyleList";

export default function Explore() {
  const navigation = useNavigation();
  return (
    <Container>
      <ScrollView vertical={true} showsHorizontalScrollIndicator={false}>
        <SafeAreaView>
          <TopBarBack />
          <Heading1
            style={{ paddingLeft: 24, paddingTop: 48, paddingBottom: 24 }}
          >
            Escolha estilos
          </Heading1>
          <StyleList />
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Button text="Continuar" />
          </TouchableOpacity>
        </SafeAreaView>
      </ScrollView>
    </Container>
  );
}

const Container = styled.View`
  background: ${colors.white};
  flex: 1;
  border-radius: 10px;
`;
