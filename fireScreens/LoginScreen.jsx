import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import * as firebase from "firebase";

export default LoginScreen = (props) => {
  initialState = { email: "", password: "", errorMessage: null };
  const [state, setState] = useState(initialState);
  const handleLogin = () => {
    const { email, password } = state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        setState({ ...state, errorMessage: err.message });
      });
  };

  return (
    <ImageBackground
      source={require("../assets/123125.jpg")}
      style={styles.container}
    >
      <View style={styles.container}>
        <Text style={styles.greeting}>F-TIME </Text>
        <Text style={styles.greeting}>CHANGE YOUR LIFE </Text>
        <View style={styles.errorMessage}>
          {state.errorMessage && (
            <Text style={styles.error}>{state.errorMessage}</Text>
          )}
        </View>
        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>Email</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={(email) => setState({ ...state, email })}
              value={state.email}
            ></TextInput>
          </View>
          <View style={{ marginTop: 32 }}>
            <Text style={styles.inputTitle}>Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              autoCapitalize="none"
              onChangeText={(password) => setState({ ...state, password })}
              value={state.password}
            ></TextInput>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={{ color: "#e98a2f" }}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignSelf: "center", marginTop: 32 }}
          onPress={() => props.navigation.navigate("Register")}
        >
          <Text style={{ color: "black", fontSize: 13 }}>
            New to f-time? <Text style={{ color: "#e98a2f" }}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  greeting: {
    marginTop: 32,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    color: "#e98a2f",
  },
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
  },
  form: { marginBottom: 48, marginHorizontal: 30 },
  inputTitle: { color: "black", fontSize: 12, textTransform: "uppercase" },
  input: {
    borderBottomColor: "#e98a2f",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "black",
    width: 250,
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: "white",
    borderRadius: 4,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    width: 140,
  },
  error: {
    color: "#f0f",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
  },
});
