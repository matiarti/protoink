import React from "react";
import { ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useQuery, gql } from "@apollo/client";
import EventCard from "../components/EventCard";

const ALL_EVENTS = gql`
  {
    eventsCollection {
      items {
        image {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        title
        subtitle
        location {
          lat
          lon
        }
        price
        attendees
      }
    }
  }
`;

function EventsQuery() {
  const { loading, error, data } = useQuery(ALL_EVENTS);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;

  return (
    <Container>
      {data.allEvents.map((event, title) => (
        <Text key={title}> {event.title} </Text>
      ))}
      <Row>
        <Heading3>Eventos recentes</Heading3>
      </Row>
    </Container>
  );
}

export default EventsQuery;

const Text = styled.Text`
  font-size: 10px;
  color: #565656;
  font-weight: 600;
`;

const Heading3 = styled.Text`
  font-size: 16px;
  color: #565656;
  font-weight: 600;
`;

const Heading1 = styled.Text`
  font-size: 24px;
  color: #2457db;
  font-weight: 700;
  line-height: 32px;
  padding: 16px 0px 16px 0px;
  width: 80%;
`;

const Row = styled.View`
  width: 100%;
  padding-left: 24px;
  padding-top: 8px;
`;

const Container = styled.View`
  background: #f0f3f5;
  flex: 1;
  border-radius: 10px;
`;
