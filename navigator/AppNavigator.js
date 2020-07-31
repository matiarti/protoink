import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import EventScreen from "../screens/EventScreen";
import TabNavigator from "./TabNavigator";
import FavouriteScreen from "../screens/FavouriteScreen";
import BookingScreen from "../screens/BookingScreen";
import ProfileScreen from "../screens/ProfileScreen";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Event: EventScreen,
    Favourite: FavouriteScreen,
    Booking: BookingScreen,
    Profile: ProfileScreen,
  },
  {
    mode: "modal",
  }
);

export default createAppContainer(TabNavigator);
