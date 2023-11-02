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
import axios from "axios";

function ForgotPass() {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const handleForgotPass = async () => {
    setUsernameError("");

    try {
      const response = await axios.post(
        // "http://10.6.53.165:4000/users/register",
        {
          username,
        }
      );
      console.log(response.data);
      if (response.status === 200) {
        Alert.alert("Mã otp đã được gửi");
        navigation.navigate("Otp");
      }
    } catch (error) {
      console.log("Mã otp được gửi thất bại");
      console.error(error);
    }
  };

  return (
    <ImageBackground style={styles.img} source={require("./image/anh6.jpg")}>
      <View style={styles.container}>
        <Text style={styles.title}>Forgot Passwords</Text>

        <TextInput
          style={styles.input}
          onChangeText={(text) => setUsername(text)}
          value={username}
          placeholder="username"
        />
        {usernameError ? (
          <Text style={styles.error}>{usernameError}</Text>
        ) : null}

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleForgotPass}
        >
          <Text style={styles.buttonText}>Send</Text>
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

export default ForgotPass;
