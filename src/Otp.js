import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Input } from "react-native-elements";
import axios from "axios";
import { useNavigation, useRoute } from "@react-navigation/native";

const OtpScreen = () => {
  const navigation = useNavigation();

  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleOtpChange = (value, index) => {
    if (index >= 0 && index < 4) {
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);

      if (value && index < 3) {
        // Auto-focus the next input field
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const handleVerifyOtp = async () => {
    const otpValue = otp.join("");

    try {
      const response = await axios.post("", {
        otp: otpValue,
      });

      if (response.data.success) {
        // Mã OTP hợp lệ, thực hiện các xử lý tiếp theo
        console.log("Mã OTP hợp lệ");
        navigation.navigate("Home");
      } else {
        // Mã OTP không hợp lệ
        console.log("Mã OTP không hợp lệ");
      }
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error("Lỗi khi gọi API:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Xác minh mã OTP</Text>
      <View style={styles.otpContainer}>
        {otp.map((value, index) => (
          <Input
            key={index}
            value={value}
            onChangeText={(text) => handleOtpChange(text, index)}
            keyboardType="numeric"
            maxLength={1}
            containerStyle={styles.otpInputContainer}
            inputContainerStyle={styles.otpInput}
            ref={inputRefs[index]}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.verifyButton} onPress={handleVerifyOtp}>
        <Text style={styles.verifyButtonText}>Xác minh</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  otpInputContainer: {
    width: "20%",
  },
  otpInput: {
    borderBottomColor: "#2196F3",
    borderBottomWidth: 2,
    borderRadius: 10,
  },
  verifyButton: {
    backgroundColor: "#2196F3",
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
  },
  verifyButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default OtpScreen;
