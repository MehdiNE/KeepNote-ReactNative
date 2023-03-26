import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./components/home/Home";
import Reminders from "./components/reminders/Reminders";
import { IconButton } from "react-native-paper";

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

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  return (
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
              <IconButton icon={item.icon} iconColor={color} size={size} />
            ),
          }}
        />
      ))}
    </Drawer.Navigator>
  );
};

export default AppDrawer;
