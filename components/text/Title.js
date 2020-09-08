import React from "react";
import styled from "styled-components/native";
import { Heading1, colors, Body } from "../../theme";

function Title(props) {
  return (
    <Row>
      <Heading1 style={{ paddingLeft: 24, paddingTop: 24, paddingBottom: 4 }}>
        {props.title}
      </Heading1>
      <Body style={{ paddingLeft: 24, paddingBottom: 24 }}>
        {props.subtitle}
      </Body>
    </Row>
  );
}

export default Title;

const Row = styled.View``;
