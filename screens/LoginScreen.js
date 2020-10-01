import React, { useState } from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import styled from "styled-components/native";
import LogoType from "../components/brand/LogoType";
import firebase from "../src/Firebase";
import { Heading1, Heading4, Link } from "../theme";
import TextField from "../components/input/TextField";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Button from "../components/button/Button";

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

function LoginScreen({ navigation, props }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <RootView>
      <Container>
        <KeyboardAwareScrollView
          resetScrollToCoords={{ x: 0, y: 0 }}
          scrollEnabled={false}
        >
          <ScrollView vertical={true} showsHorizontalScrollIndicator={false}>
            <SafeAreaView>
              <Cover>
                <LogoType style={{ width: 160 }} />
                <Image
                  source={require("../assets/loginCover.jpg")}
                  resizeMode="contain"
                  style={{ marginTop: 16 }}
                />
              </Cover>
              <Col>
                <Heading1 style={{ paddingLeft: 24 }}>
                  Entre no Protoink
                </Heading1>
                <Form onSubmit={(e) => e.preventDefault() && false}>
                  <TextField
                    placeholder="Digite seu email"
                    icon="mail"
                    autocomplete="off"
                    value={email}
                    changetext={(text) => setEmail(text)}
                    name="email"
                    id="email"
                  />
                  <TextField
                    placeholder="Digite sua Senha"
                    icon={passwordShown ? "eye" : "eyeo"}
                    iconlink={togglePasswordVisiblity}
                    autocomplete="off"
                    value={password}
                    changetext={(text) => setPassword(text)}
                    name="password"
                    id="password"
                    security={passwordShown ? false : true}
                    onsubmit={login}
                  />
                  <TouchableOpacity type="submit">
                    <Row>
                      <Button text="Entrar" link={login} />
                    </Row>
                  </TouchableOpacity>
                </Form>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Register");
                  }}
                >
                  <Heading4 style={{ marginTop: 16, paddingLeft: 24 }}>
                    Novo no Protoink? <Link>Crie uma nova conta</Link>
                  </Heading4>
                </TouchableOpacity>
              </Col>
            </SafeAreaView>
          </ScrollView>
        </KeyboardAwareScrollView>
      </Container>
    </RootView>
  );
  async function login() {
    try {
      await firebase.login(email, password);
      navigation.navigate("Home");
    } catch (error) {
      alert(error.message);
    }
  }
}

export default LoginScreen;

const RootView = styled.View`
  background: #fff;
  flex: 1;
`;

const Image = styled.Image`
  width: 100%;
  height: ${imgHeight};
`;

const Cover = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
`;

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
