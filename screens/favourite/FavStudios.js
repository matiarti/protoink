import React from "react";
import { ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useQuery, gql } from "@apollo/client";
import StudioLargeCard from "../../components/card/StudioLargeCard";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../theme";

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

function FavStudios() {
  const { data: dataR, error: errorR, loading: loadingR } = useQuery(
    StudiosQuery
  );

  if (loadingR) return <Heading3>Loading...</Heading3>;
  if (errorR) return <Heading3>Error :(</Heading3>;

  const navigation = useNavigation();

  return (
    <ScrollView vertical={true} showsHorizontalScrollIndicator={false}>
      <StudiosContainer
        style={{ background: colors.white, paddingBottom: 24, paddingLeft: 16 }}
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
    </ScrollView>
  );
}

FavStudios["navigationOptions"] = (screenProps) => ({
  headerShown: false,
});

export default FavStudios;

const StudiosContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  background: ${colors.white};
`;

const Heading3 = styled.Text`
  font-size: 16px;
  color: #565656;
  font-weight: 600;
`;

const Row = styled.View`
  width: 100%;
  padding-left: 24px;
  padding-top: 8px;
  flex-direction: row;
  justify-content: space-between;
`;
