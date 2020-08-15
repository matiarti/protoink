import React from "react";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/AntDesign";

const TextField = (props) => (
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
    />

    <Icon name={props.icon} size={20} color="#565656" />
  </Input>
);

export default TextField;

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

const Text = styled.TextInput`
  text-align: left;
  width: 95%;
  height: 40px;
  font-family: DMSans;
  font-size: 14px;
  line-height: 28px;
`;

{
  /*
<Input style={{ elevation: 4 }}>
                  <Text
                    placeholder="Digite seu Email"
                    autoComplete="off"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    name="email"
                    id="email"
                  />

                  <Icon name="mail" size={20} color="#565656" />
</Input>
*/
}
