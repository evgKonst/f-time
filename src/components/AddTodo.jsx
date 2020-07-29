import React, { useState, useContext } from 'react'
import { View, StyleSheet, TextInput, Button } from 'react-native'
import { TodoContext } from '../context/TodoContext'
import { ADD_HIGHT, ADD_MIDDLE, ADD_LOW } from '../context/types'

export const AddTodo = ({ action }) => {
  const { dispatch } = useContext(TodoContext)
  const [hight, setHight] = useState('')
  const [middle, setMiddle] = useState('')
  const [low, setLow] = useState('')

  const pressHandler = () => {
    switch (action) {
      case ADD_HIGHT:
        dispatch({ type: ADD_HIGHT, title: hight })
        setHight('')
        break;
      case ADD_MIDDLE:
        dispatch({ type: ADD_MIDDLE, title: middle })
        setMiddle('')
        break;
      case ADD_LOW:
        dispatch({ type: ADD_LOW, title: low })
        setLow('')
        break;
    }
  }

  let input;
  switch (action) {
    case ADD_HIGHT:
      input = <TextInput
        style={styles.input}
        onChangeText={setHight}
        value={hight}
        placeholder="Input main todo name..."
        autoCorrect={false}
        autoCapitalize={'none'}
      />
      break;
    case ADD_MIDDLE:
      input = <TextInput
        style={styles.input}
        onChangeText={setMiddle}
        value={middle}
        placeholder="Input middle todo name..."
        autoCorrect={false}
        autoCapitalize={'none'}
      />
      break;
    case ADD_LOW:
      input =
        <>
          <TextInput
            style={styles.input}
            onChangeText={setLow}
            value={low}
            placeholder="Input low todo name..."
            autoCorrect={false}
            autoCapitalize={'none'}
          />
        </>
      break;
  }

  return (
    <View style={styles.block}>
      {input}
      <Button
        title="Add"
        onPress={pressHandler} />
    </View>
  )
}
const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  input: {
    width: '70%',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3949ab',
    padding: 10
  }
})
