import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import BottomNavigation from "../BottomNavigation";
import Header from "../Header";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as NavigationBar from "expo-navigation-bar";

export default function Home({ navigation }: any) {
  const insets = useSafeAreaInsets();

  useEffect(() => {
    NavigationBar.setBackgroundColorAsync("#212A31");
  }, []);

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top + 7,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        backgroundColor: "#181C1F",
      }}
    >
      <Header navigation={navigation} />
      <ScrollView>
        <Text>footer</Text>
      </ScrollView>
      <View>
        <BottomNavigation navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    borderRightColor: "red",
  },
});
