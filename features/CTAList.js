import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useQuery, gql } from "@apollo/client";
import StudioLargeCard from "../components/card/StudioLargeCard";
import { Heading3 } from "../theme";
import { useNavigation } from "@react-navigation/native";
import CallToActionCard from "../components/card/CallToActionCard";

const CTAsQuery = gql`
  {
    callToActionCollection {
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
        description
        location
      }
    }
  }
`;

function CTAList() {
  const navigation = useNavigation();

  const { data, error, loading } = useQuery(CTAsQuery);

  if (loading) return <Heading3>Loading...</Heading3>;
  if (error) return <Heading3>Error :(</Heading3>;

  return (
    <StudiosContainer style={{ paddingBottom: 24, paddingLeft: 24 }}>
      {data.callToActionCollection.items.map((cta, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            navigation.navigate("CTA", { cta: cta });
          }}
        >
          <CallToActionCard
            title={cta.title}
            image={{ uri: cta.image.url }}
            location={cta.location}
            description={cta.description}
          />
        </TouchableOpacity>
      ))}
    </StudiosContainer>
  );
}

export default CTAList;

const StudiosContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;
