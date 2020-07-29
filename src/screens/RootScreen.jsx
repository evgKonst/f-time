import React, { useContext } from 'react'
import { NavContext } from '../context/NavContext.js'
import { MainScreen } from './MainScreen'
import { TodoScreen } from './TodoScreen'
import { PlannerScreen } from './PlannerScreen' 
import { TimingScreen } from './TimingScreen' 
import { TomatoScreen } from './TomatoScreen'
import { Header } from 'react-native-elements'
import { SET_MAIN } from '../context/types'

export const RootScreen = () => {
  const { navState, navDispatch } = useContext(NavContext)
  let content = (navState.main && <MainScreen />) || (navState.dayly && <TodoScreen />) || (navState.tomato && <TomatoScreen />) || (navState.planner) && <PlannerScreen /> || (navState.timing && <TimingScreen />)

  return (
    <>
      <Header 
        statusBarProps={{ barStyle: 'light-content' }}
        centerComponent={{ text: 'Your time manager', style: { color: '#fff', marginBottom: 20 } }}
        rightComponent={{ icon: 'home', style: { marginBottom: 20, marginRight: 10 }, color: '#fff',  onPress: () => { navDispatch({ type: SET_MAIN, payload: true }) } }}
        containerStyle={{
          backgroundColor: '#3D6DCC',
          justifyContent: 'space-around',
        }}
      />
      {content}
    </>
  )
}
