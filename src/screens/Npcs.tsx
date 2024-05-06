import { StyleSheet, View, Animated } from "react-native";
import { Button, Text, FAB } from "react-native-paper";
import { useEffect, useState } from "react";
import {
  RandomCharacter,
  gerarPersonagem,
} from "../constants/random-data-generator/medieval-characters";
import { Width } from "../constants/sizes";

export interface Props {
  currentTheme: any;
}

export default function Npcs(props: Props) {
  const [npcInfo, setNpcInfo] = useState<RandomCharacter>(gerarPersonagem());
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    startAnimation();
  }, [npcInfo]);

  const startAnimation = () => {
    fadeAnim.setValue(0); // Redefine o valor inicial da animação para 0
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500, // Duração da animação em milissegundos
      useNativeDriver: false,
    }).start();
  };

  return (
    <Animated.View style={[styles.container, {opacity: fadeAnim}]}>
      <View style={styles.characterBox}>
        <Text style={styles.commomText} variant="displayMedium">
          {npcInfo.classe}
        </Text>
        <Text style={styles.commomText} variant="headlineMedium">
          {npcInfo.nome}, {npcInfo.raça}
        </Text>
        <Text style={styles.commomText} variant="headlineSmall">
          {npcInfo.origem}
        </Text>
        <FAB
          label="Gerar personagem"
          icon="reload"
          onPress={() => setNpcInfo(gerarPersonagem())}
        />
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  characterBox: {
    width: Width * 0.8,
  },
  commomText: {
    textAlign: "left",
    marginBottom: 16,
    textTransform: "lowercase",
  },
});
