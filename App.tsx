import { Provider as PaperProvider } from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dices from "./src/screens/Dices";
import Npcs from "./src/screens/Npcs";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Gerarador de personagens" component={Npcs} />
          <Tab.Screen name="Dados" component={Dices} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
