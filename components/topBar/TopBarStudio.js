import React from "react";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/AntDesign";
import { Heading1, Heading3, Heading4, Heading5, colors } from "../../theme";
import { useNavigation } from "@react-navigation/native";
import Heart from "../icon/Heart";

function TopBarStudio() {
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
            color={colors.white}
            style={{
              position: "absolute",
              top: 52,
              left: 24,
            }}
          />
        </TouchableOpacity>
      </Col>

      <Col>
        <View
          style={{
            position: "absolute",
            top: 52,
            right: 108,
          }}
        >
          <Heart size={24} />
        </View>

        <Icon
          name="message1"
          size={24}
          color={colors.white}
          style={{
            position: "absolute",
            top: 52,
            right: 64,
          }}
        />
        <Icon
          name="sharealt"
          size={24}
          color={colors.white}
          style={{
            position: "absolute",
            top: 52,
            right: 24,
          }}
        />
      </Col>
    </Header>
  );
}

export default TopBarStudio;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  z-index: 1;
`;

const Col = styled.View`
  flex-direction: row;
`;
