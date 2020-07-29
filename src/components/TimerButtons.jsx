import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const TimerButtons = (props) => {
  state = {};
  //renders pause, play and reset buttons
  if (props.running === true) {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={props.pause}
        >
          <Text style={styles.buttonText}>Pause</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={props.reset}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={props.play}
        >
          <Text style={styles.buttonText}>Play</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    
    justifyContent: "space-evenly",
    marginBottom: 20,
  },
  buttonStyle: {
    alignItems: "center",
    backgroundColor: "rgb(0,135,205)",
    paddingHorizontal: 40,
    paddingVertical: 10,
    flexDirection: "row",
    borderRadius: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 25,
    fontWeight: "300",
  },
});

export default TimerButtons;
