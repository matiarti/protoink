import React from "react";
import { ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useQuery, gql } from "@apollo/client";
import StudioLargeCard from "../../components/card/StudioLargeCard";

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

function FavStudios({ navigation }) {
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
          </ScrollView>
        </SafeAreaView>
      </Container>
    </RootView>
  );
}

FavStudios["navigationOptions"] = (screenProps) => ({
  headerShown: false,
});

export default FavStudios;

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

const Container = styled.View`
  background: #fff;
  flex: 1;
  border-radius: 10px;
`;

const buttons = [
  {
    key: "1",
    text: "Poste sua Ideia",
  },
];
