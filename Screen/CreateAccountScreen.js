import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-web";
import { Alert } from "react-native";

import {
  auth,
  createUserWithEmailAndPassword,
  firebase,
  collection,
  addDoc,
} from "../firebase";

const CreateAccountScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPassword, setConfrimPassword] = useState("");
  const [role, setRole] = useState("user");

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
      const user = userCredential.user;
      const userId = user.uid;

      const newUser = await addDoc(collection(firebase, "Users"), {
        userId: userId,
        role: role,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
      });

      Navigation.replace("Home", { firstName });
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
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
          style={styles.firstName}
        />
        <TextInput
          placeholder="Last Name"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
          style={styles.lastName}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.email}
        />
        <TextInput
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
          style={styles.phoneNumber}
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
          value={confrimPassword}
          onChangeText={(text) => setConfrimPassword(text)}
          style={styles.confrimPassword}
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
    width: "100%",
    height: 150,
    paddingTop: 20,
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
  firstName: {
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  lastName: {
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
  phoneNumber: {
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
  confrimPassword: {
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
