import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import styled from "styled-components/native";
import { colors, Heading3 } from "../../theme";
import Icon from "react-native-vector-icons/AntDesign";

const Data = [
  {
    id: 1,
    first_name: "Aquarela",
  },
  {
    id: 2,
    first_name: "Blackwork",
  },
  {
    id: 3,
    first_name: "Old School",
  },
  {
    id: 4,
    first_name: "Realismo",
  },
  {
    id: 5,
    first_name: "Pontilhismo",
  },
  {
    id: 6,
    first_name: "Geometrico",
  },
  {
    id: 7,
    first_name: "Maori",
  },
  {
    id: 8,
    first_name: "Oriental",
  },
  {
    id: 9,
    first_name: "Chicano",
  },
  {
    id: 10,
    first_name: "Neo Tradicional",
  },
];

export default class SelectList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      renderData: Data,
    };
  }

  onPressHandler(id) {
    let renderData = [...this.state.renderData];
    for (let data of renderData) {
      if (data.id == id) {
        data.selected = data.selected == null ? true : !data.selected;
        break;
      }
    }
    this.setState({ renderData });
  }

  render() {
    return (
      <View>
        <FlatList
          //horizontal={true}
          data={this.state.renderData}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.onPressHandler(item.id)}>
              <Card
                style={
                  item.selected == true
                    ? {
                        padding: 10,
                        borderRadius: 5,
                        backgroundColor: colors.neutral1,
                      }
                    : {
                        padding: 10,
                        borderRadius: 5,
                        backgroundColor: colors.bg,
                      }
                }
              >
                <Row>
                  <Heading3
                    style={
                      item.selected == true
                        ? {
                            color: colors.accent,
                          }
                        : {
                            color: colors.primary,
                          }
                    }
                  >
                    {item.first_name}
                  </Heading3>
                  <Icon
                    name="checkcircleo"
                    size={20}
                    style={
                      item.selected == true
                        ? {
                            color: colors.accent,
                          }
                        : {
                            color: colors.bg,
                          }
                    }
                  />
                </Row>
              </Card>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
const Card = styled.View`
  margin-top: 4px;
  margin-bottom: 4px;
`;

const Row = styled.View`
  flex-direction: row;

  justify-content: space-between;
`;
