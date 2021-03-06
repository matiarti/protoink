import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const Button = (props) => (
  <Container>
    <TouchableOpacity onPress={props.link}>
      <Buttons>
        <Text>{props.text}</Text>
      </Buttons>
    </TouchableOpacity>
  </Container>
);

export default Button;

const Container = styled.View`
  margin-right: 24px;
  padding-top: 8px;
  padding-bottom: 8px;
`;

const Buttons = styled.View`
  align-items: center;
  justify-content: center;
  background: #e46399;
  height: 40px;
  border-radius: 4px;
  padding: 0px 24px 0px 24px;
`;

const Text = styled.Text`
  font-size: 16px;
  color: #ffffff;
  font-weight: 700;
`;
