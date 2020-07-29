import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TimerDisplay = (props) => {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          {Math.floor(props.time / 60)
            .toString()
            .padStart(2, "0") +
            ":" +
            (props.time % 60).toString().padStart(2, "0")}
        </Text>
      </View>
    );
}
export default TimerDisplay;

const styles = StyleSheet.create({
  container: {
    marginTop: "1%",
    marginBottom: "10%",
    marginLeft: "7%",
    marginRight: "7%",
    padding: 50,
    borderRadius: 50,
    alignItems: "center",
    backgroundColor: "rgb(0,5,55)",
  },
  textStyle: {
    color: "white",
    fontSize: 55,
    fontWeight: "200",
  },
});
