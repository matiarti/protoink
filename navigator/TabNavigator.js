import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import styled from "styled-components/native";
import FavouriteScreen from "../screens/FavouriteScreen";
import BookingScreen from "../screens/BookingScreen";

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Section: SectionScreen,
});

HomeStack.navigationOptions = ({ navigation }) => {
  var tabBarVisible = true;
  const routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName == "Section") {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarLabel: "Home",
    tabBarIcon: ({ focused }) => (
      <Ionicons
        name="ios-home"
        size={24}
        color={focused ? activeColor : inactiveColor}
      />
    ),
  };
};

const FavouritesStack = createStackNavigator({
  Favourites: FavouriteScreen,
});

FavouritesStack.navigationOptions = {
  tabBarLabel: "Favoritos",
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="ios-heart"
      size={24}
      color={focused ? activeColor : inactiveColor}
    />
  ),
};

const BookingsStack = createStackNavigator({
  Bookings: BookingScreen,
});

BookingsStack.navigationOptions = {
  tabBarLabel: "Agendamento",
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="ios-calendar"
      size={24}
      color={focused ? activeColor : inactiveColor}
    />
  ),
};

const MessagesStack = createStackNavigator({
  Messages: SectionScreen,
});

MessagesStack.navigationOptions = {
  tabBarLabel: "Mensagens",
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="ios-chatbubbles"
      size={24}
      color={focused ? activeColor : inactiveColor}
    />
  ),
};

const ProfileStack = createStackNavigator({
  Profile: SectionScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="ios-person"
      size={24}
      color={focused ? activeColor : inactiveColor}
    />
  ),
};

const TabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    FavouritesStack,
    BookingsStack,
    MessagesStack,
    ProfileStack,
  },
  {
    tabBarOptions: {
      activeTintColor: activeColor,
      inactiveTintColor: inactiveColor,
    },
  }
);

export default TabNavigator;

const activeColor = "#E46399";
const inactiveColor = "#2457DB";
