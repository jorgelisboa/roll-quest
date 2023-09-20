import { StyleSheet, View, Animated } from "react-native";
import { Text } from "react-native-paper";
import { Height, Width } from "../constants/sizes";
import { Roll } from "../../App";
import { useEffect, useState } from "react";

export interface Props {
  values: Roll;
}

const DiceResult = (props: Props) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    startAnimation();
  }, [props.values]);

  const startAnimation = () => {
    fadeAnim.setValue(0); // Redefine o valor inicial da animação para 0
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500, // Duração da animação em milissegundos
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        {props.values ? (
          <Text style={styles.result}>{props.values.results}</Text>
        ) : (
          <Text variant="displayMedium">Role um dado</Text>
        )}
      </Animated.View>
      <Text variant="displaySmall">
        {props.values ? "1d" + props.values.sides : ""}
      </Text>
    </View>
  );
};

export default DiceResult;

const styles = StyleSheet.create({
  container: {
    height: Height * 0.7,
    width: Width,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    // Align on midlle
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  result: {
    fontSize: 112,
  },
});
