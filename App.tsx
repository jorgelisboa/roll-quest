import { Provider as PaperProvider } from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dices from "./src/screens/Dices";
import Npcs from "./src/screens/Npcs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen
            options={{
              tabBarIcon: ({ color, size }) => {
                return <Ionicons name="person" color={color} size={size} />;
              },
            }}
            name="Gerarador de personagens"
            component={Npcs}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({ color, size }) => {
                return <Ionicons name="menu" color={color} size={size} />;
              },
            }}
            name="Dados"
            component={Dices}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
