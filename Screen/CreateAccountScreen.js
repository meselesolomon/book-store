import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-web";
import { Alert } from "react-native";

import { auth, createUserWithEmailAndPassword } from "../firebase";

const CreateAccountScreen = () => {
  const [firstname, setFristname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const Navigation = useNavigation();
  const handleSignup = async () => {
    try {
      // Check if email and password are not empty
      if (email.trim() === "" || password.trim() === "") {
        Alert.alert("Error", "Please fill in the email and password.");
        console.log("Error", "Please fill in the email and password.");
        return;
      }
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { user } = userCredential;
      if (user) {
        // Navigate to the "Home" screen
        Navigation.replace("Home");
      } else {
        // Display a generic error message
        Alert.alert("An error occurred while creating the user account.");
      }
    } catch (error) {
      console.error("Firebase sign up error");
      Alert.alert("Error", error);
    }
  };

  return (
    <View>
      <Image style={styles.image} source={require("../assets/images/b1.jpg")} />
      <Text style={styles.createAccount}>Create New Accoount</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="First Name"
          value={firstname}
          onChangeText={(text) => setFristname(text)}
          style={styles.firstname}
        />
        <TextInput
          placeholder="Last Name"
          value={lastname}
          onChangeText={(text) => setLastname(text)}
          style={styles.lastname}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.email}
        />
        <TextInput
          placeholder="Phone Number"
          value={phone}
          onChangeText={(text) => setPhone(text)}
          style={styles.phone}
        />
        <TextInput
          placeholder="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.password}
          secureTextEntry
        />
        <TextInput
          placeholder="Confrim Password"
          value={password2}
          onChangeText={(text) => setPassword2(text)}
          style={styles.password2}
          secureTextEntry
        />
        <view style={styles.buttonContoiner}>
          <TouchableOpacity onPress={handleSignup} style={styles.button}>
            <Text style={styles.button}>Register</Text>
          </TouchableOpacity>
        </view>
      </View>
    </View>
  );
};

export default CreateAccountScreen;

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

  createAccount: {
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
  firstname: {
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  lastname: {
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
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
  phone: {
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
  },
  password2: {
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    marginTop: 10,
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
    marginTop: 10,
  },
});
