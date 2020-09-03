import React, { useState } from "react";
import { TouchableOpacity, Dimensions, View } from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/AntDesign";
import { Heading3, colors } from "../../theme";

const screenWidth = Dimensions.get("window").width;
var cardWidth = screenWidth;

if (screenWidth > 300) {
  cardWidth = screenWidth - 48;
}
if (screenWidth > 500) {
  cardWidth = screenWidth - 48;
}
if (screenWidth > 1200) {
  cardWidth = screenWidth;
}

export default function SimpleCard(props) {
  const [activated, setActivated] = useState(false);

  const iconColor = activated ? colors.primary : colors.neutral3;
  const cardColor = activated ? colors.accent : colors.neutral2;

  function onPress() {
    setActivated(!activated);
  }

  return (
    <TypeCard style={{ borderColor: cardColor }}>
      <Icon
        name={props.icon}
        size={40}
        color={iconColor}
        style={{ paddingBottom: 8 }}
      />
      <Heading3>{props.title}</Heading3>
    </TypeCard>
  );
}

const TypeCard = styled.View`
  width: ${cardWidth};
  margin-right: 16px;
  padding: 24px 0px 24px 0px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.06);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #e46399;
  margin-left: 24px;
`;
