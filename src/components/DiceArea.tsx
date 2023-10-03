import { ScrollView, StyleSheet, View } from "react-native";
import { Height, Width } from "../constants/sizes";

export interface Props {
  children: React.JSX.Element[];
}

const DiceArea = (props: Props) => {
  return (
    <View style={styles.container}>
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
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  }
});
