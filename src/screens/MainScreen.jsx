import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { TodoContext } from "../context/TodoContext.js";
import { NavContext } from "../context/NavContext.js";
import { THEME } from "../theme.js";
import { Today } from "../components/Today.jsx";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  SET_TOMATO,
  SET_DAILY,
  SET_PLANNER,
} from "../context/types";
import { ProgressBar } from "react-native-paper";
import Weather from "../components/Weather";

export const MainScreen = () => {
  const { navDispatch } = useContext(NavContext);
  const { state } = useContext(TodoContext);

  const [time, setTime] = useState(0);
  function checkTime() {
    let h = new Date().getHours();
    if (h < 9) setTime(0);
    else if (h > 18) setTime(1);
    else {
      h = h - 9;
      setTime(h / 9);
    }
  }
  setInterval(checkTime, 1000);

  let content =
    (state.hightTodos.length && state.hightTodos[0].title) ||
    "Choose a target";
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Today />
            <Weather />
          </View>
          <Text>Today must have:</Text>
          <Text style={styles.mustHave}>{content}</Text>
          <Text style={styles.progress_title}>Working day status now</Text>
          <ProgressBar
            style={styles.progressBar}
            progress={time}
            color={"#6633CC"}
          />
          <View style={styles.progress_description}>
            <Text>9 a.m</Text>
            <Text>6 p.m</Text>
          </View>
          <Button
            style={styles.button}
            onPress={() => {
              navDispatch({ type: SET_TOMATO, payload: true });
            }}
            icon={<Icon name="arrow-right" size={15} color="white" />}
            title=" Tomato worker"
          />

          <Button
            onPress={() => {
              navDispatch({ type: SET_DAILY, payload: true });
            }}
            style={styles.button}
            icon={<Icon name="arrow-right" size={15} color="white" />}
            title=" 1-3-6 daily"
          />

          <Button
            style={styles.button}
            icon={<Icon name="arrow-right" size={15} color="white" />}
            onPress={() => {
              navDispatch({ type: SET_PLANNER, payload: true });
            }}
            title=" Notes"
            />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  button: {
    marginBottom: 5,
    textAlign: 'left',
    flex: 1
  },
  mustHave: {
    color: THEME.ORANGE,
    textAlign: "center",
    marginBottom: 20,
    fontSize: 36,
  },
  progress_title: {
    textAlign: "center",
    paddingBottom: 10,
    paddingTop: 20,
  },
  progress_description: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  progressBar: {
    height: 20,
    borderRadius: 5,
    backgroundColor: THEME.ORANGE
  },
});
