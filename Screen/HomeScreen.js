import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const HomeScreen = ({ route }) => {
  // const [names, setNames] = useState();
  const { firstName } = route.params;

  const Navigation = useNavigation();
  const handleLogout = () => {
    Navigation.replace("Login");
  };

  return (
    <View>
      <Text style={styles.welcome}>Dashboard</Text>
      <Text>Welcome, {firstName}!</Text>

      <view style={styles.buttonContoiner}>
        <TouchableOpacity onPress={handleLogout} style={styles.button}>
          <Text style={styles.button}>Log out</Text>
        </TouchableOpacity>
      </view>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  welcome: {
    paddingTop: 20,
    justifyContent: "center",
    textAlign: "center",
    color: "#0000FF",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonContoiner: {
    marginTop: 20,
    justifyContent: "center",
    textAlign: "center",
  },
  button: {
    width: "50%",
    backgroundColor: "#f44545",
    borderRadius: 99,
    padding: 5,
    justifyContent: "center",
    textAlign: "center",
    color: "#ccc0FF",
    fontSize: 20,
  },
});
