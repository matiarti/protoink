import React from "react";
import { TouchableOpacity, StatusBar, ScrollView } from "react-native";
import styled from "styled-components/native";
import Button from "../components/button/Button.js";
import { useQuery, gql } from "@apollo/client";
import EventCard from "../components/card/EventCard";

const EventsQuery = gql`
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
        location
        price
        attendees
      }
    }
  }
`;

function ProfileScreen() {
  const { loading, error, data } = useQuery(EventsQuery);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;

  return (
    <Container>
      <ScrollView
        horizontal={true}
        style={{ paddingBottom: 24, paddingLeft: 24 }}
        showsHorizontalScrollIndicator={false}
      >
        {data.eventsCollection.items.map((event, index) => (
          <TouchableOpacity key={index}>
            <EventCard
              title={event.title}
              coverimage={{ uri: event.image.url }}
              location={event.location}
              subtitle={event.subtitle}
              price={event.price}
              attendees={event.attendees}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Container>
  );
}

export default ProfileScreen;

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
