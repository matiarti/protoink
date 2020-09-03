import React from "react";
import styled from "styled-components/native";

function Indicator(props) {
  return (
    <Row>
      <Circle style={{ backgroundColor: props.status }} />
    </Row>
  );
}

export default Indicator;

const Circle = styled.View`
  width: 16px;
  height: 16px;
  border-radius: 50px;
`;

const Row = styled.View``;
