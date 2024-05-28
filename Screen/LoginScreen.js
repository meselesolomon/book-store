import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-web";
import { Alert } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

import { auth, db } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  doc,
  getDoc,
  getDocs,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState("");

  const navigation = useNavigation();

  const navigateToCreateAccount = () => {
    navigation.navigate("CreateAccount");
  };

  const handleLogin = async () => {
    try {
      // Check if email and password are not empty
      if (email.trim() === "" || password.trim() === "") {
        Alert.alert("Please fill in the email and password.");
        console.log("Please fill in the email and password.");
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

      try {
        // Fetch the user's role from Firestore
        const userQuery = query(
          collection(db, "Users"),
          where("userId", "==", userId)
        );
        const userQuerySnapshot = await getDocs(userQuery);

        if (!userQuerySnapshot.empty) {
          const userData = userQuerySnapshot.docs[0].data();
          const userRole = userData.userRole;
          const firstName = userData.firstName;
          setUserRole(userRole);
          console.log("userRole:", userRole);

          // Perform the navigation based on the user's role
          if (userRole === "user") {
            navigation.replace("userHome", { firstName });
          } else if (userRole === "admin") {
            navigation.replace("AdminHome", { firstName });
          } else {
            console.log("Data is not Found!");
          }
        } else {
          console.log("User document not found in Firestore.");
        }
      } catch (error) {
        console.log("Error fetching user data:", error);
      }

      // navigation.replace("Home", { userRole });
      // console.log(userRole);
    } catch (error) {
      console.error("Firebase login error:", error);
      Alert.alert("Error", error.message);
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
        <TextInput
          style={styles.hiddenInput}
          value={userRole}
          onChangeText={setUserRole}
          editable={false}
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
  email: {
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 15,
    fontSize: 20,
    height: 50,
    marginBottom: 16,
  },
  password: {
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 15,
    fontSize: 20,
    height: 50,
    marginBottom: 20,
  },
  buttonContoiner: {
    marginTop: 10,
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
