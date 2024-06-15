import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import AddBookScreen from "./AddBookScreen";
import PDFBooksScreen from "./PDFBooksScreen";

const AdminHomeScreen = ({ route }) => {
  // const { firstName } = route.params;

  const navigation = useNavigation();

  const addBook = () => {
    navigation.navigate("AddBook");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.welcome}>Dashboard</Text>
        {/* <Text style={styles.welcomMessage}>Welcome, {firstName}</Text> */}
      </View>

      <TouchableOpacity onPress={addBook} style={styles.button2}>
        <Text style={styles.button2}>Add New Book</Text>
      </TouchableOpacity>

      <PDFBooksScreen />
    </View>
  );
};

export default AdminHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  welcomMessage: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    padding: 15,
  },
  button2: {
    // backgroundColor: "#0000FF",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
});
