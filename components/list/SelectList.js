import React, { useState } from "react";
import { TouchableOpacity, ScrollView, View } from "react-native";
import styled from "styled-components/native";
import { colors, Heading3 } from "../../theme";

import Icon from "react-native-vector-icons/AntDesign";

function SelectList(props) {
  const [activated, setActivated] = useState(false);

  const iconColor = activated ? colors.accent : colors.white;
  const textColor = activated ? colors.accent : colors.neutral3;
  const cardColor = activated ? colors.neutral1 : colors.white;

  function onPress() {
    setActivated(!activated);
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <Card style={{ marginLeft: 24, backgroundColor: cardColor }}>
        <Row>
          <Heading3 style={{ color: textColor }}>{props.stylename}</Heading3>

          <Icon name="checkcircleo" size={20} style={{ color: iconColor }} />
        </Row>
      </Card>
    </TouchableOpacity>
  );
}

export default SelectList;

const Card = styled.View`
  margin-top: 4px;
  margin-bottom: 4px;
  padding: 10px;
  margin-right: 24px;
  border-radius: 5px;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Container = styled.View``;
