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
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Note from "./components/notes/Note";
import AppDrawer from "./AppDrawer";

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <PaperProvider>
          <StatusBar style="light" />

          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={AppDrawer} />
            <Stack.Screen name="Note" component={Note} />
            <Stack.Screen name="Reminders" component={Reminders} />
          </Stack.Navigator>
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
    backgroundColor: "#C1F",
  },
});
