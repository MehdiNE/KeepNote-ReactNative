import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Appbar, IconButton, Tooltip } from "react-native-paper";

import * as NavigationBar from "expo-navigation-bar";
import NoteBottomActions from "./NoteBottomActions";

export default function Note() {
  const [selectedColor, setSelectedColor] = useState<string>("#181C1F");

  const insets = useSafeAreaInsets();

  useEffect(() => {
    NavigationBar.setBackgroundColorAsync(selectedColor);

    return () => {
      NavigationBar.setBackgroundColorAsync("#212A31");
    };
  }, [selectedColor]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: selectedColor,
      }}
    >
      <Appbar.Header style={{ backgroundColor: selectedColor }}>
        <Tooltip title="Navigation up">
          <IconButton
            icon={"keyboard-backspace"}
            iconColor="white"
            onPress={() => {}}
          />
        </Tooltip>

        <Appbar.Content title="" />
        <Tooltip title="Pin">
          <IconButton icon="pin-outline" iconColor="white" onPress={() => {}} />
        </Tooltip>
        <Tooltip title="Reminder">
          <IconButton
            icon="bell-plus-outline"
            iconColor="white"
            onPress={() => {}}
          />
        </Tooltip>
        <Tooltip title="Archive">
          <IconButton
            icon="archive-arrow-down-outline"
            iconColor="white"
            onPress={() => {}}
          />
        </Tooltip>
      </Appbar.Header>
      <View style={styles.container}>
        <TextInput
          placeholder="Title"
          placeholderTextColor="rgba(233, 255, 255, 0.4)"
          multiline
          style={styles.titleInput}
        />
        <TextInput
          placeholder="Note"
          placeholderTextColor="rgba(233, 255, 255, 0.4)"
          multiline
          style={styles.noteInput}
        />
      </View>

      <NoteBottomActions
        setSelectedColor={setSelectedColor}
        selectedColor={selectedColor}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  titleInput: {
    fontSize: 28,
    color: "white",
    marginBottom: 10,
  },
  noteInput: { color: "white", height: "80%", textAlignVertical: "top" },
});
