import React from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
  View,
} from "react-native";
import styled from "styled-components/native";
import Button from "../../components/button/Button.js";
import { Heading1, Heading4, Link, colors, Body } from "../../theme";
import TopBarBack from "../../components/topBar/TopBarBack";
import { SelectableCard } from "../../components/card/SelectableCard";
import ArmRight from "../../components/vectors/ArmRight";
import IdeaInfoCard from "../../components/card/SizeInfoCard.js";

const screenWidth = Dimensions.get("window").width;

var titleWidth = screenWidth - 40;
var cardWidth = screenWidth - 40;

if (screenWidth > 300) {
  cardWidth = (screenWidth - 64) / 2;
}

if (screenWidth > 800) {
  titleWidth = screenWidth - 320;
}

function SelectSize({ navigation }) {
  return (
    <Container>
      <ScrollView vertical={true} showsHorizontalScrollIndicator={false}>
        <SafeAreaView>
          <TopBarBack />
          <Heading1
            style={{ paddingLeft: 24, paddingTop: 48, paddingBottom: 24 }}
          >
            Poste sua Ideia
          </Heading1>
          <Body style={{ paddingLeft: 24, paddingBottom: 24 }}>
            Qual tamanho você deseja?
          </Body>
          <View
            style={{
              alignSelf: "center",
              height: 340,
              marginTop: 40,
              marginBottom: 40,
            }}
          >
            <ArmRight />
          </View>

          <Row style={{ paddingLeft: 24, paddingBottom: 24 }}>
            <IdeaInfoCard title="Antebraço Frente" size="15cm" />
          </Row>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ImageRef");
            }}
          >
            <Button text="Continuar" />
          </TouchableOpacity>
        </SafeAreaView>
      </ScrollView>
    </Container>
  );
}

export default SelectSize;

const Row = styled.View`
  width: 100%;
  padding-top: 8px;
`;

const Container = styled.View`
  background: ${colors.bg};
  flex: 1;
  border-radius: 10px;
  width: 100%;
  padding-top: 8px;
`;
