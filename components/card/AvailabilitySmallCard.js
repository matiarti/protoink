import React from "react";
import styled from "styled-components/native";
import { Heading1, Heading3, Heading6 } from "../../theme";
import colors from "../../theme/colors";

const AvailabitilySmallCard = (props) => (
  <Container>
    <Col>
      <Heading1 style={{ textAlign: "center", color: colors.secondary }}>
        {props.day}
      </Heading1>
      <Heading3 style={{ color: colors.neutral3 }}>{props.month}</Heading3>
      <Separator />
      <Heading6 style={{ textAlign: "center", color: colors.neutral3 }}>
        {props.weekDay}
      </Heading6>
      <Heading6 style={{ textAlign: "center", color: colors.neutral3 }}>
        {props.time}
      </Heading6>
    </Col>
  </Container>
);

export default AvailabitilySmallCard;

const Separator = styled.View`
  border: 1px solid ${colors.neutral2};
  margin-top: 8px;
  margin-bottom: 8px;
  width: 48px;
  height: 2px;
`;

const Col = styled.View`
  flex-direction: column;
  padding-top: 16px;
  padding-bottom: 24px;
  align-items: center;
  justify-content: center;
  height: 140px;
`;

const Container = styled.View`
  background: white;
  width: 90px;
  border-radius: 8px;
  margin-right: 16px;
  margin-bottom: 16px;
  background: ${colors.neutral1};
`;
