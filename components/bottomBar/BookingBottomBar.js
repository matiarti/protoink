import React from "react";
import styled from "styled-components/native";
import Button from "../button/ButtonCta.js";
import { Dimensions, View } from "react-native";
import { Heading5, Heading6, colors } from "../../theme.js";
import Icon from "react-native-vector-icons/AntDesign";
import IndicatorSmall from "../indicator/IndicatorSmall";
import IconTextSmall from "../../components/icon/IconTextSmall";

const screenWidth = Dimensions.get("window").width;
var barWidth = screenWidth;
if (screenWidth > 300) {
  barWidth = screenWidth;
}

function BookingBottomBar(props) {
  return (
    <Container style={{ elevation: 16 }}>
      <Row>
        <Row2 style={{ paddingLeft: 24 }}>
          <IconTextSmall text={props.text} icon="isv" />
        </Row2>
        <Row2>
          <View style={{ paddingTop: 4, paddingRight: 4 }}>
            <IndicatorSmall status={colors.warning} />
          </View>
          <Heading5 style={{ color: colors.warning, paddingBottom: 8 }}>
            {props.status}
          </Heading5>
        </Row2>
        <Button text={props.button} />
      </Row>
    </Container>
  );
}

export default BookingBottomBar;

const Row = styled.View`
  padding-top: 16px;
  flex-direction: row;
  padding-bottom: 16px;
  align-items: center;
  justify-content: space-between;
  height: 64px;
`;

const Row2 = styled.View`
  flex-direction: row;
`;

const Container = styled.View`
  background: white;
  width: ${barWidth};
  box-shadow: 0px -5px 16px rgba(0, 0, 0, 0.08);
  background: ${colors.white};
`;
