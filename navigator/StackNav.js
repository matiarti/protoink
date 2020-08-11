import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import BookingScreen from "../screens/BookingScreen";
import MessageScreen from "../screens/MessageScreen";
import ProfileScreen from "../screens/ProfileScreen";
import StudioScreen from "../screens/StudioScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import FavScreen from "../screens/FavScreen";

const Tab = createBottomTabNavigator();

const StackNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-home"
              size={24}
              color={focused ? activeColor : inactiveColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={FavScreen}
        options={{
          title: "Favoritos",
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-heart"
              size={24}
              color={focused ? activeColor : inactiveColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Agendamentos"
        component={BookingScreen}
        options={{
          title: "Agendamentos",
          tabBarLabel: "Agendamentos",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-calendar"
              size={24}
              color={focused ? activeColor : inactiveColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Mensagens"
        component={MessageScreen}
        options={{
          title: "Mensagens",
          tabBarLabel: "Mensagens",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-chatbubbles"
              size={24}
              color={focused ? activeColor : inactiveColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          title: "Perfil",
          tabBarLabel: "Perfil",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-person"
              size={24}
              color={focused ? activeColor : inactiveColor}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default StackNav;

const activeColor = "#E46399";
const inactiveColor = "#2457DB";
