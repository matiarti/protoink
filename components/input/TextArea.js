import React from "react";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/AntDesign";

const TextArea = (props) => (
  <Container>
    <Input style={{ elevation: 4 }}>
      <Text
        placeholder={props.placeholder}
        autoComplete="off"
        secureTextEntry={props.security}
        autoComplete={props.autocomplete}
        value={props.value}
        name={props.name}
        id={props.id}
        onChangeText={props.changetext}
        onSubmitEditing={props.onsubmit}
      />
    </Input>
  </Container>
);

export default TextArea;

const Container = styled.View`
  padding-left: 24px;
`;

const Input = styled.View`
  flex-direction: row;

  align-items: flex-start;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 4px;
  margin-right: 24px;
  margin-top: 16px;
  background: #fff;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.08);
  height: 120px;
  width: 95%;
  flex-wrap: wrap;
`;

const Text = styled.TextInput`
  text-align: left;
  flex: 1;
  flex-wrap: wrap;
  width: 95%;
  height: 40px;
  font-family: "DMSans_400Regular";
  font-size: 14px;
  line-height: 20px;
  margin-top: 16px;
`;
