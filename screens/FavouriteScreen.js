import React from "react";
import { ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import EventCard from "../components/EventCard";
import { Ionicons } from "@expo/vector-icons";
import Button from "../components/Button.js";
import StudioFavourite from "../components/StudioFavouriteCard";
import ArtistFavourite from "../components/ArtistFavouriteCard";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";

class FavouriteScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <RootView>
        <Container>
          <SafeAreaView>
            <ScrollView>
              <Row>
                <Heading1>Favoritos</Heading1>
              </Row>

              <Row>
                <Heading3>Estúdios</Heading3>
              </Row>
              <ScrollView
                horizontal={true}
                style={{ paddingBottom: 24, paddingLeft: 24, paddingRight: 40 }}
                showsHorizontalScrollIndicator={false}
              >
                {studios.map((studio, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      this.props.navigation.push("Section");
                    }}
                  >
                    <StudioFavourite
                      title={studio.title}
                      coverimage={studio.coverimage}
                      location={studio.location}
                      subtitle={studio.subtitle}
                      rating={studio.rating}
                    />
                  </TouchableOpacity>
                ))}
              </ScrollView>

              <Row>
                <Heading3>Artistas</Heading3>
              </Row>
              <ScrollView
                horizontal={true}
                style={{ paddingBottom: 24, paddingLeft: 24, paddingRight: 40 }}
                showsHorizontalScrollIndicator={false}
              >
                {artists.map((artist, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      this.props.navigation.push("Section");
                    }}
                  >
                    <ArtistFavourite
                      title={artist.title}
                      coverimage={artist.coverimage}
                      location={artist.location}
                      subtitle={artist.subtitle}
                      rating={artist.rating}
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
}

export default FavouriteScreen;

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
    coverimage: require("../assets/logo.png"),
    title: "Milk Ink",
    location: "Tatuapé, São Paulo",
    subtitle: "203 avaliações",
    rating: "4.8",
  },
  {
    coverimage: require("../assets/logo.png"),
    title: "Milk Ink",
    location: "Tatuapé, São Paulo",
    subtitle: "203 avaliações",
    rating: "4.8",
  },
];

const artists = [
  {
    key: "1",
    coverimage: require("../assets/logo.png"),
    title: "Milk Ink",
    location: "Tatuapé, São Paulo",
    subtitle: "203 avaliações",
    rating: "4.8",
  },
  {
    coverimage: require("../assets/logo.png"),
    title: "Milk Ink",
    location: "Tatuapé, São Paulo",
    subtitle: "203 avaliações",
    rating: "4.8",
  },
];

/*
const avatars = [
  {
    key: "1",
    image: require("../assets/logo.png"),
    name: "Olá Cliente",
  },
];
 */

const buttons = [
  {
    key: "1",
    text: "Poste sua Ideia",
  },
];
