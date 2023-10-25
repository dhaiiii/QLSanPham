import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

function ForgotPassword() {
  const navigation = useNavigation();

  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordAgainError, setPasswordAgainError] = useState("");

  const handleForgotPassword = () => {
    setPasswordError("");
    setPasswordAgainError("");

    if (!password) {
      setPasswordError("Please enter a password");
    }
    if (!passwordAgain) {
      setPasswordAgainError("Please re-enter the password");
    }
    if (password !== passwordAgain) {
      setPasswordAgainError("Passwords do not match");
    }
    if (password && passwordAgain === password) {
      // You might want to implement password reset logic here
      Alert.alert(
        "Password changed successfully",
        "Your password has been changed.",
        [
          {
            text: "OK",
            onPress: () => {
              navigation.navigate("Login");
            },
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <ImageBackground style={styles.img} source={require("./image/anh6.jpg")}>
      <View style={styles.container}>
        <Text style={styles.title}>Forgot Password</Text>

        <TextInput
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
        />
        {passwordError ? (
          <Text style={styles.error}>{passwordError}</Text>
        ) : null}

        <TextInput
          style={styles.input}
          onChangeText={(text) => setPasswordAgain(text)}
          value={passwordAgain}
          placeholder="Re-enter Password"
          secureTextEntry={true}
        />
        {passwordAgainError ? (
          <Text style={styles.error}>{passwordAgainError}</Text>
        ) : null}

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleForgotPassword}
        >
          <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  img: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
  },
  title: {
    fontSize: 24,
    color: "black",
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  error: {
    color: "red",
    marginTop: 5,
  },
  buttonContainer: {
    backgroundColor: "blue",
    paddingVertical: 15,
    paddingHorizontal: 70,
    marginTop: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});

export default ForgotPassword;
