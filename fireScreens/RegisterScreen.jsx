import React, {useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground} from "react-native";

import * as firebase from "firebase";

export default RegisterScreen = (props) => {
  initialState = { name: "", email: "", password: "", errorMessage: null }
  const [state, setState] = useState(initialState)

  const handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(state.email, state.password)
      .then((userCredentials) => {
        return userCredentials.user.updateProfile({
          displayName: state.name
        });
      })
      .catch((error) => setState({...state, errorMessage: error.message }));
  };

    return (
      <ImageBackground source={require('../123125.jpg')} style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.greeting}> Create your account </Text>
        <View style={styles.errorMessage}>
          {state.errorMessage && (
            <Text style={styles.error}>{state.errorMessage}</Text>
          )}
        </View>
        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>Name</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={(name) => setState({...state, name })}
              value={state.name}
            ></TextInput>
          </View>

          <View style={{ marginTop: 32 }}>
            <Text style={styles.inputTitle}>Email Address</Text>
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
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={{ color: "#e98a2f" }}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignSelf: "center", marginTop: 32 }}>
          <Text style={{ color: "black", fontSize: 13 }}>
            New to f-time?{" "}
            <Text style={{ fontWeight: "500", color: "#e98a2f" }}>Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    );
}

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
    color: "#e98a2f"
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
