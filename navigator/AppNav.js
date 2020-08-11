import * as React from "react";
import { Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StudioScreen from "../screens/StudioScreen";
import HomeScreen from "../screens/HomeScreen";
import StackNav from "./StackNav";

const Stack = createStackNavigator();

function AppNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BottomTab" component={StackNav} />
        <Stack.Screen name="Studio" component={StudioScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNav;
