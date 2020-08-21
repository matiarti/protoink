import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StudioScreen from "../screens/StudioScreen";
import HomeScreen from "../screens/HomeScreen";
import StackNav from "./BottomNav";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/register/RegisterScreen";
import SelectStyle from "../screens/register/SelectStyle";

const Stack = createStackNavigator();

function SignInStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomTab">
        <Stack.Screen
          name="BottomTab"
          component={StackNav}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false, tabBarVisible: false }}
        />

        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false, tabBarVisible: false }}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Studio"
          component={StudioScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Style"
          component={SelectStyle}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default SignInStack;
