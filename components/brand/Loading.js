import React from "react";
import styled from "styled-components/native";
import LottieView from "lottie-react-native";

function Loading() {
  return (
    <Container>
      <LottieView
        source={require("../../assets/loading.json")}
        autoPlay={true}
        loop={true}
        ref={animation}
        style={{
          width: 200,
          height: 200,
        }}
      />
    </Container>
  );
}

export default Loading;

const Container = styled.View`
  background: #fff;
  flex: 1;
`;
