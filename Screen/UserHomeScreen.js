import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const HomeScreen = ({ route }) => {
  // const [names, setNames] = useState();
  const { firstName } = route.params;

  const navigation = useNavigation();
  const handleLogout = () => {
    navigation.replace("Login");
  };
  const addBook = () => {
    navigation.replace("AddBook");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Dashboard</Text>
      <Text style={styles.welcomMessage}>Welcome, {firstName}</Text>

      <view style={styles.buttonContoiner2}>
        {/* <TouchableOpacity onPress={addBook} style={styles.button2}>
          <Text style={styles.button2}>Add New Book</Text>
        </TouchableOpacity> */}
        <view style={styles.buttonContoiner}>
          <TouchableOpacity onPress={handleLogout} style={styles.button}>
            <Text style={styles.button}>Log out</Text>
          </TouchableOpacity>
        </view>
      </view>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 30,
  },
  welcome: {
    paddingTop: 20,
    justifyContent: "center",
    textAlign: "center",
    color: "#0000FF",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonContoiner: {
    // marginTop: 10,
  },
  button: {
    width: "80%",
    margin: "auto",
    color: "#fff",
    backgroundColor: "#0000FF",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 99,
    fontSize: 20,
    fontWeight: "bold",
    padding: 15,
    height: 50,
    marginTop: 10,
  },
  welcomMessage: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    padding: 15,
  },
});
