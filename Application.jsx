import React, { useState } from 'react'

import { Text, Button } from 'react-native'
import { AppLoading } from 'expo'

import { TodoState } from './src/context/TodoState.jsx'
import { NavState } from './src/context/NavState.jsx'

import { TodoScreen } from './src/screens/TodoScreen'
import { MainScreen } from './src/screens/MainScreen'
import { RootScreen } from './src/screens/RootScreen'

async function loadApplication() {
  await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
  })
}

const App = () => {
  const [isReady, setIsReady] = useState(false)
  const [todo, setTodo] = useState(false)

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onError={err => console.log(err)}
        onFinish={() => { setIsReady(true) }}
      />
    )
  }

  return (
    <>

      <NavState>
        <TodoState>
          <RootScreen />
        </TodoState>
      </NavState>

    </>
  )
};

export default App


