import {
  ADD_HIGHT,
  ADD_MIDDLE,
  ADD_LOW,
  REMOVE_HIGHT,
  REMOVE_MIDDLE,
  REMOVE_LOW,
  CHECK_HIGHT,
  CHECK_MIDDLE,
  CHECK_LOW,
  UPDATE_TODO
} from './types'

const handlers = {

  [ADD_HIGHT]: (state, {
    title
  }) => ({
    ...state,
    hightTodos: [
      {
        id: Date.now().toString(),
        title,
        completed: false
      },
      ...state.hightTodos
    ]
  }),

  [ADD_MIDDLE]: (state, {
    title
  }) => ({
    ...state,
    middleTodos: [
      {
        id: Date.now().toString(),
        title,
        completed: false
      },
      ...state.middleTodos
    ]
  }),

  [ADD_LOW]: (state, {
    title
  }) => ({
    ...state,
    lowTodos: [
      {
        id: Date.now().toString(),
        title,
        completed: false
      },
      ...state.lowTodos
    ]
  }),

  [REMOVE_HIGHT]: (state, {
    id
  }) => ({
    ...state,
    hightTodos: state.hightTodos.filter(todo => todo.id !== id)
  }),

  [REMOVE_MIDDLE]: (state, {
    id
  }) => ({
    ...state,
    middleTodos: state.middleTodos.filter(todo => todo.id !== id)
  }),
  [REMOVE_LOW]: (state, {
    id
  }) => ({
    ...state,
    lowTodos: state.lowTodos.filter(todo => todo.id !== id)
  }),

  [CHECK_HIGHT]: (state, {
    id
  }) => ({
    ...state,
    hightTodos: state.hightTodos.map(todo => {
      if (todo.id == id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      } else {
        return todo
      }
    })
  }),

  [CHECK_MIDDLE]: (state, {
    id
  }) => ({
    ...state,
    middleTodos: state.middleTodos.map(todo => {
      if (todo.id == id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      } else {
        return todo
      }
    })
  }),

  [CHECK_LOW]: (state, {
    id
  }) => ({
    ...state,
    lowTodos: state.lowTodos.map(todo => {
      if (todo.id == id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      } else {
        return todo
      }
    })
  }),
  // [UPDATE_TODO]: (state, { title, id }) => ({
  //   ...state,
  //   todos: state.todos.map(todo => {
  //     if (todo.id === id) {
  //       todo.title = title
  //     }
  //     return todo
  //   })
  // }),
  DEFAULT: state => state
}

export const todoReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}
