import React, { useEffect, useState } from "react";
import { View } from "react-native";
import TimerHeader from "./TimerHeader";
import TimerDisplay from "./TimerDisplay";
import TimerButtons from "./TimerButtons";
import { Vibration } from "react-native";

const Timer = (props) => {
  const [state, setState] = useState({
    running: false,
    time: props.period * 60,
  })
  let timerId;
  const handlePlay = () => {
    timerId = setInterval(() => {
      setState({ ...state, running: true, time: state.time - 1 });
    }, 1000);
  };

  const handlePause = () => {
    setState({ ...state, running: false });
  };

  const handleReset = () => {
    clearInterval(timerId);
    setState({ ...state, running: false, time: props.period * 60, });
  };

  useEffect(() => {
    if (state.running === true) clearInterval(timerId);
    setState({ ...state, running: false, time: props.period * 60 });
  }, [props])

  useEffect(() => {
    if (state.running === true && state.time == 0) {
      clearInterval(timerId);
      Vibration.vibrate([500, 500, 500]);
      props.Oncomplete();
    } 
    if (state.running === true) handlePlay()
    return function cleanup() {
      console.log('cleaning up')
      clearInterval(timerId)
  }
  }, [state]);

  return (
    <View>
      <TimerHeader
        running={state.running}
        intervalType={props.intervalType}
      />
      <TimerDisplay time={state.time} />
      <TimerButtons
        play={handlePlay}
        pause={handlePause}
        reset={handleReset}
        running={state.running}
      />
    </View>
  );
}

export default Timer;
