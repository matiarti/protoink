import React from "react";
import styled from "styled-components/native";
import ArmLeft from "./ArmLeft";
import ArmRight from "./ArmRight";
import Head from "./Head";
import Chest from "./Chest";
import UpperBody from "./UpperBody";
import LegRight from "./LegRight";
import LegLeft from "./LegLeft";
import colors from "../../theme";

export function ArmLeftV(props) {
  return <ArmLeft armleftcolor={props.armleftcolor} />;
}

export function ArmRightV(props) {
  return <ArmRight armrightcolor={props.armrightcolor} />;
}

export function HeadV(props) {
  return <Head headcolor={props.headcolor} />;
}
export function ChestV(props) {
  return <Chest chestcolor={props.chestcolor} />;
}
export function UpperBodyV(props) {
  return <UpperBody upperbodycolor={props.upperbodycolor} />;
}

export function LegLeftV(props) {
  return <LegLeft legleftcolor={props.legleftcolor} />;
}

export function LegRightV(props) {
  return <LegRight legrightcolor={props.legrightcolor} />;
}

export function Body(props) {
  return <Row></Row>;
}

const Circle = styled.View`
  width: 16px;
  height: 16px;
  border-radius: 50px;
`;

const Row = styled.View``;
