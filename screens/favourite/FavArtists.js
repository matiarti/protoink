import React from "react";
import { ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useQuery, gql } from "@apollo/client";
import ArtistLargeCard from "../../components/card/ArtistLargeCard";
import { Heading1, Heading3, Heading4, Heading5, colors } from "../../theme";
import { useNavigation } from "@react-navigation/native";

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

function FavArtists() {
  const navigation = useNavigation();
  const { data: dataR, error: errorR, loading: loadingR } = useQuery(
    ArtistsQuery
  );

  if (loadingR) return <Heading3>Loading...</Heading3>;
  if (errorR) return <Heading3>Error :(</Heading3>;

  return (
    <ScrollView vertical={true} showsHorizontalScrollIndicator={false}>
      <ArtistContainer style={{ paddingBottom: 24, paddingLeft: 16 }}>
        {dataR.artistsCollection.items.map((artist, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              navigation.navigate("Artist", {
                artist: artist,
              });
            }}
          >
            <ArtistLargeCard
              title={artist.title}
              image={{ uri: artist.image.url }}
              rating={artist.rating}
              logo={{ uri: artist.logo.url }}
              location={artist.location}
              style={artist.style}
            />
          </TouchableOpacity>
        ))}
      </ArtistContainer>
    </ScrollView>
  );
}

FavArtists["navigationOptions"] = (screenProps) => ({
  headerShown: false,
});

export default FavArtists;

const ArtistContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  background: ${colors.white};
`;
