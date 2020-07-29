import {SET_DAILY, SET_TOMATO, SET_MAIN, SET_TIMING, SET_PLANNER} from './types'

const handlers = {
  [SET_DAILY]: (state, {payload}) => ({ main: false, tomato: false, timing: false, planner: false, dayly: true}),
  [SET_TOMATO]: (state, {payload}) => ({ main: false, tomato: true, timing: false, planner: false, dayly: false}),
  [SET_MAIN]: (state, {payload}) => ({ main: true, tomato: false, timing: false, planner: false, dayly: false}),
  [SET_TIMING]: (state, {payload}) => ({ main: false, tomato: false, timing: true, planner: false, dayly: false}),
  [SET_PLANNER]: (state, {payload}) => ({ main: false, tomato: false, timing: false, planner: true, dayly: false}),
  DEFAULT: state => state
}

export const navReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}
