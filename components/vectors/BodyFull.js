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
import { colors } from "../../theme";

const screenWidth = Dimensions.get("window").width;

var cardWidth = screenWidth - 40;

if (screenWidth > 300) {
  cardWidth = (screenWidth - 64) / 2;
}

export function BodyFull() {
  const [activated, setActivated] = useState(false);

  const Color = activated ? colors.accent : colors.neutral3;

  return (
    <View style={{ height: 480, alignSelf: "center", width: cardWidth }}>
      <View style={{ position: "absolute" }}>
        <HeadV headcolor={Color} />
      </View>

      <View style={{ position: "absolute", top: 66, left: 28 }}>
        <ChestV chestcolor={Color} />
      </View>

      <View style={{ position: "absolute", top: 136, left: 45 }}>
        <UpperBodyV upperbodycolor={Color} />
      </View>

      <View style={{ position: "absolute", top: 78, left: -1 }}>
        <ArmLeftV armleftcolor={Color} />
      </View>

      <View style={{ position: "absolute", top: 78, left: 128 }}>
        <ArmRightV armrightcolor={Color} />
      </View>

      <View style={{ position: "absolute", top: 233, left: 45 }}>
        <LegLeftV legleftcolor={Color} />
      </View>

      <View style={{ position: "absolute", top: 232, left: 88 }}>
        <LegRightV legrightcolor={Color} />
      </View>
    </View>
  );
}
