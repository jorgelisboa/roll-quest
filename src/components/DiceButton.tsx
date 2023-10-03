import {
  Image,
  ImageProps,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Text, useTheme } from "react-native-paper";
import React from "react";
import { Height, } from "../constants/sizes";
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import BlackD4 from "../../assets/dices_icons/black/d4.svg";
import BlackD6 from "../../assets/dices_icons/black/d6.svg";
import BlackD8 from "../../assets/dices_icons/black/d8.svg";
import BlackD10 from "../../assets/dices_icons/black/d10.svg";
import BlackD12 from "../../assets/dices_icons/black/d12.svg";
import BlackD20 from "../../assets/dices_icons/black/d20.svg";

export interface Props {
  text: string;
  action: VoidFunction;
}

const DiceButton = (props: Props) => {

  const { colors } = useTheme();

  const DiceIcon = () => {
    // conditional render for dice icon based on props.text
    switch (props.text) {
      case '1d4':
        return <BlackD4 style={styles.icon} />;
      case '1d6':
        return <BlackD6 style={styles.icon} />;
      case '1d8':
        return <BlackD8 style={styles.icon} />;
      case '1d10':
        return <BlackD10 style={styles.icon} />;
      case '1d12':
        return <BlackD12 style={styles.icon} />;
      case '1d20':
        return <BlackD20 style={styles.icon} />;
    
      default:
        return <BlackD20 style={styles.icon} />;
    }
  }
  
  return (
    <TouchableOpacity style={[styles.box, { borderColor: colors.secondary }]} onPress={props.action}>
      <DiceIcon />
      <Text style={{ color: colors.secondary }} variant="bodySmall">{props.text}</Text>
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
