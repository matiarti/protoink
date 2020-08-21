import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/register/RegisterScreen";
import SelectStyle from "../screens/register/SelectStyle";

const Stack = createStackNavigator();

const SignOutStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Style">
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SignOutStack;

const activeColor = "#E46399";
const inactiveColor = "#2457DB";
