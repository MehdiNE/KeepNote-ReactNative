import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, IconButton } from "react-native-paper";
import * as NavigationBar from "expo-navigation-bar";

const icons = [
  {
    name: "checkbox-outline",
  },
  {
    name: "brush",
  },
  {
    name: "microphone-outline",
  },
  {
    name: "image-outline",
  },
];

export default function BottomNavigation() {
  NavigationBar.setBackgroundColorAsync("#212A31");
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {icons.map((item: any) => (
          <IconButton
            key={item.name}
            icon={item.name}
            iconColor="white"
            size={24}
            onPress={() => console.log("Pressed")}
          />
        ))}
      </View>

      <IconButton
        style={styles.addButton}
        icon="plus-circle"
        iconColor="white"
        size={80}
        onPress={() => console.log("Pressed")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 50,
    backgroundColor: "#212A31",
  },

  iconContainer: {
    display: "flex",
    flexDirection: "row",
  },

  addButton: {
    marginTop: -44,
    marginLeft: 30,
  },
});
