import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ResourcesScreen from "./screens/ResourcesScreen";
import DetailsScreen from "./screens/DetailsScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="Resources"
        component={ResourcesScreen}
        options={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons name="book" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        })}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tab"
          component={MyTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  profileBtn: {
    color: "blue",
  },
});
