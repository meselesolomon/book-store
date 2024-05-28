import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-web";

const AddBookScreen = () => {
  const [bookTitle, setBookTitle] = useState("");
  const [bookDscription, setBookDscription] = useState("");
  const [image, setImage] = useState("");

  const navigation = useNavigation();
  const uplodFile = () => {
    console.log("Upload button is clicked");
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/images/b1.jpg")} />
      <Text style={styles.bookStore}>Add Book</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Book Title"
          value={bookTitle}
          onChangeText={setBookTitle}
          style={styles.input}
        />
        <TextInput
          placeholder="Book Description"
          value={bookDscription}
          onChangeText={setBookDscription}
          style={styles.input}
        />
        <input type="file" />
        <view style={styles.buttonContoiner}>
          <TouchableOpacity onPress={uplodFile} style={styles.button}>
            <Text style={styles.button}>Upload</Text>
          </TouchableOpacity>
        </view>
      </View>
    </View>
  );
};

export default AddBookScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 30,
  },
  image: {
    width: "100%",
    height: 150,
    justifyContent: "center",
    textAlign: "center",
  },

  bookStore: {
    justifyContent: "center",
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 20,
    color: "#0000FF",
    fontSize: 24,
    fontWeight: "bold",
  },
  inputContainer: {
    width: "80%",
    margin: "auto",
  },
  input: {
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 15,
    fontSize: 18,
    height: 40,
    marginBottom: 16,
  },

  buttonContoiner: {
    marginTop: 20,
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
    padding: 10,
    height: 50,
  },

  link: {
    justifyContent: "center",
    textAlign: "center",
    color: "#0000FF",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },
});
