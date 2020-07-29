import React, { useContext } from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'
import { TodoContext } from '../context/TodoContext.js'
import { Todo } from '../components/Todo'
import { AddTodo} from '../components/AddTodo.jsx'
import {HIGHT, MIDDLE, LOW, ADD_HIGHT, ADD_MIDDLE, ADD_LOW} from '../context/types'

export const TodoScreen = () => {
  const {state}  = useContext(TodoContext)
  
  return (
    
    <ScrollView style={styles.container}>
      <Text style={styles.title}>The main goal (limit {1 - state.hightTodos.length})</Text>
      {state.hightTodos.length < 1 ?  <AddTodo action={ADD_HIGHT}/> : null}
      {state.hightTodos.map(todo => <Todo {...todo} type={HIGHT}/>)}

      <Text style={styles.title}>The middle goal (limit {3 - state.middleTodos.length})</Text>
      {state.middleTodos.length < 3 ?  <AddTodo action={ADD_MIDDLE}/> : null}
      {state.middleTodos.map(todo => <Todo {...todo} type={MIDDLE} />)}

      <Text style={styles.title}>The low goal (limit {6 - state.lowTodos.length})</Text>
      {state.lowTodos.length < 6 ?  <AddTodo action={ADD_LOW}/> : null}
      {state.lowTodos.map(todo => <Todo {...todo} type={LOW} />)}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  todos: {
    backgroundColor: 'gray',  
    flexDirection: 'row',
  },
  title:{
    paddingBottom: 20,
    paddingTop: 20,
    fontWeight: 'bold'
  },
  container: {
    padding: 20
  }
})
