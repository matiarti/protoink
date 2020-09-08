import React from "react";
import styled from "styled-components/native";
import { Heading5, colors } from "../../theme.js";
import Icon from "react-native-vector-icons/AntDesign";

function IconTextSmall(props) {
  return (
    <Row style={{ paddingBottom: 8 }}>
      <Icon name={props.icon} size={20} color={colors.primary} />
      <Heading5 style={{ color: colors.neutral3, paddingLeft: 8 }}>
        {props.text}
      </Heading5>
    </Row>
  );
}

export default IconTextSmall;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;
