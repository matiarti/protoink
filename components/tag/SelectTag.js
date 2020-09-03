import React from "react";
import {
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Pressable,
} from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";
import {
  Heading1,
  Heading3,
  Heading4,
  Heading5,
  SmallBody,
  colors,
} from "../../theme";

function SelectTag(props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity>
      <View>
        <SmallBody style={{ padding: 8, marginLeft: 16 }}>
          {props.text}
        </SmallBody>
        <Icon
          name="closecircleo"
          size={16}
          color={colors.primary}
          style={{ marginRight: 16 }}
        />
      </View>
    </TouchableOpacity>
  );
}

export default SelectTag;

const View = styled.View`
  flex-direction: row;
  align-items: center;

  background: ${colors.neutral1};
  border-radius: 32px;
  margin-right: 8px;
`;
