import React from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Platform,
} from "react-native";
import styled from "styled-components/native";
import EventCard from "../components/cards/EventCard";
import { Ionicons } from "@expo/vector-icons";
import LogoSvg from "../components/LogoSymbol";
import Style from "../components/cards/StyleCard";
import Avatar from "../components/Avatar";
import Explore from "../components/forms/HomeExplore";
import Button from "../components/Button.js";
import { useQuery, gql } from "@apollo/client";
import StudioLargeCard from "../components/cards/StudioLargeCard";
import firebase from "../src/Firebase";

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

const StudiosQuery = gql`
  {
    studiosCollection {
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
        logo {
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
        rating
        style
      }
    }
  }
`;

function HomeScreen({ navigation }) {
  const { data: dataR, error: errorR, loading: loadingR } = useQuery(
    StudiosQuery
  );
  const { loading, error, data } = useQuery(StylesQuery);

  if (loading) return <Heading3>Loading...</Heading3>;
  if (error) return <Heading3>Error :(</Heading3>;
  if (loadingR) return <Heading3>Loading...</Heading3>;
  if (errorR) return <Heading3>Error :(</Heading3>;

  return (
    <RootView>
      <Container>
        <ScrollView vertical={true} showsHorizontalScrollIndicator={false}>
          <SafeAreaView>
            <TopBar>
              <LogoSvg style={{ width: 40 }} />
              <TouchableOpacity onPress={logout}>
                <Ionicons
                  name="ios-notifications-outline"
                  size={40}
                  color="#2457db"
                />
              </TouchableOpacity>
            </TopBar>

            <Row>
              <Avatar />
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
              <Heading3>Escolha seu estilo</Heading3>
            </Row>

            <ScrollView
              style={{ paddingBottom: 8, paddingLeft: 8 }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {data.styleCollection.items.map((style, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    navigation.navigate("Event", {
                      section: style,
                    });
                  }}
                >
                  <Style image={{ uri: style.image.url }} name={style.name} />
                </TouchableOpacity>
              ))}
            </ScrollView>

            <Row>
              <Heading3>Eventos recentes</Heading3>
            </Row>
            <ScrollView
              horizontal={true}
              style={{ paddingBottom: 8, paddingLeft: 8 }}
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

            <StudiosContainer style={{ paddingBottom: 24, paddingLeft: 16 }}>
              {dataR.studiosCollection.items.map((studio, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    navigation.navigate("Studio", {
                      studio: studio,
                    });
                  }}
                >
                  <StudioLargeCard
                    title={studio.title}
                    image={{ uri: studio.image.url }}
                    rating={studio.rating}
                    logo={{ uri: studio.logo.url }}
                    location={studio.location}
                    style={studio.style}
                  />
                </TouchableOpacity>
              ))}
            </StudiosContainer>

            <TouchableOpacity>
              <Row>
                {buttons.map((button, index) => (
                  <Button key={index} text={button.text} />
                ))}
              </Row>
            </TouchableOpacity>
          </SafeAreaView>
        </ScrollView>
      </Container>
    </RootView>
  );

  async function logout() {
    await firebase.logout();
    navigation.navigate("Login");
  }
}

HomeScreen["navigationOptions"] = (screenProps) => ({
  headerShown: false,
});

export default HomeScreen;

const StudiosContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
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
