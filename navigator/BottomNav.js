import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import BookingScreen from "../screens/BookingScreen";
import MessageScreen from "../screens/MessageScreen";
import ProfileScreen from "../screens/ProfileScreen";
import FavScreen from "../screens/FavScreen";
import Icon from "react-native-vector-icons/AntDesign";

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
            <Icon
              name="home"
              size={16}
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
            <Icon
              name="hearto"
              size={16}
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
            <Icon
              name="calendar"
              size={16}
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
            <Icon
              name="message1"
              size={16}
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
            <Icon
              name="user"
              size={16}
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
