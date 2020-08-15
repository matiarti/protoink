import React from "react";
import TextField from "../components/input/TextField";
import styled from "styled-components/native";
import { Heading1 } from "../components/text/Headings";

function Form({ navigation }) {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  return (
    <Container>
      <Heading1>Hello World</Heading1>
      <TextField
        placeholder="Digite seu nome"
        icon="user"
        autocomplete="off"
        //value={name}
        //changetext={(text) => setName(text)}
        name="name"
        id="name"
      />
      <TextField
        placeholder="Senha"
        icon="key"
        autocomplete="off"
        //value={password}
        //changetext={(text) => setPassword(text)}
        name="password"
        id="password"
        security="true"
        //onSubmitEditing={onRegister}
      />
    </Container>
  );

  {
    /* async function onRegister() {
    try {
      await firebase.register(name, email, password);

      navigation.navigate("Home");
    } catch (error) {
      alert(error.message);
    }
  } */
  }
}

export default Form;

const Container = styled.View`
  background: #fff;
  flex: 1;
  border-radius: 10px;
`;
