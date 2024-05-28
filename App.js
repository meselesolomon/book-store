import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";

import LoginScreen from "./Screen/LoginScreen";
import CreatAccountScreen from "./Screen/CreateAccountScreen";
import AdminHomeScreen from "./Screen/AdminHomeScreen";
import UserHomeScreen from "./Screen/UserHomeScreen";
import AddBookScreen from "./Screen/AddBookScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CreateAccount" component={CreatAccountScreen} />
        <Stack.Screen name="userHome" component={UserHomeScreen} />
        <Stack.Screen name="AdminHome" component={AdminHomeScreen} />
        <Stack.Screen name="AddBook" component={AddBookScreen} />
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
});
