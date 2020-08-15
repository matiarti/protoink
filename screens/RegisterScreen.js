import React, { useState, useEffect, useRef } from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import Button from "../components/button/Button.js";
import firebase from "../src/Firebase";
import Icon from "react-native-vector-icons/AntDesign";
import TextField from "../components/input/TextField";
import { Heading1 } from "../components/text/Headings";

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

function RegisterScreen({ navigation, typeCard }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <RootView>
      <Container>
        <ScrollView vertical={true} showsHorizontalScrollIndicator={false}>
          <SafeAreaView>
            <Col>
              <Heading1>Bem-vindo ao Protoink</Heading1>
              <Form onSubmit={(e) => e.preventDefault() && false}>
                <Row style={{ flexDirection: "row", marginBottom: 16 }}>
                  <TouchableOpacity>
                    <TypeCard>
                      <Icon name="user" size={24} color="#2457db" />
                      <Subtitle>Cliente</Subtitle>
                    </TypeCard>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <TypeCard
                      style={{
                        boxShadow: "none",
                        borderStyle: "solid",
                        borderColor: "#E5EFF3",
                        borderWidth: 1,
                      }}
                    >
                      <Icon name="smileo" size={24} color="#939CB2" />
                      <Subtitle>Artista</Subtitle>
                    </TypeCard>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <TypeCard
                      style={{
                        boxShadow: "none",
                        borderStyle: "solid",
                        borderColor: "#E5EFF3",
                        borderWidth: 1,
                      }}
                    >
                      <Icon name="isv" size={24} color="#939CB2" />
                      <Subtitle>Estúdio</Subtitle>
                    </TypeCard>
                  </TouchableOpacity>
                </Row>
                <TouchableOpacity>
                  <Row style={{ flexDirection: "row" }}>
                    <Photo>
                      <Icon name="camerao" size={24} color="#2457db" />
                    </Photo>
                    <Subtitle style={{ marginTop: 16, marginLeft: 16 }}>
                      Escolha uma foto de perfil
                    </Subtitle>
                  </Row>
                </TouchableOpacity>

                <TextField
                  placeholder="Digite seu nome"
                  icon="user"
                  autocomplete="off"
                  value={name}
                  changetext={(text) => setName(text)}
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
                  changetext={(text) => setPassword(text)}
                  name="password"
                  id="password"
                  security="true"
                  onSubmitEditing={onRegister}
                />

                <Heading5>Os seus dados estão seguros no Protoink.</Heading5>
                <TouchableOpacity type="submit" onClick={onRegister}>
                  <Row>
                    {buttons.map((button, index) => (
                      <Button key={index} text={button.text} />
                    ))}
                  </Row>
                </TouchableOpacity>
              </Form>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                <Heading5>
                  Já cadastrado? <Link>Acesse sua conta</Link>
                </Heading5>
              </TouchableOpacity>
            </Col>
          </SafeAreaView>
        </ScrollView>
      </Container>
    </RootView>
  );

  async function onRegister() {
    try {
      await firebase.register(name, email, password);

      navigation.navigate("Home");
    } catch (error) {
      alert(error.message);
    }
  }
}

RegisterScreen["navigationOptions"] = () => ({
  headerShown: false,
});

export default RegisterScreen;

const Photo = styled.View`
  border-radius: 50px;
  background: #f7f7fb;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

const Subtitle = styled.Text`
  font-size: 14px;
  color: #565656;
  margin-top: 8px;
  font-weight: 600;
`;

const TypeCard = styled.View`
  width: 100px;
  margin-right: 16px;
  padding: 24px 0px 24px 0px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.06);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #e46399;
  ${Subtitle}:hover & {
    fill: rebeccapurple;
  }
`;

const RootView = styled.View`
  background: #fff;
  flex: 1;
`;

const Form = styled.View``;

const Link = styled.Text`
  color: #e46399;
`;

const Heading5 = styled.Text`
  font-size: 14px;
  color: #939cb2;
  font-weight: 400;
  padding-top: 24px;
  padding-bottom: 8px;
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
    text: "Cadastrar",
  },
];
