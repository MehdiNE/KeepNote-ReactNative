import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  Avatar,
  Button,
  Dialog,
  Drawer,
  IconButton,
  Portal,
} from "react-native-paper";

const Header = ({ navigation }: any) => {
  const [showGrid, setShowGrid] = useState<boolean>(true);
  const [openAccount, setOpenAccount] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  function showGridToggleHandler() {
    setShowGrid(!showGrid);
  }

  function openAccountToggleHandler() {
    setOpenAccount(!openAccount);
  }

  function openMenuToggleHandler() {
    setOpenMenu(!openMenu);
  }

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={openAccountToggleHandler}>
        <Avatar.Image
          size={30}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png",
          }}
        />
      </TouchableOpacity>

      <View>
        {showGrid ? (
          <IconButton
            icon="view-grid-outline"
            iconColor="#A8B0B5"
            size={24}
            onPress={showGridToggleHandler}
          />
        ) : (
          <IconButton
            icon="view-list-outline"
            iconColor="#A8B0B5"
            size={26}
            onPress={showGridToggleHandler}
          />
        )}
      </View>

      <View style={styles.menuIcon}>
        <IconButton
          icon="menu"
          iconColor="#A8B0B5"
          size={26}
          // onPress={openMenuToggleHandler}
          onPress={() => navigation.openDrawer()}
        />
        <Text style={styles.searchText}>Search your notes</Text>
      </View>

      <Portal>
        <Dialog visible={openAccount} onDismiss={openAccountToggleHandler}>
          <Dialog.Title>Alert</Dialog.Title>
          <Dialog.Content>
            <Text>hi</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={openAccountToggleHandler}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row-reverse",
    position: "relative",
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#1F282D",
    width: "90%",
    borderRadius: 20,
    height: 45,
    marginLeft: "auto",
    marginRight: "auto",
  },
  menuIcon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    right: 0,
  },
  searchText: {
    color: "#A8B0B5",
  },
});
