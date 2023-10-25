import React, { useRef, useState } from "react";
import { Alert, TextInput, Touchable } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { useEffect } from "react";

const Otp = () => {
  const et1 = useRef();
  const et2 = useRef();
  const et3 = useRef();
  const et4 = useRef();

  const [opt1, setOtp1] = useState("");
  const [opt2, setOtp2] = useState("");
  const [opt3, setOtp3] = useState("");
  const [opt4, setOtp4] = useState("");
  const [count, setCount] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count == 0) {
        clearInterval(interval);
      } else {
        setCount(count - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);
  const otpValidate = () => {
    let otp = "1234";
    let enterdOtp = opt1 + opt2 + opt3 + opt4;
    if (enterdOtp == otp) {
      Alert.alert("Mã Otp đúng");
    } else {
      Alert.alert("Mã OTP sai");
    }
  };

  return (
    <View style={StyleSheet.conatainer}>
      <Text style={styles.title}>OTP Verification</Text>
      <View style={styles.otpView}>
        <TextInput
          ref={et1}
          style={[
            styles.inputView,
            { borderColor: opt1.length >= 1 ? "blue" : "#000" },
          ]}
          keyboardType="number-pad"
          maxLength={1}
          value={opt1}
          onChangeText={(txt) => {
            setOtp1(txt);
            if (txt.length >= 1) {
              et2.current.focus();
            }
          }}
        />
        <TextInput
          ref={et2}
          style={[
            styles.inputView,
            { borderColor: opt2.length >= 1 ? "blue" : "#000" },
          ]}
          keyboardType="number-pad"
          maxLength={1}
          value={opt2}
          onChangeText={(txt) => {
            setOtp2(txt);
            if (txt.length >= 1) {
              et3.current.focus();
            } else if (txt.length < 1) {
              et1.current.focus();
            }
          }}
        />
        <TextInput
          ref={et3}
          style={[
            styles.inputView,
            { borderColor: opt3.length >= 1 ? "blue" : "#000" },
          ]}
          keyboardType="number-pad"
          maxLength={1}
          value={opt3}
          onChangeText={(txt) => {
            setOtp3(txt);
            if (txt.length >= 1) {
              et4.current.focus();
            } else if (txt.length < 1) {
              et2.current.focus();
            }
          }}
        />
        <TextInput
          ref={et4}
          style={[
            styles.inputView,
            { borderColor: opt4.length >= 1 ? "blue" : "#000" },
          ]}
          keyboardType="number-pad"
          maxLength={1}
          value={opt4}
          onChangeText={(txt) => {
            setOtp4(txt);
            if (txt.length >= 1) {
              et4.current.focus();
            } else if (txt.length < 1) {
              et3.current.focus();
            }
          }}
        />
      </View>
      <View style={styles.resend}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "700",
            color: count == 0 ? "blue" : "gray",
          }}
          onPress={() => {
            setCount(60);
          }}
        >
          Resend
        </Text>
        {count !== 0 && (
          <Text style={{ marginLeft: 20, fontSize: 20 }}>
            {count + "seconds"}
          </Text>
        )}
      </View>
      <TouchableOpacity
        disabled={
          opt1 !== "" && opt2 !== "" && opt3 !== "" && opt4 !== ""
            ? false
            : true
        }
        style={[
          styles.verify,
          {
            backgroundColor:
              opt1 !== "" && opt2 !== "" && opt3 !== "" && opt4 !== ""
                ? "blue"
                : "#949494",
          },
        ]}
        onPress={() => {
          otpValidate();
        }}
      >
        <Text style={styles.btn}>Verify OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Otp;

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 100,
    alignSelf: "center",
    color: "#000",
  },
  otpView: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 100,
  },
  inputView: {
    width: 50,
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    marginLeft: 10,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
  },
  verify: {
    width: "90%",
    height: 55,
    backgroundColor: "blue",
    borderRadius: 20,
    alignSelf: "center",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    color: "#fff",
    fontSize: 20,
  },
  resend: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 30,
  },
});
