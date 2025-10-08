import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { Ionicons } from "@expo/vector-icons";
import { View,Text, Platform } from "react-native";

// Screens
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import HomeScreen from "./screens/HomeScreen";
import BookScreen from "./screens/BookScreen";
import SettingsScreen from "./screens/SettingsScreen";

import EventDetailsScreen from "./screens/EventDetailsScreen";
import AnniversaryScreen from './screens/AnniversaryScreen';
import BirthdayScreen from './screens/BirthdayScreen';
import WeddingScreen from './screens/WeddingScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const PRIMARY_BLUE = "#1c93ed"; // Brighter blue for the icon inside the circle
const BAR_BLUE = "#0077cc"; 

function MainTabs() {
  const CIRCLE_SIZE = 56;
  const ACTIVE_ICON_SIZE = 26;
  const INACTIVE_ICON_SIZE = 20;

  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            backgroundColor: BAR_BLUE, // Dark blue background for the bar
            height: 60, // Reduced height for better proportion
            paddingBottom: 5, // Add a bit of padding for the labels
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "600",
            color: "white", // Inactive text is white
          },
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let iconSize = 20;
            let activeIconSize = 30;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Booking") {
              iconName = focused ? "calendar" : "calendar-outline";
            } else if (route.name === "Settings") {
              iconName = "settings";
            }

            // Active tab → floating white circle
            if (focused) {
              return (
                <View
                   style={{
                  width: CIRCLE_SIZE,
                  height: CIRCLE_SIZE,
                  borderRadius: CIRCLE_SIZE / 2, // perfect circle
                  backgroundColor: PRIMARY_BLUE,
                  alignItems: "center",
                  justifyContent: "center",
                  // lift the circle so it "floats" above the bar
                  transform: [{ translateY: -18 }],
                  borderWidth: 3,
                  borderColor: "white",
                  // shadow for iOS / elevation for Android
                  ...Platform.select({
                    ios: {
                      shadowColor: "#0b0b0bff",
                      shadowOffset: { width: 0, height: 6 },
                      shadowOpacity: 0.6,
                      shadowRadius: 6,
                    },
                    android: {
                      elevation: 6,
                    },
                  }),
                }}
              >
                  <Ionicons name={iconName} size={activeIconSize} color="white" />
                </View>
              );
            }

            // Inactive tab → simple white icon
            return <Ionicons name={iconName} size={iconSize} color="white" />;
          },
          
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "white",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Booking" component={BookScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          
            <>
            <Stack.Screen name="Main" component={MainTabs} />
            
            <Stack.Screen name="EventDetails" component={EventDetailsScreen} />
            <Stack.Screen name="Anniversary" component={AnniversaryScreen} />
            <Stack.Screen name="Birthday" component={BirthdayScreen} />
            <Stack.Screen name="Wedding" component={WeddingScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
