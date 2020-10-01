import React from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  View,
} from "react-native";
import styled from "styled-components/native";
import Button from "../../components/button/Button.js";
import { Heading1, Heading4, Link, colors, Body } from "../../theme";
import TopBarBack from "../../components/topBar/TopBarBack";
import { SelectableCard } from "../../components/card/SelectableCard";
import ArmRight from "../../components/vectors/ArmRight";
import SimpleCard from "../../components/card/SimpleCard";
import * as ImagePicker from "expo-image-picker";
import Title from "../../components/text/Title.js";

const screenWidth = Dimensions.get("window").width;
var titleWidth = screenWidth - 40;
var cardWidth = screenWidth - 200;

if (screenWidth > 300) {
  cardWidth = (screenWidth - 80) / 2;
}

if (screenWidth > 800) {
  titleWidth = screenWidth - 320;
}

function SelectImageRef({ navigation }) {
  const [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  if (selectedImage !== null) {
    return (
      <Container>
        <ScrollView vertical={true} showsHorizontalScrollIndicator={false}>
          <SafeAreaView>
            <TopBarBack />
            <Title
              title="Poste sua Ideia"
              subtitle="Envie imagens que sirvam como referência:"
            />
            <TouchableOpacity onPress={openImagePickerAsync}>
              <SimpleCard icon="camerao" title="Selecione da Galeria" />
            </TouchableOpacity>
            <View
              style={{
                marginLeft: 24,
                marginTop: 24,
                marginBottom: 24,
                flexDirection: "row",
              }}
            >
              <Image source={{ uri: selectedImage.localUri }} />
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SelectInfo");
              }}
            >
              <Button
                text="Continuar"
                link={() => {
                  navigation.navigate("SelectInfo");
                }}
              />
            </TouchableOpacity>
          </SafeAreaView>
        </ScrollView>
      </Container>
    );
  }

  return (
    <Container>
      <ScrollView vertical={true} showsHorizontalScrollIndicator={false}>
        <SafeAreaView>
          <TopBarBack />
          <Title
            title="Poste sua Ideia"
            subtitle="Envie imagens que sirvam como referência:"
          />

          <TouchableOpacity onPress={openImagePickerAsync}>
            <SimpleCard icon="camerao" title="Selecione da Galeria" />
          </TouchableOpacity>

          <Button
            text="Continuar"
            link={() => {
              navigation.navigate("SelectInfo");
            }}
          />
        </SafeAreaView>
      </ScrollView>
    </Container>
  );
}

export default SelectImageRef;

const Row = styled.View`
  width: 100%;
  padding-top: 8px;
`;

const Image = styled.Image`
  width: ${cardWidth};
  height: ${cardWidth};
  border-radius: 8px;
`;

const Container = styled.View`
  background: ${colors.bg};
  flex: 1;

  width: 100%;
  padding-top: 8px;
`;
