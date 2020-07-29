import React, {useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { HIGHT, MIDDLE, LOW, REMOVE_HIGHT, REMOVE_MIDDLE, REMOVE_LOW, CHECK_HIGHT, CHECK_MIDDLE, CHECK_LOW } from '../context/types'
import { TodoContext } from '../context/TodoContext'
import { CheckBox } from 'react-native-elements'
import {THEME} from '../theme.js'

export const Todo = ({ id, title, type, completed }) => {
  const { dispatch } = useContext(TodoContext)
  const [compl, setCompl] = useState(completed)
  
  const onCheckPress = () => {
    switch (type) {
      case HIGHT:
        dispatch({ type: CHECK_HIGHT, id: id })
        setCompl(!compl)
        break;
      case MIDDLE:
        dispatch({ type: CHECK_MIDDLE, id: id })
        setCompl(!compl)
        break;
      case LOW:
        dispatch({ type: CHECK_LOW, id: id })
        setCompl(!compl)
        break;
    }
  }
  
  return (
    <TouchableOpacity
      onLongPress={() => {
        switch (type) {
          case HIGHT:
            dispatch({ type: REMOVE_HIGHT, id: id })
            break;
          case MIDDLE:
            dispatch({ type: REMOVE_MIDDLE, id: id })
            break;
          case LOW:
            dispatch({ type: REMOVE_LOW, id: id })
            break;
        }
      }}
    >
      <View style={styles.todo}>
        <CheckBox
          checked={completed}
          onPress={onCheckPress}
        />
        <Text style={compl ? styles.through : null}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    // padding: 15,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    marginBottom: 2
  },
  title: {
    fontFamily: 'roboto-bold'
  },
  through: {
    textDecorationLine: 'line-through',
    color: THEME.MAIN_COLOR
  }
})
