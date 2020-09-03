import React from "react";
import styled from "styled-components/native";

export const colors = {
  primary: "#2457DB",
  secondary: "#565656",
  accent: "#E46399",
  success: "#40B439",
  danger: "#E14D45",
  warning: "#EF9327",
  white: "#FFFFFF",
  neutral3: "#939CB2",
  neutral2: "#E5EFF3",
  neutral1: "#F7F7FB",
  bg: "#FFFFFF",
};

export const Heading1 = styled.Text`
  font-family: "DMSans_700Bold";
  font-size: 24px;
  line-height: 32px;
  color: ${colors.primary};

  width: 100%;
`;

export const Heading2 = styled.Text`
  font-family: "DMSans_700Bold";
  font-size: 20px;
  line-height: 26px;
  color: ${colors.secondary};
`;

export const Heading3 = styled.Text`
  font-family: "DMSans_400Regular";
  font-size: 18px;
  line-height: 28px;
  color: ${colors.secondary};
`;

export const Heading4 = styled.Text`
  font-family: "DMSans_700Bold";
  font-size: 14px;
  line-height: 18px;
  color: ${colors.secondary};
`;

export const Heading5 = styled.Text`
  font-family: "DMSans_400Regular";
  font-size: 12px;
  line-height: 18px;
  color: ${colors.secondary};
`;

export const Heading6 = styled.Text`
  font-family: "DMSans_400Regular";
  font-size: 10px;
  line-height: 16px;
  color: ${colors.neutral3};
`;

export const Body = styled.Text`
  font-family: "DMSans_400Regular";
  font-size: 16px;
  line-height: 26px;
  color: ${colors.secondary};
`;

export const SmallBody = styled.Text`
  font-family: "DMSans_400Regular";
  font-size: 14px;
  line-height: 22px;
  color: ${colors.secondary};
`;

export const Link = styled.Text`
  color: ${colors.accent};
`;
