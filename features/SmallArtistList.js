import React from "react";
import { TouchableOpacity, Dimensions } from "react-native";
import styled from "styled-components/native";
import { useQuery, gql } from "@apollo/client";
import ArtistSmallCard from "../components/card/ArtistSmallCard";
import { Heading3, colors } from "../theme";
import { useNavigation } from "@react-navigation/native";

const screenWidth = Dimensions.get("window").width;
var cardWidth = screenWidth - 52;

if (screenWidth > 300) {
  cardWidth = screenWidth - 48;
}
if (screenWidth > 600) {
  cardWidth = (screenWidth - 72) / 2;
}
if (screenWidth > 1400) {
  cardWidth = (screenWidth - 100) / 4;
}

const ArtistsQuery = gql`
  {
    artistsCollection {
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

function ArtistList() {
  const navigation = useNavigation();

  const { data, error, loading } = useQuery(ArtistsQuery);

  if (loading) return <Heading3>Loading...</Heading3>;
  if (error) return <Heading3>Error :(</Heading3>;

  return (
    <ArtistContainer style={{ paddingBottom: 24, paddingLeft: 24 }}>
      {data.artistsCollection.items.map((artist, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            navigation.navigate("Artist", { artist: artist });
          }}
        >
          <ArtistSmallCard
            title={artist.title}
            image={{ uri: artist.image.url }}
            rating={artist.rating}
            logo={{ uri: artist.logo.url }}
            location={artist.location}
            style={artist.style}
            width={cardWidth}
          />
        </TouchableOpacity>
      ))}
    </ArtistContainer>
  );
}

export default ArtistList;

const ArtistContainer = styled.View`
  background: ${colors.white};
  flex-direction: row;
  flex-wrap: wrap;
`;
