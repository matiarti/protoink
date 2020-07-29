import React from "react";
import { ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import EventCard from "../components/cards/EventCard";
import { Ionicons } from "@expo/vector-icons";
import LogoSvg from "../components/Icons";
import Style from "../components/cards/StyleCard";
import AvatarAPI from "../components/AvatarAPI";
import Explore from "../components/forms/Explore";
import Button from "../components/Button.js";
import { useQuery, gql } from "@apollo/client";

const StylesQuery = gql`
  {
    styleCollection {
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
        name
      }
    }
  }
`;

function HomeScreen() {
  const { loading, error, data } = useQuery(StylesQuery);

  if (loading) return <Heading3>Loading...</Heading3>;
  if (error) return <Heading3>Error :(</Heading3>;

  return (
    <RootView>
      <Container>
        <SafeAreaView>
          <ScrollView>
            <TopBar>
              <LogoSvg style={{ width: 40 }} />
              <TouchableOpacity>
                <Ionicons
                  name="ios-notifications-outline"
                  size={40}
                  color="#2457db"
                />
              </TouchableOpacity>
            </TopBar>

            <Row>
              <AvatarAPI />
            </Row>

            <Row>
              <Explore />
            </Row>

            <Row>
              <Heading1>
                Encontre o lugar perfeito para fazer aquela tattoo.
              </Heading1>
            </Row>

            <Row>
              <Heading3>Estúdios na região</Heading3>
            </Row>

            <ScrollView
              style={{ paddingBottom: 24, paddingLeft: 24 }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {data.styleCollection.items.map((style, index) => (
                <TouchableOpacity key={index}>
                  <Style image={{ uri: style.image.url }} name={style.name} />
                </TouchableOpacity>
              ))}
            </ScrollView>

            <Row>
              <Heading3>Eventos recentes</Heading3>
            </Row>
            <ScrollView
              horizontal={true}
              style={{ paddingBottom: 24, paddingLeft: 24 }}
              showsHorizontalScrollIndicator={false}
            >
              {events.map((event, index) => (
                <TouchableOpacity key={index}>
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

            <TouchableOpacity>
              <Row>
                {buttons.map((button, index) => (
                  <Button key={index} text={button.text} />
                ))}
              </Row>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </Container>
    </RootView>
  );
}

export default HomeScreen;

const Message = styled.Text``;

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

const TopBar = styled.View`
  padding-top: 8px;
  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 16px;
  flex-direction: row;
  justify-content: space-between;
  height: 64px;
`;

const Container = styled.View`
  background: #f0f3f5;
  flex: 1;
  border-radius: 10px;
`;

const studios = [
  {
    key: "1",
    image: require("../assets/logo.png"),
    text: "Vinicius Martins",
    subtitle: "Arte fina e minimalista",
  },
  {
    image: require("../assets/logo.png"),
    text: "Jennifer Oliveira",
    subtitle: "Arte fina e minimalista",
  },
  {
    image: require("../assets/logo.png"),
    text: "DaVilla Studio",
    subtitle: "Arte fina e minimalista",
  },
];

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

const buttons = [
  {
    key: "1",
    text: "Poste sua Ideia",
  },
];
