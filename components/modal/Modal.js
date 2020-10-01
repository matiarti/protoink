import React, { useState } from "react";
import styled from "styled-components/native";
import { Modal } from "react-native";
import { Heading1, Heading3, Heading4, Heading5, colors } from "../../theme";
import Button from "../button/Button";
import { TouchableOpacity } from "react-native";

function Modal2() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Container>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <ModalBg>
          <Heading1
            style={{ paddingLeft: 24, paddingTop: 80, paddingBottom: 40 }}
          >
            Hello
          </Heading1>
          <Button
            text="Fechar"
            link={() => {
              setModalVisible(!modalVisible);
            }}
          />
        </ModalBg>
      </Modal>
      <Row>
        <Button
          text="Open"
          link={() => {
            setModalVisible(true);
          }}
        />
      </Row>
    </Container>
  );
}

export default Modal2;

const Circle = styled.View`
  width: 16px;
  height: 16px;
  border-radius: 50px;
`;

const ModalBg = styled.View`
  background: #fff;
  width: 375px;
  height: 667px;
  align-self: center;
  margin-top: 80px;

  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;

const Row = styled.View`
  width: 100%;
`;

const Container = styled.View`
  background: rgba(0, 0, 0, 0.4);
  flex: 1;
  align-items: center;
  justify-content: center;
`;
