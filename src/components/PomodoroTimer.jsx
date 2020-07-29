import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import Timer from "./Timer";

const PomodoroTimer = () => {
  const [state, setState] = useState({
    workTime: 25,
    breakTime: 5,
    intervalType: "Working",
  })

  const handleTimerCompleted = () => {
    (state.intervalType === "Working") ? setState({ ...state, intervalType: "Break" }) : setState({ ...state, intervalType: "Working" });
  };

  const handleWorkTime = (text) => {
    if (text >= 0) {
      setState({ ...state, workTime: text });
    } else {
      alert("Time invalid. Setting value to default. Please enter valid time");
      setState({
        ...state, workTime: 25
      });
    }
  };

  const handleBreakTime = (text) => {
    if (text >= 0) {
      setState({ ...state, breakTime: text });
    } else {
      alert("Time invalid. Setting value to default. Please enter valid time");
      setState({ ...state, breakTime: 5 });
    }
  };

  const handleTime = () => {
    if (state.intervalType === "Working") {
      return state.workTime;
    } else {
      return state.breakTime;
    }
  };

  let time = handleTime();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
        <View style={styles.inputWrap}>
          <Text style={styles.textStyle}> Work Time </Text>
          <TextInput
            style={styles.textStyle}
            keyboardType={"numeric"}
            defaultValue={"" + state.workTime}
            placeholder="in mins"
            onChangeText={handleWorkTime}
          />
        </View>
        <View style={styles.inputWrap}>
          <Text style={styles.textStyle}> Break Time </Text>
          <TextInput
            style={styles.textStyle}
            keyboardType={"numeric"}
            defaultValue={"" + state.breakTime}
            placeholder="in mins"
            onChangeText={handleBreakTime}
          />
        </View>
      </View>
      <Timer
        intervalType={state.intervalType}
        Oncomplete={handleTimerCompleted}
        period={time}
      />
    </ScrollView>
  );

}
export default PomodoroTimer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    padding: 30
  },
  inputWrap: {
    flex: 1,
    borderColor: "#cccccc",
    borderBottomWidth: 1,
  },
  textStyle: {
    fontSize: 25,
    fontWeight: "300",
    textAlign: 'center',
    padding: 5
    // borderColor: 'black',
    // borderWidth: 1
  },
});
