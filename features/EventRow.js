import React from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import EventCard from "../components/card/EventCard";

function EventRow({ navigation }) {
  return (
    <ScrollView
      horizontal={true}
      style={{ paddingBottom: 8 }}
      showsHorizontalScrollIndicator={false}
    >
      {events.map((event, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            navigation.navigate("Event", {
              event: event,
            });
          }}
        >
          <EventCard
            title={event.title}
            coverimage={event.coverimage}
            location={event.location}
            subtitle={event.subtitle}
            price={event.price}
            attendees={event.attendees}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

export default EventRow;

const events = [
  {
    key: "1",
    coverimage: require("../assets/logo.png"),
    title: "Flash Day para vender a COVID19 forever",
    location: "Tatuapé, São Paulo",
    subtitle: "a partir de",
    price: "R$150",
    attendees: "126",
  },
  {
    coverimage: require("../assets/logo.png"),
    title: "Flash Day para sobreviver COVID",
    location: "Tatuapé, São Paulo",
    subtitle: "a partir de",
    price: "R$150",
    attendees: "126",
  },
  {
    coverimage: require("../assets/logo.png"),
    title: "Flash Day para sobreviver COVID",
    location: "Tatuapé, São Paulo",
    subtitle: "a partir de",
    price: "R$150",
    attendees: "126",
  },
];
