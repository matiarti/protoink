import React, { useState } from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import styled from "styled-components/native";
import Button from "../../components/button/Button";
import firebase from "../../src/Firebase";
import TextField from "../../components/input/TextField";
import { Heading1, Heading4, Heading5, Link, colors } from "../../theme";
import { UserTypeCard } from "../../components/card/userTypeCard.js";
import { UploadPhoto } from "../../components/upload/UploadPhoto.js";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import * as ImagePicker from "expo-image-picker";

const screenHeight = Dimensions.get("window").height;
var imgHeight = screenHeight;

if (screenHeight > 600) {
  imgHeight = screenHeight - 550;
}
if (screenHeight > 800) {
  imgHeight = screenHeight - 600;
}
if (screenHeight > 1200) {
  imgHeight = screenHeight - 800;
}

function RegisterScreen({ navigation }) {
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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <Container>
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={false}
      >
        <ScrollView vertical={true} showsHorizontalScrollIndicator={false}>
          <SafeAreaView>
            <Col>
              <Heading1
                style={{ paddingTop: 24, paddingBottom: 24, paddingLeft: 24 }}
              >
                Bem-vindo ao Protoink
              </Heading1>
              <Form onSubmit={(e) => e.preventDefault() && false}>
                <Row
                  style={{
                    flexDirection: "row",
                    marginBottom: 16,
                    paddingLeft: 24,
                  }}
                >
                  <UserTypeCard icon="user" title="Cliente" />
                  <UserTypeCard
                    icon="smileo"
                    title="Artista"
                    value="activated"
                  />
                  <UserTypeCard icon="isv" title="Estúdio" />
                </Row>
                <Row style={{ paddingLeft: 24 }}>
                  <TouchableOpacity onPress={openImagePickerAsync}>
                    <UploadPhoto />
                  </TouchableOpacity>
                </Row>
                <TextField
                  placeholder="Digite seu nome"
                  icon="user"
                  autocomplete="off"
                  value={name}
                  changetext={(name) => setName(name)}
                  name="name"
                  id="name"
                />

                <TextField
                  placeholder="Digite seu email"
                  icon="mail"
                  autocomplete="off"
                  value={email}
                  changetext={(email) => setEmail(email)}
                  name="email"
                  id="email"
                />

                <TextField
                  placeholder="Digite sua Senha"
                  icon={passwordShown ? "eye" : "eyeo"}
                  iconlink={togglePasswordVisiblity}
                  autocomplete="off"
                  value={password}
                  changetext={(password) => setPassword(password)}
                  name="password"
                  id="password"
                  security={passwordShown ? false : true}
                  onSubmitEditing={onRegister}
                />

                <Heading5
                  style={{
                    paddingLeft: 24,
                    paddingTop: 16,
                    color: colors.neutral3,
                  }}
                >
                  Os seus dados estão seguros no Protoink.
                </Heading5>
                <TouchableOpacity type="submit" onPress={onRegister}>
                  <Row>
                    <Button text="Cadastrar" />
                  </Row>
                </TouchableOpacity>
              </Form>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                <Heading4 style={{ paddingLeft: 24, paddingTop: 16 }}>
                  Já cadastrado? <Link>Acesse sua conta</Link>
                </Heading4>
              </TouchableOpacity>
            </Col>
          </SafeAreaView>
        </ScrollView>
      </KeyboardAwareScrollView>
    </Container>
  );

  async function onRegister() {
    try {
      await firebase.register(name, email, password);
      navigation.navigate("Style");
    } catch (error) {
      alert(error.message);
    }
  }
}

RegisterScreen["navigationOptions"] = () => ({
  headerShown: false,
  tabBarVisible: false,
});

export default RegisterScreen;

const Form = styled.View``;

const Row = styled.View`
  width: 100%;
  padding-top: 8px;
`;

const Col = styled.View``;

const Container = styled.View`
  background: #fff;
  flex: 1;
  border-radius: 10px;
`;
