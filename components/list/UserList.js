import React, { useState } from "react";
import { TouchableOpacity, ScrollView, View } from "react-native";
import styled from "styled-components/native";
import { colors, Heading4, Heading6 } from "../../theme";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";
import MessageCard from "../card/MessageCard";

function UserList(props) {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 32 }}>
      <MessageCard
        link={() => {
          navigation.navigate("MessageChat");
        }}
      />
      <MessageCard />
    </View>
  );
}

export default UserList;

const UserPic = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 8px;
  background: #000;
`;

const Col = styled.View`
  flex-direction: column;
`;

const Row = styled.View`
  width: 100%;
  height: 80px;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 24px;
`;

const Container = styled.View``;
