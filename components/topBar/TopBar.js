import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import LogoSvg from "../../components/brand/LogoSymbol";
import colors from "../../theme/colors";
import Icon from "react-native-vector-icons/AntDesign";
import firebase from "../../src/Firebase";
import { useNavigation } from "@react-navigation/native";

function TopBar() {
  const navigation = useNavigation();
  return (
    <Row>
      <LogoSvg style={{ width: 40 }} />
      <TouchableOpacity onPress={logout}>
        <Icon name="bells" size={32} color={colors.primary} />
      </TouchableOpacity>
    </Row>
  );

  async function logout() {
    await firebase.logout();
    navigation.navigate("Login");
  }
}

export default TopBar;

const Row = styled.View`
  padding-top: 8px;
  padding-right: 24px;
  padding-left: 24px;
  flex-direction: row;
  justify-content: space-between;
  height: 64px;
`;
