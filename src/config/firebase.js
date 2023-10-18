import firebase from "@react-native-firebase/app";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_qlbk0meUOt8zEjQDsT6AcI9fooRcY3w",
  authDomain: "sales-8f4e4.firebaseapp.com",
  projectId: "sales-8f4e4",
  storageBucket: "sales-8f4e4.appspot.com",
  messagingSenderId: "369484055935",
  appId: "1:369484055935:web:8d44a5994e11b33f31864a",
  measurementId: "G-D6Q1ZCNJSZ",
};

if (!firebase.apps?.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase, auth, firestore };
