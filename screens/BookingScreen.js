import React from "react";
import { ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import BookingConfirmed from "../screens/booking/BookingConfirmed";

class BookingScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <RootView>
        <Container>
          <SafeAreaView></SafeAreaView>
        </Container>
      </RootView>
    );
  }
}

export default BookingScreen;

const Text = styled.Text`
  font-size: 10px;
  color: #565656;
  font-weight: 600;
`;

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

const Container = styled.View`
  background: #f0f3f5;
  flex: 1;
  border-radius: 10px;
`;
