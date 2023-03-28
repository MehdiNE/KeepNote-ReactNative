import { StyleSheet, View } from "react-native";
import React from "react";
import { IconButton } from "react-native-paper";

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

export default function BottomNavigation({ navigation }: any) {
  function addNoteHandler() {
    navigation.navigate("Note");
  }

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
        onPress={addNoteHandler}
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
