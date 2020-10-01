import React, { useState } from "react";
import styled from "styled-components/native";
import { View, Dimensions, TouchableOpacity } from "react-native";
import {
  ArmLeftV,
  ArmRightV,
  HeadV,
  ChestV,
  UpperBodyV,
  LegRightV,
  LegLeftV,
} from "./Body";

const screenWidth = Dimensions.get("window").width;

var cardWidth = screenWidth - 40;

if (screenWidth > 300) {
  cardWidth = (screenWidth - 64) / 2;
}

export function BodyFull() {
  return (
    <View style={{ height: 480, alignSelf: "center", width: cardWidth }}>
      <View style={{ position: "absolute", left: -9 }}>
        <HeadV />
      </View>

      <View style={{ position: "absolute", top: 66, left: 20 }}>
        <ChestV />
      </View>

      <View style={{ position: "absolute", top: 136, left: 37 }}>
        <UpperBodyV />
      </View>

      <View style={{ position: "absolute", top: 78, left: -9 }}>
        <ArmLeftV />
      </View>

      <View style={{ position: "absolute", top: 78, left: 120 }}>
        <ArmRightV />
      </View>

      <View style={{ position: "absolute", top: 233, left: 37 }}>
        <LegLeftV />
      </View>

      <View style={{ position: "absolute", top: 232, left: 80 }}>
        <LegRightV />
      </View>
    </View>
  );
}
