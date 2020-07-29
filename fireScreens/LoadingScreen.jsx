import React, { useMemo } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import * as firebase from "firebase";

export default LoadingScreen = (props) => {
  useMemo(() => {
    firebase.auth().onAuthStateChanged((user) => {
      props.navigation.navigate(user ? "App" : "Auth")
    })
  }, []);
  // componentWillMount() {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     this.props.navigation.navigate(user ? "App" : "Auth");
  //   });
  // }
  return (
    <View style={styles.container}>
      <Text> LoadingScreen </Text>
      <ActivityIndicator size="large"></ActivityIndicator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
