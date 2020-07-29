import React, { useReducer } from 'react'
import {NavContext} from './NavContext'
import {navReducer} from './navReducer'

export const NavState = ({ children }) => {

  const initialState = {
    main: true,
    tomato: false,
    dayly: false,
    timing: false,
    planner: false
  }
  const [navState, navDispatch] = useReducer(navReducer, initialState)

  return (
    <NavContext.Provider
      value={{
        navState,
        navDispatch      
      }}
    >
      {children}
    </NavContext.Provider>
  )
}
