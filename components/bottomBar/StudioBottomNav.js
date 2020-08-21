import React from "react";
import styled from "styled-components/native";
import Button from "../button/ButtonCta.js";
import { TouchableOpacity, Dimensions } from "react-native";
import { Heading4, Heading5, colors } from "../../theme.js";
import Icon from "react-native-vector-icons/AntDesign";

const screenWidth = Dimensions.get("window").width;
var barWidth = screenWidth;
if (screenWidth > 300) {
  barWidth = screenWidth;
}

function StudioBottomNav({ navigation, props }) {
  return (
    <Container style={{ elevation: 16 }}>
      <Row>
        <Heading5 style={{ paddingLeft: 24 }}>Veja disponibilidade</Heading5>
        <Row>
          <Icon
            name="star"
            size={16}
            color={colors.primary}
            style={{ paddingRight: 2 }}
          />

          <Heading5 style={{ color: colors.primary }}>4.8</Heading5>

          <Heading5 style={{ color: colors.neutral3, paddingLeft: 4 }}>
            (220)
          </Heading5>
        </Row>

        {buttons.map((button, index) => (
          <Button key={index} text={button.text} />
        ))}
      </Row>
    </Container>
  );
}

export default StudioBottomNav;

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
  background: {colors.white};
`;

const buttons = [
  {
    key: "1",
    text: "Agendar",
  },
];
