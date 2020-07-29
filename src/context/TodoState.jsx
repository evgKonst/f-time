import React, { useReducer, useContext } from 'react'
import { Alert } from 'react-native'
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from './types'
import {TodoContext} from './TodoContext'
import {todoReducer} from './todoReducer'

export const TodoState = ({ children }) => {
  // const initialState = {
  //   hightTodos: [],
  //   middleTodos: [
  //     { id: '1', title: 'Открыть книгу' },
  //     { id: '2', title: 'Почитать книгу' },
  //   ],
  //   lowTodos: [
  //     { id: '1', title: 'Погулть' },
  //     { id: '2', title: 'Поесть' },
  //     { id: '3', title: 'Попить' },
  //   ]
  // }
  const initialState = {
    hightTodos: [],
    middleTodos: [],
    lowTodos: []
  }
  const [state, dispatch] = useReducer(todoReducer, initialState)

  return (
    <TodoContext.Provider
      value={{
        state,
        dispatch      
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}
