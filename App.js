import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import LoginScreen from "./Screen/LoginScreen";
import CreatAccountScreen from "./Screen/CreateAccountScreen";
import AdminHomeScreen from "./Screen/AdminHomeScreen";
import UserHomeScreen from "./Screen/UserHomeScreen";
import AddBookScreen from "./Screen/AddBookScreen";
import SettingsScreen from "./Screen/SettingsScreen";
import ViewBookScreen from "./Screen/ViewBookScreen";
// import PDFViewerScreen from "./Screen/PDFViewerScreen";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const AdminTab = createBottomTabNavigator();
const UserTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CreateAccount" component={CreatAccountScreen} /> */}
        <Stack.Screen name="AdminDrawer" component={AdminDrawerScreen} />
        <Stack.Screen name="UserDrawer" component={UserDrawerScreen} />
        {/* <Stack.Screen name="PDFViewer" component={PDFViewerScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function AdminDrawerScreen({ route }) {
  const { firstName } = route.params || "Gust";
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="AdminHome"
        component={AdminTabScreen}
        options={{
          drawerLabel: "Home",
          headerTitle: `Welcome, ${firstName}!`,
          // headerTitle: "Home",
          drawerActiveBackgroundColor: "#aa18ea",
          drawerActiveTintColor: "#fff",
          drawerInactiveTintColor: "000",
        }}
      />
      <Drawer.Screen
        name="AddBook"
        component={AddBookScreen}
        options={{ drawerLabel: "Add Book" }}
      />
      <Drawer.Screen
        name="ViewBook"
        component={ViewBookScreen}
        options={{ drawerLabel: "View Book" }}
      />
      <Drawer.Screen
        name="Seetings"
        component={SettingsScreen}
        options={{ drawerLabel: "Settings" }}
      />
    </Drawer.Navigator>
  );
}

function AdminTabScreen() {
  return (
    <AdminTab.Navigator screenOptions={{ headerShown: false }}>
      <AdminTab.Screen
        name="AdminHome"
        component={AdminHomeScreen}
        options={{ drawerLabel: "Home" }}
      />
      <AdminTab.Screen name="AddBook" component={AddBookScreen} />
    </AdminTab.Navigator>
  );
}

function UserDrawerScreen() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="UserHome"
        component={UserTabScreen}
        options={{
          drawerLabel: "Home",
          headerTitle: `Welcome, ${firstName}!`,
          // headerTitle: "Home",
          drawerActiveBackgroundColor: "#aa18ea",
          drawerActiveTintColor: "#fff",
          drawerInactiveTintColor: "000",
        }}
      />
      <Drawer.Screen />
      <Drawer.Screen name="ViewBook" component={AddBookScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

function UserTabScreen() {
  return (
    <UserTab.Navigator>
      <UserTab.Screen name="UserHome" component={UserHomeScreen} />
      <UserTab.Screen name="AddBook" component={AddBookScreen} />
    </UserTab.Navigator>
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
