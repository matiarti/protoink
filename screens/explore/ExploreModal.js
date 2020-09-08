import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import TextField from "../../components/input/TextField";
import TextButton from "../../components/input/TextButton";
import styled from "styled-components/native";
import Button from "../../components/button/Button";
import { Heading4, Link, colors } from "../../theme";
import { useNavigation } from "@react-navigation/native";

function ExploreModal() {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [style, setStyle] = useState("");

  const navigation = useNavigation();
  return (
    <Form onSubmit={(e) => e.preventDefault() && false}>
      <TextField
        placeholder="Localização"
        icon="enviromento"
        autocomplete="off"
        value={location}
        changetext={(text) => setLocation(text)}
        name="location"
        id="location"
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Date");
        }}
      >
        <TextButton
          placeholder="Data"
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
        <TextButton
          placeholder="Estilo"
          icon="bars"
          autocomplete="off"
          value={style}
          changetext={(text) => setStyle(text)}
          name="style"
          id="style"
          text="Estilo"
        />
      </TouchableOpacity>

      <TouchableOpacity
        type="submit"
        onPress={() => {
          navigation.navigate("Result");
        }}
      >
        <Row>
          <Button text="Buscar" />
        </Row>
      </TouchableOpacity>
    </Form>
  );
}

export default ExploreModal;

const Form = styled.View`
  background: ${colors.bg};
`;

const Row = styled.View`
  width: 100%;
  padding-top: 8px;
`;
