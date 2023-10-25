import React, { useState } from "react";
import {
  ScrollView,
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

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [numberidentify, setNumberidentify] = useState("");
  const [addresss, setAddresss] = useState("");
  const [dateofbirth, setDateofbirth] = useState("");
  const [Role, setRole] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [numberidentifyError, setNumberidentifyError] = useState("");
  const [addresssError, setAddresssError] = useState("");
  const [dateofbirthError, setDateofbirthError] = useState("");
  const [RoleError, setRoleError] = useState("");

  const handleRegister = () => {
    setFirstNameError("");
    setLastNameError("");
    setEmailError("");
    setNumberidentify("");
    setAddresssError("");
    setDateofbirthError("");
    setUsernameError("");
    setPasswordError("");
    setRoleError("");

    const handleRegisters = async () => {
      console.log("handel register");
      try {
        const response = await axios.post(
          "http://10.6.52.123:4000/users/register",
          {
            firstName,
            lastName,
            email,
            username,
            password,
            numberidentify,
            addresss,
            dateofbirth,
            Role,
          }
        );
        console.log(response.data);
        Alert.alert("Đăng ký thành công!");
        navigation.navigate("Login");
      } catch (error) {
        console.error(error);
      }
    };
    const emailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/;

    if (firstName.length < 1) {
      setFirstNameError("Tên không được ít hơn 1 ký tự");
    }
    if (lastName.length < 1) {
      setLastNameError("Họ không được ít hơn 1 ký tự");
    }
    if (!emailRegex.test(email)) {
      setEmailError("Email phải có định dạng email và đuôi @gmail.com");
    }
    if (username.length < 6) {
      setUsernameError("Tài khoản phải có ít nhất 6 ký tự");
    }
    if (password.length < 6) {
      setPasswordError("Mật khẩu phải có ít nhất 6 ký tự");
    }
    if (numberidentify.length < 6) {
      setNumberidentifyError("Vui lòng nhập ít nhất 6 ký tự");
    }
    if (Role.length < 1) {
      setRoleError("Vui lòng nhập ít nhất 1 ký tự");
    }
    if (addresss.length < 1) {
      setAddresssError("ko dc để trống");
    }
    if (dateofbirth.length < 1) {
      setDateofbirthError("ko dc để trống");
    }

    if (
      firstName &&
      lastName &&
      email &&
      username &&
      password &&
      numberidentify &&
      addresss &&
      dateofbirth &&
      Role &&
      emailRegex.test(email)
    ) {
      console.log("register 123");
      handleRegisters(); // Thêm dấu ngoặc tròn để gọi hàm
    }
  };

  return (
    <ImageBackground style={styles.img} source={require("./image/anh6.jpg")}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setFirstName(text)}
          value={firstName}
          placeholder="firstname"
        />
        {firstNameError ? (
          <Text style={styles.error}>{firstNameError}</Text>
        ) : null}

        <TextInput
          style={styles.input}
          onChangeText={(text) => setLastName(text)}
          value={lastName}
          placeholder="lastName"
        />
        {lastNameError ? (
          <Text style={styles.error}>{lastNameError}</Text>
        ) : null}

        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email"
        />
        {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

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
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholder="password"
          secureTextEntry={true}
        />
        {passwordError ? (
          <Text style={styles.error}>{passwordError}</Text>
        ) : null}

        <TextInput
          style={styles.input}
          onChangeText={(text) => setRole(text)}
          value={Role}
          placeholder="Role"
          // Sử dụng flex để tự động điều chỉnh bố trí
        />
        {RoleError ? <Text style={styles.error}>{RoleError}</Text> : null}

        <TextInput
          style={styles.input}
          onChangeText={(text) => setNumberidentify(text)} // Đặt giá trị bằng hàm setNumberidentify
          value={numberidentify} // Sử dụng giá trị từ trạng thái
          placeholder="numberidentify"
        />
        {numberidentifyError ? (
          <Text style={styles.error}>{numberidentifyError}</Text>
        ) : null}

        <TextInput
          style={styles.input}
          onChangeText={(text) => setAddresss(text)}
          value={addresss}
          placeholder="addresss"
        />
        {addresssError ? (
          <Text style={styles.error}>{addresssError}</Text>
        ) : null}

        <TextInput
          style={styles.input}
          onChangeText={(text) => setDateofbirth(text)}
          value={dateofbirth}
          placeholder="dateofbirth"
        />
        {dateofbirthError ? (
          <Text style={styles.error}>{dateofbirthError}</Text>
        ) : null}

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            handleRegister();
          }}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  img: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32, // Tăng kích thước tiêu đề
    color: "blue",
    marginBottom: 20, // Di chuyển tiêu đề xuống dưới
  },
  input: {
    width: 300, // Tăng kích thước trường nhập liệu
    height: 50, // Tăng kích thước trường nhập liệu
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
    borderRadius: 25, // Bo góc của trường nhập liệu
  },
  error: {
    color: "red",
    marginTop: 10,
  },
  buttonContainer: {
    backgroundColor: "blue",
    paddingVertical: 15,
    paddingHorizontal: 70,
    marginTop: 20,
    borderRadius: 25, // Bo góc của nút
  },
  buttonText: {
    color: "white",
    fontSize: 20, // Tăng kích thước chữ nút
    textAlign: "center",
  },
});

export default RegisterScreen;
