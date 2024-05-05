import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import React from "react";
import { Height } from "../constants/sizes";
// DICES ICONS
import BlackD4 from "../../assets/dices_icons/black/d4.svg";
import BlackD6 from "../../assets/dices_icons/black/d6.svg";
import BlackD8 from "../../assets/dices_icons/black/d8.svg";
import BlackD10 from "../../assets/dices_icons/black/d10.svg";
import BlackD12 from "../../assets/dices_icons/black/d12.svg";
import BlackD20 from "../../assets/dices_icons/black/d20.svg";
import WhiteD4 from "../../assets/dices_icons/white/d4.svg";
import WhiteD6 from "../../assets/dices_icons/white/d6.svg";
import WhiteD8 from "../../assets/dices_icons/white/d8.svg";
import WhiteD10 from "../../assets/dices_icons/white/d10.svg";
import WhiteD12 from "../../assets/dices_icons/white/d12.svg";
import WhiteD20 from "../../assets/dices_icons/white/d20.svg";

export interface Props {
  text: string;
  action: VoidFunction;
  currentTheme: any;
}

const DiceButton = (props: Props) => {
  const DiceIcon = () => {
    // conditional render for dice icon based on props.text
    if (
      props.currentTheme.name == "white" ||
      props.currentTheme.name == "yellow"
    ) {
      switch (props.text) {
        case "1d4":
          return <BlackD4 style={styles.icon} />;
        case "1d6":
          return <BlackD6 style={styles.icon} />;
        case "1d8":
          return <BlackD8 style={styles.icon} />;
        case "1d10":
          return <BlackD10 style={styles.icon} />;
        case "1d12":
          return <BlackD12 style={styles.icon} />;
        case "1d20":
          return <BlackD20 style={styles.icon} />;

        default:
          return <BlackD10 style={styles.icon} />;
      }
    } else {
      switch (props.text) {
        case "1d4":
          return <WhiteD4 style={styles.icon} />;
        case "1d6":
          return <WhiteD6 style={styles.icon} />;
        case "1d8":
          return <WhiteD8 style={styles.icon} />;
        case "1d10":
          return <WhiteD10 style={styles.icon} />;
        case "1d12":
          return <WhiteD12 style={styles.icon} />;
        case "1d20":
          return <WhiteD20 style={styles.icon} />;

        default:
          return <WhiteD10 style={styles.icon} />;
      }
    }
  };

  return (
    <TouchableOpacity
      style={[styles.box, { borderColor: props.currentTheme.primary }]}
      onPress={props.action}
    >
      <DiceIcon />

      <Text style={{ color: props.currentTheme.primary }} variant="bodySmall">
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default DiceButton;

const styles = StyleSheet.create({
  box: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    margin: 12,
    width: Height * 0.08,
    height: Height * 0.08,
  },
  icon: {
    width: Height * 0.05,
    height: Height * 0.05,
  },
});
