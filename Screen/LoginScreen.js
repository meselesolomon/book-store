import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-web";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Navigation = useNavigation();
  const handleSignup = () => {
    Navigation.navigate("CreateAccount");
  };

  const handleLogin = () => {
    console.log(email);
    Navigation.replace("Home");
    console.log(email);
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
          <TouchableOpacity onPress={handleSignup} style={styles.link}>
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
