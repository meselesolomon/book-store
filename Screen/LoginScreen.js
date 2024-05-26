import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-web";
import { Alert } from "react-native";

import { auth, signInWithEmailAndPassword } from "../firebase";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Navigation = useNavigation();

  const navigateToCreateAccount = () => {
    Navigation.navigate("CreateAccount");
  };

  const handleLogin = async () => {
    try {
      // Check if email and password are not empty
      if (email.trim() === "" || password.trim() === "") {
        Alert.alert("Error", "Please fill in the email and password.");
        console.log("Error", "Please fill in the email and password.");
        return;
      }

      // Sign in the user with email and password
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const userId = user.uid;
      const firstName = "User";
      Navigation.replace("Home", { firstName });
    } catch (error) {
      console.error("Firebase login error");
      Alert.alert("Error", error);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/images/b1.jpg")} />
      <Text style={styles.bookStore}>Book Store</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.email}
        />
        <TextInput
          placeholder="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.password}
          secureTextEntry
        />
        <view style={styles.buttonContoiner}>
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.button}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={navigateToCreateAccount}
            style={styles.link}
          >
            <Text style={styles.link}>Create New Accoount</Text>
          </TouchableOpacity>
        </view>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  image: {
    width: 300,
    height: 150,
    paddingTop: "20",
    justifyContent: "top",
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
  },
  email: {
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  password: {
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#6495ED",
    borderRadius: 99,
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    padding: 5,
  },

  link: {
    justifyContent: "center",
    textAlign: "center",
    color: "#0000FF",
    fontSize: 16,
    fontWeight: "bold",
    paddingTop: 5,
  },
});
