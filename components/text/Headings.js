import React from "react";
import styled from "styled-components/native";
import colors from "../../theme/colors";

export const Heading1 = styled.Text`
  font-family: DMSans;
  font-size: 24px;
  line-height: 34px;
  color: ${colors.primary};
  font-weight: 900;
  padding: 24px 0px 24px 0px;
  width: 80%;
`;

export const Heading2 = styled.Text`
  font-family: DMSans;
  font-size: 20px;
  line-height: 30px;
  color: ${colors.secondary};
  font-weight: 900;
`;

export const Heading3 = styled.Text`
  font-family: DMSans;
  font-size: 18px;
  line-height: 28px;
  color: ${colors.secondary};
  font-weight: 700;
`;

export const Heading4 = styled.Text`
  font-family: DMSans;
  font-size: 14px;
  line-height: 28px;
  color: ${colors.secondary};
  font-weight: 400;
`;

export const Heading5 = styled.Text`
  font-family: DMSans;
  font-size: 12px;
  line-height: 22px;
  color: ${colors.secondary};
  font-weight: 400;
`;

export const Heading6 = styled.Text`
  font-family: DMSans;
  font-size: 10px;
  line-height: 20px;
  color: ${colors.neutral3};
  font-weight: 400;
`;

export const Body = styled.Text`
  font-family: DMSans;
  font-size: 16px;
  line-height: 26px;
  color: ${colors.secondary};
  font-weight: 400;
`;
