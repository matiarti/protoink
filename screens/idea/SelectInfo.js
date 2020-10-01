import React, { useState } from "react";
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
import TextField from "../../components/input/TextField.js";
import TextArea from "../../components/input/TextArea.js";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { useNavigation } from "@react-navigation/native";
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

function SelectInfo() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [style, setStyle] = useState("");
  const [description, setDescription] = useState("");

  const navigation = useNavigation();

  return (
    <Container>
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={false}
      >
        <ScrollView vertical={true} showsHorizontalScrollIndicator={false}>
          <SafeAreaView>
            <TopBarBack />
            <Title
              title="Poste sua Ideia"
              subtitle="Para finalizar, mais algumas informações:"
            />

            <TextField
              placeholder="Título ou Nome para sua Ideia"
              autocomplete="off"
              value={title}
              changetext={(title) => setTitle(title)}
              name="title"
              id="title"
            />
            <TextField
              placeholder="Localização (Opcional)"
              icon="enviromento"
              autocomplete="off"
              value={location}
              changetext={(location) => setLocation(location)}
              name="location"
              id="location"
            />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Date");
              }}
            >
              <TextField
                placeholder="Date (Opcional)"
                icon="calendar"
                autocomplete="off"
                value={date}
                changetext={(text) => setDate(text)}
                name="date"
                id="date"
                text="Data"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ExploreStyle");
              }}
            >
              <TextField
                placeholder="Estilo (Opcional)"
                icon="bars"
                autocomplete="off"
                value={style}
                changetext={(text) => setStyle(text)}
                name="style"
                id="style"
                text="Estilo"
              />
            </TouchableOpacity>

            <TextArea
              placeholder="Descrição ou comentário adicionais"
              autocomplete="off"
              value={description}
              changetext={(text) => setDescription(text)}
              name="description"
              id="description"
            />

            <Button
              text="Criar Ideia"
              link={() => {
                navigation.navigate("Idea");
              }}
            />
          </SafeAreaView>
        </ScrollView>
      </KeyboardAwareScrollView>
    </Container>
  );
}

export default SelectInfo;

const Container = styled.View`
  background: ${colors.bg};
  flex: 1;
  border-radius: 10px;
  width: 100%;
  padding-top: 8px;
`;
