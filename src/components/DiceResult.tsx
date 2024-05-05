import { StyleSheet, View, Animated } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { Height, Width } from "../constants/sizes";
import { Roll } from "../../App";
import { useEffect, useState } from "react";

export interface Props {
  values: Roll;
  currentTheme: any;
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
    <View
      style={[
        styles.container,
        { backgroundColor: props.currentTheme.onPrimary },
      ]}
    >
      <Animated.View style={{ opacity: fadeAnim }}>
        {props.values ? (
          <Text style={[styles.result, { color: props.currentTheme.primary }]}>
            {props.values.results}
          </Text>
        ) : (
          <Text
            style={{ color: props.currentTheme.primary }}
            variant="displayMedium"
          >
            Role um dado
          </Text>
        )}
        <Text
          style={{ color: props.currentTheme.primary }}
          variant="displaySmall"
        >
          {props.values ? "1d" + props.values.sides : ""}
        </Text>
      </Animated.View>
    </View>
  );
};

export default DiceResult;

const styles = StyleSheet.create({
  container: {
    height: Height * 0.7,
    width: Width,
    // Align on midlle
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  result: {
    fontSize: 112,
  },
});
