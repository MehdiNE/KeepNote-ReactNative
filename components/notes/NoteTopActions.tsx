import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Appbar, Button, IconButton, Tooltip } from "react-native-paper";
import Modal from "react-native-modal";
import { Dropdown } from "react-native-element-dropdown";

interface Props {
  selectedColor: string;
}

const data = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  { label: "Item 4", value: "4" },
  { label: "Item 5", value: "5" },
  { label: "Item 6", value: "6" },
  { label: "Item 7", value: "7" },
  { label: "Item 8", value: "8" },
];

const NoteTopActions = ({ selectedColor }: Props) => {
  const [openReminder, setOpenReminder] = useState<boolean>(false);
  const [openAddReminder, setOpenAddReminder] = useState<boolean>(false);
  const [selectedTab, setSelectedTab] = useState<"Time" | "Place">("Time");
  const [isPinned, setIsPinned] = useState<boolean>(false);

  const [value, setValue] = useState({ label: "Item 1", value: "1" });

  function toggleReminderModalHandler() {
    setOpenReminder(!openReminder);
  }

  function toggleAddReminderModalHandler() {
    setOpenAddReminder(!openAddReminder);
  }

  function selectTabHandler(tab: "Time" | "Place") {
    setSelectedTab(tab);
  }

  function togglePinHandler() {
    setIsPinned(!isPinned);
  }

  const reminderItems = [
    {
      name: "Tomorrow morning",
      helperText: "08:00",
      icon: "clock-time-five-outline",
    },
    {
      name: "Tomorrow evening",
      helperText: "18:00",
      icon: "clock-time-five-outline",
    },
    {
      name: "Tomorrow morning",
      helperText: "Thu 08:00",
      icon: "clock-time-five-outline",
    },
    {
      name: "Choose a date and time",
      icon: "clock-time-five-outline",
      handler: () => {
        toggleReminderModalHandler();
        toggleAddReminderModalHandler();
      },
    },
    {
      name: "Choose a place",
      icon: "map-marker-outline",
    },
  ];

  return (
    <View>
      <Appbar.Header style={{ backgroundColor: selectedColor }}>
        <Tooltip title="Navigation up">
          <IconButton
            icon={"keyboard-backspace"}
            iconColor="white"
            onPress={() => {}}
          />
        </Tooltip>

        <Appbar.Content title="" />
        {isPinned ? (
          <Tooltip title="Unpin">
            <IconButton
              icon="pin"
              iconColor="white"
              onPress={togglePinHandler}
            />
          </Tooltip>
        ) : (
          <Tooltip title="Pin">
            <IconButton
              icon="pin-outline"
              iconColor="white"
              onPress={togglePinHandler}
            />
          </Tooltip>
        )}
        <Tooltip title="Reminder">
          <IconButton
            icon="bell-plus-outline"
            iconColor="white"
            onPress={toggleReminderModalHandler}
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

      <Modal
        isVisible={openReminder}
        onBackdropPress={toggleReminderModalHandler}
        onBackButtonPress={toggleReminderModalHandler}
        style={styles.modal}
      >
        <View
          style={[styles.modalContainer, { backgroundColor: selectedColor }]}
        >
          {reminderItems?.map((el: any, index) => (
            <TouchableOpacity
              onPress={el.handler}
              key={index}
              style={styles.items}
            >
              <View style={styles.items}>
                <IconButton
                  icon={el.icon}
                  iconColor="white"
                  style={styles?.itemIcon}
                />
                <Text style={styles.item}>{el.name}</Text>
              </View>
              <Text style={styles.item}>{el.helperText}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>

      <Modal
        isVisible={openAddReminder}
        onBackdropPress={toggleAddReminderModalHandler}
        onBackButtonPress={toggleAddReminderModalHandler}
        style={styles.modalAddReminder}
      >
        <View
          style={[
            styles.addRiminderContainer,
            { backgroundColor: selectedColor },
          ]}
        >
          <Text style={styles.addReminderHeaderText}>Add reminder</Text>

          <View style={styles.addReninderTabContainer}>
            <TouchableOpacity
              onPress={() => selectTabHandler("Time")}
              style={[
                styles.tableItem,
                {
                  borderBottomWidth: selectedTab === "Time" ? 3 : 1,
                  borderBottomColor:
                    selectedTab === "Time" ? "rgba(116, 209, 254, 1)" : "gray",
                },
              ]}
            >
              <Text
                style={[
                  styles.tableItemText,
                  {
                    color:
                      selectedTab === "Time"
                        ? "rgba(116, 209, 254, 1)"
                        : "white",
                  },
                ]}
              >
                Time
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => selectTabHandler("Place")}
              style={[
                styles.tableItem,
                {
                  borderBottomWidth: selectedTab === "Place" ? 3 : 1,
                  borderBottomColor:
                    selectedTab === "Place"
                      ? "rgba(116, 209, 254, 1)"
                      : "white",
                },
              ]}
            >
              <Text
                style={[
                  styles.tableItemText,
                  {
                    color:
                      selectedTab === "Place"
                        ? "rgba(116, 209, 254, 1)"
                        : "white",
                  },
                ]}
              >
                Place
              </Text>
            </TouchableOpacity>
          </View>

          {selectedTab === "Time" ? (
            <View>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select item"
                value={value}
                onChange={(item: any) => {
                  setValue(item.value);
                }}
              />
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select item"
                value={value}
                onChange={(item: any) => {
                  setValue(item.value);
                }}
              />
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select item"
                value={value}
                onChange={(item: any) => {
                  setValue(item.value);
                }}
              />
            </View>
          ) : (
            <View></View>
          )}

          <View style={styles.buttonContainer}>
            <Button
              onPress={toggleAddReminderModalHandler}
              textColor="rgba(116, 209, 254, 1)"
            >
              Cancel
            </Button>
            <Button
              onPress={toggleAddReminderModalHandler}
              buttonColor="rgba(116, 209, 254, 1)"
              textColor={selectedColor}
              mode="contained"
            >
              Save
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default NoteTopActions;

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    minHeight: 150,
  },
  modalAddReminder: {
    alignItems: "center",
  },
  addRiminderContainer: {
    borderRadius: 15,
    minHeight: 150,
    width: "90%",
    paddingBottom: 4,
  },
  items: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 30,
  },
  item: {
    color: "white",
  },
  itemIcon: {
    marginRight: 20,
  },
  addReminderHeaderText: {
    color: "white",
    fontSize: 24,
    padding: 20,
  },
  addReninderTabContainer: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
  },
  tableItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  tableItemText: {
    color: "white",
  },

  dropdown: {
    marginHorizontal: 24,
    marginVertical: 4,
    height: 50,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
    color: "white",
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "white",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 10,
  },
});
