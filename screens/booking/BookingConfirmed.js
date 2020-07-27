import React from "react";
import { ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

class BookingConfirmed extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <RootView>
        <Container>
          <SafeAreaView>
            <ScrollView>
              <Row>
                <Heading1>Agendamentos</Heading1>
              </Row>

              <Row>
                <Heading3>Estúdios</Heading3>
              </Row>
            </ScrollView>
          </SafeAreaView>
        </Container>
      </RootView>
    );
  }
}

export default BookingConfirmed;

const RootView = styled.View`
  background: #fff;
  flex: 1;
`;

const Heading3 = styled.Text`
  font-size: 16px;
  color: #565656;
  font-weight: 600;
`;

const Heading1 = styled.Text`
  font-size: 24px;
  color: #2457db;
  font-weight: 700;
  line-height: 32px;
  padding: 16px 0px 16px 0px;
  width: 80%;
`;

const Row = styled.View`
  width: 100%;
  padding-left: 24px;
  padding-top: 8px;
`;

const TopBar = styled.View`
  padding-top: 8px;
  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 16px;
  flex-direction: row;
  justify-content: space-between;
  height: 64px;
`;

const Container = styled.View`
  background: #f0f3f5;
  flex: 1;
  border-radius: 10px;
`;
