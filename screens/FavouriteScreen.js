import React from "react";
import { ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import Button from "../components/Button.js";
import StudioFavourite from "../components/cards/StudioFavouriteCard";
import ArtistFavourite from "../components/cards/ArtistFavouriteCard";
import { useQuery, gql } from "@apollo/client";
import StudioLargeCard from "../components/cards/StudioLargeCard";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

const CustomTab = ({ children }) => (
  <Tab>
    <Heading3>{children}</Heading3>
  </Tab>
);

CustomTab.tabsRole = "Tab"; // Required field to use your custom Tab

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

function FavouriteScreen({ navigation }) {
  const { data: dataR, error: errorR, loading: loadingR } = useQuery(
    StudiosQuery
  );

  if (loadingR) return <Heading3>Loading...</Heading3>;
  if (errorR) return <Heading3>Error :(</Heading3>;

  return (
    <RootView>
      <Container>
        <SafeAreaView>
          <ScrollView vertical={true} showsHorizontalScrollIndicator={false}>
            <Row>
              <Heading1>Favoritos</Heading1>
            </Row>

            <Tabs>
              <TabList styled={{ flexDirection: "row", flex: 1 }}>
                <CustomTab>Estúdios</CustomTab>
                <CustomTab>Artistas</CustomTab>
              </TabList>
              <TabPanel>
                <Row>
                  <Heading3>Estúdios</Heading3>
                </Row>
                <StudiosContainer
                  style={{ paddingBottom: 24, paddingLeft: 16 }}
                >
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
              </TabPanel>

              <TabPanel>
                <Row>
                  <Heading3>Artistas</Heading3>
                </Row>
                <ScrollView
                  horizontal={true}
                  style={{
                    paddingBottom: 24,
                    paddingLeft: 24,
                    paddingRight: 40,
                  }}
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
              </TabPanel>
            </Tabs>

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

FavouriteScreen["navigationOptions"] = (screenProps) => ({
  headerShown: false,
});

export default FavouriteScreen;

const TabContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

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
  flex-direction: row;
  justify-content: space-between;
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
  background: #fff;
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
