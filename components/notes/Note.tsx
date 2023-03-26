import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Appbar, IconButton, Tooltip } from "react-native-paper";

export default function Note() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#181C1F",
      }}
    >
      <Appbar.Header style={styles.appBar}>
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

      <View style={styles.bottomActions}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <IconButton
            icon="plus-box-outline"
            iconColor="white"
            onPress={() => {}}
          />
          <IconButton
            icon="format-color-highlight"
            iconColor="white"
            onPress={() => {}}
          />
          <Text style={{ marginLeft: 40, color: "white" }}>Edited 14:00</Text>
        </View>

        <IconButton icon="dots-vertical" iconColor="white" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: "#181C1F",
  },
  container: {
    paddingHorizontal: 20,
  },
  titleInput: {
    fontSize: 28,
    color: "white",
    marginBottom: 10,
  },
  noteInput: { color: "white", height: "80%", textAlignVertical: "top" },
  bottomActions: {
    position: "absolute",
    bottom: 0,
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    color: "white",
  },
});
