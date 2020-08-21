import React from "react";
import { TouchableOpacity, Dimensions, View } from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/AntDesign";
import { Heading4, colors } from "../../theme";

const screenWidth = Dimensions.get("window").width;
var cardWidth = screenWidth - 52;

if (screenWidth > 300) {
  cardWidth = (screenWidth - 80) / 3;
}
if (screenWidth > 500) {
  cardWidth = (screenWidth - 72) / 3;
}
if (screenWidth > 1200) {
  cardWidth = (screenWidth - 80) / 3;
}

export function UserTypeCardActive(props) {
  return (
    <TouchableOpacity>
      <TypeCard>
        <Icon name={props.icon} size={24} color={colors.primary} />
        <Heading4>{props.title}</Heading4>
      </TypeCard>
    </TouchableOpacity>
  );
}

export function UserTypeCardNormal(props) {
  return (
    <TouchableOpacity>
      <TypeCard
        style={{
          boxShadow: "none",
          borderStyle: "solid",
          borderColor: colors.neutral2,
          borderWidth: 1,
        }}
      >
        <Icon name={props.icon} size={24} color={colors.neutral3} />
        <Heading4>{props.title}</Heading4>
      </TypeCard>
    </TouchableOpacity>
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
`;
