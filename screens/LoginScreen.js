import React, { useState, useEffect, useRef } from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Animated,
} from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import Button from "../components/Button.js";
import LogoType from "../components/LogoType";
import firebase from "../src/Firebase";

import { Alert } from "react-native";

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

  // your form submit function which will invoke after successful validation

  return (
    <RootView>
      <Container>
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
              <Heading1>Entre no Protoink</Heading1>
              <Form onSubmit={(e) => e.preventDefault() && false}>
                <Input style={{ elevation: 4 }}>
                  <Text
                    placeholder="Digite seu Email"
                    autoComplete="off"
                    autoFocus
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    name="email"
                    id="email"
                  />

                  <Ionicons name="ios-mail" size={20} color="#565656" />
                </Input>

                <Input style={{ elevation: 4 }}>
                  <Text
                    secureTextEntry={true}
                    placeholder="Senha"
                    type="password"
                    autoComplete="off"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    name="password"
                    id="password"
                  />

                  <Ionicons name="ios-lock" size={20} color="#565656" />
                </Input>

                <Heading5>Os seus dados estão seguros no Protoink.</Heading5>
                <TouchableOpacity type="submit" onPress={login}>
                  <Row>
                    {buttons.map((button, index) => (
                      <Button key={index} text={button.text} />
                    ))}
                  </Row>
                </TouchableOpacity>
              </Form>
            </Col>
          </SafeAreaView>
        </ScrollView>
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

LoginScreen["navigationOptions"] = () => ({
  headerShown: false,
});

export default LoginScreen;

const RootView = styled.View`
  background: #fff;
  flex: 1;
`;

const Form = styled.View``;

const Input = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 4px;
  margin-right: 24px;
  margin-top: 16px;
  background: #fff;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.08);
  height: 40px;
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

const Text = styled.TextInput`
  text-align: left;
  width: 95%;
  height: 40px;
`;

const Heading5 = styled.Text`
  font-size: 14px;
  color: #939cb2;
  font-weight: 400;
  padding-top: 24px;
  padding-bottom: 8px;
`;

const Heading1 = styled.Text`
  font-size: 24px;
  color: #2457db;
  font-weight: 700;
  line-height: 32px;
  padding: 8px 0px 8px 0px;
  width: 80%;
`;

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

const buttons = [
  {
    key: "1",
    text: "Entrar",
  },
];
