import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import AvailabilitySmallCard from "../components/card/AvailabilitySmallCard";
import { useQuery, gql } from "@apollo/client";
import { Heading1, Heading3, Heading4, Heading5, colors } from "../theme";

const AvailabilityQuery = gql`
  {
    availabilityCollection {
      items {
        day
        month
        weekDay
        time
      }
    }
  }
`;

function AvailabilitySlider({ navigation }) {
  const { loading, error, data } = useQuery(AvailabilityQuery);

  if (loading) return <Heading1>Loading...</Heading1>;
  if (error) return <Heading1>Error :(</Heading1>;

  return (
    <ScrollView
      horizontal={true}
      style={{ paddingBottom: 8 }}
      showsHorizontalScrollIndicator={false}
    >
      <Row>
        {data.availabilityCollection.items.map((availability, index) => (
          <AvailabilitySmallCard
            key={index}
            day={availability.day}
            month={availability.month.substring(0, 3)}
            weekDay={availability.weekDay}
            time={availability.time}
          />
        ))}
      </Row>
    </ScrollView>
  );
}

export default AvailabilitySlider;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;
