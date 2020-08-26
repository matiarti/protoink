import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { Heading4, Heading5, Heading6, Body } from "../../theme";
import colors from "../../theme/colors";
import Icon from "react-native-vector-icons/AntDesign";

const screenWidth = Dimensions.get("window").width;
var cardWidth = screenWidth - 52;

if (screenWidth > 300) {
  cardWidth = screenWidth - 48;
}
if (screenWidth > 500) {
  cardWidth = (screenWidth - 72) / 2;
}
if (screenWidth > 1200) {
  cardWidth = (screenWidth - 120) / 4;
}

const NotificationCard = (props) => (
  <Container style={{ elevation: 8, marginRight: 16, padding: 24 }}>
    <Row>
      <Col>
        <Row>
          <CoverImage source={require("../../assets/favicon.png")} />
          <Heading4
            style={{
              color: colors.neutral3,
            }}
          >
            Protoink
          </Heading4>
        </Row>
      </Col>
      <Col>
        <Heading6>Agora</Heading6>
      </Col>
    </Row>
    <Row2 style={{ paddingTop: 8 }}>
      <Heading5 style={{ paddingRight: 24 }}>
        Seu artista favorito RaphaLopes acabou de responder sua mensagem.
      </Heading5>
    </Row2>
  </Container>
);

export default NotificationCard;

const Col = styled.View``;

const CoverImage = styled.Image`
  width: 24px;
  height: 24px;
  margin-right: 16px;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Row2 = styled.View`
  flex-direction: row;
`;

const Container = styled.View`
  background: ${colors.white};
  width: ${cardWidth};
  margin: 16px 0px 8px 0px;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
`;
