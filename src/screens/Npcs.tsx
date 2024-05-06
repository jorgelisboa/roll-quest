import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { useState } from "react";
import {
  RandomCharacter,
  gerarPersonagem,
} from "../constants/random-data-generator/medieval-characters";

export interface Props {
  currentTheme: any;
}

export default function Npcs(props: Props) {
  const [npcInfo, setNpcInfo] = useState<RandomCharacter>(gerarPersonagem());

  return (
    <View style={[styles.container]}>
      <Text>{npcInfo.nome}</Text>
      <Text>{npcInfo.raça}</Text>
      <Text>{npcInfo.classe}</Text>
      <Text>{npcInfo.origem}</Text>
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
