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

import { Alert } from "react-native";

const screenHeight = Dimensions.get("window").height;
var imgHeight = screenHeight;

if (screenHeight > 600) {
  imgHeight = screenHeight - 450;
}
if (screenHeight > 800) {
  imgHeight = screenHeight - 600;
}
if (screenHeight > 1200) {
  imgHeight = screenHeight - 800;
}

function LoginScreen({ navigation, props }) {
  const { register, handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    navigation.navigate("Home");
  }; // your form submit function which will invoke after successful validation

  return (
    <RootView>
      <Container>
        <ScrollView vertical={true} showsHorizontalScrollIndicator={false}>
          <SafeAreaView>
            <Cover>
              <LogoType style={{ width: 200 }} />
              <Image
                source={require("../assets/loginCover.jpg")}
                resizeMode="contain"
                style={{ marginTop: 24 }}
              />
            </Cover>
            <Col>
              <Heading1>Entre no Protoink</Heading1>
              <Form>
                <Input style={{ elevation: 4 }}>
                  <Controller
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                      <Text
                        placeholder="Digite seu Email"
                        onBlur={onBlur}
                        onChangeText={(value) => onChange(value)}
                        value={value}
                      />
                    )}
                    name="email"
                    rules={{ required: true }}
                    defaultValue=""
                  />

                  <Ionicons name="ios-mail" size={20} color="#565656" />
                </Input>

                <Input style={{ elevation: 4 }}>
                  <Controller
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                      <Text
                        secureTextEntry={true}
                        placeholder="Senha"
                        type="password"
                        onBlur={onBlur}
                        onChangeText={(value) => onChange(value)}
                        value={value}
                      />
                    )}
                    name="password"
                    rules={{ required: true }}
                    defaultValue=""
                  />

                  <Ionicons name="ios-lock" size={20} color="#565656" />
                </Input>

                <Heading5>Os seus dados estão seguros no Protoink.</Heading5>
                <TouchableOpacity
                  onPress={handleSubmit(onSubmit)}
                  type="submit"
                >
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
}

LoginScreen["navigationOptions"] = (screenProps) => ({
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
  margin-top: 24px;
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
  padding-top: 40px;
  padding-bottom: 8px;
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
  padding: 16px 0px 16px 0px;
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
