import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/HomeScreen";
import EventScreen from "../screens/EventScreen";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import FavouriteScreen from "../screens/FavouriteScreen";
import BookingScreen from "../screens/BookingScreen";
import ProfileScreen from "../screens/ProfileScreen";
import StudioScreen from "../screens/StudioScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const HomeStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
  Home: HomeScreen,
  Event: EventScreen,
  Studio: StudioScreen,
});

HomeStack.navigationOptions = ({ navigation }) => {
  var tabBarVisible = true;
  const routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName == "Event") {
    tabBarVisible = false;
  }
  if (routeName == "Studio") {
    tabBarVisible = false;
  }
  if (routeName == "Login") {
    tabBarVisible = false;
  }
  if (routeName == "Register") {
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
  tabBarLabel: "Agendamentos",
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="ios-calendar"
      size={24}
      color={focused ? activeColor : inactiveColor}
    />
  ),
};

const MessagesStack = createStackNavigator({
  Messages: EventScreen,
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
  Profile: ProfileScreen,
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
