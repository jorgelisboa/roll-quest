import { StyleSheet, View } from "react-native";
import DiceResult from "../components/DiceResult";
import DiceButton from "../components/DiceButton";
import DiceArea from "../components/DiceArea";
import { useEffect, useState } from "react";
import { Audio } from "expo-av";
import * as Haptics from "expo-haptics";
import ColorSwitch from "../components/ColorSwitch";
import { StatusBar } from "expo-status-bar";
import DarkTheme from "../constants/themes/dark";

export interface Props {
  currentTheme: any;
}
export type Roll = {
  sides: number;
  results: number;
};

export default function Dices(props: Props) {
  const [currentTheme, setCurrentTheme] = useState<any>(DarkTheme);

  const [rolls, setRolls] = useState<Roll>(null);
  const [times, setTImes] = useState<number>(1);
  const [sound, setSound] = useState<any>();

  const roll = async (sides: number) => {
    // Play dice sound
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/dice_roll.mp3")
    );
    setSound(sound);

    await sound.playAsync();

    // Vibration on Phone
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);

    // Dice value update
    setRolls({
      sides,
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
    <View style={[styles.container, { backgroundColor: currentTheme.primary }]}>
      <DiceResult values={rolls} currentTheme={currentTheme} />
      <ColorSwitch
        currentTheme={currentTheme}
        setCurrentTheme={setCurrentTheme}
      />
      <DiceArea currentTheme={currentTheme}>
        <DiceButton
          text="1d4"
          action={() => roll(4)}
          currentTheme={currentTheme}
        />
        <DiceButton
          text="1d6"
          action={() => roll(6)}
          currentTheme={currentTheme}
        />
        <DiceButton
          text="1d8"
          action={() => roll(8)}
          currentTheme={currentTheme}
        />
        <DiceButton
          text="1d10"
          action={() => roll(10)}
          currentTheme={currentTheme}
        />
        <DiceButton
          text="1d12"
          action={() => roll(12)}
          currentTheme={currentTheme}
        />
        <DiceButton
          text="1d20"
          action={() => roll(20)}
          currentTheme={currentTheme}
        />
        <DiceButton
          text="1d100"
          action={() => roll(100)}
          currentTheme={currentTheme}
        />
      </DiceArea>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
