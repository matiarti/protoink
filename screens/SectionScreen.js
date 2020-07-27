import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import Button from "../components/Button.js";

class SectionScreen extends React.Component {
  static navigationOptions = {
    title: "Section",
  };

  render() {
    return (
      <Container>
        <Text>Section Screen</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.goBack();
          }}
        >
          <Row>
            {buttons.map((button, index) => (
              <Button key={index} text={button.text} />
            ))}
          </Row>
        </TouchableOpacity>
      </Container>
    );
  }
}
export default SectionScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

const Row = styled.View`
  width: 100%;
  padding-left: 24px;
  padding-top: 8px;
`;

const buttons = [
  {
    key: "1",
    text: "Close",
  },
];
