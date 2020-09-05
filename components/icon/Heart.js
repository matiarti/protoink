import React, { useState } from "react";
import styled from "styled-components/native";
import { Heading4, colors } from "../../theme.js";
import Icon from "react-native-vector-icons/AntDesign";
import { TouchableOpacity, Dimensions, View } from "react-native";

function Heart(props) {
  const [activated, setActivated] = useState(false);

  const icon = activated ? (
    <Icon
      name="heart"
      size={props.size}
      color={colors.accent}
      style={{ paddingRight: 4, marginTop: 2 }}
    />
  ) : (
    <Icon
      name="hearto"
      size={props.size}
      color={colors.neutral3}
      style={{ paddingRight: 4, marginTop: 2 }}
    />
  );

  function onPress() {
    setActivated(!activated);
  }

  return (
    <Row style={{ paddingBottom: 8 }}>
      <TouchableOpacity onPress={onPress}>{icon}</TouchableOpacity>
    </Row>
  );
}

export default Heart;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;
