import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useQuery, gql } from "@apollo/client";
import BookingSmallCard from "../components/card/BookingOpenSmallCard";
import { Heading3, colors } from "../theme";
import { useNavigation } from "@react-navigation/native";

const BookingsQuery = gql`
  {
    bookingCollection {
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
        description
        title
        bodypart
        style
        size
        location
        date
      }
    }
  }
`;

function SmallBookingOpenListSelect() {
  const [activated, setActivated] = useState(false);

  const borderColor = activated ? colors.accent : colors.white;

  function onPress() {
    setActivated(!activated);
  }

  const navigation = useNavigation();

  const { data, error, loading } = useQuery(BookingsQuery);

  if (loading) return <Heading3>Loading...</Heading3>;
  if (error) return <Heading3>Error :(</Heading3>;

  return (
    <StudiosContainer style={{ paddingBottom: 24, paddingLeft: 24 }}>
      {data.bookingCollection.items.map((booking, index) => (
        <TouchableOpacity key={index} onPress={onPress}>
          <BookingSmallCard
            border={borderColor}
            title={booking.title}
            image={{ uri: booking.image.url }}
            bodypart={booking.bodypart}
            date={booking.date}
            size={booking.size}
            location={booking.location}
            style={booking.style}
          />
        </TouchableOpacity>
      ))}
    </StudiosContainer>
  );
}

export default SmallBookingOpenListSelect;

const StudiosContainer = styled.View`
  background: ${colors.white};
  flex-direction: row;
  flex-wrap: wrap;
`;
