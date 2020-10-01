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
import ArtistScreen from "../screens/ArtistScreen";
import CTAScreen from "../screens/CTAScreen";
import ExploreScreen from "../screens/explore/ExploreScreen";
import SelectDate from "../screens/explore/SelectDate";
import ExploreStyle from "../screens/explore/SelectStyle";
import ExploreResults from "../screens/explore/ExploreResults";
import SelectBodyPart from "../screens/idea/SelectBodyPart";
import SelectSize from "../screens/idea/SelectSize";
import SelectImageRef from "../screens/idea/SelectImageRef";
import SelectInfo from "../screens/idea/SelectInfo";
import IdeaScreen from "../screens/idea/IdeaScreenNew";
import IdeaScreenPending from "../screens/idea/IdeaScreenPending";
import IdeaScreenApproved from "../screens/idea/IdeaScreenApproved";
import BookingScreen from "../screens/booking/BookingScreen";
import BookingOpen from "../screens/booking/BookingOpen";
import BookingConfirmed from "../screens/booking/BookingConfirmed";
import BookingPending from "../screens/booking/BookingPending";
import BookingDateTime from "../screens/booking/BookingDateTime";
import BookingIdea from "../screens/booking/BookingIdea";
import BookingSent from "../screens/booking/BookingSent";
import BookingPendingPay from "../screens/booking/BookingPendingPay";
import BookingPayConfirm from "../screens/booking/BookingPayConfirm";
import AddPayCard from "../screens/booking/AddPayCard";
import BookingCardAdded from "../screens/booking/BookingCardAddded";
import BookingPayConfirmed from "../screens/booking/BookingPayConfirmed";
import MessageChat from "../screens/message/MessageChat";
import ProfileScreen from "../screens/ProfileScreen";
import Modal2 from "../components/modal/Modal";

const Stack = createStackNavigator();

const SignOutStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Profile">
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
          name="Profile"
          component={StackNav}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Location"
          component={EnableLocation}
          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Stack.Screen
          name="Home"
          component={StackNav}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Booking"
          component={StackNav}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Studio"
          component={StudioScreen}
          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Stack.Screen
          name="Artist"
          component={ArtistScreen}
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
        <Stack.Screen
          name="Result"
          component={ExploreResults}
          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Stack.Screen
          name="Body"
          component={SelectBodyPart}
          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Stack.Screen
          name="Size"
          component={SelectSize}
          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Stack.Screen
          name="ImageRef"
          component={SelectImageRef}
          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Stack.Screen
          name="SelectInfo"
          component={SelectInfo}
          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Stack.Screen
          name="Idea"
          component={IdeaScreen}
          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Stack.Screen
          name="IdeaPending"
          component={IdeaScreenPending}
          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Stack.Screen
          name="IdeaApproved"
          component={IdeaScreenApproved}
          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Stack.Screen
          name="BookingOpen"
          component={BookingOpen}
          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Stack.Screen
          name="BookingConfirmed"
          component={BookingConfirmed}
          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Stack.Screen
          name="BookingPending"
          component={BookingPending}
          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Stack.Screen
          name="BookingPendingPay"
          component={BookingPendingPay}
          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Stack.Screen
          name="BookingDateTime"
          component={BookingDateTime}
          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Stack.Screen
          name="BookingIdea"
          component={BookingIdea}
          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Stack.Screen
          name="BookingSent"
          component={BookingSent}
          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Stack.Screen
          name="BookingPayConfirm"
          component={BookingPayConfirm}
          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Stack.Screen
          name="AddPayCard"
          component={AddPayCard}
          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Stack.Screen
          name="BookingCardAdded"
          component={BookingCardAdded}
          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Stack.Screen
          name="BookingPayConfirmed"
          component={BookingPayConfirmed}
          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Stack.Screen
          mode="modal"
          name="Modal"
          component={Modal2}
          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Stack.Screen
          name="MessageChat"
          component={MessageChat}
          options={{ headerShown: false, tabBarVisible: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SignOutStack;
