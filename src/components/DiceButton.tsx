import {
  Image,
  ImageProps,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Text } from "react-native-paper";
import React from "react";
import { Height, Width } from "../constants/sizes";

export interface Props {
  icon?: ImageProps;
  text: string;
  action: VoidFunction;
}

const DiceButton = (props: Props) => {
  return (
    <TouchableOpacity style={styles.box} onPress={props.action}>
      {props.icon ? <Image source={props.icon} /> : null}
      <Text variant="headlineSmall">{props.text}</Text>
    </TouchableOpacity>
  );
};

export default DiceButton;

const styles = StyleSheet.create({
  box: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 1,
    margin: 8,
    width: Height * 0.08,
    height: Height * 0.08,
  },
});
