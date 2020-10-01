import React from "react";
import styled from "styled-components/native";
import Button from "../button/ButtonCta.js";
import { Dimensions } from "react-native";
import { Heading5, colors } from "../../theme.js";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const screenWidth = Dimensions.get("window").width;
var barWidth = screenWidth;
if (screenWidth > 300) {
  barWidth = screenWidth;
}

function IdeaBottomBar(props) {
  const navigation = useNavigation();
  return (
    <Container style={{ elevation: 16 }}>
      <Row>
        <Heading5 style={{ paddingLeft: 24 }}>{props.text}</Heading5>

        <Button
          text={props.button}
          link={() => {
            navigation.navigate("Result");
          }}
        />
      </Row>
    </Container>
  );
}

export default IdeaBottomBar;

const Row = styled.View`
  padding-top: 16px;
  flex-direction: row;
  padding-bottom: 16px;
  align-items: center;
  justify-content: space-between;
  height: 64px;
`;

const Container = styled.View`
  background: white;
  width: ${barWidth};
  box-shadow: 0px -5px 16px rgba(0, 0, 0, 0.08);
  background: ${colors.white};
`;
