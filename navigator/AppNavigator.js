import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import EventScreen from "../screens/EventScreen";
import TabNavigator from "./TabNavigator";
import BookingScreen from "../screens/BookingScreen";
import ProfileScreen from "../screens/ProfileScreen";
import StudioScreen from "../screens/StudioScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import FavScreen from "../screens/FavScreen";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Fav: FavScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    Event: EventScreen,
    Booking: BookingScreen,
    Profile: ProfileScreen,
    Studio: StudioScreen,
  },
  {
    mode: "modal",
  }
);

export default AppNavigator;
