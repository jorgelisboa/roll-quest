import { ScrollView, StyleSheet, View } from "react-native";
import { Height, Width } from "../constants/sizes";
import { useTheme } from "react-native-paper";

export interface Props {
  children: React.JSX.Element[];
  currentTheme: any;
}

const DiceArea = (props: Props) => {

  return (
    <View style={[styles.container, { backgroundColor: props.currentTheme.onPrimary }]}>
      <ScrollView contentContainerStyle={styles.innerContainer}>
        {props.children}
      </ScrollView>
    </View>
  );
};

export default DiceArea;

const styles = StyleSheet.create({
  container: {
    width: Width,
    height: Height * 0.3,
    paddingHorizontal: 8,
    paddingVertical: Height * 0.03,
  },
  innerContainer: {
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
});
