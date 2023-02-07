import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppStack from './src/screens/Practice/Navigatiors/AppStack'
import AuthStack from './src/screens/Practice/Navigatiors/AuthStack'

const App = () => {
  const isLoggedIn = true
  return (
    <NavigationContainer>
      { isLoggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>

  )
}

export default App