import * as React from "react";
import { ScrollView, SafeAreaView, TouchableOpacity, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import styled from "styled-components/native";
import { Heading1, Heading4, Link, colors } from "../../theme.js";
import {
  BookingOpen,
  BookingConfirmed,
  BookingPending,
} from "./BookingConfirmed";
import SmallStudioList from "../../features/SmallStudioList";
import SmallBookingOpenList from "../../features/SmallBookingOpenList";
import SmallBookingPendingList from "../../features/SmallBookingPendingList";

function Open() {
  return <SmallBookingOpenList />;
}

function Pending() {
  return <SmallBookingPendingList />;
}

function Confirmed() {
  return <SmallBookingOpenList />;
}

const Tab = createMaterialTopTabNavigator();

export default function BookingScreen() {
  return (
    <ScrollView vertical={true} showsHorizontalScrollIndicator={false}>
      <Container>
        <Heading1
          style={{
            paddingLeft: 24,
            paddingTop: 56,
            paddingBottom: 24,
            color: colors.secondary,
          }}
        >
          Agendamentos
        </Heading1>

        <Tab.Navigator
          animationEnabled={false}
          tabBarOptions={{
            labelStyle: { fontSize: 12, marginTop: -2 },
            activeTintColor: colors.white,
            inactiveTintColor: colors.neutral3,
            indicatorStyle: {
              backgroundColor: colors.accent,
              marginLeft: 4,

              borderRadius: 8,
              height: null,
              top: 6,
              marginBottom: 4,
            },
            style: {
              backgroundColor: colors.neutral1,
              height: 40,
              borderRadius: 8,
              marginLeft: 24,
              marginRight: 24,
            },
          }}
        >
          <Tab.Screen name="Em Aberto" component={Open} />
          <Tab.Screen name="Pendente" component={Pending} />
          <Tab.Screen name="Confirmado" component={Confirmed} />
        </Tab.Navigator>
      </Container>
    </ScrollView>
  );
}

const Container = styled.View`
  background: ${colors.bg};
`;
