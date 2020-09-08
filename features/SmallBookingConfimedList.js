import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useQuery, gql } from "@apollo/client";
import BookingOpenSmallCard from "../components/card/BookingOpenSmallCard";
import { Heading3, colors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import BookingConfirmedSmallCard from "../components/card/BookingConfirmedSmallCard";

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

        title
        description
        bodypart
        style
        size
        location
        date
        price
        status
        studio
      }
    }
  }
`;

function SmallBookingConfimedList() {
  const navigation = useNavigation();

  const { data, error, loading } = useQuery(BookingsQuery);

  if (loading) return <Heading3>Loading...</Heading3>;
  if (error) return <Heading3>Error :(</Heading3>;

  return (
    <StudiosContainer style={{ paddingBottom: 24, paddingLeft: 24 }}>
      {data.bookingCollection.items.map((booking, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            navigation.navigate("BookingConfirmed", { booking: booking });
          }}
        >
          <BookingConfirmedSmallCard
            title={booking.title}
            image={{ uri: booking.image.url }}
            bodypart={booking.bodypart}
            date={booking.date}
            size={booking.size}
            location={booking.location}
            style={booking.style}
            price={booking.price}
            status={booking.status}
            studio={booking.studio}
          />
        </TouchableOpacity>
      ))}
    </StudiosContainer>
  );
}

export default SmallBookingConfimedList;

const StudiosContainer = styled.View`
  background: ${colors.white};
  flex-direction: row;
  flex-wrap: wrap;
`;
