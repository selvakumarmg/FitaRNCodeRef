import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Register from '../Register'
import Login from '../Login'
/**
 * 
 * Login
 * Register -> OTP Verification
 * Forgot Password
 * 
 */

const Auth = createStackNavigator();

const AuthStack = () => {
    return (
        <Auth.Navigator>
            <Auth.Screen name="Login" component={Login} />
            <Auth.Screen name="Register" component={Register} />
        </Auth.Navigator>
    )
}

export default AuthStack
