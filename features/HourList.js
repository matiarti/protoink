import React, { useState, useEffect } from "react";
import { ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import SelectList from "../components/list/SelectList";
import { Heading1, Heading3, Heading4, Link, colors } from "../theme";
import Button from "../components/button/Button";
import { useNavigation } from "@react-navigation/native";
import { useQuery, gql } from "@apollo/client";

const HoursQuery = gql`
  {
    hourSlotCollection {
      items {
        hourRanges
      }
    }
  }
`;

function HourList() {
  const navigation = useNavigation();
  const { loading, error, data } = useQuery(HoursQuery);

  if (loading) return <Heading3>Loading...</Heading3>;
  if (error) return <Heading3>Error :(</Heading3>;

  return (
    <Col>
      {data.hourSlotCollection.items.map((hourRanges, index) => (
        <SelectList key={index} stylename={hourRanges.hourRanges} />
      ))}
    </Col>
  );
}

export default HourList;

const Col = styled.View``;

const Row = styled.View`
  width: 100%;
  padding-top: 8px;
`;
