import React from "react";
import {
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Pressable,
  View,
} from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";
import { Heading1, Heading3, Heading4, Heading5, colors } from "../../theme";

function TopBarBack(props) {
  const navigation = useNavigation();
  return (
    <Header>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View>
          <Col>
            <Icon
              name="arrowleft"
              size={24}
              color={colors.primary}
              style={{
                position: "absolute",
                top: 32,
                left: 24,
              }}
            />
          </Col>
        </View>
      </TouchableOpacity>
      <Col>
        <TouchableOpacity onPress={props.link}>
          <Heading3 style={{ paddingTop: 32, paddingRight: 24 }}>
            {props.text}
          </Heading3>
        </TouchableOpacity>
      </Col>
    </Header>
  );
}

export default TopBarBack;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  z-index: 2;
`;

const Col = styled.View`
  flex-direction: row;
`;
