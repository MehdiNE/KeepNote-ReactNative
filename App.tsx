import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import {
  Provider as PaperProvider,
  Button,
  TextInput,
  IconButton,
} from "react-native-paper";
import Home from "./components/home/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { SafeAreaProvider } from "react-native-safe-area-context";
import Reminders from "./components/reminders/Reminders";

const Drawer = createDrawerNavigator();

const items = [
  {
    name: "Notes",
    icon: "lightbulb-outline",
    component: Home,
  },
  {
    name: "Reminders",
    icon: "bell-outline",
    component: Reminders,
  },
  {
    name: "plus",
    icon: "lightbulb-outline",
    component: Reminders,
  },
  {
    name: "Archive",
    icon: "archive-arrow-down-outline",
    component: Reminders,
  },
  {
    name: "Deleted",
    icon: "delete-outline",
    component: Reminders,
  },
  {
    name: "Setting",
    icon: "cog-outline",
    component: Reminders,
  },
  {
    name: "Help and feedback",
    icon: "help-circle-outline",
    component: Reminders,
  },
];

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <PaperProvider>
          <StatusBar style="light" />

          <Drawer.Navigator
            screenOptions={{
              headerShown: false,
              drawerActiveBackgroundColor: "#40474D",
              drawerActiveTintColor: "#4AADCE",
              drawerInactiveTintColor: "#A8B0B5",
              drawerStyle: { backgroundColor: "#1D2528" },
            }}
            initialRouteName="Home"
          >
            {items.map((item: any) => (
              <Drawer.Screen
                name={item.name}
                key={item.name}
                component={item.component}
                options={{
                  drawerLabel: item.name,
                  drawerIcon: ({ color, size }) => (
                    <IconButton
                      icon={item.icon}
                      iconColor={color}
                      size={size}
                    />
                  ),
                }}
              />
            ))}
          </Drawer.Navigator>
        </PaperProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#181C1F",
  },
});
