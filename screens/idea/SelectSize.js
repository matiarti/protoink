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
import ArmRight from "../../components/vectors/BodyPartSize";
import IdeaInfoCard from "../../components/card/SizeInfoCard.js";
import { DragResizeBlock } from "../../components/dragResize";
import Title from "../../components/text/Title.js";

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
      <SafeAreaView>
        <TopBarBack />
        <Title title="Poste sua Ideia" subtitle="Qual o tamanho aproximado?" />

        <View
          style={{
            transform: [{ scale: 1.5 }],
            alignSelf: "center",
            height: 200,
            marginTop: 40,
            marginBottom: 40,
          }}
        >
          <ArmRight />
        </View>
        <DragResizeBlock x={160} y={326}>
          <View
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: colors.neutral2,
              opacity: 0.8,
            }}
          />
        </DragResizeBlock>

        <Row style={{ paddingLeft: 24, paddingBottom: 16 }}>
          <IdeaInfoCard title="Antebraço Frente" size="15cm" />
        </Row>

        <Button
          link={() => {
            navigation.navigate("ImageRef");
          }}
          text="Continuar"
        />
      </SafeAreaView>
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
