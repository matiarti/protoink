import React, { useState } from "react";
import { TouchableOpacity, ScrollView, View } from "react-native";
import styled from "styled-components/native";
import { colors, Heading4, Heading6 } from "../../theme";

import Icon from "react-native-vector-icons/AntDesign";

function MessageCard(props) {
  return (
    <TouchableOpacity onPress={props.link}>
      <Row>
        <UserPic source={require("../../assets/logo.png")} />
        <Col>
          <Heading4 style={{ marginLeft: -64, marginTop: 8 }}>
            Nome e Sobrenome
          </Heading4>
          <Heading6 style={{ marginLeft: -64, marginTop: 8 }}>
            Ultima mensagem: 24m
          </Heading6>
        </Col>
        <Icon name="arrowright" color={colors.primary} size={24} />
      </Row>
    </TouchableOpacity>
  );
}

export default MessageCard;

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
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
`;

const Container = styled.View``;
