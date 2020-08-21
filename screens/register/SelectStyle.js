import React, { useState, useEffect } from "react";
import { ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import SelectList from "../../components/list/SelectList";
import { Heading1, Heading4, Link, colors } from "../../theme";
import Button from "../../components/button/Button";
import { useNavigation } from "@react-navigation/native";

function SelectStyle() {
  const navigation = useNavigation();

  return (
    <Container>
      <SafeAreaView>
        <ScrollView vertical={true} showsHorizontalScrollIndicator={false}>
          <Col>
            <Heading1 style={{ paddingTop: 24, paddingBottom: 24 }}>
              Qual seu estilo preferido?
            </Heading1>

            <SelectList />

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <Row>
                <Button text="Continuar" />
              </Row>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <Heading4 style={{ paddingTop: 16 }}>
                Ainda não sabe? <Link>Pule esta parte</Link>
              </Heading4>
            </TouchableOpacity>
          </Col>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}

export default SelectStyle;

const Container = styled.View`
  padding: 24px;
  background: ${colors.bg};
`;
const Col = styled.View``;

const Row = styled.View`
  width: 100%;
  padding-top: 8px;
`;
