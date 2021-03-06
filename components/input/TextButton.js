import React from "react";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/AntDesign";
import { SmallBody, colors } from "../../theme";

const TextButton = (props) => (
  <Container>
    <Input style={{ elevation: 4 }}>
      <SmallBody style={{ color: colors.neutral3 }}>{props.text}</SmallBody>
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

      <Icon name={props.icon} size={20} color="#565656" />
    </Input>
  </Container>
);

export default TextButton;

const Container = styled.View`
  padding-left: 24px;
`;

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

const Text = styled.View`
  text-align: left;
  width: 86%;
  height: 40px;
  font-family: "DMSans_400Regular";
  font-size: 14px;
  line-height: 20px;
`;
