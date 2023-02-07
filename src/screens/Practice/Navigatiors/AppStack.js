import { View, Text } from 'react-native'
import React from 'react'
import Home from '../../Home'
import { createStackNavigator } from '@react-navigation/stack'


const App = createStackNavigator();

const AppStack = () => {
    return (
        <App.Navigator>
            <App.Screen name="Home" component={Home} />
        </App.Navigator>
    )
}

export default AppStack