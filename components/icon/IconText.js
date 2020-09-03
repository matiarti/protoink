import React from "react";
import styled from "styled-components/native";
import { Heading4, colors } from "../../theme.js";
import Icon from "react-native-vector-icons/AntDesign";

function IconText(props) {
  return (
    <Row style={{ paddingBottom: 8 }}>
      <Icon name={props.icon} size={24} color={colors.neutral3} />
      <Heading4 style={{ color: colors.neutral3, paddingLeft: 8 }}>
        {props.text}
      </Heading4>
    </Row>
  );
}

export default IconText;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;
