import React from "react";
import { TouchableOpacity, Dimensions } from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/AntDesign";
import { Heading4, Heading3, colors } from "../../theme";

export function UploadPhoto(props) {
  return (
    <TouchableOpacity>
      <Row style={{ flexDirection: "row" }}>
        <Photo>
          <Icon name="camerao" size={24} color={colors.primary} />
        </Photo>
        <Heading3 style={{ marginTop: 24, marginLeft: 16 }}>
          Escolha uma foto de perfil
        </Heading3>
      </Row>
    </TouchableOpacity>
  );
}

const Photo = styled.View`
  border-radius: 50px;
  background: ${colors.neutral1};
  width: 80px;
  height: 80px;
  align-items: center;
  justify-content: center;
`;

const Row = styled.View`
  width: 100%;
  padding: 8px 0px;
`;
