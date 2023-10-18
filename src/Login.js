// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
//   StyleSheet,
//   Alert,
//   ImageBackground,
// } from "react-native";
// import { useNavigation, useRoute } from "@react-navigation/native";
// import { auth } from "./config/firebase";
// import axios from "axios";

// function LoginScreen() {
//   const navigation = useNavigation();
//   const route = useRoute();

//   const { username: registeredUsername, passwd: registeredPasswd } =
//     route.params || {};

//   const [username, setUsername] = useState(registeredUsername || "");
//   const [passwd, setPasswd] = useState(registeredPasswd || "");
//   const [usernameError, setUsernameError] = useState(null);
//   const [passwdError, setPasswdError] = useState(null);

//   const refreshData = () => {
//     setUsername("");
//     setPasswd("");
//   };

//   const handleLogin = () => {
//     setUsernameError(null);
//     setPasswdError(null);

//     if (username.trim() === "" && passwd.trim() === "") {
//       setUsernameError("Vui lòng nhập username");
//       setPasswdError("Vui lòng nhập passwd");
//     } else if (username.trim() === "") {
//       setUsernameError("Vui lòng nhập username");
//     } else if (passwd.trim() === "") {
//       setPasswdError("Vui lòng nhập passwd");
//     } else {
//       auth();
//       const handleLogin = async () => {
//         try {
//           const response = await axios.post(
//             "http://192.168.1.196:3000/api/userLogin",
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

//   const handleRegister = () => {
//     navigation.navigate("Register");
//   };

//   const handleForgotPasswd = () => {
//     navigation.navigate("Forgotpw");
//   };

//   return (
//     <ImageBackground style={styles.img} source={require("./image/anh8.png")}>
//       <View style={styles.container}>
//         <Text style={styles.title}>Login</Text>

//         <TextInput
//           style={styles.input}
//           onChangeText={(text) => setUsername(text)}
//           value={username}
//           placeholder="Username"
//         />
//         {usernameError && <Text style={styles.error}>{usernameError}</Text>}

//         <TextInput
//           style={styles.input}
//           onChangeText={(text) => setPasswd(text)}
//           value={passwd}
//           placeholder="Passwd"
//           secureTextEntry={true}
//         />
//         {passwdError && <Text style={styles.error}>{passwdError}</Text>}

//         <View style={styles.row}>
//           <Text>Remember me</Text>
//           <TouchableOpacity onPress={handleForgotPasswd}>
//             <Text style={styles.forgotPasswd}>Forgot the passwd</Text>
//           </TouchableOpacity>
//         </View>

//         <TouchableOpacity style={styles.button} onPress={handleLogin}>
//           <Text style={styles.buttonText}>Log in</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={handleRegister}>
//           <Text style={styles.registerLink}>Sign up</Text>
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
//   row: {
//     flexDirection: "row",
//     marginTop: 10,
//     top: 10,
//   },
//   forgotPasswd: {
//     marginLeft: 100,
//     color: "blue",
//   },
//   button: {
//     backgroundColor: "blue",
//     paddingVertical: 15,
//     paddingHorizontal: 70,
//     marginTop: 100,
//     borderRadius: 30,
//   },
//   buttonText: {
//     color: "white",
//     fontSize: 18,
//   },
//   registerLink: {
//     marginTop: 20,
//     color: "blue",
//   },
// });

// export default LoginScreen;

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
  const [passwd, setPasswd] = useState("");
  const [usernameError, setUsernameError] = useState(null);
  const [passwdError, setPasswdError] = useState(null);

  const handleLogin = async () => {
    try {
      console.log("Login ");
      const response = await axios.post(
        "http://192.168.61.101:3000/api/userLogin",
        {
          username,
          passwd,
        }
      );
      console.log("OK");
      console.log(response.data);
      if (response.status === 200) {
        Alert.alert("Đăng nhập thành công!");
        navigation.navigate("Home");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleRegister = () => {
    navigation.navigate("Register");
  };

  const handleForgotPasswd = () => {
    navigation.navigate("Forgotpw");
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
          onChangeText={(text) => setPasswd(text)}
          value={passwd}
          placeholder="Passwd"
          secureTextEntry={true}
        />
        {passwdError && <Text style={styles.error}>{passwdError}</Text>}

        <View style={styles.row}>
          <Text>Remember me</Text>
          <TouchableOpacity onPress={handleForgotPasswd}>
            <Text style={styles.forgotPasswd}>Forgot the passwd</Text>
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
    color: "red",
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
  row: {
    flexDirection: "row",
    marginTop: 10,
    top: 10,
  },
  forgotPasswd: {
    marginLeft: 100,
    color: "blue",
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 15,
    paddingHorizontal: 70,
    marginTop: 100,
    borderRadius: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  registerLink: {
    marginTop: 20,
    color: "blue",
  },
});

export default LoginScreen;
