import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { auth } from "./config/firebase";

function ForgotPassword() {
  const navigation = useNavigation();

  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordAgainError, setPasswordAgainError] = useState("");

  const handleForgotPassword = () => {
    setPassword("");
    setPasswordAgain("");

    if (!password) {
      setPasswordError("Vui lòng nhập password");
    }
    if (!passwordAgain) {
      setPasswordAgainError("Vui lòng nhập lại mật khẩu");
    }
    if (password && passwordAgain !== password) {
      setPasswordAgainError("Mật khẩu lặp lại không khớp");
    }
    if (password && passwordAgain === password) {
      auth().createUserWithPasswordandPasswordAgain(password, passwordAgain);
      Alert.alert(
        "Đổi mật khẩu thành công",
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
    <View style={styles.container}>
      <Text style={styles.title}>Forgot the Password</Text>

      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholder="Password"
        secureTextEntry={true}
      />
      {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}

      <TextInput
        style={styles.input}
        onChangeText={(text) => setPasswordAgain(text)}
        value={passwordAgain}
        placeholder="Password Again"
        secureTextEntry={true}
      />
      {passwordAgainError ? (
        <Text style={styles.error}>{passwordAgainError}</Text>
      ) : null}

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={handleForgotPassword}
      >
        <Text style={styles.buttonText}>Forgot the Password</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    color: "red",
    position: "absolute",
    top: 70,
  },
  input: {
    width: 250,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  error: {
    color: "red",
    marginTop: 10,
  },
  buttonContainer: {
    backgroundColor: "blue",
    paddingVertical: 15,
    paddingHorizontal: 70,
    marginTop: 70,
    borderRadius: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});

export default ForgotPassword;
