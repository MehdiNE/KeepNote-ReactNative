import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useQuery } from "@tanstack/react-query";

import * as NavigationBar from "expo-navigation-bar";
import NoteBottomActions from "./NoteBottomActions";
import { getAllNotes } from "../../API/ApiConst";
import NoteTopActions from "./NoteTopActions";

export default function Note() {
  const [selectedColor, setSelectedColor] = useState<string>("#181C1F");

  const { data } = useQuery({
    queryKey: ["todos"],
    queryFn: getAllNotes,
  });

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
      <NoteTopActions selectedColor={selectedColor} />

      {data?.data?.data?.notes?.map((el: any) => (
        <Text>{el.title}</Text>
      ))}

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
