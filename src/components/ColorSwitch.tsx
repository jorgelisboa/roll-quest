import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import WhiteTheme from "../constants/themes/white";
import DarkTheme from "../constants/themes/dark";

const ColorSwitch = ({ currentTheme, setCurrentTheme }) => {
  const themes = [WhiteTheme, DarkTheme];

  const changeColor = () => {
    // Rounded button with a color in useTheme
    // When pressed, change the color of the button
    // to secondary color in useTheme
    // When pressed again, change the color of the button

    // Switch between two themes
    if (currentTheme === themes[0]) {
      setCurrentTheme(themes[1]);
    } else {
      setCurrentTheme(themes[0]);
    }
  };
  return (
    <TouchableOpacity
      style={[styles.colorButton, { backgroundColor: currentTheme.primary }]}
      onPress={changeColor}
    ></TouchableOpacity>
  );
};

export default ColorSwitch;

const styles = StyleSheet.create({
  colorButton: {
    position: "absolute",
    top: 48,
    right: 32,
    width: 32,
    height: 32,
    borderRadius: 50,
  },
});
