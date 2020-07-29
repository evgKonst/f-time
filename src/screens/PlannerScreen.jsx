import React, { useState, useEffect, useContext } from 'react';

import { View, StyleSheet, Text, TextInput } from 'react-native';

export const PlannerScreen = () => {
  // const { notesState, notesDispatch } = useContext(NotesContext);
  const [activeDay, setActiveDay] = useState(new Date())
  const [planner, setPlanner] = useState({ [activeDay.toDateString()]: 'Present F-time' })
  const [data, setData] = useState(planner[activeDay.toDateString()] || '')
  months = ["January", "February", "March", "April",
    "May", "June", "July", "August", "September", "October",
    "November", "December"];
  weekDays = [
    "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
  ];
  nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let year = activeDay.getFullYear();
  let month = activeDay.getMonth();
  let firstDay = new Date(year, month, 1).getDay();
  let maxDays = nDays[month];
  if (month == 1) { // February
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      maxDays += 1;
    }
  }
  useEffect(() => {
    setData(planner[activeDay.toDateString()] || '')
  }, [activeDay])
  useEffect(() => {
    setPlanner({ ...planner, [activeDay.toDateString()]: data })
  }, [data])
  function generateMatrix() {
    let matrix = [];
    matrix[0] = weekDays;
    let counter = 1;
    for (let row = 1; row < 7; row++) {
      matrix[row] = [];
      for (var col = 0; col < 7; col++) {
        matrix[row][col] = -1;
        if (row == 1 && col >= firstDay) {
          matrix[row][col] = counter++;
        } else if (row > 1 && counter <= maxDays) {
          matrix[row][col] = counter++;
        }
      }
    }
    return matrix;
  }
  const onPress = (item) => {
    setActiveDay(() => {
      if (item != -1) {
        return new Date(year, month, item)
      }
    });
  };
  let matrix = generateMatrix();
  let rows = [];
  rows = matrix.map((row, rowIndex) => {
    var rowItems = row.map((item, colIndex) => {
      return (
        <Text
          style={{
            flex: 1,
            height: 19,
            textAlign: 'center',
            backgroundColor: rowIndex == 0 ? '#ddd' : '#fff',
            color: colIndex == 0 ? '#a00' : '#000',
            fontWeight: item == activeDay.getDate() ? 'bold' : '',
            backgroundColor: item == activeDay.getDate() ? '#ee3' : '#fff'
          }}
          onPress={() => onPress(item)}
        >
          {item != -1 ? item : ''}
        </Text>
      );
    });
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          paddingVertical: 10,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        {rowItems}
      </View>
    );
  });
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {months[activeDay.getMonth()]} &nbsp;
        {activeDay.getFullYear()}
      </Text>
      {rows}
      <Text style={styles.data}>The note for {activeDay.toDateString()}</Text>
      <View style={styles.note}>
        <TextInput
          multiline={true}
          numberOfLines={4}
          style={styles.data}
          value={data.toString()}
          onChangeText={text => setData(text)}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40
  },
  header: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    paddingBottom: 20
  },
  data: {

    padding: 10
  },
  note: {
    width: '100%',
    backgroundColor: '#fff'
  },
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  input: {
    width: '70%',
    height: 200,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3949ab',
    padding: 10
  }
})
