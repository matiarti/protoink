import React from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import Style from "../components/card/StyleCard";
import { useQuery, gql } from "@apollo/client";
import { Heading3 } from "../theme";

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

function StyleRow({ navigation }) {
  const { loading, error, data } = useQuery(StylesQuery);

  if (loading) return <Heading3>Loading...</Heading3>;
  if (error) return <Heading3>Error :(</Heading3>;

  return (
    <ScrollView
      style={{ paddingBottom: 8 }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {data.styleCollection.items.map((style, index) => (
        <TouchableOpacity key={index}>
          <Style image={{ uri: style.image.url }} name={style.name} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

export default StyleRow;
