import React from "react";
import styled from "styled-components/native";
import Body from "../../theme";
import { Heading2 } from "../../theme";

const Button = (props) => (
  <Container>
    <Buttons>
      <Text>{props.text}</Text>
    </Buttons>
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
  padding: 0px 16px 0px 16px;
`;

const Text = styled.Text`
  font-family: "DMSans_700Bold";
  font-size: 16px;
  color: #ffffff;
  font-weight: 700;
`;
