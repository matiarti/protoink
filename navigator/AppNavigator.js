import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";
import TabNavigator from "./TabNavigator";
import FavouriteScreen from "../screens/FavouriteScreen";
import BookingScreen from "../screens/BookingScreen";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Section: SectionScreen,
    Favourite: FavouriteScreen,
    Booking: BookingScreen,
  },
  {
    mode: "modal",
  }
);

export default createAppContainer(TabNavigator);
