import { StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import WhiteTheme from "../constants/themes/white";
import DarkTheme from "../constants/themes/dark";
import GreenTheme from "../constants/themes/green";
import BlueTheme from "../constants/themes/blue";
import RedTheme from "../constants/themes/red";
import YellowTheme from "../constants/themes/yellow";

const ColorSwitch = ({ currentTheme, setCurrentTheme }) => {
  const [themes, setThemes] = useState([
    WhiteTheme,
    GreenTheme,
    BlueTheme,
    RedTheme,
    DarkTheme,
  ]);
  const [counter, setCounter] = useState(0);
  const changeColor = () => {
    // Rounded button with a color in useTheme
    // When pressed, change the color of the button
    // to secondary color in useTheme
    // When pressed again, change the color of the button

    // Switch between two themes
    if (counter < themes.length - 1) {
      setCounter(counter + 1);
      setCurrentTheme(themes[counter]);
      return;
    }

    setCounter(0);
    setCurrentTheme(themes[counter]);
  };

  const styles = StyleSheet.create({
    colorButton: {
      position: "absolute",
      top: 48,
      right: 32,
      width: 32,
      height: 32,
      borderRadius: 50,
      borderWidth: 1,
      borderColor: currentTheme.onPrimary,
    },
  });

  return (
    <TouchableOpacity
      style={[styles.colorButton, { backgroundColor: currentTheme.primary }]}
      onPress={changeColor}
    ></TouchableOpacity>
  );
};

export default ColorSwitch;
