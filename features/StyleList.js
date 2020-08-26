import React, { useState, useEffect } from "react";
import { ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import SelectList from "../components/list/SelectList";
import { Heading1, Heading3, Heading4, Link, colors } from "../theme";
import Button from "../components/button/Button";
import { useNavigation } from "@react-navigation/native";
import { useQuery, gql } from "@apollo/client";

const StylesQuery = gql`
  {
    styleCollection {
      items {
        name
      }
    }
  }
`;

function StyleList() {
  const navigation = useNavigation();
  const { loading, error, data } = useQuery(StylesQuery);

  if (loading) return <Heading3>Loading...</Heading3>;
  if (error) return <Heading3>Error :(</Heading3>;

  return (
    <Col>
      {data.styleCollection.items.map((style, index) => (
        <SelectList key={index} stylename={style.name} />
      ))}
    </Col>
  );
}

export default StyleList;

const Container = styled.View`
  background: ${colors.white};
  height: 667px;
`;
const Col = styled.View``;

const Row = styled.View`
  width: 100%;
  padding-top: 8px;
`;
