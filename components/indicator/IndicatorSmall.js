import React from "react";
import styled from "styled-components/native";

function IndicatorSmall(props) {
  return (
    <Row>
      <Circle style={{ backgroundColor: props.status }} />
    </Row>
  );
}

export default IndicatorSmall;

const Circle = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 50px;
`;

const Row = styled.View``;
