import React, { useRef } from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  PanResponder,
  Animated,
} from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import BookingCard from "../components/cards/BookingCard";
import { useQuery, gql } from "@apollo/client";
import StudioLargeCard from "../components/cards/StudioLargeCard";

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
        bodypart
        style
        date
        size
        location
      }
    }
  }
`;

function BookingScreen({ navigation }) {
  const DraggableView = () => {
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        {
          dx: pan.x, // x,y are Animated.Value
          dy: pan.y,
        },
      ]),
      onPanResponderRelease: () => {
        Animated.spring(
          pan, // Auto-multiplexed
          { toValue: { x: 0, y: 0 } } // Back to zero
        ).start();
      },
    });
  };

  const { loading, error, data } = useQuery(BookingsQuery);

  if (loading) return <Heading3>Loading...</Heading3>;
  if (error) return <Heading3>Error :(</Heading3>;

  return (
    <RootView>
      <Container>
        <SafeAreaView>
          <ScrollView>
            <Row>
              <Heading1>Ideas</Heading1>
            </Row>

            <ScrollView
              horizontal={true}
              style={{ paddingBottom: 24, paddingLeft: 24 }}
              showsHorizontalScrollIndicator={false}
            >
              {data.bookingCollection.items.map((booking, index) => (
                <TouchableOpacity key={index}>
                  <BookingCard
                    title={booking.title}
                    image={{ uri: booking.image.url }}
                    bodypart={booking.bodypart}
                    location={booking.location}
                    size={booking.size}
                    style={booking.style}
                    date={booking.date}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>
            <Animated.View {...panResponder.panHandlers}>
              <StudiosContainer style={{ paddingBottom: 24, paddingLeft: 16 }}>
                {studios.map((studio, index) => (
                  <TouchableOpacity key={index}>
                    <StudioLargeCard
                      title={studio.title}
                      image={studio.image}
                      subtitle={studio.subtitle}
                      author={studio.author}
                      avatar={studio.avatar}
                      caption={studio.caption}
                    />
                  </TouchableOpacity>
                ))}
              </StudiosContainer>
            </Animated.View>
          </ScrollView>
        </SafeAreaView>
      </Container>
    </RootView>
  );
}

BookingScreen["navigationOptions"] = (screenProps) => ({
  headerShown: false,
});

export default BookingScreen;

const StudiosContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const Text = styled.Text`
  font-size: 10px;
  color: #565656;
  font-weight: 600;
`;

const RootView = styled.View`
  background: #fff;
  flex: 1;
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

const studios = [
  {
    title: "Prototype in InVision Studio",
    subtitle: "10 sections",
    image: require("../assets/logo.png"),
    logo: require("../assets/logo.png"),
    author: "Vinicius Martins",
    avatar: require("../assets/logo.png"),
    caption: "Design and interactive prototype",
  },
  {
    title: "Prototype in InVision Studio",
    subtitle: "10 sections",
    image: require("../assets/logo.png"),
    logo: require("../assets/logo.png"),
    author: "Vinicius Martins",
    avatar: require("../assets/logo.png"),
    caption: "Design and interactive prototype",
  },
  {
    title: "Prototype in InVision Studio",
    subtitle: "10 sections",
    image: require("../assets/logo.png"),
    logo: require("../assets/logo.png"),
    author: "Vinicius Martins",
    avatar: require("../assets/logo.png"),
    caption: "Design and interactive prototype",
  },
  {
    title: "Prototype in InVision Studio",
    subtitle: "10 sections",
    image: require("../assets/logo.png"),
    logo: require("../assets/logo.png"),
    author: "Vinicius Martins",
    avatar: require("../assets/logo.png"),
    caption: "Design and interactive prototype",
  },
];
