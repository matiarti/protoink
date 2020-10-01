import React, { useState, useEffect } from "react";
import { ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import SelectList from "../../components/list/SelectList";
import { Heading1, Heading3, Heading4, Link, colors } from "../../theme";
import Button from "../../components/button/Button";
import { useNavigation } from "@react-navigation/native";
import { useQuery, gql } from "@apollo/client";
import TopBarBack from "../../components/topBar/TopBarBack";

const StylesQuery = gql`
  {
    styleCollection {
      items {
        name
      }
    }
  }
`;

function SelectStyle() {
  const navigation = useNavigation();
  const { loading, error, data } = useQuery(StylesQuery);

  if (loading) return <Heading3>Loading...</Heading3>;
  if (error) return <Heading3>Error :(</Heading3>;

  return (
    <Container>
      <SafeAreaView>
        <ScrollView vertical={true} showsHorizontalScrollIndicator={false}>
          <TopBarBack
            text="Pular"
            link={() => {
              navigation.navigate("Notification");
            }}
          />
          <Col>
            <Heading1
              style={{ paddingLeft: 24, paddingTop: 24, paddingBottom: 24 }}
            >
              Preferência de Estilo
            </Heading1>
            {data.styleCollection.items.map((style, index) => (
              <SelectList key={index} stylename={style.name} />
            ))}

            <Row>
              <Button
                link={() => {
                  navigation.navigate("Notification");
                }}
                text="Continuar"
              />
            </Row>
          </Col>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}

export default SelectStyle;

const Container = styled.View`
  background: ${colors.white};
  height: 667px;
`;
const Col = styled.View``;

const Row = styled.View`
  width: 100%;
  padding-top: 8px;
`;
