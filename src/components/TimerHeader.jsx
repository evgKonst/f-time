import React from "react";
import { StyleSheet, Text } from "react-native";
import {THEME} from '../theme.js'

const TimerHeader = (props) => {

  const handleDisplay = () => {
    if (props.intervalType === "Working") {
      if (props.running === true) {
        return "Keep working hard!";
      } else {
        return "Time to work!";
      }
    } else {
      if (props.running === true) {
        return "It's break time! Enjoy";
      } else {
        return "Relax!";
      }
    }
  };

  let texttoshow = handleDisplay();
  return <Text style={styles.textStyle}> {texttoshow} </Text>;

}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 35,
    fontWeight: "500",
    textAlign: 'center',
    marginTop: 7,
    padding: 10,
    color: THEME.ORANGE
  },
});

export default TimerHeader;
