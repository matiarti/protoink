import React from "react";
import { TouchableOpacity, Dimensions } from "react-native";
import styled from "styled-components/native";
import { useQuery, gql } from "@apollo/client";
import StudioLargeCard from "../components/card/StudioLargeCard";
import { Heading3 } from "../theme";
import { useNavigation } from "@react-navigation/native";

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

function StudioList() {
  const { data, error, loading } = useQuery(StudiosQuery);

  if (loading) return <Heading3>Loading...</Heading3>;
  if (error) return <Heading3>Error :(</Heading3>;

  const navigation = useNavigation();

  return (
    <StudiosContainer style={{ paddingBottom: 24 }}>
      {data.studiosCollection.items.map((studio, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            navigation.navigate("Studio", { studio: studio });
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
  );
}

export default StudioList;

const StudiosContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;
