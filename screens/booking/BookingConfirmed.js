import React from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Platform,
} from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Heading1, Heading4, Link, colors } from "../../theme";
import TopBarBack from "../../components/topBar/TopBarBack";
import SelectTag from "../../components/tag/SelectTag";
import SmallStudioList from "../../features/SmallStudioList";
import SmallArtistList from "../../features/SmallArtistList";

function StudioTab() {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Row>
          <SelectTag text="Tatuapé, SP" />
          <SelectTag text="30 Ago" />
          <SelectTag text="Minimalismo" />
        </Row>
      </ScrollView>
      <SmallStudioList />
    </View>
  );
}

function ArtistTab() {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Row>
          <SelectTag text="Tatuapé, SP" />
          <SelectTag text="30 Ago" />
          <SelectTag text="Minimalismo" />
        </Row>
      </ScrollView>
      <SmallArtistList />
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function BookingConfirmed() {
  return (
    <Container>
      <ScrollView vertical={true} showsHorizontalScrollIndicator={false}>
        <SafeAreaView>
          <TopBarBack />
          <Heading1
            style={{
              paddingLeft: 24,
              paddingTop: 48,
              paddingBottom: 24,
              color: colors.secondary,
            }}
          >
            Explorar
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
            <Tab.Screen name="Estúdios" component={StudioTab} />
            <Tab.Screen name="Artistas" component={ArtistTab} />
          </Tab.Navigator>
        </SafeAreaView>
      </ScrollView>
    </Container>
  );
}

const Container = styled.View`
  background: ${colors.white};
  flex: 1;
  border-radius: 10px;
`;

const Row = styled.View`
  flex-direction: row;
  margin-left: 24px;
  margin-bottom: 16px;
`;

const View = styled.View`
  padding-top: 24px;
  background: ${colors.white};
`;
