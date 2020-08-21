import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import TextField from "../components/input/TextField";
import styled from "styled-components/native";
import firebase from "../src/Firebase";
import Button from "../components/button/Button";
import { Heading4, Link } from "../components/text/Headings";

function LoginForm({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
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
          placeholder="Senha"
          icon="key"
          autocomplete="off"
          value={password}
          changetext={(text) => setPassword(text)}
          name="password"
          id="password"
          security="true"
          onsubmit={login}
        />
        <TouchableOpacity type="submit" onPress={login}>
          <Row>
            {buttons.map((button, index) => (
              <Button key={index} text={button.text} />
            ))}
          </Row>
        </TouchableOpacity>
      </Form>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Register");
        }}
      >
        <Heading4>
          Novo no Protoink? <Link>Crie uma nova conta</Link>
        </Heading4>
      </TouchableOpacity>
    </Container>
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

export default LoginForm;

const Container = styled.View`
  background: #fff;
  flex: 1;
  border-radius: 10px;
`;

const Form = styled.View``;

const Row = styled.View`
  width: 100%;
  padding-top: 8px;
`;

const buttons = [
  {
    key: "1",
    text: "Entrar",
  },
];
