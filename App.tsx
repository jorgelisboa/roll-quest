import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import DiceButton from "./src/components/DiceButton";
import DiceResult from "./src/components/DiceResult";
import DiceArea from "./src/components/DiceArea";
import { useEffect, useState } from "react";
import { Audio } from "expo-av";
import * as Haptics from "expo-haptics";
import { SafeAreaProvider } from "react-native-safe-area-context";

export type Roll = {
  sides: number;
  results: number;
};

export default function App() {
  const [rolls, setRolls] = useState<Roll>(null);
  const [times, setTImes] = useState(1);
  const [sound, setSound] = useState<any>();

  const roll = async (sides: number) => {
    // Play dice sound
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/dice_roll.mp3")
    );
    setSound(sound);

    await sound.playAsync();

    // Vibration on Phone
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);

    // Dice value update
    setRolls({
      sides: sides,
      results: Math.floor(Math.random() * sides) + 1,
    });
  };

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <DiceResult values={rolls} />
      <DiceArea>
        <DiceButton text="1d4" action={() => roll(4)} />
        <DiceButton text="1d6" action={() => roll(6)} />
        <DiceButton text="1d8" action={() => roll(8)} />
        <DiceButton text="1d10" action={() => roll(10)} />
        <DiceButton text="1d12" action={() => roll(12)} />
        <DiceButton text="1d20" action={() => roll(20)} />
        <DiceButton text="1d100" action={() => roll(100)} />
      </DiceArea>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
