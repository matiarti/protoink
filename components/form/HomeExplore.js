import React from "react";
import { TouchableOpacity } from "react-native";
import { useForm } from "react-hook-form";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

export default function Explore() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <Input onSubmit={handleSubmit(onSubmit)} style={{ elevation: 8 }}>
      <Text
        type="text"
        placeholder="Estúdios, artistas ou lugares"
        name="explore"
        ref={register({ required: true, maxLength: 120 })}
      />
      <TouchableOpacity>
        <Ionicons name="ios-search" size={20} color="#565656" />
      </TouchableOpacity>
    </Input>
  );
}

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

const Text = styled.TextInput`
  text-align: left;
  width: 95%;
  height: 40px;
`;
