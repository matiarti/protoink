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
import {
  UserTypeCardActive,
  UserTypeCardNormal,
} from "../../components/card/userTypeCard.js";
import { UploadPhoto } from "../../components/upload/UploadPhoto.js";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <ScrollView vertical={true} showsHorizontalScrollIndicator={false}>
        <SafeAreaView>
          <Col>
            <Heading1 style={{ paddingTop: 24, paddingBottom: 24 }}>
              Bem-vindo ao Protoink
            </Heading1>
            <Form onSubmit={(e) => e.preventDefault() && false}>
              <Row style={{ flexDirection: "row", marginBottom: 16 }}>
                <UserTypeCardActive icon="user" title="Cliente" />
                <UserTypeCardNormal icon="smileo" title="Artista" />
                <UserTypeCardNormal icon="isv" title="Estúdio" />
              </Row>
              <UploadPhoto />

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
                placeholder="Senha"
                icon="key"
                autocomplete="off"
                value={password}
                changetext={(password) => setPassword(password)}
                name="password"
                id="password"
                security="true"
                onSubmitEditing={onRegister}
              />

              <Heading5 style={{ paddingTop: 16, color: colors.neutral3 }}>
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
              <Heading4 style={{ paddingTop: 16 }}>
                Já cadastrado? <Link>Acesse sua conta</Link>
              </Heading4>
            </TouchableOpacity>
          </Col>
        </SafeAreaView>
      </ScrollView>
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

const RootView = styled.View`
  background: #fff;
  flex: 1;
`;

const Form = styled.View``;

const Row = styled.View`
  width: 100%;
  padding-top: 8px;
`;

const Col = styled.View`
  margin-left: 24px;
`;

const Container = styled.View`
  background: #fff;
  flex: 1;
  border-radius: 10px;
`;
