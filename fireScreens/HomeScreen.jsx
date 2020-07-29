import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import * as firebase from "firebase";

export default HomeScreen = (props) => {
  initialState = { email: "", displayName: "" };
  const [state, setState] = useState(initialState)
  useEffect(() => {
    const { email, displayName } = firebase.auth().currentUser;
    setState({ email, displayName });
  }, [])

  const signOutUser = () => {
    firebase.auth().signOut();
  };

  return (
    <ImageBackground source={require('../123125.jpg')} style={styles.container}>
      <View style={styles.container}>
        <Text> Hi {state.email} </Text>
        <TouchableOpacity style={{ marginTop: 32 }} onPress={signOutUser}>
          <Text>Logout</Text>
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
});
