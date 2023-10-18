// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
//   Alert,
//   StyleSheet,
//   ImageBackground,
// } from "react-native";
// import { auth } from "./config/firebase";
// import axios from "axios";

// function RegisterScreen({ navigation }) {
//   const [username, setUsername] = useState("");
//   const [passwd, setPasswd] = useState("");
//   const [passwdAgain, setPasswdAgain] = useState("");
//   const [usernameError, setUsernameError] = useState("");
//   const [passwdError, setPasswdError] = useState("");
//   const [passwdAgainError, setPasswdAgainError] = useState("");

//   const handleRegister = () => {
//     setUsernameError("");
//     setPasswdError("");
//     setPasswdAgainError("");

//     const emailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/;

//     if (!emailRegex.test(username)) {
//       setUsernameError("Tài khoản phải có định dạng email và đuôi @gmail.com");
//     }

//     if (passwd.length < 6) {
//       setPasswdError("Mật khẩu phải có ít nhất 6 ký tự");
//     }

//     if (!passwdAgain) {
//       setPasswdAgainError("Vui lòng nhập lại mật khẩu");
//     }
//     if (passwdAgain.length < 6) {
//       setPasswdAgainError("Mật khẩu phải ít nhất 6 ký tự");
//     }

//     if (
//       username &&
//       passwd &&
//       passwdAgain &&
//       passwd === passwdAgain &&
//       emailRegex.test(username)
//     ) {
//       const handleRegister = async () => {
//         try {
//           const response = await axios.post(
//             "http://192.168.1.196:3000/api/userRegister",
//             {
//               username,
//               passwd,
//             }
//           );
//           console.log(response.data);
//         } catch (error) {
//           console.error(error);
//         }
//       };
//     }
//   };

//   return (
//     <ImageBackground style={styles.img} source={require("./image/anh6.jpg")}>
//       <View style={styles.container}>
//         <Text style={styles.title}>Sign Up</Text>

//         <TextInput
//           style={styles.input}
//           onChangeText={(text) => setUsername(text)}
//           value={username}
//           placeholder="Username"
//         />
//         {usernameError ? (
//           <Text style={styles.error}>{usernameError}</Text>
//         ) : null}

//         <TextInput
//           style={styles.input}
//           onChangeText={(text) => setPasswd(text)}
//           value={passwd}
//           placeholder="Passwd"
//           secureTextEntry={true}
//         />
//         {passwdError ? <Text style={styles.error}>{passwdError}</Text> : null}

//         <TextInput
//           style={styles.input}
//           onChangeText={(text) => setPasswdAgain(text)}
//           value={passwdAgain}
//           placeholder="Password Again"
//           secureTextEntry={true}
//         />
//         {passwdAgainError ? (
//           <Text style={styles.error}>{passwdAgainError}</Text>
//         ) : null}

//         <TouchableOpacity
//           style={styles.buttonContainer}
//           onPress={handleRegister}
//         >
//           <Text style={styles.buttonText}>Sign Up</Text>
//         </TouchableOpacity>
//       </View>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   img: {
//     flex: 1,
//     resizeMode: "cover",
//   },
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   title: {
//     fontSize: 30,
//     color: "red",
//     position: "absolute",
//     top: 70,
//   },
//   input: {
//     width: 250,
//     height: 40,
//     borderColor: "gray",
//     borderWidth: 1,
//     marginTop: 20,
//     paddingHorizontal: 10,
//   },
//   error: {
//     color: "red",
//     marginTop: 10,
//   },
//   buttonContainer: {
//     backgroundColor: "blue",
//     paddingVertical: 15,
//     paddingHorizontal: 70,
//     marginTop: 70,
//     borderRadius: 30,
//   },
//   buttonText: {
//     color: "white",
//     fontSize: 18,
//     textAlign: "center",
//   },
// });

// export default RegisterScreen;

import React, { useState } from "react";
import {
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
import { Alert } from "react-native";

function RegisterScreen() {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [passwd, setPasswd] = useState("");
  const [passwdAgain, setPasswdAgain] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwdError, setPasswdError] = useState("");
  const [passwdAgainError, setPasswdAgainError] = useState("");

  const handleRegister = () => {
    setUsernameError("");
    setPasswdError("");
    setPasswdAgainError("");

    const handleRegisters = async () => {
      console.log("Handle register");
      try {
        console.log("Dmm await");
        const response = await axios.post(
          "http://192.168.61.101:3000/api/userRegister",
          {
            username,
            passwd,
          }
        );
        console.log(response.data);
        console.log("hihi");
        Alert.alert("Đăng ký thành công!");
        navigation.navigate("Login");
      } catch (error) {
        console.error(error);
      }
    };

    const emailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/;

    if (!emailRegex.test(username)) {
      setUsernameError("Tài khoản phải có định dạng email và đuôi @gmail.com");
    }

    if (passwd.length < 6) {
      setPasswdError("Mật khẩu phải có ít nhất 6 ký tự");
    }

    if (!passwdAgain) {
      setPasswdAgainError("Vui lòng nhập lại mật khẩu");
    }
    if (passwdAgain.length < 6) {
      setPasswdAgainError("Mật khẩu phải ít nhất 6 ký");
    }

    if (
      username &&
      passwd &&
      passwdAgain &&
      passwd === passwdAgain &&
      emailRegex.test(username)
    ) {
      console.log("Register 123");
      handleRegisters();
    }
  };

  return (
    <ImageBackground style={styles.img} source={require("./image/anh6.jpg")}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>

        <TextInput
          style={styles.input}
          onChangeText={(text) => setUsername(text)}
          value={username}
          placeholder="Username"
        />
        {usernameError ? (
          <Text style={styles.error}>{usernameError}</Text>
        ) : null}

        <TextInput
          style={styles.input}
          onChangeText={(text) => setPasswd(text)}
          value={passwd}
          placeholder="Passwd"
          secureTextEntry={true}
        />
        {passwdError ? <Text style={styles.error}>{passwdError}</Text> : null}

        <TextInput
          style={styles.input}
          onChangeText={(text) => setPasswdAgain(text)}
          value={passwdAgain}
          placeholder="Password Again"
          secureTextEntry={true}
        />
        {passwdAgainError ? (
          <Text style={styles.error}>{passwdAgainError}</Text>
        ) : null}

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            handleRegister();
          }}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
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

export default RegisterScreen;
