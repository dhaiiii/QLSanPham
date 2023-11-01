import React, { useState } from "react";
import {
  Alert,
  Button,
  TextInput,
  View,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { useNavigation, useRoute } from "@react-navigation/native";

function LoginScreen() {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState([]);
  const [passwordError, setPasswordError] = useState([]);

  const refreshData = () => {
    setUsername("");
    setPassword("");
  };

  const handleLogin = async () => {
    setUsernameError([]);
    setPasswordError([]);

    if (username.trim() === "" && password.trim() === "") {
      setUsernameError("Vui lòng nhập username");
      setPasswordError("Vui lòng nhập password");
    } else if (username.trim() === "") {
      setUsernameError("Vui lòng nhập username");
    } else if (password.trim() === "") {
      setPasswordError("Vui lòng nhập password");
    } else {
      try {
        const response = await axios.post(
          "http://10.6.53.165:4000/users/authenticate",
          {
            username,
            password,
          }
        );
        console.log(response.data);
        if (response.status === 200) {
          Alert.alert("Đăng nhập thành công!");
          navigation.navigate("Otp", {
            us: username,
          });
        }
      } catch (error) {
        console.log("đăng nhập thất bại");
        console.error(error);
      }
    }
  };

  const handleRegister = () => {
    navigation.navigate("Register");
  };

  const handleForgotPassword = () => {
    navigation.navigate("Forgotpw");
  };

  const handleOtp = () => {
    navigation.navigate("Otp");
  };

  return (
    <ImageBackground style={styles.img} source={require("./image/anh8.png")}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          onChangeText={(text) => setUsername(text)}
          value={username}
          placeholder="Username"
        />
        {usernameError && <Text style={styles.error}>{usernameError}</Text>}

        <TextInput
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
        />
        {passwordError && <Text style={styles.error}>{passwordError}</Text>}

        <View style={styles.row}>
          <Text>Remember me</Text>
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.forgotPassword}>Forgot the password</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.registerLink}>Sign up</Text>
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
  },
  title: {
    fontSize: 30,
    color: "blue", // Use a suitable text color
    marginBottom: 20,
  },
  input: {
    width: 250,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: "white", // Use a suitable background color
  },
  error: {
    color: "red",
    marginTop: 5,
  },
  row: {
    flexDirection: "row",
    marginTop: 10,
    top: 10,
  },
  forgotPassword: {
    marginLeft: 80, // Adjust the margin as needed
    color: "blue",
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 15,
    paddingHorizontal: 70,
    marginTop: 20, // Adjust the margin as needed
    borderRadius: 30,
    top: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  registerLink: {
    marginTop: 10, // Adjust the margin as needed
    color: "blue",
    top: 50,
  },
});

export default LoginScreen;
