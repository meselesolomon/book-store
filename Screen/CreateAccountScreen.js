import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-web";
import { Alert } from "react-native";

import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  doc,
  addDoc,
  getDoc,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";

const CreateAccountScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPassword, setConfrimPassword] = useState("");
  const [userRole, setUserRole] = useState("user");

  const navigation = useNavigation();

  const navigateToLoginAccount = () => {
    navigation.navigate("Login");
  };

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

      const newUser = await addDoc(collection(db, "Users"), {
        userId: userId,
        userRole: userRole,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
      });

      if (userRole === "user") {
        navigation.replace("userHome", { userRole });
      } else if (userRole === "admin") {
        navigation.replace("AdminHome");
      }
    } catch (error) {
      console.error("Firebase sign up error");
      Alert.alert("Error", error);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/images/b1.jpg")} />
      <Text style={styles.createAccount}>Create New Accoount</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="First Name"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Last Name"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
        <TextInput
          placeholder="Confrim Password"
          value={confrimPassword}
          onChangeText={(text) => setConfrimPassword(text)}
          style={styles.input}
          secureTextEntry
        />
        <view style={styles.buttonContoiner}>
          <TouchableOpacity onPress={handleSignup} style={styles.button}>
            <Text style={styles.button}>Register</Text>
          </TouchableOpacity>
        </view>
        <TouchableOpacity onPress={navigateToLoginAccount} style={styles.link}>
          <Text style={styles.link}>I have already an Accoount</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateAccountScreen;

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
    margin: "auto",
  },
  input: {
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 15,
    fontSize: 20,
    height: 50,
    marginBottom: 12,
  },

  buttonContoiner: {
    marginTop: 10,
  },
  button: {
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#0000FF",
    borderRadius: 99,
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    padding: 15,
    height: 50,
    width: "80%",
    margin: "auto",
  },
  link: {
    justifyContent: "center",
    textAlign: "center",
    color: "#0000FF",
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 5,
  },
});
