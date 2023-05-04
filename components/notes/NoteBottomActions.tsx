import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Avatar, IconButton } from "react-native-paper";
import Modal from "react-native-modal";

const menuItems = [
  {
    name: "Delete",
    icon: "delete-outline",
  },
  {
    name: "Make a copy",
    icon: "content-copy",
  },
  {
    name: "Send",
    icon: "share-variant-outline",
  },
  {
    name: "Collaborator",
    icon: "account-plus-outline",
  },
  {
    name: "Labels",
    icon: "label-outline",
  },
  {
    name: "Help and Feedback",
    icon: "help-circle-outline",
  },
];

const colors = [
  { colorCode: "#181C1F" },
  { colorCode: "#76172D" },
  { colorCode: "#692A18" },
  { colorCode: "#7C4A03" },
  { colorCode: "#264D3B" },
  { colorCode: "#0C635D" },
  { colorCode: "#274255" },
  { colorCode: "#482E5B" },
  { colorCode: "#6D394F" },
  { colorCode: "#4B443A" },
  { colorCode: "#232428" },
];

interface Props {
  selectedColor: string;
  setSelectedColor: any;
}

const NoteBottomActions = ({ setSelectedColor, selectedColor }: Props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openThemeModal, setOpenThemeModal] = useState<boolean>(false);

  function toggleOpenModalHandler() {
    setOpenModal(!openModal);
  }

  function toggleOpenThemeModalHandler() {
    setOpenThemeModal(!openThemeModal);
  }

  function selectColorHandler(color: string) {
    setSelectedColor(color);
  }

  return (
    <View>
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
            onPress={toggleOpenThemeModalHandler}
          />
          <Text style={{ marginLeft: 40, color: "white" }}>Edited 14:00</Text>
        </View>

        <IconButton
          icon="dots-vertical"
          iconColor="white"
          onPress={toggleOpenModalHandler}
        />
      </View>

      <Modal
        isVisible={openModal}
        onBackdropPress={toggleOpenModalHandler}
        onBackButtonPress={toggleOpenModalHandler}
        style={styles.modal}
      >
        <View
          style={[styles.modalContainer, { backgroundColor: selectedColor }]}
        >
          {menuItems.map((item) => (
            <View key={item.name} style={styles.menuItem}>
              <IconButton
                icon={item.icon}
                iconColor="white"
                onPress={toggleOpenModalHandler}
              />
              <Text style={styles.menuItemText}>{item.name}</Text>
            </View>
          ))}
        </View>
      </Modal>

      <Modal
        isVisible={openThemeModal}
        onBackdropPress={toggleOpenThemeModalHandler}
        onBackButtonPress={toggleOpenThemeModalHandler}
        style={styles.modal}
      >
        <View
          style={[styles.modalContainer, { backgroundColor: selectedColor }]}
        >
          <View style={styles.colorsSection}>
            <Text style={styles.colorsSectionText}>Color</Text>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              style={styles.colorsContainer}
            >
              {colors.map((item, index) => (
                <View key={index}>
                  {index === 0 ? (
                    <TouchableOpacity
                      onPress={() => selectColorHandler(item.colorCode)}
                      style={[
                        styles.colorItem,
                        {
                          backgroundColor: item.colorCode,
                          borderWidth: selectedColor === item.colorCode ? 2 : 1,
                          borderColor:
                            selectedColor === item.colorCode
                              ? "rgba(116, 209, 254, 1)"
                              : "rgba(116, 209, 254, 0.5)",
                        },
                      ]}
                    >
                      {selectedColor === item.colorCode ? (
                        <IconButton
                          icon="check"
                          iconColor="#74d1fe"
                          size={36}
                        />
                      ) : (
                        <IconButton
                          icon="brush-off"
                          iconColor="white"
                          size={36}
                        />
                      )}
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={() => selectColorHandler(item.colorCode)}
                      key={index}
                      style={[
                        styles.colorItem,
                        {
                          backgroundColor: item.colorCode,
                          borderWidth: selectedColor === item.colorCode ? 2 : 1,
                          borderColor:
                            selectedColor === item.colorCode
                              ? "rgba(116, 209, 254, 1)"
                              : "rgba(116, 209, 254, 0.5)",
                        },
                      ]}
                    >
                      {selectedColor === item.colorCode && (
                        <IconButton
                          icon="check"
                          iconColor="#74d1fe"
                          size={36}
                          onPress={toggleOpenThemeModalHandler}
                        />
                      )}
                    </TouchableOpacity>
                  )}
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default NoteBottomActions;

const styles = StyleSheet.create({
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
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    minHeight: 150,
  },
  menuItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    opacity: 0.9,
  },
  menuItemText: {
    color: "white",
    fontSize: 16,
  },

  colorsSection: {
    paddingTop: 10,
  },
  colorsSectionText: {
    color: "white",
    paddingLeft: 14,
    paddingBottom: 12,
  },
  colorsContainer: {
    paddingRight: 10,
  },
  colorItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    marginHorizontal: 10,
    borderRadius: 30,
  },
});
