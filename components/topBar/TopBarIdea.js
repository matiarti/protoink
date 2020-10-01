import React, { useState } from "react";
import { TouchableOpacity, Modal } from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/AntDesign";
import { Heading1, Heading3, Heading4, Heading5, colors } from "../../theme";
import { useNavigation } from "@react-navigation/native";

function TopBarIdea() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <Header>
      <Col>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon
            name="arrowleft"
            size={24}
            color={colors.primary}
            style={{
              position: "absolute",
              top: 52,
              left: 24,
            }}
          />
        </TouchableOpacity>
      </Col>

      <Col>
        <TouchableOpacity>
          <Icon
            name="delete"
            size={24}
            color={colors.danger}
            style={{
              position: "absolute",
              top: 52,
              right: 24,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Body");
          }}
        >
          <Icon
            name="edit"
            size={24}
            color={colors.accent}
            style={{
              position: "absolute",
              top: 52,
              right: 64,
            }}
          />
        </TouchableOpacity>
        <Icon
          name="sharealt"
          size={24}
          color={colors.primary}
          style={{
            position: "absolute",
            top: 52,
            right: 108,
          }}
        />
      </Col>
    </Header>
  );
}

export default TopBarIdea;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  z-index: 1;
`;

const Col = styled.View`
  flex-direction: row;
`;
