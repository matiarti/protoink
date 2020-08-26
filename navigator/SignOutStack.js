import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/register/RegisterScreen";
import SelectStyle from "../screens/register/SelectStyle";
import EnableNotif from "../screens/register/EnableNotif";
import EnableLocation from "../screens/register/EnableLocation";
import StackNav from "./BottomNav";
import StudioScreen from "../screens/StudioScreen";
import CTAScreen from "../screens/CTAScreen";
import ExploreScreen from "../screens/explore/ExploreScreen";
import SelectDate from "../screens/explore/SelectDate";
import ExploreStyle from "../screens/explore/SelectStyle";

const Stack = createStackNavigator();

const SignOutStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
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
          name="Style"
          component={SelectStyle}
          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Stack.Screen
          name="Notification"
          component={EnableNotif}
          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Stack.Screen
          name="Location"
          component={EnableLocation}
          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Stack.Screen
          name="Home"
          component={StackNav}
          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Stack.Screen
          name="Studio"
          component={StudioScreen}
          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Stack.Screen
          name="CTA"
          component={CTAScreen}
          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Stack.Screen
          mode="modal"
          name="Explore"
          component={ExploreScreen}
          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Stack.Screen
          name="Date"
          component={SelectDate}
          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Stack.Screen
          name="ExploreStyle"
          component={ExploreStyle}
          options={{ headerShown: false, tabBarVisible: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SignOutStack;

const activeColor = "#E46399";
const inactiveColor = "#2457DB";
