import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import DiceButton from "./src/components/DiceButton";
import DiceResult from "./src/components/DiceResult";
import DiceArea from "./src/components/DiceArea";
import { useEffect, useState } from "react";
import { Audio } from "expo-av";
import * as Haptics from "expo-haptics";
import { Provider as PaperProvider } from "react-native-paper";
import ColorSwitch from "./src/components/ColorSwitch";

// THEMES
import WhiteTheme from "./src/constants/themes/white";

export type Roll = {
  sides: number;
  results: number;
};

export default function App() {
  const [currentTheme, setCurrentTheme] = useState<any>(WhiteTheme);

  const [rolls, setRolls] = useState<Roll>(null);
  const [times, setTImes] = useState<number>(1);
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
    <PaperProvider>
      <View
        style={[styles.container, { backgroundColor: currentTheme.primary }]}
      >
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
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
