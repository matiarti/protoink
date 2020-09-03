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

import { BodyFull } from "../../components/vectors/BodyFull";

const screenWidth = Dimensions.get("window").width;
var titleWidth = screenWidth - 40;
var cardWidth = screenWidth - 40;

if (screenWidth > 300) {
  cardWidth = (screenWidth - 64) / 2;
}

if (screenWidth > 800) {
  titleWidth = screenWidth - 320;
}

function SelectBodyPart({ navigation }) {
  return (
    <RootView>
      <Container>
        <ScrollView vertical={true} showsHorizontalScrollIndicator={false}>
          <SafeAreaView>
            <TopBarBack />
            <Heading1
              style={{ paddingLeft: 24, paddingTop: 48, paddingBottom: 8 }}
            >
              Poste sua Ideia
            </Heading1>
            <Body style={{ paddingLeft: 24, paddingBottom: 24 }}>
              Selecione uma parte do corpo
            </Body>
            <BodyFull />
            <Row
              style={{
                flexDirection: "row",
                marginBottom: 16,
                paddingLeft: 24,
              }}
            >
              <SelectableCard icon="up" title="Frente" width={cardWidth} />
              <SelectableCard
                icon="down"
                title="Costas"
                width={cardWidth}
                value="activated"
              />
            </Row>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Size");
              }}
            >
              <Button text="Continuar" />
            </TouchableOpacity>
          </SafeAreaView>
        </ScrollView>
      </Container>
    </RootView>
  );
}

export default SelectBodyPart;

const RootView = styled.View`
  background: #fff;
  flex: 1;
`;

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
