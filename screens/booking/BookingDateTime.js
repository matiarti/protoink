import React, { useState } from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
  View,
} from "react-native";
import styled from "styled-components/native";
import Button from "../../components/button/Button.js";
import { Heading1, Heading4, Link, colors, Body } from "../../theme";
import TopBarBack from "../../components/topBar/TopBarBack";
import { SelectableCard } from "../../components/card/SelectableCard";
import ArmRight from "../../components/vectors/ArmRight";
import IdeaInfoCard from "../../components/card/SizeInfoCard.js";
import TextField from "../../components/input/TextField.js";
import TextArea from "../../components/input/TextArea.js";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { DatePicker } from "../../components/datePicker/DatePicker";
import { useNavigation } from "@react-navigation/native";
import Title from "../../components/text/Title.js";
import HourList from "../../features/HourList";
import IconText from "../../components/icon/IconText";

const screenWidth = Dimensions.get("window").width;

var titleWidth = screenWidth - 40;
var cardWidth = screenWidth - 40;

if (screenWidth > 300) {
  cardWidth = (screenWidth - 64) / 2;
}

if (screenWidth > 800) {
  titleWidth = screenWidth - 320;
}

function BookingDateTime() {
  const [selectedDate, setSelectedDate] = useState("");

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [style, setStyle] = useState("");
  const [description, setDescription] = useState("");

  const navigation = useNavigation();

  return (
    <Container>
      <ScrollView vertical={true} showsHorizontalScrollIndicator={false}>
        <SafeAreaView>
          <TopBarBack />
          <Title title="Escolha data e horário" />
          <DatePicker
            current="2020-07-13"
            selected="2020-07-23"
            mode="calendar"
            onSelectedChange={(date) => setSelectedDate(date)}
          />
          <View style={{ paddingLeft: 24, paddingBottom: 8 }}>
            <IconText
              text="Escolha um horário de preferência"
              icon="clockcircleo"
            />
          </View>
          <HourList />

          <Button
            link={() => {
              navigation.navigate("BookingIdea");
            }}
            text="Continuar"
          />
        </SafeAreaView>
      </ScrollView>
    </Container>
  );
}

export default BookingDateTime;

const Container = styled.View`
  background: ${colors.bg};
  flex: 1;
  border-radius: 10px;
  width: 100%;
  padding-top: 8px;
`;
